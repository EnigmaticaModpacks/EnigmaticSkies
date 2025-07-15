ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/grinder/';
    const recipes = [
        {
            results: [{ id: 'actuallyadditions:black_quartz', count: 4 }],
            ingredients: [{ tag: 'c:ores/black_quartz' }],
            time: 120,
            id: `${id_prefix}black_quartz`
        },
        {
            results: [{ id: 'oritech:biomass', count: 1 }],
            ingredients: [{ tag: 'oritech:biomass' }],
            time: 60,
            id: `${id_prefix}biomass_from_plants`
        },
        {
            results: [{ id: 'oritech:biomass', count: 16 }],
            ingredients: [{ tag: 'c:storage_blocks/wheat' }],
            time: 60,
            id: `${id_prefix}biomass_from_wheat`
        },
        {
            results: [{ id: 'oritech:biomass', count: 16 }],
            ingredients: [{ item: 'oritech:packed_wheat' }],
            time: 60,
            id: `${id_prefix}biomass_from_packed_wheat`
        },
        {
            results: [{ id: 'minecraft:sand', count: 4 }],
            ingredients: [{ tag: 'c:sandstone/uncolored_blocks' }],
            time: 60,
            id: `${id_prefix}sand_from_sandstone`
        },
        {
            results: [{ id: 'minecraft:red_sand', count: 4 }],
            ingredients: [{ tag: 'c:sandstone/red_blocks' }],
            time: 60,
            id: `${id_prefix}red_sand_from_red_sandstone`
        },
        {
            results: [{ id: 'minecraft:sand', count: 1 }],
            ingredients: [{ tag: 'c:gravels' }],
            time: 60,
            id: `${id_prefix}sand_from_gravel`
        },
        {
            results: [{ id: 'oritech:biosteel_dust', count: 1 }],
            ingredients: [{ tag: 'c:ingots/biosteel' }],
            time: 60,
            id: `oritech:grinder/dust/biosteel`
        },
        {
            results: [{ id: 'oritech:duratium_dust', count: 1 }],
            ingredients: [{ tag: 'c:ingots/duratium' }],
            time: 60,
            id: `oritech:grinder/dust/duratium`
        },
        {
            results: [{ id: 'oritech:energite_dust', count: 1 }],
            ingredients: [{ tag: 'c:ingots/energite' }],
            time: 60,
            id: `oritech:grinder/dust/energite`
        },
        {
            results: [{ id: 'oritech:adamant_dust', count: 1 }],
            ingredients: [{ tag: 'c:ingots/adamant' }],
            time: 60,
            id: `oritech:grinder/dust/adamant`
        }
    ];

    colors.forEach((color) => {
        recipes.push({
            results: [
                { id: `minecraft:${color}_dye`, count: 3 },
                { id: `minecraft:${color}_dye`, count: 2 }
            ],
            ingredients: [{ tag: `c:raw_materials/dyes/${color}` }],
            time: 180,
            id: `${id_prefix}${color}_dye`
        });
    });

    // let materials = [
    //     { primary: 'iron', secondary: 'nickel' },
    //     { primary: 'copper', secondary: 'gold' },
    //     { primary: 'gold', secondary: 'copper' },
    //     { primary: 'osmium', secondary: 'silver' },
    //     { primary: 'iesnium', secondary: 'silver' },
    //     { primary: 'iridium', secondary: 'platinum' },
    //     { primary: 'lead', secondary: 'silver' },
    //     { primary: 'silver', secondary: 'lead' },
    //     { primary: 'nickel', secondary: 'platinum' },
    //     { primary: 'tin', secondary: 'iron' },
    //     { primary: 'aluminum', secondary: 'aluminum' }
    // ];
    // materials.forEach((material) => {
    //     recipes.push(
    //         {
    //             results: [
    //                 { id: AlmostUnified.getTagTargetItem(`c:raw_materials/${material.primary}`).getId(), count: 2 },
    //                 { id: AlmostUnified.getTagTargetItem(`c:raw_materials/${material.secondary}`).getId(), count: 1 }
    //             ],
    //             ingredients: [{ tag: `c:ores/${material.primary}` }],
    //             time: 120,
    //             id: `${id_prefix}ore_${material.primary}`
    //         },
    //         {
    //             results: [
    //                 { id: AlmostUnified.getTagTargetItem(`c:clumps/${material.primary}`).getId(), count: 1 },
    //                 { id: AlmostUnified.getTagTargetItem(`c:nuggets/${material.primary}`).getId(), count: 3 },
    //                 { id: AlmostUnified.getTagTargetItem(`c:nuggets/${material.secondary}`).getId(), count: 3 }
    //             ],
    //             ingredients: [{ tag: `c:raw_materials/${material.primary}` }],
    //             time: 120,
    //             id: `${id_prefix}raw_${material.primary}`
    //         }
    //     );
    // });

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:grinder';

        if (!recipe.fluidInputVariant) {
            recipe.fluidInputVariant = 'minecraft:empty';
            recipe.fluidInputAmount = 0;
        }
        if (!recipe.fluidOutputVariant) {
            recipe.fluidOutputVariant = 'minecraft:empty';
            recipe.fluidOutputAmount = 0;
        }

        event.custom(recipe).id(recipe.id);
    });
});
