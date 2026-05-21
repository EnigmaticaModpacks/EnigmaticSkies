ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:sophisticatedstorage/shaped/';

    const recipes = [
        {
            output: '4x sophisticatedstorage:upgrade_base',
            pattern: ['BAB', 'ACA', 'BAB'],
            key: {
                A: '#enigmatica:planks',
                B: 'prettypipes:blank_module',
                C: 'create:precision_mechanism'
            },
            id: `${id_prefix}upgrade_base`
        },
        {
            output: 'sophisticatedstorage:controller',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'minecraft:polished_tuff',
                B: 'enderio:skeletal_contractor',
                C: '#c:plates/andesite_alloy',
                D: 'actuallyadditions:wood_casing',
                E: '#c:gems/restonia'
            },
            id: `${id_prefix}controller`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
