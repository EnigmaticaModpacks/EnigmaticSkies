ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:pneumaticcraft/fuel_quality/';

    let multiplier = 0.1;

    const recipes = [
        {
            fluid: { tag: 'c:refined_canola_oil' },
            air_per_mb: 200,
            burn_rate: 1.0,
            id: `${id_prefix}refined_canola_oil`
        },
        {
            fluid: { tag: 'c:crystallized_oil' },
            air_per_mb: 300,
            burn_rate: 1.0,
            id: `${id_prefix}crystallized_oil`
        },

        {
            fluid: { tag: 'c:empowered_oil' },
            air_per_mb: 450,
            burn_rate: 1.0,
            id: `${id_prefix}empowered_oil`
        },
        {
            fluid: { tag: 'c:blaze_ember' },
            air_per_mb: 800,
            burn_rate: 1.0,
            id: `${id_prefix}blaze_ember`
        },
        {
            fluid: { tag: 'c:voidflame' },
            air_per_mb: 1600,
            burn_rate: 1.0,
            id: `${id_prefix}voidflame`
        },
        {
            fluid: { tag: 'c:eclipse_ember' },
            air_per_mb: 3200,
            burn_rate: 1.0,
            id: `${id_prefix}eclipse_ember`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:fuel_quality';
        recipe.air_per_bucket = recipe.air_per_mb * 1000 * multiplier;
        event.custom(recipe).id(recipe.id);
    });
});
