ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/pulverizer/';
    const recipes = [
        {
            results: [{ id: 'actuallyadditions:black_quartz', count: 2 }],
            ingredients: [{ tag: 'c:ores/black_quartz' }],
            time: 180,
            id: `${id_prefix}black_quartz`
        },
        {
            results: [{ id: 'minecraft:sand', count: 4 }],
            ingredients: [{ tag: 'c:sandstone/uncolored_blocks' }],
            time: 180,
            id: `oritech:pulverizer/dust/sand_from_sandstone`
        },
        {
            results: [{ id: 'minecraft:red_sand', count: 4 }],
            ingredients: [{ tag: 'c:sandstone/red_blocks' }],
            time: 180,
            id: `oritech:pulverizer/dust/red_sand`
        },
        {
            results: [{ id: 'oritech:biosteel_dust', count: 1 }],
            ingredients: [{ tag: 'c:ingots/biosteel' }],
            time: 120,
            id: `oritech:pulverizer/dust/biosteel`
        },
        {
            results: [{ id: 'oritech:duratium_dust', count: 1 }],
            ingredients: [{ tag: 'c:ingots/duratium' }],
            time: 120,
            id: `oritech:pulverizer/dust/duratium`
        },
        {
            results: [{ id: 'oritech:energite_dust', count: 1 }],
            ingredients: [{ tag: 'c:ingots/energite' }],
            time: 120,
            id: `oritech:pulverizer/dust/energite`
        },
        {
            results: [{ id: 'oritech:adamant_dust', count: 1 }],
            ingredients: [{ tag: 'c:ingots/adamant' }],
            time: 120,
            id: `oritech:pulverizer/dust/adamant`
        }
    ];

    colors.forEach((color) => {
        recipes.push({
            results: [{ id: `minecraft:${color}_dye`, count: 3 }],
            ingredients: [{ tag: `c:raw_materials/dyes/${color}` }],
            time: 180,
            id: `${id_prefix}${color}_dye`
        });
    });

    // let materials = [
    //     { primary: 'iron', secondary: 'nickel' },
    //     { primary: 'copper', secondary: 'gold' },
    //     { primary: 'gold', secondary: 'copper' },
    //     { primary: 'iridium', secondary: 'platinum' },
    //     { primary: 'lead', secondary: 'silver' },
    //     { primary: 'osmium', secondary: 'silver' },
    //     { primary: 'iesnium', secondary: 'silver' },
    //     { primary: 'silver', secondary: 'lead' },
    //     { primary: 'nickel', secondary: 'platinum' },
    //     { primary: 'tin', secondary: 'iron' },
    //     { primary: 'uranium', secondary: 'plutonium' },
    //     { primary: 'aluminum', secondary: 'aluminum' },
    //     { primary: 'zinc', secondary: 'silver' }
    // ];
    // materials.forEach((material) => {
    //     recipes.push(
    //         {
    //             results: [
    //                 { id: AlmostUnified.getTagTargetItem(`c:raw_materials/${material.primary}`).getId(), count: 2 }
    //             ],
    //             ingredients: [{ tag: `c:ores/${material.primary}` }],
    //             time: 180,
    //             id: `${id_prefix}ore_${material.primary}`
    //         },
    //         {
    //             results: [
    //                 { id: AlmostUnified.getTagTargetItem(`c:dusts/${material.primary}`).getId(), count: 1 },
    //                 { id: AlmostUnified.getTagTargetItem(`c:nuggets/${material.secondary}`).getId(), count: 3 }
    //             ],
    //             ingredients: [{ tag: `c:raw_materials/${material.primary}` }],
    //             time: 180,
    //             id: `${id_prefix}raw_${material.primary}`
    //         }
    //     );
    // });

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:pulverizer';

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
