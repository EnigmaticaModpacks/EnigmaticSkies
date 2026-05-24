ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:actuallyadditions/shaped/';

    const recipes = [
        {
            output: 'actuallyadditions:wood_casing',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#enigmatica:planks',
                B: 'farmersdelight:canvas',
                C: 'create:cogwheel'
            },
            id: `${id_prefix}wood_casing`
        },
        {
            output: '8x actuallyadditions:empty_cup',
            pattern: ['BBB', 'BAB', 'BBB'],
            key: {
                A: '#c:gems/black_quartz',
                B: 'handcrafted:white_cup'
            },
            id: `${id_prefix}empty_cup`
        },
        {
            output: 'actuallyadditions:coffee_machine',
            pattern: ['ABC', 'DEC', 'FGC'],
            key: {
                A: 'minecraft:hopper',
                B: 'minecraft:tinted_glass',
                C: '#c:gems/empowered_enori',
                D: 'actuallyadditions:empty_cup',
                E: 'modern_industrialization:bronze_machine_casing_pipe',
                F: 'minecraft:copper_bulb',
                G: 'oritech:flux_gate'
            },
            id: `${id_prefix}coffee_machine`
        },
        {
            output: 'actuallyadditions:farmer',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#c:gems/enori',
                B: 'minecraft:iron_hoe',
                C: 'ars_technica:calibrated_precision_mechanism',
                D: 'modern_industrialization:bronze_machine_casing',
                E: 'oritech:flux_gate'
            },
            id: `${id_prefix}farmer`
        },
        {
            output: 'actuallyadditions:powered_furnace',
            pattern: ['AAA', 'BCB', 'ADA'],
            key: {
                A: '#c:gems/enori',
                B: 'minecraft:furnace',
                C: 'modern_industrialization:bronze_machine_casing',
                D: 'oritech:flux_gate'
            },
            id: `${id_prefix}powered_furnace`
        },
        {
            output: 'actuallyadditions:ranged_collector',
            pattern: [' A ', 'ABA', ' C '],
            key: {
                A: '#c:gems/void',
                B: 'aether:enchanted_gravitite',
                C: 'minecraft:hopper'
            },
            id: `${id_prefix}ranged_collector`
        },
        {
            output: 'actuallyadditions:empowerer',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#c:gems/empowered_void',
                B: 'enderio:zombie_electrode',
                C: 'actuallyadditions:display_stand'
            },
            id: `${id_prefix}empowerer`
        },
        {
            output: 'actuallyadditions:display_stand',
            pattern: ['BAB', 'CDC'],
            key: {
                A: 'actuallyadditions:ethetic_green_block',
                B: '#c:gems/empowered_enori',
                C: 'actuallyadditions:ethetic_white_block',
                D: 'oritech:flux_gate'
            },
            id: `${id_prefix}display_stand`
        },
        {
            output: 'actuallyadditions:breaker',
            pattern: ['AAA', 'ABC', 'AAA'],
            key: {
                A: 'minecraft:tuff',
                B: 'create:electron_tube',
                C: '#c:gems/void'
            },
            id: `${id_prefix}breaker`
        },
        {
            output: 'actuallyadditions:placer',
            pattern: ['AAA', 'ABC', 'AAA'],
            key: {
                A: 'minecraft:tuff',
                B: 'create:electron_tube',
                C: '#c:gems/palis'
            },
            id: `${id_prefix}placer`
        },
        {
            output: 'actuallyadditions:dropper',
            pattern: ['ABA', 'ADA', 'ACA'],
            key: {
                A: 'minecraft:tuff',
                B: 'create:electron_tube',
                C: '#c:gems/palis',
                D: 'minecraft:dropper'
            },
            id: `${id_prefix}dropper`
        },
        {
            output: 'actuallyadditions:laser_relay_item_advanced',
            pattern: [' A ', 'ABA', ' A '],
            key: {
                A: '#c:nuggets/pulsating_alloy',
                B: 'actuallyadditions:laser_relay_item'
            },
            id: `${id_prefix}laser_relay_item_advanced`
        },
        {
            output: 'actuallyadditions:leaf_blower',
            pattern: [' B ', 'ACE', 'ADE'],
            key: {
                A: '#c:gems/enori',
                B: 'pneumaticcraft:cannon_barrel',
                C: 'create:propeller',
                D: '#c:essences/air',
                E: '#c:plates/copper'
            },
            id: `${id_prefix}leaf_blower`
        },
        {
            output: 'actuallyadditions:advanced_leaf_blower',
            pattern: [' B ', 'ACE', 'ADE'],
            key: {
                A: '#c:gems/empowered_diamatine',
                B: 'pneumaticcraft:cannon_barrel',
                C: 'pneumaticcraft:turbine_rotor',
                D: '#c:essences/air',
                E: '#c:plates/copper'
            },
            id: `${id_prefix}advanced_leaf_blower`
        },
        {
            output: 'actuallyadditions:xp_solidifier',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'minecraft:experience_bottle',
                B: '#c:gems/empowered_emeradic',
                C: 'modern_industrialization:bronze_machine_casing'
            },
            id: `${id_prefix}xp_solidifier`
        },
        {
            output: 'actuallyadditions:energizer',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#c:gems/empowered_restonia',
                B: '#c:chests/wooden',
                C: 'create:electron_tube',
                D: 'modern_industrialization:bronze_machine_casing',
                E: 'oritech:flux_gate'
            },
            id: `${id_prefix}energizer`
        },
        {
            output: 'actuallyadditions:shock_suppressor',
            pattern: ['ABA', 'ACA', 'ADA'],
            key: {
                A: '#c:gems/empowered_void',
                B: 'minecraft:slime_block',
                C: 'modern_industrialization:bronze_machine_casing',
                D: 'oritech:flux_gate'
            },
            id: `${id_prefix}shock_suppressor`
        },
        {
            output: 'actuallyadditions:drill_upgrade_speed',
            pattern: [' AA', 'BCA', 'BB '],
            key: {
                A: '#c:gems/enori',
                B: '#c:gems/restonia',
                C: 'prettypipes:low_speed_module'
            },
            id: `${id_prefix}drill_upgrade_speed`
        },
        {
            output: 'actuallyadditions:drill_upgrade_speed_ii',
            pattern: [' AA', 'BCA', 'BB '],
            key: {
                A: '#c:gems/enori',
                B: '#c:gems/restonia',
                C: 'prettypipes:medium_speed_module'
            },
            id: `${id_prefix}drill_upgrade_speed_ii`
        },
        {
            output: 'actuallyadditions:drill_upgrade_speed_iii',
            pattern: [' AA', 'BCA', 'BB '],
            key: {
                A: '#c:gems/empowered_enori',
                B: '#c:gems/empowered_restonia',
                C: 'prettypipes:high_speed_module'
            },
            id: `${id_prefix}drill_upgrade_speed_iii`
        },
        {
            output: 'actuallyadditions:drill_upgrade_silk_touch',
            pattern: [' AA', 'BCA', 'BB '],
            key: {
                A: '#c:gems/empowered_emeradic',
                B: '#c:gems/empowered_diamatine',
                C: 'ars_technica:calibrated_precision_mechanism'
            },
            id: `${id_prefix}drill_upgrade_silk_touch`
        },
        {
            output: 'actuallyadditions:drill_upgrade_fortune',
            pattern: [' AA', 'BCA', 'BB '],
            key: {
                A: '#c:gems/palis',
                B: '#c:gems/diamatine',
                C: 'create:precision_mechanism'
            },
            id: `${id_prefix}drill_upgrade_fortune`
        },
        {
            output: 'actuallyadditions:drill_upgrade_fortune_ii',
            pattern: [' AA', 'BCA', 'BB '],
            key: {
                A: '#c:gems/empowered_palis',
                B: '#c:gems/empowered_diamatine',
                C: 'ars_technica:calibrated_precision_mechanism'
            },
            id: `${id_prefix}drill_upgrade_fortune_ii`
        },
        {
            output: 'actuallyadditions:player_interface',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#c:gems/empowered_enori',
                B: 'minecraft:ender_eye',
                C: '#c:ender_pearls',
                D: 'actuallyadditions:ender_casing',
                E: '#c:gems/lapis'
            },
            id: `${id_prefix}player_interface`
        },
        {
            output: 'actuallyadditions:handheld_filler',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#c:gems/enori',
                B: 'supplementaries:crystal_display',
                C: 'ae2:formation_core',
                D: '#c:gems/emeradic',
                E: 'oritech:flux_gate'
            },
            id: `${id_prefix}handheld_filler`
        },
        {
            output: 'actuallyadditions:laser_wrench',
            pattern: [' AB', ' AA', 'A  '],
            key: {
                A: '#c:gems/enori',
                B: '#c:gems/void'
            },
            id: `${id_prefix}laser_wrench`
        },
        {
            output: '2x actuallyadditions:laser_upgrade_range',
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: '#c:gems/restonia',
                B: 'minecraft:compass',
                C: 'prettypipes:blank_module'
            },
            id: `${id_prefix}laser_upgrade_range`
        },
        {
            output: '4x actuallyadditions:laser_upgrade_invisibility',
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'minecraft:tinted_glass',
                B: '#c:gems/void',
                C: 'prettypipes:blank_module'
            },
            id: `${id_prefix}laser_upgrade_invisibility`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
