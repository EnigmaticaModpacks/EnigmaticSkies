ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:theurgy/shaped/';

    const recipes = [
        {
            output: 'theurgy:sal_ammoniac_tank',
            pattern: ['ABA', 'ACA', 'DDD'],
            key: {
                A: '#c:ingots/andesite_alloy',
                B: 'aether:ambrosium_shard',
                C: 'handcrafted:terracotta_thick_pot',
                D: 'aether:skyroot_planks'
            },
            id: `theurgy:crafting/shaped/sal_ammoniac_tank`
        },
        {
            output: 'theurgy:sal_ammoniac_accumulator',
            pattern: ['ABA', 'DCD'],
            key: {
                A: '#c:ingots/andesite_alloy',
                B: 'aether:ambrosium_shard',
                C: 'handcrafted:terracotta_thick_pot',
                D: 'aether:skyroot_planks'
            },
            id: `theurgy:crafting/shaped/sal_ammoniac_accumulator`
        },
        {
            output: 'theurgy:digestion_vat',
            pattern: ['A', 'B', 'C'],
            key: {
                A: 'aether:ambrosium_shard',
                B: 'aether:quicksoil',
                C: 'handcrafted:terracotta_thick_pot'
            },
            id: `theurgy:crafting/shaped/digestion_vat`
        },
        {
            output: 'theurgy:fermentation_vat',
            pattern: ['A', 'B', 'C'],
            key: {
                A: 'aether:ambrosium_shard',
                B: 'aether:quicksoil',
                C: 'minecraft:barrel'
            },
            id: `theurgy:crafting/shaped/fermentation_vat`
        },
        {
            output: 'theurgy:calcination_oven',
            pattern: [' A ', 'BCB', 'BDB'],
            key: {
                A: '#c:ingots/andesite_alloy',
                B: '#c:bricks/normal',
                C: 'aether:aerogel',
                D: 'create:basin'
            },
            id: `theurgy:crafting/shaped/calcination_oven`
        },
        {
            output: 'theurgy:pyromantic_brazier',
            pattern: ['CAC', 'ABA', 'CAC'],
            key: {
                A: '#c:ingots/andesite_alloy',
                B: 'handcrafted:terracotta_thick_pot',
                C: 'create:shaft'
            },
            id: `theurgy:crafting/shaped/pyromantic_brazier`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
