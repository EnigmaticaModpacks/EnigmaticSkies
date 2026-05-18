LevelEvents.tick((event) => {
    const { level, server } = event;

    const ticks_per_day = 24000;
    const max_senescence = ticks_per_day * 10;
    const execution_interval = 30 * 20;
    const senescence_debug = false;

    const dimension = String(level.getDimension());
    const execute = `execute in ${dimension} run`;

    if (server.tickCount % execution_interval != 0) {
        return;
    }

    level.level.entities.forEach((entity) => {
        if (!entity.isLiving() || entity.isPlayer()) {
            return;
        }

        let entityData = entity.persistentData;
        let uuid = entity.uuid;

        // Check if it matches our tag
        if (!entityData.isSenescent) {
            if (senescence_debug) console.log(`${entity.type} with UUID (${uuid}) isn't registered yet, adding!`);
            let hasTag = entity
                .getEntityType()
                .getTags()
                .anyMatch((tag) => tag.location() == 'enigmatica:senescence');

            entityData.putBoolean('isSenescent', hasTag);
        }

        // Mark the mob for senescence system
        if (entityData.getBoolean('isSenescent') && !entityData.getInt('senescence')) {
            if (entity.nbt.Age == 0) {
                if (senescence_debug) {
                    console.log(`${entity.type} with UUID (${uuid}) is old enough to start contributing!`);
                }
                entityData.putInt('senescence', execution_interval);
                entityData.putInt('original_max_health', entity.getMaxHealth());
            } else {
                if (senescence_debug) {
                    console.log(`${entity.type} with UUID (${uuid}) is too young to contribute!`);
                }
            }
        }

        // Check mob's age to see if related effects need to be applied
        if (entityData.getInt('senescence')) {
            let senescence = entityData.getInt('senescence');
            entityData.putInt('senescence', senescence + execution_interval);

            if (senescence_debug) {
                console.log(
                    `${entity.type} with UUID (${uuid}) has been checked for advancing age. Current Age: ${senescence}`
                );
            }

            let original_max_health = entityData.getInt('original_max_health');
            let commands = [];

            if (senescence > max_senescence * 0.5) {
                // Reduce Health in middle age
                commands = commands.concat([
                    `data merge entity ${uuid} {attributes:[{id:"minecraft:generic.max_health",base:${
                        original_max_health * 0.5
                    }}]}`
                ]);
            }

            if (senescence > max_senescence * 0.8) {
                // Make elderly animals slow, blind, and less healthy
                commands = commands.concat([
                    `effect give ${uuid} minecraft:slowness infinite 0`,
                    `effect give ${uuid} minecraft:blindness infinite 0`,
                    `data merge entity ${uuid} {attributes:[{id:"minecraft:generic.max_health",base:${
                        original_max_health * 0.2
                    }}]}`
                ]);
            }

            if (senescence > max_senescence) {
                // Clear the loot table and ensure the creatures dies by various effects. This should convey better to the player what is happening.
                if (senescence_debug) {
                    console.log(
                        `${entity.type} with UUID (${uuid}) has reached the end of it's life (Age: ${senescence}). Time to go.`
                    );
                }

                commands = commands.concat([
                    `data merge entity ${uuid} {DeathLootTable:"minecraft:empty"}`,
                    `data merge entity ${uuid} {attributes:[{id:"minecraft:generic.max_absorption",base:0}]}`,

                    `effect give ${uuid} malum:grim_certainty infinite 9`,
                    `effect give ${uuid} minecraft:wither infinite 9 true`,
                    `effect give ${uuid} naturesaura:breathless infinite 9 true`,
                    `effect give ${uuid} the_bumblezone:paralyzed infinite 9 true`,
                    `effect give ${uuid} apothic_attributes:sundering infinite 9 true`,
                    `effect give ${uuid} apothic_attributes:grievous infinite 9 true`,
                    `effect clear ${uuid} minecraft:resistance`,

                    `particle minecraft:soul ${entity.x} ${entity.y + 2.5} ${entity.z}`
                ]);
            }

            if (senescence > max_senescence * 1.5) {
                // Extra damage if the mob is somehow kept alive this long
                commands = commands.concat([`effect give ${uuid} minecraft:instant_damage infinite 99 true`]);
            }

            commands.forEach((command) => {
                server.scheduleInTicks(2, () => {
                    server.runCommandSilent(`${execute} ${command}`);
                });
            });
        }
    });
});
