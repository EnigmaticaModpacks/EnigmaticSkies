ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:minecraft/shaped/';

    const recipes = [
        {
            output: 'minecraft:furnace',
            pattern: ['AAA', 'A A', 'AAA'],
            key: {
                A: 'minecraft:andesite'
            },
            id: `${id_prefix}furnace`
        },
        {
            output: 'minecraft:smithing_table',
            pattern: ['AA', 'BB', 'BB'],
            key: {
                A: '#c:ingots/andesite_alloy',
                B: '#enigmatica:planks'
            },
            id: `${id_prefix}smithing_table`
        },
        {
            output: 'minecraft:chest',
            pattern: ['AAA', 'A A', 'AAA'],
            key: {
                A: '#enigmatica:planks'
            },
            id: `${id_prefix}chest`
        },
        {
            output: '4x minecraft:chest',
            pattern: ['AAA', 'A A', 'AAA'],
            key: {
                A: '#minecraft:logs'
            },
            id: `${id_prefix}chest_from_logs`
        },
        {
            output: 'minecraft:lever',
            pattern: ['A', 'B'],
            key: {
                A: '#c:rods/wooden',
                B: 'aether:holystone'
            },
            id: `${id_prefix}lever`
        },
        {
            output: '3x minecraft:glass_bottle',
            pattern: ['A A', ' A '],
            key: {
                A: 'aether:quicksoil_glass'
            },
            id: `${id_prefix}glass_bottle`
        },
        {
            output: 'minecraft:pumpkin_pie',
            pattern: ['ABA', 'CDC'],
            key: {
                A: 'farmersdelight:pumpkin_slice',
                B: '#c:eggs',
                C: '#c:sugars',
                D: 'farmersdelight:pie_crust'
            },
            id: `${id_prefix}pumpkin_pie`
        },
        {
            output: 'minecraft:cake',
            pattern: ['AEA', 'BCB', 'DDD'],
            key: {
                A: '#c:drinks/milk',
                B: '#c:sugars',
                C: '#c:eggs',
                D: 'pneumaticcraft:wheat_flour',
                E: 'minecraft:sweet_berries'
            },
            id: `${id_prefix}cake`
        },
        {
            output: '16x minecraft:stick',
            pattern: ['A', 'A'],
            key: {
                A: '#enigmatica:crafts_sticks'
            },
            id: `${id_prefix}stick`
        },
        {
            output: 'minecraft:big_dripleaf',
            pattern: ['A', 'B', 'C'],
            key: {
                A: 'minecraft:lily_pad',
                B: '#c:essences/manipulation',
                C: 'minecraft:vine'
            },
            id: `${id_prefix}big_dripleaf`
        },
        {
            output: 'minecraft:small_dripleaf',
            pattern: [' A ', 'ABA', ' C '],
            key: {
                A: 'minecraft:lily_pad',
                B: '#c:essences/manipulation',
                C: 'minecraft:vine'
            },
            id: `${id_prefix}small_dripleaf`
        },
        {
            output: 'minecraft:observer',
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'minecraft:andesite',
                B: '#c:gems/restonia',
                C: 'create:electron_tube'
            },
            id: `${id_prefix}observer`
        },
        {
            output: 'minecraft:slime_block',
            pattern: ['AAA', 'AAA', 'AAA'],
            key: {
                A: Ingredient.of([
                    'minecraft:slime_ball',
                    'aether:swet_ball',
                    'malum:runic_sapball',
                    'malum:cursed_sapball'
                ])
            },
            id: `${id_prefix}slime_block`
        },
        {
            output: 'minecraft:chain',
            pattern: ['A', 'B', 'A'],
            key: {
                A: '#c:nuggets/iron',
                B: '#c:ingots/andesite_alloy'
            },
            id: `${id_prefix}chain_from_andesite_alloy`
        },
        {
            output: '2x minecraft:chain',
            pattern: ['A', 'B', 'A'],
            key: {
                A: '#c:nuggets/iron',
                B: '#c:ingots/iron'
            },
            id: `${id_prefix}chain_from_iron`
        },
        {
            output: '4x minecraft:chain',
            pattern: ['A', 'B', 'A'],
            key: {
                A: '#c:nuggets/iron',
                B: '#c:ingots/steel'
            },
            id: `${id_prefix}chain_from_steel`
        },
        {
            output: 'minecraft:repeater',
            pattern: ['ABA', 'CCC'],
            key: {
                A: 'minecraft:redstone_torch',
                B: '#c:dusts/redstone',
                C: 'minecraft:andesite'
            },
            id: `${id_prefix}repeater`
        },
        {
            output: 'minecraft:repeater',
            pattern: ['B B', 'ABA', 'CCC'],
            key: {
                A: '#c:rods/wooden',
                B: '#c:dusts/redstone',
                C: 'minecraft:andesite'
            },
            id: `${id_prefix}repeater_simple`
        },
        {
            output: '2x minecraft:repeater',
            pattern: [' A ', 'BCB', ' A '],
            key: {
                A: '#c:plates/silver',
                B: '#c:dusts/redstone',
                C: '#c:rods/wooden'
            },
            id: `${id_prefix}repeater_silver`
        },
        {
            output: '2x minecraft:comparator',
            pattern: [' A ', 'BCB', ' A '],
            key: {
                A: '#c:plates/silver',
                B: '#c:dusts/redstone',
                C: Ingredient.of(['#c:gems/quartz', 'ae2:certus_quartz_crystal', '#c:gems/black_quartz'])
            },
            id: `${id_prefix}comparator_silver`
        },
        {
            output: '8x minecraft:crimson_nylium',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:netherrack',
                B: '#c:essences/manipulation'
            },
            id: `${id_prefix}transmute_crimson_nylium`
        },
        {
            output: '8x minecraft:warped_nylium',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:crimson_nylium',
                B: '#c:essences/manipulation'
            },
            id: `${id_prefix}transmute_warped_nylium`
        },
        {
            output: '8x minecraft:netherrack',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:warped_nylium',
                B: '#c:essences/manipulation'
            },
            id: `${id_prefix}transmute_netherrack`
        }
    ];

    const corals = ['tube', 'brain', 'bubble', 'fire', 'horn'];

    corals.forEach((coral) => {
        recipes.push({
            output: `minecraft:${coral}_coral_block`,
            pattern: ['AAA', 'AAA', 'AAA'],
            key: {
                A: Ingredient.of([`minecraft:${coral}_coral`, `minecraft:${coral}_coral_fan`])
            },
            id: `${id_prefix}${coral}_coral_block`
        });
    });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
