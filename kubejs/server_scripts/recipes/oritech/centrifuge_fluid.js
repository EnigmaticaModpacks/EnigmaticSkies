ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/centrifuge_fluid/';
    const recipes = [
        {
            results: [{ id: 'oritech:polymer_resin', count: 1 }],
            fluidOutputs: [],
            ingredients: [{ item: 'occultism:otherworld_ashes' }],
            fluidInput: { fluid: 'enigmatica:pitch', amount: 100 },
            time: 5,
            id: `${id_prefix}polymer_resin`
        },
        {
            results: [],
            fluidOutputs: [{ fluid: 'pneumaticcraft:plastic', amount: 250 }],
            ingredients: [{ item: 'oritech:polymer_resin' }],
            fluidInput: { fluid: 'oritech:still_strange_matter', amount: 1000 },
            time: 10,
            id: `${id_prefix}plastic`
        },
        {
            results: [],
            fluidOutputs: [{ fluid: 'actuallyadditions:canola_oil', amount: 160 }],
            ingredients: [{ item: 'actuallyadditions:canola' }],
            time: 1,
            id: `${id_prefix}canola_oil`
        },
        {
            results: [],
            fluidOutputs: [{ fluid: 'minecraft:lava', amount: 4000 }],
            ingredients: [{ item: 'theurgy:crystallized_lava' }],
            time: 1,
            id: `${id_prefix}lava`
        },
        {
            results: [],
            fluidOutputs: [{ fluid: 'minecraft:water', amount: 4000 }],
            ingredients: [{ item: 'theurgy:crystallized_water' }],
            time: 1,
            id: `${id_prefix}water`
        },
        {
            results: [],
            fluidOutputs: [{ fluid: 'industrialforegoing:pink_slime', amount: 250 }],
            ingredients: [{ tag: 'c:foods/cooked_meat' }],
            time: 5,
            id: `${id_prefix}pink_slime`
        },
        {
            results: [{ id: 'actuallyadditions:rice_dough', count: 1 }],
            ingredients: [{ item: 'farmersdelight:rice' }],
            fluidInput: { fluid: 'minecraft:water', amount: 1000 },
            time: 5,
            id: `${id_prefix}rice_dough`
        },
        {
            results: [{ id: 'farmersdelight:wheat_dough', count: 1 }],
            ingredients: [{ item: 'pneumaticcraft:wheat_flour' }],
            fluidInput: { fluid: 'minecraft:water', amount: 1000 },
            time: 5,
            id: `${id_prefix}wheat_dough`
        },
        {
            results: [{ id: 'modern_industrialization:rubber_sheet', count: 1 }],
            ingredients: [{ item: 'farmersdelight:canvas' }],
            fluidInput: { fluid: 'enigmatica:vulcanized_rubber', amount: 50 },
            time: 5,
            id: `${id_prefix}rubber_sheet`
        }
    ];

    ae_washables.forEach((washable) => {
        recipes.push({
            ingredients: [{ tag: `ae2:${washable}_cable` }],
            fluidInput: { fluid: 'minecraft:water', amount: 100 },
            fluidOutputs: [],
            results: [{ id: `ae2:fluix_${washable}_cable` }],
            time: 2,
            id: `${id_prefix}fluix_${washable}_cable_washing`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:centrifuge_fluid';
        recipe.time *= 20;
        event.custom(recipe).id(recipe.id);
    });
});
