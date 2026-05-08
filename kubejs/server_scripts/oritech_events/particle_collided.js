// https://docs.almostreliable.com/kubejs-oritech/event/particle/collided.html

OritechEvents.particleCollided((event) => {
    const { level, pos, controller, collisionPos, itemA, itemB, speed, recipeId, recipe } = event;
    const server = level.getServer();
    const dimension = String(level.getDimension());
    const execute = `execute in ${dimension} run`;

    if (recipeId == null) return;
    // console.log(collisionPos);

    // Gate Pearl Handling
    if (String(recipeId).includes('gate_pearl')) {
        let entity = level.getBlock(collisionPos).createEntity('minecraft:item');
        entity.item = recipe.results[0];
        entity.setY(collisionPos.y + 1);
        entity.spawn();

        event.cancel();
    }

    // World Seed Handling
    if (String(recipeId).includes('essence_knowing') || String(recipeId).includes('essence_continuity')) {
        let dayTime = level.getDayTime();
        let day = Math.floor(dayTime / 24000);
        let time = dayTime % 24000;
        let newTime = dayTime + 18000 - time;
        let moonPhase = (day % 8) + 1;
        let nextNewMoon = moonPhase < 5 ? 5 - moonPhase : 13 - moonPhase;
        let nextFullMoon = moonPhase == 1 ? moonPhase : 9 - moonPhase;
        let commands = [];

        // Pause Time
        commands.push({ parameters: `${execute} gamerule doDaylightCycle false`, delay: 1 });
        // Set to Midnight of the next full moon
        commands.push({ parameters: `${execute} time set ${newTime + nextFullMoon * 24000}t`, delay: 1 });
        // Advance to next New Moon
        for (let i = 1; i <= 4; i++) {
            commands.push({ parameters: `${execute} time add 24000t`, delay: i * 20 });
        }
        // Resume Time
        commands.push({ parameters: `${execute} gamerule doDaylightCycle true`, delay: 40 * 20 });

        commands.forEach((command) => {
            server.scheduleInTicks(command.delay, () => {
                server.runCommandSilent(`${command.parameters}`);
                // console.log(command.parameters);
            });
        });

        // let radius = 1000;
        // server.scheduleInTicks(1, () => {
        // console.log(`Summoning Noodle: ${collisionPos}`);
        // summonDangerNoodle(event, collisionPos, radius);
        // });

        // server.scheduleInTicks(35 * 20, () => {
        // forceUnclaim(server, level, pos, radius);
        // });
    }
});
