ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:theurgy/distillation/';

    const recipes = [
        {
            ingredient: { ingredient: { tag: 'c:dusts/sky_stone' }, count: 1 },
            result: { id: 'theurgy:mercury_shard', count: 4 },
            time: 5,
            id: `${id_prefix}mercury_shard`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'theurgy:distillation';
        recipe.category = 'misc';
        recipe.result.type = 'theurgy:item';
        recipe.time = recipe.time * 20;
        event.custom(recipe).id(recipe.id);
    });
});
