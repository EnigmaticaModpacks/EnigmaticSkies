#!/bin/bash
# Non-interactive server start for CI.
# Installs NeoForge if needed, starts the server, waits for successful load,
# then shuts it down. Exits non-zero if the server crashes or fails to start.

set -euo pipefail

read_config() {
  while read -r line || [[ -n "$line" ]]; do
    if echo "$line" | grep -F = &>/dev/null; then
      if [[ ${line:0:1} != ";" ]]; then
        name=$(echo "$line" | cut -d '=' -f 1)
        val=$(echo "$line" | cut -d '=' -f 2-)
        eval "export ${name}='${val%?}'"
      fi
    fi
  done < settings.cfg
}

read_config

FORGE_JAR="libraries/net/neoforged/neoforge/${FORGEVER}/neoforge-${FORGEVER}-server.jar"

if [ ! -f "$FORGE_JAR" ] || [ ! -d "./libraries" ]; then
  echo "Installing NeoForge ${FORGEVER}..."
  URL="https://maven.neoforged.net/releases/net/neoforged/neoforge/${FORGEVER}/neoforge-${FORGEVER}-installer.jar"
  curl -fsSL -o installer.jar "$URL"
  java -jar installer.jar --installServer >> serverstart.log 2>&1
  rm -f installer.jar
fi

echo "eula=true" > eula.txt

LOG_FILE="logs/latest.log"
mkdir -p logs

echo "Starting server (CI mode)..."
java -Xmx${MAX_RAM} ${JAVA_ARGS} @user_jvm_args.txt \
  @libraries/net/neoforged/neoforge/${FORGEVER}/unix_args.txt nogui &
SERVER_PID=$!

echo "Server PID: $SERVER_PID"

# Wait up to 10 minutes for the server to finish loading
TIMEOUT=600
ELAPSED=0
SUCCESS=false

while [ $ELAPSED -lt $TIMEOUT ]; do
  if ! kill -0 "$SERVER_PID" 2>/dev/null; then
    echo "Server process exited unexpectedly"
    exit 1
  fi

  if [ -f "$LOG_FILE" ] && grep -q "Done.*For help" "$LOG_FILE"; then
    echo "Server started successfully"
    SUCCESS=true
    break
  fi

  sleep 5
  ELAPSED=$((ELAPSED + 5))
done

if [ "$SUCCESS" != "true" ]; then
  echo "Server did not finish loading within ${TIMEOUT}s"
  kill "$SERVER_PID" 2>/dev/null || true
  exit 1
fi

# Graceful shutdown
echo "Sending stop command..."
kill -TERM "$SERVER_PID"
wait "$SERVER_PID" || true

echo "Server shut down cleanly"
