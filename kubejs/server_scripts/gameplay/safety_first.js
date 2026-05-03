ServerEvents.loaded((event) => {
    const { server } = event;
    let serverData = server.persistentData;

    if (!serverData.firstStart) {
        serverData.putBoolean('firstStart', true);
    } else {
        serverData.putBoolean('firstStart', false);
    }
});

EntityEvents.death((event) => {
    const { entity, server } = event;
    if (!entity.isPlayer()) return;

    let entityData = entity.persistentData;
    let serverData = server.persistentData;

    if (serverData.getBoolean('firstStart')) {
        entityData.putBoolean('isDead', true);
    }
});

EntityEvents.spawned((event) => {
    const { entity, server } = event;
    if (!entity.isPlayer()) return;

    let playerName = entity.username;
    let entityData = entity.persistentData;

    if (entityData.getBoolean('isDead')) {
        entityData.putBoolean('isDead', false);

        let command = `execute as ${playerName} run ftbteambases home`;

        server.scheduleInTicks(1, () => {
            server.runCommandSilent(command);
        });
    }
});
