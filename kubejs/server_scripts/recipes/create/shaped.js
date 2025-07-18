ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:create/shaped/';

    const recipes = [
        {
            output: `2x create:shaft`,
            pattern: ['A', 'A'],
            key: {
                A: 'aether:holystone'
            },
            id: `${id_prefix}shaft`
        },
        {
            output: `create:hand_crank`,
            pattern: ['AAA', '  B'],
            key: {
                A: 'aether:skyroot_planks',
                B: 'aether:holystone'
            },
            id: `${id_prefix}hand_crank`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
