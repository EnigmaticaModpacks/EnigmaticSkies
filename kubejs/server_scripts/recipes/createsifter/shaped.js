ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:createsifter/shaped/';

    const recipes = [
        {
            output: `createsifter:sifter`,
            pattern: ['ABA', 'CDC', 'EEE'],
            key: {
                A: 'aether:skyroot_planks',
                B: 'actuallyadditions:wood_casing',
                C: 'aether:skyroot_stick',
                D: 'create:cogwheel',
                E: 'aether:holystone_bricks'
            },
            id: `createsifter:crafting/sifter`
        },
        {
            output: `createsifter:string_mesh`,
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#c:rods/wooden',
                B: 'farmersdelight:canvas'
            },
            id: `createsifter:crafting/string_mesh`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
