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
                D: '#enigmatica:planks'
            },
            id: `${id_prefix}sal_ammoniac_tank`
        },
        {
            output: 'theurgy:sal_ammoniac_accumulator',
            pattern: ['ABA', 'DCD'],
            key: {
                A: '#c:ingots/andesite_alloy',
                B: 'aether:ambrosium_shard',
                C: 'handcrafted:terracotta_thick_pot',
                D: '#enigmatica:planks'
            },
            id: `${id_prefix}sal_ammoniac_accumulator`
        },
        {
            output: 'theurgy:digestion_vat',
            pattern: ['A', 'B', 'C'],
            key: {
                A: 'aether:ambrosium_shard',
                B: 'aether:quicksoil',
                C: 'handcrafted:terracotta_thick_pot'
            },
            id: `${id_prefix}digestion_vat`
        },
        {
            output: 'theurgy:fermentation_vat',
            pattern: ['CAC', 'CBC', 'CCC'],
            key: {
                A: 'aether:ambrosium_shard',
                B: 'aether:quicksoil',
                C: '#enigmatica:planks'
            },
            id: `${id_prefix}fermentation_vat`
        },
        {
            output: 'theurgy:calcination_oven',
            pattern: [' A ', 'BCB', 'BDB'],
            key: {
                A: '#c:ingots/andesite_alloy',
                B: 'modern_industrialization:fire_clay_brick',
                C: 'minecraft:furnace',
                D: 'create:basin'
            },
            id: `${id_prefix}calcination_oven`
        },
        {
            output: 'theurgy:pyromantic_brazier',
            pattern: ['CAC', 'ABA', 'CAC'],
            key: {
                A: 'modern_industrialization:fire_clay_brick',
                B: 'handcrafted:terracotta_thick_pot',
                C: 'aether:skyroot_log'
            },
            id: `${id_prefix}pyromantic_brazier`
        },
        {
            output: 'theurgy:distiller',
            pattern: [' A ', 'ABA', 'CCC'],
            key: {
                A: 'modern_industrialization:fire_clay_brick',
                B: 'handcrafted:terracotta_thick_pot',
                C: 'minecraft:polished_andesite'
            },
            id: `${id_prefix}distiller`
        },
        {
            output: 'theurgy:mercurial_wand',
            pattern: [' AB', ' CA', 'A  '],
            key: {
                A: '#c:rods/wooden',
                B: 'theurgy:mercury_shard',
                C: 'minecraft:brick'
            },
            id: `${id_prefix}mercurial_wand`
        },
        {
            output: '8x theurgy:copper_wire',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'ars_nouveau:magebloom_fiber',
                B: 'theurgy:mercury_shard'
            },
            id: `${id_prefix}copper_wire`
        },
        {
            output: '3x theurgy:logistics_connector_node',
            pattern: [' A ', 'BCB', 'BCB'],
            key: {
                A: 'theurgy:mercury_shard',
                B: 'minecraft:brick',
                C: 'supplementaries:ash_brick'
            },
            id: `${id_prefix}logistics_connector_node`
        },
        {
            output: '2x theurgy:logistics_item_inserter',
            pattern: ['A', 'B', 'C'],
            key: {
                A: 'theurgy:mercury_shard',
                B: 'supplementaries:ash_brick',
                C: '#c:gems/restonia'
            },
            id: `${id_prefix}logistics_item_inserter`
        },
        {
            output: '2x theurgy:logistics_item_extractor',
            pattern: ['C', 'B', 'A'],
            key: {
                A: 'theurgy:mercury_shard',
                B: 'supplementaries:ash_brick',
                C: '#c:gems/restonia'
            },
            id: `${id_prefix}logistics_item_extractor`
        },
        {
            output: '2x theurgy:logistics_fluid_inserter',
            pattern: ['A', 'B', 'C'],
            key: {
                A: 'theurgy:mercury_shard',
                B: 'supplementaries:ash_brick',
                C: '#c:gems/palis'
            },
            id: `${id_prefix}logistics_fluid_inserter`
        },
        {
            output: '2x theurgy:logistics_fluid_extractor',
            pattern: ['C', 'B', 'A'],
            key: {
                A: 'theurgy:mercury_shard',
                B: 'supplementaries:ash_brick',
                C: '#c:gems/palis'
            },
            id: `${id_prefix}logistics_fluid_extractor`
        },
        {
            output: '2x theurgy:caloric_flux_emitter',
            pattern: ['ABA', 'CCC'],
            key: {
                A: '#c:ingots/hallowed_gold',
                B: '#c:essences/fire',
                C: '#c:ingots/andesite_alloy'
            },
            id: `${id_prefix}caloric_flux_emitter`
        },
        {
            output: 'theurgy:mercury_catalyst',
            pattern: ['BAB', 'ACA', 'BAB'],
            key: {
                A: '#c:ingots/hallowed_gold',
                B: 'theurgy:mercury_shard',
                C: 'naturesaura:infused_stone'
            },
            id: `${id_prefix}mercury_catalyst`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
