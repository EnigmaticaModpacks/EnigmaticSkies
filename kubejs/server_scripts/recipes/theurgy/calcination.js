ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:theurgy/calcination/';

    const recipes = [
        {
            ingredient: { ingredient: { tag: 'c:pebbles' }, count: 1 },
            result: { id: 'theurgy:alchemical_salt_strata', count: 8 },
            time: 5,
            id: `${id_prefix}alchemical_salt_strata_from_`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'theurgy:calcination';
        recipe.category = 'misc';
        recipe.result.type = 'theurgy:item';
        recipe.time = recipe.time * 20;
        event.custom(recipe).id(recipe.id);
    });
});
