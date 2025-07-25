ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:supplementaries/shaped/';

    const recipes = [
        {
            output: '4x supplementaries:ash_brick',
            pattern: ['AA', 'AA'],
            key: {
                A: 'supplementaries:ash'
            },
            id: `${id_prefix}ash_brick`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
