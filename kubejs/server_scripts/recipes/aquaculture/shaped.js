ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:aquaculture/shaped/';

    const recipes = [
        {
            output: `aquaculture:wooden_fillet_knife`,
            pattern: ['  A', ' A ', 'B  '],
            key: {
                A: '#enigmatica:planks',
                B: '#c:rods/wooden'
            },
            id: `aquaculture:wooden_fillet_knife`
        },
        {
            output: `aquaculture:stone_fillet_knife`,
            pattern: ['  A', ' A ', 'B  '],
            key: {
                A: '#c:stones',
                B: '#c:rods/wooden'
            },
            id: `aquaculture:stone_fillet_knife`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
