ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:theurgy/shaped/';

    const recipes = [
        {
            output: 'theurgy:crystallized_water',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'aether:cold_aercloud',
                B: 'aether:icestone'
            },
            id: `${id_prefix}crystallized_water`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
