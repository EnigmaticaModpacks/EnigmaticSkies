ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/centrifuge/';

    const recipes = [
        {
            fluid_outputs: [{ fluid: 'actuallyadditions:canola_oil', amount: 160 }],
            item_inputs: [{ item: 'actuallyadditions:canola', amount: 1 }],
            eu: 2,
            duration: 0.5,
            id: `${id_prefix}canola_oil`
        },
        {
            item_outputs: [{ item: 'industrialforegoing:fertilizer', amount: 1, probability: 0.5 }],
            fluid_outputs: [
                { fluid: 'extended_industrialization:manure', amount: 250 },
                { fluid: 'enigmatica:wastewater', amount: 750 }
            ],
            fluid_inputs: { fluid: 'industrialforegoing:sewage', amount: 1000 },
            eu: 2,
            duration: 5,
            id: `${id_prefix}manure`
        },
        {
            fluid_outputs: [{ fluid: 'minecraft:lava', amount: 250 }],
            item_inputs: [{ item: 'theurgy:crystallized_lava', amount: 1, probability: 1 / 16 }],
            eu: 4,
            duration: 1,
            id: `${id_prefix}lava`
        },
        {
            fluid_outputs: [{ fluid: 'minecraft:water', amount: 250 }],
            item_inputs: [{ item: 'theurgy:crystallized_water', amount: 1, probability: 1 / 16 }],
            eu: 2,
            duration: 1,
            id: `${id_prefix}water`
        },

        {
            fluid_outputs: [{ fluid: 'industrialforegoing:pink_slime', amount: 250 }],
            item_inputs: [{ tag: 'c:foods/cooked_meat', amount: 1 }],
            eu: 2,
            duration: 5,
            id: `${id_prefix}pink_slime`
        },
        {
            item_outputs: [{ item: 'modern_industrialization:carbon_dust', amount: 1 }],
            item_inputs: [{ tag: 'c:essences/rotting_essence', amount: 4 }],
            eu: 2,
            duration: 5,
            id: `${id_prefix}carbon_dust`
        },
        {
            fluid_outputs: [
                { fluid: 'enigmatica:wastewater', amount: 750 },
                { fluid: 'industrialforegoing:sludge', amount: 250 }
            ],
            fluid_inputs: { fluid: 'enigmatica:briny_seawater', amount: 1000 },
            eu: 128,
            duration: 10,
            id: `${id_prefix}wastewater_from_briny_seawater`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:centrifuge';
        recipe.duration *= 20;
        event.custom(recipe).id(recipe.id);
    });
});
