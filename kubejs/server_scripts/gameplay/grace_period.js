EntityEvents.spawned((event) => {
    const { entity, server, level } = event;
    if (!entity.isPlayer()) return;

    let playerName = entity.username;
    let entityData = entity.persistentData;
    let dimension = String(level.getDimension());

    // Grant unlimited Grace during the first visit to the lobby
    if (!entityData.getBoolean('hasEnteredLobby') && dimension == 'ftbteambases:lobby') {
        entityData.putBoolean('hasEnteredLobby', true);

        let command = `effect give ${playerName} cold_sweat:grace infinite 0 true`;

        server.scheduleInTicks(1, () => {
            server.runCommandSilent(command);
        });
    }

    // Grant 10 minutes Grace upon first visit to the island
    if (
        !entityData.getBoolean('firstIslandStarted') &&
        entityData.getBoolean('hasEnteredLobby') &&
        dimension == 'minecraft:overworld'
    ) {
        entityData.putBoolean('firstIslandStarted', true);

        let commands = [
            `effect clear ${playerName} cold_sweat:grace`,
            `effect give ${playerName} cold_sweat:grace 600 0 true`
        ];

        commands.forEach((command, index) => {
            server.scheduleInTicks(1 * index, () => {
                server.runCommandSilent(command);
            });
        });
    }
});
