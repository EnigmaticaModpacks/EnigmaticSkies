ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:createdeco/shaped/';

    const recipes = [];

    const materials = ['iron', 'brass', 'andesite_alloy', 'copper', 'industrial_iron', 'zinc'];

    materials.forEach((material) => {
        let output = material == 'andesite_alloy' ? 'andesite' : material;

        recipes.push({
            output: `4x createdeco:${output}_sheet_metal`,
            pattern: [' A ', 'A A', ' A '],
            key: {
                A: `#c:plates/${material}`
            },
            id: `${id_prefix}${material}_sheet_metal`
        });
    });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
