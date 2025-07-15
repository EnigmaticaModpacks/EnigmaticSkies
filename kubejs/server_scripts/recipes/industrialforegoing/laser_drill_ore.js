ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:industrialforegoing/laser_drill_ore/';

    const recipes = [
        {
            catalyst: { item: 'industrialforegoing:gray_laser_lens' },
            output: { tag: 'c:raw_materials/zinc' },
            rarity: [
                {
                    dimension_filter: { blacklist: ['minecraft:the_end'], whitelist: [] },
                    biome_filter: { blacklist: [], whitelist: [] },
                    depth_max: 70,
                    depth_min: 30,
                    weight: 5
                },
                {
                    dimension_filter: { blacklist: ['minecraft:the_end'], whitelist: [] },
                    biome_filter: { blacklist: [], whitelist: [] },
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1
                }
            ],
            id: `${id_prefix}zinc`
        },
        {
            catalyst: { item: 'industrialforegoing:black_laser_lens' },
            output: { tag: 'c:ores/black_quartz' },
            rarity: [
                {
                    dimension_filter: { blacklist: ['minecraft:the_end'], whitelist: [] },
                    biome_filter: { blacklist: [], whitelist: [] },
                    depth_max: 117,
                    depth_min: 7,
                    weight: 12
                },
                {
                    dimension_filter: { blacklist: ['minecraft:the_end'], whitelist: [] },
                    biome_filter: { blacklist: [], whitelist: [] },
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1
                }
            ],
            id: `${id_prefix}black_quartz`
        },
        {
            catalyst: { item: 'industrialforegoing:green_laser_lens' },
            output: { tag: 'c:raw_materials/replica' },
            rarity: [
                {
                    dimension_filter: { blacklist: ['minecraft:the_end'], whitelist: [] },
                    biome_filter: { blacklist: [], whitelist: [] },
                    depth_max: 10,
                    depth_min: 0,
                    weight: 4
                },
                {
                    dimension_filter: { blacklist: ['minecraft:the_end'], whitelist: [] },
                    biome_filter: { blacklist: [], whitelist: [] },
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1
                }
            ],
            id: `${id_prefix}replica`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'industrialforegoing:laser_drill_ore';
        event.custom(recipe).id(recipe.id);
    });
});
