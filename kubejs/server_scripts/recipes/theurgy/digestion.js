ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:theurgy/digestion/';

    const recipes = [
        {
            ingredients: [
                { ingredient: { item: 'theurgy:alchemical_salt_mineral' }, count: 1 },
                { ingredient: { tag: 'c:clay' }, count: 4 }
            ],
            result: { id: 'minecraft:redstone', count: 4 },
            fluid: { id: 'theurgy:sal_ammoniac', amount: 15 },
            time: 5,
            id: `${id_prefix}redstone`
        },
        {
            ingredients: [
                { ingredient: { item: 'theurgy:alchemical_salt_mineral' }, count: 1 },
                { ingredient: { item: 'aether:ambrosium_shard' }, count: 4 }
            ],
            result: { id: 'ars_nouveau:source_gem', count: 4 },
            fluid: { id: 'theurgy:sal_ammoniac', amount: 15 },
            time: 5,
            id: `${id_prefix}source_gem`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'theurgy:digestion';
        recipe.category = 'misc';
        recipe.result.type = 'theurgy:item';
        recipe.time = recipe.time * 20;
        recipe.fluid = { ingredient: { fluid: recipe.fluid.id }, amount: recipe.fluid.amount };
        event.custom(recipe).id(recipe.id);
    });
});
