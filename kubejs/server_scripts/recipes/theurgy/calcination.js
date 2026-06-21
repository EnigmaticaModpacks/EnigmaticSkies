ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:theurgy/calcination/';

    const recipes = [
        {
            result: { id: 'theurgy:alchemical_salt_mineral', count: 8 },
            ingredient: { ingredient: { tag: 'c:pebbles' }, count: 1 },
            time: 5,
            id: `${id_prefix}alchemical_salt_mineral_from_pebbles`
        },
        {
            result: { id: 'theurgy:alchemical_salt_mineral', count: 32 },
            ingredient: { ingredient: { tag: 'c:gravels' }, count: 1 },
            time: 20,
            id: `${id_prefix}alchemical_salt_mineral_from_gravels`
        },
        {
            result: { id: 'justdirethings:coal_t1', count: 1 },
            ingredient: { ingredient: { tag: 'minecraft:logs_that_burn' }, count: 1 },
            time: 5,
            id: `${id_prefix}coal_t1`
        },
        {
            result: { id: 'malum:grim_talc', count: 1 },
            ingredient: { ingredient: { item: 'minecraft:bone' }, count: 1 },
            time: 5,
            id: `${id_prefix}grim_talc_from_bone`
        },
        {
            result: { id: 'malum:grim_talc', count: 1 },
            ingredient: { ingredient: { item: 'aquaculture:fish_bones' }, count: 2 },
            time: 5,
            id: `${id_prefix}grim_talc_from_fish_bones`
        },
        {
            result: { id: 'malum:rotting_essence', count: 1 },
            ingredient: { ingredient: { item: 'minecraft:rotten_flesh' }, count: 1 },
            time: 5,
            id: `${id_prefix}rotting_essence_from_rotten_flesh`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'theurgy:calcination';
        recipe.category = 'misc';
        recipe.result.type = 'theurgy:item';
        recipe.time *= 20;
        event.custom(recipe).id(recipe.id);
    });
});
