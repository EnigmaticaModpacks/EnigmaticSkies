ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:theurgy/calcination/';

    const recipes = [
        {
            ingredient: { ingredient: { tag: 'c:pebbles' }, count: 1 },
            result: { id: 'theurgy:alchemical_salt_mineral', count: 8 },
            time: 5,
            id: `${id_prefix}alchemical_salt_mineral_from_pebbles`
        },
        {
            ingredient: { ingredient: { tag: 'minecraft:logs_that_burn' }, count: 1 },
            result: { id: 'mekanism:block_charcoal', count: 1 },
            time: 30,
            id: `${id_prefix}block_charcoal`
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
