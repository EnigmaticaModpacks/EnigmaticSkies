ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:farmersdelight/cutting/';

    const recipes = [
        {
            result: [{ item: { id: 'minecraft:yellow_dye', count: 2 } }],
            ingredients: [{ item: 'minecraft:glow_berries' }],
            tool: { tag: 'c:tools/knife' },
            id: `${id_prefix}yellow_dye_from_glow_berries`
        },
        {
            result: [
                { item: { id: 'aether:holystone', count: 1 } },
                { item: { id: 'minecraft:snowball', count: 1 }, chance: 0.1 }
            ],
            ingredients: [{ item: 'aether:icestone' }],
            sound: { sound_id: 'minecraft:block.snow.break' },
            tool: { type: 'farmersdelight:item_ability', action: 'axe_strip' },
            id: `${id_prefix}holystone`
        },
        {
            result: [
                { item: { id: 'pneumaticcraft:wheat_flour', count: 1 } },
                { item: { id: 'pneumaticcraft:wheat_flour', count: 1 }, chance: 0.25 }
            ],
            ingredients: [{ item: 'minecraft:wheat' }],
            sound: { sound_id: 'minecraft:block.gravel.break' },
            tool: { tag: 'minecraft:shovels' },
            id: `${id_prefix}wheat_flour`
        },
        {
            result: [{ item: { id: 'ae2:charged_certus_quartz_crystal', count: 1 } }],
            ingredients: [{ item: 'ae2:certus_quartz_crystal' }],
            sound: { sound_id: 'minecraft:block.wool.break' },
            tool: { tag: 'handcrafted:sheets' },
            id: `${id_prefix}charged_certus_quartz_crystal`
        },
        {
            result: [{ item: { id: 'create:cardboard', count: 1 }, chance: 0.5 }],
            ingredients: [{ item: 'create:pulp' }],
            sound: { sound_id: 'minecraft:block.gravel.break' },
            tool: { tag: 'minecraft:shovels' },
            id: `${id_prefix}cardboard`
        },
        {
            result: [{ item: { id: 'minecraft:dead_bush', count: 1 } }],
            ingredients: [{ tag: 'minecraft:saplings' }],
            tool: { tag: 'c:tools/knife' },
            id: `${id_prefix}dead_bush`
        },
        {
            result: [{ item: { id: 'malum:azure_runewood_sapling', count: 1 } }],
            ingredients: [{ item: 'malum:azure_runewood_leaves' }],
            tool: { tag: 'c:tools/knife' },
            id: `${id_prefix}azure_runewood_sapling`
        },
        {
            result: [{ item: { id: 'aether:golden_oak_sapling', count: 1 } }],
            ingredients: [{ item: 'aether:golden_oak_leaves' }],
            tool: { tag: 'c:tools/knife' },
            id: `${id_prefix}golden_oak_sapling`
        },
        {
            result: [{ item: { id: 'sushigocrafting:avocado_sapling', count: 1 } }],
            ingredients: [{ item: 'sushigocrafting:avocado_leaves' }],
            tool: { tag: 'c:tools/knife' },
            id: `${id_prefix}avocado_sapling`
        }
    ];

    tree_registry.forEach((tree) => {
        let mod = tree.log.split(':')[0];

        recipes.push({
            result: [{ item: { id: tree.sapling, count: 1 } }],
            ingredients: [{ item: tree.leaves }],
            tool: { tag: 'c:tools/knife' },
            id: `${id_prefix}${getID(tree.sapling)}_from_leaves`
        });

        if (mod !== 'minecraft' && mod !== 'ars_nouveau') {
            recipes.push(
                {
                    ingredients: [{ item: tree.log }],
                    result: [{ item: { id: tree.stripped_log, count: 1 } }, { item: { id: tree.bark, count: 1 } }],
                    sound: { sound_id: 'minecraft:item.axe.strip' },
                    tool: { type: 'farmersdelight:item_ability', action: 'axe_strip' },
                    id: `${id_prefix}${getID(tree.stripped_log)}_from_log`
                },
                {
                    ingredients: [{ item: tree.wood }],
                    result: [{ item: { id: tree.stripped_wood, count: 1 } }, { item: { id: tree.bark, count: 1 } }],
                    sound: { sound_id: 'minecraft:item.axe.strip' },
                    tool: { type: 'farmersdelight:item_ability', action: 'axe_strip' },
                    id: `${id_prefix}${getID(tree.stripped_wood)}_from_wood`
                }
            );
        }
    });

    recipes.forEach((recipe) => {
        recipe.type = 'farmersdelight:cutting';
        event.custom(recipe).id(recipe.id);
    });
});
