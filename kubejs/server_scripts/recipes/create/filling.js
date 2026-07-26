ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:create/filling/';

    const recipes = [
        {
            results: [{ id: 'enigmatica:luminiferous_aether_bottle' }],
            ingredients: [
                { item: 'minecraft:glass_bottle' },
                { type: 'fluid_stack', fluid: 'modern_industrialization:helium_plasma', amount: 250 }
            ],
            id: `${id_prefix}luminiferous_aether_bottle_bottle`
        },
        {
            results: [{ id: 'enigmatica:vapours_of_nyx_bottle' }],
            ingredients: [
                { item: 'minecraft:glass_bottle' },
                { type: 'fluid_stack', fluid: 'enigmatica:vapours_of_nyx', amount: 250 }
            ],
            id: `${id_prefix}vapours_of_nyx_bottle_bottle`
        },
        {
            results: [
                {
                    id: 'actuallyadditions:coffee_cup',
                    components: {
                        'minecraft:custom_data': {
                            1: { Amplifier: 0, Duration: 600, ID: 'cold_sweat:ice_resistance' },
                            2: { Amplifier: 0, Duration: 600, ID: 'minecraft:speed' },
                            Counter: 2
                        }
                    },
                    count: 1
                }
            ],
            ingredients: [
                { item: 'actuallyadditions:empty_cup' },
                { type: 'fluid_stack', fluid: 'enigmatica:starbies_nitro_cold_brew', amount: 500 }
            ],
            id: `${id_prefix}cup_with_starbies_nitro_cold_brew`
        },
        {
            results: [
                {
                    id: 'actuallyadditions:coffee_cup',
                    components: {
                        'minecraft:custom_data': {
                            1: { Amplifier: 0, Duration: 600, ID: 'minecraft:fire_resistance' },
                            2: { Amplifier: 0, Duration: 600, ID: 'minecraft:speed' },
                            Counter: 2
                        }
                    },
                    count: 1
                }
            ],
            ingredients: [
                { item: 'actuallyadditions:empty_cup' },
                { type: 'fluid_stack', fluid: 'enigmatica:espresso', amount: 50 }
            ],
            id: `${id_prefix}cup_with_espresso`
        }
    ];

    event.forEachRecipe({ type: 'create:deploying' }, (r) => {
        let recipe = JSON.parse(r.json);
        let recipe_id = r.getId();

        if (recipe_id.toString().match(/.*copper.*deoxidising/)) {
            recipes.push({
                results: [{ id: recipe.ingredients[0].item }],
                ingredients: [
                    { item: recipe.results[0].id },
                    { type: 'fluid_stack', fluid: 'minecraft:water', amount: 250 }
                ],
                id: `${id_prefix}${recipe_id.split('/')[1].replace('_deox', '_ox')}`
            });
        }
    });

    recipes.forEach((recipe) => {
        recipe.type = 'create:filling';
        event.custom(recipe).id(recipe.id);
    });
});
