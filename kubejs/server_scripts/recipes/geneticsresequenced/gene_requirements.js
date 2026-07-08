ServerEvents.generateData('after_mods', (event) => {
    let recipes = [
        {
            gene: 'geneticsresequenced:flight',
            requirements: [
                'geneticsresequenced:step_assist',
                'geneticsresequenced:no_fall_damage',
                'geneticsresequenced:strength_2',
                'geneticsresequenced:more_hearts_2',
                'geneticsresequenced:regeneration_4'
            ]
        },
        {
            gene: 'geneticsresequenced:photosynthesis',
            requirements: ['geneticsresequenced:eat_grass']
        },
        {
            gene: 'geneticsresequenced:frost_proof',
            requirements: [
                'geneticsresequenced:strength_2',
                'geneticsresequenced:more_hearts',
                'geneticsresequenced:regeneration'
            ]
        },
        {
            gene: 'geneticsresequenced:fire_proof',
            requirements: [
                'geneticsresequenced:strength_2',
                'geneticsresequenced:more_hearts',
                'geneticsresequenced:regeneration'
            ]
        },
        {
            gene: 'geneticsresequenced:wilden',
            requirements: [
                'geneticsresequenced:strength',
                'geneticsresequenced:more_hearts',
                'geneticsresequenced:regeneration'
            ]
        },
        {
            gene: 'geneticsresequenced:wilden_4',
            requirements: [
                'geneticsresequenced:wilden',
                'geneticsresequenced:strength_2',
                'geneticsresequenced:more_hearts_2',
                'geneticsresequenced:regeneration_4'
            ]
        },
        {
            gene: 'geneticsresequenced:bovine',
            requirements: ['geneticsresequenced:more_hearts', 'geneticsresequenced:regeneration']
        },
        {
            gene: 'geneticsresequenced:ovine',
            requirements: ['geneticsresequenced:more_hearts', 'geneticsresequenced:regeneration']
        },
        {
            gene: 'geneticsresequenced:galline',
            requirements: ['geneticsresequenced:more_hearts', 'geneticsresequenced:regeneration']
        },
        {
            gene: 'geneticsresequenced:porcine',
            requirements: ['geneticsresequenced:more_hearts', 'geneticsresequenced:regeneration']
        },
        {
            gene: 'geneticsresequenced:lapine',
            requirements: ['geneticsresequenced:more_hearts', 'geneticsresequenced:regeneration']
        },
        {
            gene: 'geneticsresequenced:saevine',
            requirements: ['geneticsresequenced:more_hearts', 'geneticsresequenced:regeneration']
        }
    ];

    recipes.forEach((recipe) => {
        event.json(`geneticsresequenced:geneticsresequenced/gene_requirements/${recipe.gene.split(':')[1]}`, recipe);
    });
});
