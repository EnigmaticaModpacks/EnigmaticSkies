ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/shaped/';

    const recipes = [
        {
            output: `modern_industrialization:bronze_machine_casing`,
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: `modern_industrialization:andesite_alloy_large_plate`,
                B: '#c:gears/copper',
                C: 'enderio:skeletal_contractor'
            },
            id: `${id_prefix}bronze_machine_casing`
        },
        {
            output: `modern_industrialization:bronze_machine_casing_pipe`,
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'ppfluids:fluid_pipe',
                B: `modern_industrialization:bronze_machine_casing`
            },
            id: `${id_prefix}bronze_machine_casing_pipe`
        },
        {
            output: `modern_industrialization:bronze_compressor`,
            pattern: ['ABA', 'CDC', 'EEE'],
            key: {
                A: `#c:ingots/copper`,
                B: `minecraft:piston`,
                C: `#c:gears/copper`,
                D: 'modern_industrialization:bronze_machine_casing',
                E: `ppfluids:fluid_pipe`
            },
            id: `${id_prefix}bronze_compressor`
        },
        {
            output: `modern_industrialization:bronze_mixer`,
            pattern: ['BCB', 'ADA', 'EEE'],
            key: {
                A: '#c:gears/copper',
                B: '#c:glass_blocks',
                C: 'create:propeller',
                D: 'modern_industrialization:bronze_machine_casing',
                E: `ppfluids:fluid_pipe`
            },
            id: `${id_prefix}bronze_mixer`
        },
        {
            output: `modern_industrialization:bronze_cutting_machine`,
            pattern: ['BAB', 'CDC', 'EEE'],
            key: {
                A: '#c:gems/diamond',
                B: '#c:glass_blocks',
                C: '#c:gears/copper',
                D: 'modern_industrialization:bronze_machine_casing',
                E: `ppfluids:fluid_pipe`
            },
            id: `${id_prefix}bronze_cutting_machine`
        },
        {
            output: `modern_industrialization:bronze_macerator`,
            pattern: ['BCB', 'CDC', 'EEE'],
            key: {
                B: '#c:gems/diamond',
                C: '#c:gears/copper',
                D: 'modern_industrialization:bronze_machine_casing',
                E: `ppfluids:fluid_pipe`
            },
            id: `${id_prefix}bronze_macerator`
        },
        {
            output: `modern_industrialization:bronze_centrifuge`,
            pattern: ['BAB', 'CDC', 'EEE'],
            key: {
                A: `create:mechanical_pump`,
                B: '#c:glass_blocks',
                C: '#c:gears/copper',
                D: 'modern_industrialization:bronze_machine_casing',
                E: `ppfluids:fluid_pipe`
            },
            id: `${id_prefix}bronze_centrifuge`
        },

        {
            output: `modern_industrialization:bronze_plated_bricks`,
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#c:nuggets/iron',
                B: `#c:plates/andesite_alloy`,
                C: 'modern_industrialization:fire_clay_bricks'
            },
            id: `${id_prefix}bronze_plated_bricks`
        },
        {
            output: `modern_industrialization:large_steam_boiler`,
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: `modern_industrialization:bronze_plated_bricks`,
                B: 'create:precision_mechanism',
                C: 'starbunclemania:fluid_jar'
            },
            id: `${id_prefix}large_steam_boiler`
        },
        {
            output: `modern_industrialization:motor`,
            pattern: [' A ', 'BCB', ' A '],
            key: {
                A: 'create:shaft',
                B: 'modern_industrialization:steel_large_plate',
                C: 'modern_industrialization:conductive_coil'
            },
            id: `${id_prefix}motor`
        },

        {
            output: `modern_industrialization:lv_steam_turbine`,
            pattern: ['AAA', 'CDC', 'EBE'],
            key: {
                A: `ppfluids:fluid_pipe`,
                B: 'modern_industrialization:copper_cable',
                C: 'create:propeller',
                D: 'modern_industrialization:bronze_machine_casing',
                E: 'create:precision_mechanism'
            },
            id: `${id_prefix}lv_steam_turbine`
        },
        {
            output: `modern_industrialization:mv_steam_turbine`,
            pattern: ['AAA', 'CDC', 'EBE'],
            key: {
                A: '#modern_industrialization:fluid_pipes',
                B: 'modern_industrialization:conductive_cable',
                C: 'pneumaticcraft:turbine_rotor',
                D: 'modern_industrialization:steel_machine_casing',
                E: 'modern_industrialization:motor'
            },
            id: `${id_prefix}mv_steam_turbine`
        },
        {
            output: 'modern_industrialization:steam_kiln',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'modern_industrialization:fire_clay_bricks',
                B: 'minecraft:furnace'
            },
            id: `${id_prefix}steam_kiln`
        },
        {
            output: 'modern_industrialization:electric_kiln',
            pattern: ['CAC', 'ABA', 'CAC'],
            key: {
                A: 'modern_industrialization:heatproof_machine_casing',
                B: 'modern_industrialization:steam_kiln',
                C: 'modern_industrialization:conductive_coil'
            },
            id: `${id_prefix}electric_kiln`
        },
        {
            output: 'modern_industrialization:industrial_cauldron',
            pattern: ['CAC', 'ABA', 'CAC'],
            key: {
                A: 'modern_industrialization:bronze_machine_casing',
                B: 'farmersdelight:cooking_pot',
                C: 'modern_industrialization:conductive_coil'
            },
            id: `${id_prefix}industrial_cauldron`
        },
        {
            output: `modern_industrialization:fire_clay_brick_fluid_input_hatch`,
            pattern: ['B', 'A'],
            key: {
                A: 'modern_industrialization:fire_clay_bricks',
                B: 'aether:skyroot_bucket'
            },
            id: `${id_prefix}fire_clay_brick_fluid_input_hatch`
        },
        {
            output: `modern_industrialization:fire_clay_brick_fluid_input_hatch`,
            pattern: ['A'],
            key: {
                A: 'modern_industrialization:fire_clay_brick_fluid_output_hatch'
            },
            id: `${id_prefix}fire_clay_brick_fluid_input_hatch_from_output`
        },
        {
            output: `modern_industrialization:fire_clay_brick_fluid_output_hatch`,
            pattern: ['A', 'B'],
            key: {
                A: 'modern_industrialization:fire_clay_bricks',
                B: 'aether:skyroot_bucket'
            },
            id: `${id_prefix}fire_clay_brick_fluid_output_hatch`
        },
        {
            output: `modern_industrialization:fire_clay_brick_fluid_output_hatch`,
            pattern: ['A'],
            key: {
                A: 'modern_industrialization:fire_clay_brick_fluid_input_hatch'
            },
            id: `${id_prefix}fire_clay_brick_fluid_output_hatch_from_input`
        },

        {
            output: `modern_industrialization:fire_clay_brick_item_input_hatch`,
            pattern: ['B', 'A'],
            key: {
                A: 'modern_industrialization:fire_clay_bricks',
                B: 'aether:skyroot_trapdoor'
            },
            id: `${id_prefix}fire_clay_brick_item_input_hatch`
        },
        {
            output: `modern_industrialization:fire_clay_brick_item_input_hatch`,
            pattern: ['A'],
            key: {
                A: 'modern_industrialization:fire_clay_brick_item_output_hatch'
            },
            id: `${id_prefix}fire_clay_brick_item_input_hatch_from_output`
        },
        {
            output: `modern_industrialization:fire_clay_brick_item_output_hatch`,
            pattern: ['A', 'B'],
            key: {
                A: 'modern_industrialization:fire_clay_bricks',
                B: 'aether:skyroot_trapdoor'
            },
            id: `${id_prefix}fire_clay_brick_item_output_hatch`
        },
        {
            output: `modern_industrialization:fire_clay_brick_item_output_hatch`,
            pattern: ['A'],
            key: {
                A: 'modern_industrialization:fire_clay_brick_item_input_hatch'
            },
            id: `${id_prefix}fire_clay_brick_item_output_hatch_from_input`
        },
        {
            output: `modern_industrialization:redstone_control_module`,
            pattern: [' A ', 'BCB'],
            key: {
                A: 'minecraft:redstone_torch',
                B: '#c:ingots/redstone_alloy',
                C: 'naturesaura:infused_slab'
            },
            id: `${id_prefix}redstone_control_module`
        },
        {
            output: `modern_industrialization:robot_arm`,
            pattern: ['AAB', 'AC ', 'DC '],
            key: {
                A: `#c:plates/steel`,
                B: `create:brass_hand`,
                C: 'malum:imitation_flesh',
                D: 'enderio:skeletal_contractor'
            },
            id: `${id_prefix}robot_arm`
        },
        {
            output: `modern_industrialization:piston`,
            pattern: [' CA', 'CAB', 'AD '],
            key: {
                A: `#c:plates/steel`,
                B: `create:brass_hand`,
                C: 'malum:imitation_flesh',
                D: 'enderio:skeletal_contractor'
            },
            id: `${id_prefix}piston`
        },
        {
            output: `modern_industrialization:iridium_large_plate`,
            pattern: ['AA', 'AA'],
            key: {
                A: `#c:plates/iridium`
            },
            id: `${id_prefix}iridium_large_plate`
        },
        {
            output: `modern_industrialization:andesite_alloy_large_plate`,
            pattern: ['AA', 'AA'],
            key: {
                A: `#c:plates/andesite_alloy`
            },
            id: `${id_prefix}andesite_alloy_large_plate`
        },
        {
            output: `modern_industrialization:sky_large_plate`,
            pattern: ['AA', 'AA'],
            key: {
                A: `#c:plates/sky`
            },
            id: `${id_prefix}sky_large_plate`
        },
        {
            output: `modern_industrialization:bronze_furnace`,
            pattern: ['AAA', 'ABA', 'CCC'],
            key: {
                A: `#c:plates/andesite_alloy`,
                B: 'minecraft:furnace',
                C: 'modern_industrialization:fire_clay_bricks'
            },
            id: `${id_prefix}bronze_furnace`
        },
        {
            output: `modern_industrialization:bronze_alluvial_trommel`,
            pattern: ['BAB', 'CDC', 'EEE'],
            key: {
                A: `create:nozzle`,
                B: '#c:glass_blocks',
                C: '#c:gears/copper',
                D: 'modern_industrialization:bronze_machine_casing',
                E: `ppfluids:fluid_pipe`
            },
            id: `${id_prefix}bronze_alluvial_trommel`
        },
        {
            output: `2x modern_industrialization:steel_upgrade`,
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: `#c:rods/steel`,
                B: 'pneumaticcraft:turbine_rotor',
                C: '#c:gears/compressed_iron',
                D: 'modern_industrialization:steel_machine_casing',
                E: '#modern_industrialization:fluid_pipes',
                F: 'modern_industrialization:fire_clay_bricks'
            },
            id: `${id_prefix}steel_upgrade`
        },
        {
            output: `modern_industrialization:wrench`,
            pattern: ['A A', ' A ', ' A '],
            key: {
                A: `#c:plates/andesite_alloy`
            },
            id: `${id_prefix}wrench`
        },
        {
            output: 'modern_industrialization:steam_alembic',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'modern_industrialization:bronze_machine_casing_pipe',
                B: '#c:storage_blocks/ambrosium',
                C: 'create:fluid_tank',
                D: 'modern_industrialization:bronze_machine_casing',
                E: 'create:basin'
            },
            id: `${id_prefix}steam_alembic`
        },
        {
            output: 'modern_industrialization:electric_alembic',
            pattern: ['CAC', 'ABA', 'CAC'],
            key: {
                A: 'modern_industrialization:heatproof_machine_casing',
                B: 'modern_industrialization:steam_alembic',
                C: 'modern_industrialization:conductive_coil'
            },
            id: `${id_prefix}electric_alembic`
        },
        {
            output: 'modern_industrialization:small_heat_exchanger',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'modern_industrialization:advanced_pump',
                B: 'pneumaticcraft:heat_sink',
                C: 'modern_industrialization:stainless_steel_large_plate'
            },
            id: `${id_prefix}small_heat_exchanger`
        },
        {
            output: '3x modern_industrialization:fluid_pipe',
            pattern: ['ABC', 'BCB', 'CBA'],
            key: {
                A: 'enderio:conduit_binder',
                B: 'ae2:quartz_glass',
                C: 'ppfluids:fluid_pipe'
            },
            id: `${id_prefix}fluid_pipe`
        },
        {
            output: '3x modern_industrialization:item_pipe',
            pattern: ['ABC', 'BCB', 'CBA'],
            key: {
                A: 'enderio:conduit_binder',
                B: '#c:nuggets/pulsating_alloy',
                C: 'prettypipes:pipe'
            },
            id: `${id_prefix}item_pipe`
        },
        {
            output: '2x modern_industrialization:basic_upgrade',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'modern_industrialization:andesite_alloy_large_plate',
                B: 'prettypipes:low_speed_module',
                C: 'modern_industrialization:lubricant_bucket'
            },
            id: `${id_prefix}basic_upgrade`
        },
        {
            output: '2x modern_industrialization:advanced_upgrade',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'modern_industrialization:basic_upgrade',
                B: 'prettypipes:medium_speed_module',
                C: 'modern_industrialization:lubricant_bucket'
            },
            id: `${id_prefix}advanced_upgrade`
        },
        {
            output: '2x modern_industrialization:turbo_upgrade',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'modern_industrialization:stainless_steel_large_plate',
                B: 'prettypipes:medium_speed_module',
                C: 'modern_industrialization:lubricant_bucket'
            },
            id: `${id_prefix}turbo_upgrade`
        },
        {
            output: '2x modern_industrialization:highly_advanced_upgrade',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'modern_industrialization:turbo_upgrade',
                B: 'prettypipes:high_speed_module',
                C: 'modern_industrialization:lubricant_bucket'
            },
            id: `${id_prefix}highly_advanced_upgrade`
        },
        {
            output: 'modern_industrialization:diesel_jetpack',
            pattern: ['ABA', 'CDC', 'EBE'],
            key: {
                A: 'starbunclemania:fluid_jar',
                B: '#c:plates/andesite_alloy',
                C: 'pneumaticcraft:cannon_barrel',
                D: 'minecraft:elytra',
                E: '#c:essences/fire'
            },
            id: `${id_prefix}diesel_jetpack`
        },
        {
            output: 'modern_industrialization:electric_furnace',
            pattern: ['AAA', 'ABA', 'CDC'],
            key: {
                A: 'modern_industrialization:heatproof_machine_casing',
                B: 'modern_industrialization:steel_machine_casing',
                C: 'modern_industrialization:copper_coil',
                D: 'enigmatica:pulsating_mechanism'
            },
            id: `${id_prefix}electric_furnace`
        },
        {
            output: 'modern_industrialization:electric_compressor',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'minecraft:glass',
                B: 'modern_industrialization:piston',
                C: '#c:gears/dark_steel',
                D: 'modern_industrialization:steel_machine_casing',
                E: 'modern_industrialization:large_motor',
                F: 'enigmatica:pulsating_mechanism'
            },
            id: `${id_prefix}electric_compressor`
        },
        {
            output: 'modern_industrialization:electric_cutting_machine',
            pattern: ['ABA', 'BCB', 'DED'],
            key: {
                A: '#c:plates/steel',
                B: '#c:gears/dark_steel',
                C: 'modern_industrialization:steel_machine_casing',
                D: 'modern_industrialization:large_motor',
                E: 'enigmatica:pulsating_mechanism'
            },
            id: `${id_prefix}electric_cutting_machine`
        },
        {
            output: 'modern_industrialization:electric_macerator',
            pattern: ['ABA', 'BCB', 'DED'],
            key: {
                A: '#c:gems/diamond',
                B: '#c:gears/dark_steel',
                C: 'modern_industrialization:steel_machine_casing',
                D: 'modern_industrialization:large_motor',
                E: 'enigmatica:pulsating_mechanism'
            },
            id: `${id_prefix}electric_macerator`
        },
        {
            output: 'modern_industrialization:electric_mixer',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'minecraft:glass',
                B: 'pneumaticcraft:turbine_rotor',
                C: '#c:gears/dark_steel',
                D: 'modern_industrialization:steel_machine_casing',
                E: 'modern_industrialization:large_motor',
                F: 'enigmatica:pulsating_mechanism'
            },
            id: `${id_prefix}electric_mixer`
        },
        {
            output: 'modern_industrialization:centrifuge',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'minecraft:glass',
                B: 'modern_industrialization:pump',
                C: '#c:gears/dark_steel',
                D: 'modern_industrialization:steel_machine_casing',
                E: 'modern_industrialization:large_motor',
                F: 'enigmatica:pulsating_mechanism'
            },
            id: `${id_prefix}centrifuge`
        },
        {
            output: 'modern_industrialization:electric_alluvial_trommel',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'minecraft:glass',
                B: 'create:nozzle',
                C: '#c:gears/dark_steel',
                D: 'modern_industrialization:steel_machine_casing',
                E: 'modern_industrialization:large_motor',
                F: 'enigmatica:pulsating_mechanism'
            },
            id: `${id_prefix}electric_alluvial_trommel`
        },
        {
            output: '2x modern_industrialization:fusion_chamber',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'modern_industrialization:superconductor_coil',
                B: 'modern_industrialization:small_heat_exchanger',
                C: 'modern_industrialization:sky_large_plate',
                D: 'modern_industrialization:quantum_machine_casing'
            },
            id: `${id_prefix}fusion_chamber`
        },
        {
            output: 'modern_industrialization:plasma_handling_iridium_machine_casing',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'modern_industrialization:superconductor_coil',
                B: 'modern_industrialization:iridium_large_plate',
                C: 'modern_industrialization:sky_machine_casing'
            },
            id: `${id_prefix}plasma_handling_iridium_machine_casing`
        },
        {
            output: 'modern_industrialization:large_tank_hatch',
            pattern: ['A', 'B', 'C'],
            key: {
                A: 'pneumaticcraft:large_tank',
                B: 'modern_industrialization:pump',
                C: 'modern_industrialization:steel_machine_casing'
            },
            id: `${id_prefix}large_tank_hatch`
        },
        {
            output: 'modern_industrialization:large_tank',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'pneumaticcraft:large_tank',
                B: 'modern_industrialization:pump',
                C: 'pneumaticcraft:turbine_rotor',
                D: 'modern_industrialization:steel_machine_casing'
            },
            id: `${id_prefix}large_tank`
        },
        {
            output: 'modern_industrialization:trash_can',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#c:gems/void',
                B: '#c:plates/andesite_alloy',
                C: 'theurgy:crystallized_lava'
            },
            id: `${id_prefix}trash_can`
        }
    ];

    const electrical_components = [
        {
            material: 'copper',
            tier: 'lv',
            casing: 'modern_industrialization:bronze_machine_casing',
            hull: 'modern_industrialization:bronze_machine_casing',
            magnet: 'modern_industrialization:iron_rod_magnetic'
        },
        {
            material: 'conductive',
            tier: 'mv',
            casing: 'modern_industrialization:steel_machine_casing',
            hull: 'modern_industrialization:advanced_machine_hull',
            covering: `#c:plates/andesite_alloy`,
            mechanism: 'enigmatica:pulsating_mechanism',
            magnet: 'modern_industrialization:iron_rod_magnetic'
        },
        {
            material: 'energetic',
            tier: 'hv',
            casing: 'modern_industrialization:clean_stainless_steel_machine_casing',
            hull: 'modern_industrialization:turbo_machine_hull',
            covering: `#c:plates/andesite_alloy`,
            mechanism: 'enigmatica:pulsating_mechanism',
            magnet: 'modern_industrialization:steel_rod_magnetic'
        },
        {
            material: 'vibrant',
            tier: 'ev',
            casing: 'modern_industrialization:sky_machine_casing',
            hull: 'modern_industrialization:highly_advanced_machine_hull',
            covering: 'pneumaticcraft:plastic',
            mechanism: 'enigmatica:tempestuous_mechanism',
            magnet: 'modern_industrialization:stainless_steel_rod_magnetic'
        },
        {
            material: 'superconductor',
            tier: 'superconductor',
            casing: 'modern_industrialization:quantum_machine_casing',
            hull: 'modern_industrialization:quantum_machine_hull',
            covering: 'pneumaticcraft:plastic',
            mechanism: 'enigmatica:tempestuous_mechanism',
            magnet: 'modern_industrialization:stainless_steel_rod_magnetic'
        }
    ];

    electrical_components.forEach((component, i) => {
        if (component.covering) {
            recipes.push({
                output: component.hull,
                pattern: ['AAA', 'CBC', 'ADA'],
                key: {
                    A: component.covering,
                    B: component.casing,
                    C: `modern_industrialization:${component.material}_cable`,
                    D: component.mechanism
                },
                id: `${id_prefix}${component.tier}_hull`
            });
        }
        recipes.push(
            {
                output: `modern_industrialization:${component.material}_coil`,
                pattern: ['AAA', 'ABA', 'AAA'],
                key: {
                    A: `modern_industrialization:${component.material}_cable`,
                    B: component.magnet
                },
                id: `${id_prefix}${component.material}_coil`
            },
            {
                output: `modern_industrialization:${component.tier}_energy_input_hatch`,
                pattern: ['A', 'B'],
                key: {
                    A: `modern_industrialization:${component.material}_cable`,
                    B: component.hull
                },
                id: `${id_prefix}${component.tier}_energy_input_hatch`
            },
            {
                output: `modern_industrialization:${component.tier}_energy_output_hatch`,
                pattern: ['B', 'A'],
                key: {
                    A: `modern_industrialization:${component.material}_cable`,
                    B: component.hull
                },
                id: `${id_prefix}${component.tier}_energy_output_hatch`
            },
            {
                output: `modern_industrialization:${component.tier}_energy_input_hatch`,
                pattern: ['A'],
                key: {
                    A: `modern_industrialization:${component.tier}_energy_output_hatch`
                },
                id: `${id_prefix}${component.tier}_energy_input_hatch_conversion`
            },
            {
                output: `modern_industrialization:${component.tier}_energy_output_hatch`,
                pattern: ['A'],
                key: {
                    A: `modern_industrialization:${component.tier}_energy_input_hatch`
                },
                id: `${id_prefix}${component.tier}_energy_output_hatch_conversion`
            }
        );

        if (i < electrical_components.length - 1) {
            let next_component = electrical_components[i + 1];
            recipes.push(
                {
                    output: `modern_industrialization:${component.tier}_${next_component.tier}_transformer`,
                    pattern: [' A ', 'BCD', ' A '],
                    key: {
                        A: 'pneumaticcraft:heat_sink',
                        B: `modern_industrialization:${component.material}_coil`,
                        C: component.casing,
                        D: `modern_industrialization:${next_component.material}_coil`
                    },
                    id: `${id_prefix}${component.tier}_${next_component.tier}_transformer`
                },
                {
                    output: `modern_industrialization:${next_component.tier}_${component.tier}_transformer`,
                    pattern: [' A ', 'DCB', ' A '],
                    key: {
                        A: 'pneumaticcraft:heat_sink',
                        B: `modern_industrialization:${component.material}_coil`,
                        C: component.casing,
                        D: `modern_industrialization:${next_component.material}_coil`
                    },
                    id: `${id_prefix}${next_component.tier}_${component.tier}_transformer`
                },
                {
                    output: `modern_industrialization:${next_component.tier}_${component.tier}_transformer`,
                    pattern: ['A'],
                    key: {
                        A: `modern_industrialization:${component.tier}_${next_component.tier}_transformer`
                    },
                    id: `${id_prefix}${next_component.tier}_${component.tier}_transformer_conversion`
                },
                {
                    output: `modern_industrialization:${component.tier}_${next_component.tier}_transformer`,
                    pattern: ['A'],
                    key: {
                        A: `modern_industrialization:${next_component.tier}_${component.tier}_transformer`
                    },
                    id: `${id_prefix}${component.tier}_${next_component.tier}_transformer_conversion`
                }
            );
        }
    });

    const gears = ['copper', 'gold', 'iron', 'stainless_steel', 'steel'];

    gears.forEach((material) => {
        recipes.push({
            output: `modern_industrialization:${material}_gear`,
            pattern: [' A ', 'ABA', ' A '],
            key: {
                A: `#c:ingots/${material}`,
                B: '#c:gems/ruby'
            },
            id: `${id_prefix}${material}_gear`
        });
    });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
