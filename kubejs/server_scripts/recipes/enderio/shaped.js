ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:enderio/shaped/';

    const recipes = [
        {
            output: `enderio:primitive_alloy_smelter`,
            pattern: ['AAA', 'BCB', 'BBB'],
            key: {
                A: 'minecraft:furnace',
                B: 'supplementaries:ash_bricks',
                C: 'aether:aerogel'
            },
            id: `enderio:primitive_alloy_smelter`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
