ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:cold_sweat/shaped/';

    const recipes = [
        {
            output: `6x cold_sweat:smokestack`,
            pattern: ['A A', 'A A', 'A A'],
            key: {
                A: Ingredient.of(['#c:cobblestones/normal', 'aether:holystone'])
            },
            id: `${id_prefix}smokestack`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
