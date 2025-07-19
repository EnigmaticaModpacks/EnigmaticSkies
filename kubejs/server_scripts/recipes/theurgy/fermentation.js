ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:theurgy/fermentation/';

    const recipes = [
        {
            result: { id: 'minecraft:clay_ball', count: 2 },
            ingredients: [{ item: 'aether:aether_dirt' }],
            fluid: { id: 'minecraft:water', amount: 100 },
            time: 5,
            id: `${id_prefix}clay_ball`
        },
        {
            result: { id: 'minecraft:clay_ball', count: 4 },
            ingredients: [{ item: 'aether:aether_dirt' }, { item: 'theurgy:fermentation_starter' }],
            fluid: { id: 'minecraft:water', amount: 100 },
            time: 2.5,
            id: `${id_prefix}clay_ball_with_fermentation_starter`
        },
        {
            result: { id: 'theurgy:fermentation_starter', count: 20 },
            ingredients: [{ tag: 'c:mushrooms' }, { tag: 'c:sugars' }],
            fluid: { id: 'theurgy:sal_ammoniac', amount: 100 },
            time: 5,
            id: `${id_prefix}fermentation_starter`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'theurgy:fermentation';
        recipe.category = 'misc';
        recipe.result.type = 'theurgy:item';
        recipe.time = recipe.time * 20;
        recipe.fluid = { ingredient: { fluid: recipe.fluid.id }, amount: recipe.fluid.amount };
        event.custom(recipe).id(recipe.id);
    });
});
