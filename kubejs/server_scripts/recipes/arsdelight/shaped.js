ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:arsdelight/shaped/';

    const recipes = [
        {
            output: 'arsdelight:mendosteen_pie',
            pattern: [' A ', 'BCB', 'EDE'],
            key: {
                A: 'ars_nouveau:mendosteen_pod',
                B: 'arsdelight:activated_mendosteen_jam',
                C: 'arsdelight:source_berry_jam',
                D: 'farmersdelight:pie_crust',
                E: '#c:sugars'
            },
            id: `${id_prefix}mendosteen_pie`
        },
        {
            output: 'arsdelight:bastion_pie',
            pattern: [' A ', 'BCB', 'EDE'],
            key: {
                A: 'ars_nouveau:bastion_pod',
                B: 'arsdelight:activated_bastion_jam',
                C: 'arsdelight:source_berry_jam',
                D: 'farmersdelight:pie_crust',
                E: '#c:sugars'
            },
            id: `${id_prefix}bastion_pie`
        },
        {
            output: 'arsdelight:bombegrante_pie',
            pattern: [' A ', 'BCB', 'EDE'],
            key: {
                A: 'ars_nouveau:bombegranate_pod',
                B: 'arsdelight:neutralized_bombegrante_jam',
                C: 'arsdelight:source_berry_jam',
                D: 'farmersdelight:pie_crust',
                E: '#c:sugars'
            },
            id: `${id_prefix}bombegrante_pie`
        },
        {
            output: 'arsdelight:frostaya_pie',
            pattern: [' A ', 'BCB', 'EDE'],
            key: {
                A: 'ars_nouveau:frostaya_pod',
                B: 'arsdelight:neutralized_frostaya_jam',
                C: 'arsdelight:source_berry_jam',
                D: 'farmersdelight:pie_crust',
                E: '#c:sugars'
            },
            id: `${id_prefix}frostaya_pie`
        },
        {
            output: 'arsdelight:flashpine_pie',
            pattern: [' A ', 'BCB', 'EDE'],
            key: {
                A: 'ars_elemental:flashpine_pod',
                B: 'arsdelight:neutralized_flashpine_jam',
                C: 'arsdelight:source_berry_jam',
                D: 'farmersdelight:pie_crust',
                E: '#c:sugars'
            },
            id: `${id_prefix}flashpine_pie`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
