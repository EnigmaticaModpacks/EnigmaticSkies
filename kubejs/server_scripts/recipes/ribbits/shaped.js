ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ribbits/shaped/';

    const recipes = [
        {
            output: '8x ribbits:umbrella_leaf',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:big_dripleaf',
                B: '#c:essences/conjuration'
            },
            id: `${id_prefix}umbrella_leaf`
        },
        {
            output: '8x ribbits:toadstool',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:red_mushroom',
                B: '#c:essences/conjuration'
            },
            id: `${id_prefix}toadstool`
        },
        {
            output: '8x ribbits:swamp_daisy',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:oxeye_daisy',
                B: '#c:essences/conjuration'
            },
            id: `${id_prefix}swamp_daisy`
        },
        {
            output: '8x ribbits:giant_lilypad',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:lily_pad',
                B: '#c:essences/conjuration'
            },
            id: `${id_prefix}giant_lilypad`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
