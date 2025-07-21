ServerEvents.loaded((event) => {
    const { server } = event;

    let gamerules = server.getGameRules();
    let pData = server.persistentData;

    default_rules.forEach((rule) => {
        if (!pData.getInt(rule.name)) {
            gamerules.set(rule.name, rule.value);
            console.log(`Default Gamerule Applied: ${rule.name} = ${String(rule.value)}`);
            pData.putInt(rule.name, 1);
        }
    });
});
