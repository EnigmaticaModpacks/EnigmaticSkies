ServerEvents.generateData('after_mods', (event) => {
    const id_prefix = 'enigmatica:modern_industrialization/fluid_fuels/';

    let multiplier = 0.1;

    const recipes = {
        replace: true,
        values: {
            '#c:refined_canola_oil': { eu_per_mb: 200 * multiplier },
            '#c:crystallized_oil': { eu_per_mb: 300 * multiplier },
            '#c:empowered_oil': { eu_per_mb: 450 * multiplier },
            '#c:blaze_ember': { eu_per_mb: 800 * multiplier },
            '#c:voidflame': { eu_per_mb: 1600 * multiplier },
            '#c:eclipse_ember': { eu_per_mb: 3200 * multiplier }
        }
    };

    event.json(`modern_industrialization:data_maps/fluid/fluid_fuels`, recipes);
});
