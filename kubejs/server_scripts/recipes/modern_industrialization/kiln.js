ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/kiln/';

    const recipes = [
        {
            item_outputs: { item: 'modern_industrialization:steel_ingot', amount: 1 },
            fluid_inputs: [{ tag: 'c:blaze_ember', amount: 100 }],
            item_inputs: { tag: 'c:ingots/iron', amount: 1 },
            duration: 20,
            eu: 16,
            id: `${id_prefix}steel_ingot`
        },
        {
            item_outputs: { item: 'ae2:quartz_fiber', amount: 3 },
            fluid_inputs: [{ fluid: 'oritech:still_strange_matter', amount: 250 }],
            item_inputs: [
                { tag: 'c:gems/amethyst', amount: 6 },
                { tag: 'c:gems/charged_certus', amount: 6 }
            ],
            duration: 5,
            eu: 16,
            id: `${id_prefix}quartz_fiber`
        },
        {
            item_outputs: { item: 'enderio:dark_steel_ingot', amount: 1 },
            fluid_inputs: [{ tag: 'enderio:solar_panel_dark', amount: 250 }],
            item_inputs: [
                { tag: 'c:ingots/steel', amount: 1 },
                { tag: 'c:dusts/grains_of_infinity', amount: 8 }
            ],
            duration: 20,
            eu: 32,
            id: `${id_prefix}dark_steel_ingot`
        },
        {
            item_outputs: { item: 'naturesaura:sky_ingot', amount: 1 },
            fluid_inputs: [{ fluid: 'modern_industrialization:liquid_air', amount: 100 }],
            item_inputs: [
                { tag: 'c:dusts/sky_stone', amount: 10 },
                { tag: 'c:gems/weather_crystal', amount: 1 }
            ],
            duration: 20,
            eu: 64,
            id: `${id_prefix}sky_ingot`
        },
        {
            item_outputs: { item: 'enderio:end_steel_ingot', amount: 1 },
            fluid_inputs: [{ tag: 'c:voidflame', amount: 250 }],
            item_inputs: [
                { tag: 'c:ingots/stainless_steel', amount: 1 },
                { item: 'malum:paracausal_flame', amount: 1 }
            ],
            duration: 20,
            eu: 64,
            id: `${id_prefix}end_steel_ingot`
        },
        {
            item_outputs: [{ item: 'extended_industrialization:crystallized_honey', amount: 3 }],
            fluid_inputs: [{ tag: 'c:honey', amount: 250 }],
            duration: 10,
            eu: 2,
            id: `${id_prefix}crystallized_honey`
        },
        {
            fluid_outputs: [{ fluid: 'extended_industrialization:honey', amount: 1000 }],
            item_inputs: [{ item: 'minecraft:honey_block', amount: 1 }],
            duration: 10,
            eu: 2,
            id: `${id_prefix}honey_from_block`
        },
        {
            fluid_outputs: [{ fluid: 'extended_industrialization:honey', amount: 400 }],
            item_inputs: [{ item: 'the_bumblezone:honey_crystal', amount: 1 }],
            duration: 4,
            eu: 2,
            id: `${id_prefix}honey_from_crystal`
        },
        {
            fluid_outputs: [{ fluid: 'extended_industrialization:honey', amount: 100 }],
            item_inputs: [{ item: 'the_bumblezone:honey_crystal_shards', amount: 1 }],
            duration: 1,
            eu: 2,
            id: `${id_prefix}honey_from_crystal_shards`
        },
        {
            item_outputs: { item: 'enigmatica:stoneware_vessel', amount: 1 },
            item_inputs: [{ item: 'enigmatica:unfired_vessel', amount: 1 }],
            duration: 10,
            eu: 32,
            id: `${id_prefix}stoneware_vessel`
        },
        {
            item_outputs: { item: 'replication:replicator_enclosure', amount: 1 },
            fluid_inputs: [{ fluid: 'oritech:still_strange_matter', amount: 1000 }],
            item_inputs: [
                { item: 'minecraft:tinted_glass', amount: 1 },
                { item: 'malum:void_salts', amount: 4 }
            ],
            duration: 10,
            eu: 32,
            id: `${id_prefix}replicator_enclosure`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.duration *= 20;

        if (recipe.eu <= 4) {
            recipe.type = 'modern_industrialization:steam_kiln';
            event.custom(recipe).id(`${recipe.id}/steam`);
        }

        recipe.type = 'modern_industrialization:electric_kiln';
        event.custom(recipe).id(`${recipe.id}/electric`);
    });
});
