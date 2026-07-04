EntityEvents.spawned((event) => {
    const { entity, server } = event;
    if (!entity.item || entity.item == null || entity.item == undefined) {
        return;
    }

    if (entity.item.id == 'gateways:gate_pearl') {
        let abs = { x: entity.x, y: entity.y, z: entity.z }; // Absolute Coordinates. these should not change throughout the script
        let ritual_dimension = String(event.level.getDimension());

        let command, coordinates;

        // Gateway Pearl Handling

        let cur = { x: abs.x, y: abs.y - 0.5, z: abs.z };
        let gate = { x: abs.x, y: abs.y + 0.5, z: abs.z };
        let gateway_type = entity.item.components.get('gateways:gateway').id;

        let radius = 1.5;
        let num_points = 5;
        let duration = 2 * 20;
        let density = 5;
        let delay;

        // Draw a slow circle
        coordinates = getCircleCoordinates(cur.x, cur.y, cur.z, radius, density);
        delay = duration / coordinates.length;

        coordinates.forEach((coord, index) => {
            server.scheduleInTicks(index * delay, (schedule) => {
                command = `/execute in ${ritual_dimension} run particle occultism:spirit_fire_flame ${coord.x} ${coord.y} ${coord.z}`;
                server.runCommandSilent(command);

                if (index % 5 === 0) {
                    command = `/execute in ${ritual_dimension} run playsound minecraft:particle.soul_escape block @p ${coord.x} ${coord.y} ${coord.z} 0.5 1`;
                    server.runCommandSilent(command);
                }

                if (index % Math.floor(coordinates.length / num_points) === 0) {
                    command = `/execute in ${ritual_dimension} run playsound quark:ambient.cave block @p ${coord.x} ${coord.y} ${coord.z} 2 1`;
                    server.runCommandSilent(command);
                }
            });
        });

        // Draw the full Pentagram in one go after the slow circle
        coordinates = coordinates.concat(getStarCoordinates(cur.x, cur.y, cur.z, radius, num_points, density));
        delay = duration + 40;
        server.scheduleInTicks(delay, (schedule) => {
            coordinates.forEach((coord) => {
                command = `/execute in ${ritual_dimension} run particle occultism:spirit_fire_flame ${coord.x} ${coord.y} ${coord.z}`;
                server.runCommandSilent(command);

                command = `/execute in ${ritual_dimension} run particle cold_sweat:ground_mist ${coord.x} ${
                    coord.y + 0.5
                } ${coord.z}`;
                server.runCommandSilent(command);

                command = `/execute in ${ritual_dimension} run particle minecraft:smoke ${coord.x} ${coord.y - 0.5} ${
                    coord.z
                }`;
                server.runCommandSilent(command);
            });

            command = `/execute in ${ritual_dimension} run playsound supplementaries:block.bellows.retract block @p ${gate.x} ${gate.y} ${gate.z} 20 1`;
            server.runCommandSilent(command);

            command = `/execute in ${ritual_dimension} run playsound minecraft:block.sculk_shrieker.shriek block @p ${gate.x} ${gate.y} ${gate.z} 10 0.5`;
            server.runCommandSilent(command);

            // Open the Gateway
            command = `/execute as @p in ${ritual_dimension} run open_gateway ${gate.x} ${gate.y} ${gate.z} ${gateway_type}`;
            server.runCommandSilent(command);
        });

        entity.item.count = 0; // Set the count of the item to zero, removing it.
    }
});
