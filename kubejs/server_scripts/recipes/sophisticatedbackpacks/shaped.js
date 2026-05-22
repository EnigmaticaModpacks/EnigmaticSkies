ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:sophisticatedbackpacks/shaped/';

    const recipes = [
        {
            output: '4x sophisticatedbackpacks:upgrade_base',
            pattern: ['BAB', 'ACA', 'BAB'],
            key: {
                A: '#c:leathers',
                B: 'prettypipes:blank_module',
                C: 'create:precision_mechanism'
            },
            id: `${id_prefix}upgrade_base`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
