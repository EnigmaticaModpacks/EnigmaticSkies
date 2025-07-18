ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:theurgy/shaped/';

    const recipes = [
        {
            output: 'theurgy:crystallized_water',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'aether:cold_aercloud',
                B: 'occultism:crushed_ice'
            },
            id: `${id_prefix}crystallized_water`
        },
        {
            output: 'theurgy:sal_ammoniac_tank',
            pattern: ['A A', 'ACA', 'BDB'],
            key: {
                A: 'aether:holystone',
                B: 'aether:skyroot_stick',
                C: 'aether:skyroot_bucket',
                D: 'aether:holystone_bricks'
            },
            id: `theurgy:crafting/shaped/sal_ammoniac_tank`
        },
        {
            output: 'theurgy:sal_ammoniac_accumulator',
            pattern: ['A A', 'BCB'],
            key: {
                A: 'aether:holystone',
                B: 'aether:skyroot_stick',
                C: 'aether:skyroot_planks'
            },
            id: `theurgy:crafting/shaped/sal_ammoniac_accumulator`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
