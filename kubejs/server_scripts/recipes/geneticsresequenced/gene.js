ServerEvents.generateData('before_mods', (event) => {
    let recipes = [
        {
            dna_points_required: 24,
            potion_details: [{ effect: 'cold_sweat:ice_resistance' }],
            id: 'frost_proof'
        },
        {
            dna_points_required: 30,
            potion_details: [{ effect: 'arsdelight:wilden', level: 1 }],
            id: 'wilden'
        },
        {
            dna_points_required: 50,
            potion_details: [{ effect: 'arsdelight:wilden', level: 4 }],
            id: 'wilden_4'
        },
        {
            dna_points_required: 24,
            potion_details: [{ effect: 'malum:stone_ward' }],
            id: 'stone_skin'
        }
        // {
        //     dna_points_required: 50,
        //     id: 'bovine'
        // },
        // {
        //     dna_points_required: 50,
        //     id: 'ovine'
        // },
        // {
        //     dna_points_required: 50,
        //     id: 'galline'
        // },
        // {
        //     dna_points_required: 50,
        //     id: 'porcine'
        // },
        // {
        //     dna_points_required: 50,
        //     id: 'lapine'
        // },
        // {
        //     dna_points_required: 50,
        //     id: 'burgeoning'
        // },
        // {
        //     dna_points_required: 50,
        //     id: 'saevine'
        // },
        // {
        //     dna_points_required: 50,
        //     id: 'chimeric'
        // }
    ];

    recipes.forEach((recipe) => {
        event.json(`geneticsresequenced:geneticsresequenced/gene/${recipe.id}`, recipe);
    });
});
