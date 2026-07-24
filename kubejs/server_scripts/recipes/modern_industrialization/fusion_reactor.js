ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/fusion_reactor/';

    const recipes = [
        {
            fluid_outputs: [{ fluid: 'modern_industrialization:helium_plasma', amount: 16000 }],
            fluid_inputs: [{ fluid: 'enigmatica:vapours_of_nyx', amount: 200 }],
            eu: 16000,
            duration: 30,
            id: `${id_prefix}helium_plasma_from_vapours_of_nyx`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:fusion_reactor';
        recipe.duration *= 20;
        event.custom(recipe).id(recipe.id);
    });
});
