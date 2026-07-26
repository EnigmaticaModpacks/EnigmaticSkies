ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:extended_industrialization/shaped/';

    const recipes = [
        {
            output: `extended_industrialization:bronze_composter`,
            pattern: ['CBC', 'ADA', 'EEE'],
            key: {
                A: `#c:gears/copper`,
                B: 'theurgy:digestion_vat',
                C: `#c:glass_blocks`,
                D: 'modern_industrialization:bronze_machine_casing',
                E: `ppfluids:fluid_pipe`
            },
            id: `${id_prefix}bronze_composter`
        },
        {
            output: `extended_industrialization:steam_farmer`,
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: `modern_industrialization:bronze_plated_bricks`,
                B: 'create:mechanical_harvester',
                C: `create:mechanical_bearing`,
                D: 'create:precision_mechanism',
                E: `modern_industrialization:bronze_machine_casing_pipe`
            },
            id: `${id_prefix}steam_farmer`
        },
        {
            output: `extended_industrialization:electric_farmer`,
            pattern: ['ABA', 'CDC', 'ECE'],
            key: {
                A: `modern_industrialization:robot_arm`,
                B: 'modern_industrialization:large_motor',
                C: `modern_industrialization:steel_machine_casing`,
                D: `extended_industrialization:steam_farmer`,
                E: `modern_industrialization:pump`
            },
            id: `${id_prefix}electric_farmer`
        },
        {
            output: `extended_industrialization:large_steam_macerator`,
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: `modern_industrialization:bronze_machine_casing_pipe`,
                B: `modern_industrialization:bronze_plated_bricks`,
                C: `modern_industrialization:bronze_macerator`
            },
            id: `${id_prefix}large_steam_macerator`
        },
        {
            output: `extended_industrialization:large_electric_macerator`,
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: `modern_industrialization:conductive_coil`,
                B: `modern_industrialization:bronze_plated_bricks`,
                C: `modern_industrialization:bronze_macerator`
            },
            id: `${id_prefix}large_electric_macerator`
        },
        {
            output: `extended_industrialization:large_steam_furnace`,
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: `modern_industrialization:bronze_machine_casing_pipe`,
                B: `modern_industrialization:bronze_plated_bricks`,
                C: `modern_industrialization:bronze_furnace`
            },
            id: `${id_prefix}large_steam_furnace`
        },
        {
            output: `extended_industrialization:large_electric_furnace`,
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: `modern_industrialization:conductive_coil`,
                B: `modern_industrialization:bronze_plated_bricks`,
                C: `modern_industrialization:bronze_furnace`
            },
            id: `${id_prefix}large_electric_furnace`
        },
        {
            output: `extended_industrialization:steel_brewery`,
            pattern: ['ABA', 'CDC', 'EEE'],
            key: {
                A: `minecraft:glass`,
                B: `minecraft:brewing_stand`,
                C: `#c:gears/compressed_iron`,
                D: `modern_industrialization:steel_machine_casing`,
                E: '#modern_industrialization:fluid_pipes'
            },
            id: `${id_prefix}steel_brewery`
        },
        {
            output: `extended_industrialization:electric_brewery`,
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: `minecraft:glass`,
                B: `minecraft:brewing_stand`,
                C: `#c:gears/dark_steel`,
                D: `modern_industrialization:steel_machine_casing`,
                E: 'modern_industrialization:large_motor',
                F: 'enigmatica:pulsating_mechanism'
            },
            id: `${id_prefix}electric_brewery`
        },
        {
            output: `extended_industrialization:steel_honey_extractor`,
            pattern: ['ABA', 'CDC', 'EEE'],
            key: {
                A: `minecraft:glass`,
                B: `minecraft:beehive`,
                C: `#c:gears/compressed_iron`,
                D: `modern_industrialization:steel_machine_casing`,
                E: '#modern_industrialization:fluid_pipes'
            },
            id: `${id_prefix}steel_honey_extractor`
        },
        {
            output: `extended_industrialization:electric_honey_extractor`,
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: `minecraft:glass`,
                B: `minecraft:beehive`,
                C: `#c:gears/dark_steel`,
                D: `modern_industrialization:steel_machine_casing`,
                E: 'modern_industrialization:large_motor',
                F: 'enigmatica:pulsating_mechanism'
            },
            id: `${id_prefix}electric_honey_extractor`
        },
        {
            output: `extended_industrialization:steel_canning_machine`,
            pattern: ['ABA', 'CDC', 'EEE'],
            key: {
                A: `minecraft:glass`,
                B: `create:spout`,
                C: `#c:gears/compressed_iron`,
                D: `modern_industrialization:steel_machine_casing`,
                E: '#modern_industrialization:fluid_pipes'
            },
            id: `${id_prefix}steel_canning_machine`
        },
        {
            output: 'extended_industrialization:electric_canning_machine',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'minecraft:glass',
                B: 'create:spout',
                C: '#c:gears/dark_steel',
                D: 'modern_industrialization:steel_machine_casing',
                E: 'modern_industrialization:large_motor',
                F: 'enigmatica:pulsating_mechanism'
            },
            id: `${id_prefix}electric_canning_machine`
        },
        {
            output: `extended_industrialization:large_configurable_chest`,
            pattern: ['A', 'B', 'A'],
            key: {
                A: `modern_industrialization:configurable_chest`,
                B: `minecraft:slime_ball`
            },
            id: `${id_prefix}large_configurable_chest`
        },
        {
            output: 'extended_industrialization:electric_composter',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'minecraft:glass',
                B: 'theurgy:digestion_vat',
                C: '#c:gears/dark_steel',
                D: 'modern_industrialization:steel_machine_casing',
                E: 'modern_industrialization:large_motor',
                F: 'enigmatica:pulsating_mechanism'
            },
            id: `${id_prefix}electric_composter`
        },
        {
            output: 'extended_industrialization:robot_auto_feeder',
            pattern: [' A ', 'ABA', 'CDC'],
            key: {
                A: '#c:plates/copper',
                B: 'modern_industrialization:robot_arm',
                C: 'oritech:basic_battery',
                D: 'enderio:z_logic_controller'
            },
            id: `${id_prefix}robot_auto_feeder`
        },
        {
            output: 'extended_industrialization:polished_silver_machine_casing',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#c:plates/silver',
                B: 'enderio:ensouled_chassis'
            },
            id: `${id_prefix}polished_silver_machine_casing`
        },
        {
            output: 'extended_industrialization:tesla_coil',
            pattern: [' A ', 'BCB', 'DED'],
            key: {
                A: 'extended_industrialization:silver_tesla_top_load',
                B: 'modern_industrialization:copper_coil',
                C: 'modern_industrialization:steel_machine_casing',
                D: '#c:plates/silver',
                E: 'enigmatica:pulsating_mechanism'
            },
            id: `${id_prefix}tesla_coil`
        },
        {
            output: 'extended_industrialization:tesla_receiver',
            pattern: [' A ', 'BCB', 'DED'],
            key: {
                A: 'extended_industrialization:silver_tesla_top_load',
                B: '#c:plates/silver',
                C: 'modern_industrialization:steel_machine_casing',
                D: 'modern_industrialization:copper_coil',
                E: 'enigmatica:pulsating_mechanism'
            },
            id: `${id_prefix}tesla_receiver`
        },
        {
            output: 'extended_industrialization:tesla_tower',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'extended_industrialization:polished_silver_machine_casing',
                B: 'enigmatica:tempestuous_mechanism',
                C: 'modern_industrialization:clean_stainless_steel_machine_casing',
                D: 'extended_industrialization:tesla_coil'
            },
            id: `${id_prefix}tesla_tower`
        },
        {
            output: 'extended_industrialization:tesla_calibrator',
            pattern: ['ABA', 'ACA'],
            key: {
                A: '#c:plates/silver',
                B: 'create:transmitter',
                C: 'extended_industrialization:machine_config_card'
            },
            id: `${id_prefix}tesla_calibrator`
        },
        {
            output: 'extended_industrialization:tesla_handheld_receiver',
            pattern: ['A  ', 'BCD', 'DDD'],
            key: {
                A: 'extended_industrialization:silver_tesla_top_load',
                B: 'modern_industrialization:copper_coil',
                C: 'modern_industrialization:steel_machine_casing',
                D: '#c:plates/silver'
            },
            id: `${id_prefix}tesla_handheld_receiver`
        },
        {
            output: 'extended_industrialization:tesla_particle_generator',
            pattern: ['A', 'B'],
            key: {
                A: 'extended_industrialization:silver_tesla_top_load',
                B: 'enderio:zombie_electrode'
            },
            id: `${id_prefix}tesla_particle_generator`
        },

        {
            output: 'extended_industrialization:silk_touch_module',
            pattern: [' AA', 'BCA', 'BB '],
            key: {
                A: '#c:gems/empowered_emeradic',
                B: '#c:gems/empowered_diamatine',
                C: 'modern_industrialization:advanced_upgrade'
            },
            id: `${id_prefix}silk_touch_module`
        },
        {
            output: 'extended_industrialization:looting_module',
            pattern: [' AA', 'BCA', 'BB '],
            key: {
                A: '#c:gems/empowered_palis',
                B: '#c:gems/empowered_diamatine',
                C: 'modern_industrialization:advanced_upgrade'
            },
            id: `${id_prefix}looting_module`
        },
        {
            output: 'extended_industrialization:machine_chainer_relay',
            pattern: ['AAA', 'BCD', 'AAA'],
            key: {
                A: '#c:plates/iron',
                B: '#modern_industrialization:item_pipes',
                C: 'modern_industrialization:energetic_coil',
                D: '#modern_industrialization:fluid_pipes'
            },
            id: `${id_prefix}machine_chainer_relay`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
