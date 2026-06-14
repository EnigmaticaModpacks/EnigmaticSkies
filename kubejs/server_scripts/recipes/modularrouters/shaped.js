ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modularrouters/shaped/';

    const recipes = [
        {
            output: `modularrouters:modular_router`,
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: `#c:ingots/ferricore`,
                B: `create:electron_tube`,
                C: `ars_technica:calibrated_precision_mechanism`,
                D: 'enderio:ensouled_chassis'
            },
            id: `${id_prefix}modular_router`
        },
        {
            output: `4x modularrouters:speed_upgrade`,
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'malum:blazing_diode',
                B: 'pneumaticcraft:speed_upgrade',
                C: `modularrouters:blank_upgrade`
            },
            id: `${id_prefix}speed_upgrade`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
