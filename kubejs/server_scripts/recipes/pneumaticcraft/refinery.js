ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:pneumaticcraft/refinery/';

    const recipes = [
        {
            outputs: [
                { id: 'enigmatica:pitch', amount: 2 },
                { id: 'enigmatica:heavy_oil', amount: 3 },
                { id: 'enigmatica:light_oil', amount: 5 }
            ],
            input: { fluid: 'pneumaticcraft:oil', amount: 10 },
            temperature: { min: 373 },
            id: `${id_prefix}oil_processing`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = `pneumaticcraft:refinery`;
        event.custom(recipe).id(recipe.id);
    });
});
