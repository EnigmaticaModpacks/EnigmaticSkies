ServerEvents.tick((event) => {
    const { server } = event;
    if (server.tickCount % 200 != 0) return;

    let gamerules = server.getGameRules();
    forced_rules.forEach((rule) => {
        if (gamerules.get(rule.name).get() != rule.value) {
            console.log(`Enforcing Gamerule: ${rule.name} = ${String(rule.value)}`);
            gamerules.set(rule.name, rule.value);
        }
    });
});
