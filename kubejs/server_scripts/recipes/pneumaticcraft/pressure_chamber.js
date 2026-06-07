ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:pneumaticcraft/pressure_chamber/';

    const recipes = [
        {
            results: [{ id: 'minecraft:diamond', count: 1 }],
            inputs: [{ tag: 'c:storage_blocks/coal', count: 1 }],
            pressure: 4.0,
            id: `pneumaticcraft:pressure_chamber/coal_to_diamond`
        },
        {
            results: [{ id: 'pneumaticcraft:compressed_iron_block', count: 1 }],
            inputs: [{ tag: 'c:storage_blocks/ferricore', count: 1 }],
            pressure: 2.0,
            id: `pneumaticcraft:pressure_chamber/compressed_iron_block`
        },
        {
            results: [{ id: 'pneumaticcraft:ingot_iron_compressed', count: 1 }],
            inputs: [{ tag: 'c:ingots/ferricore', count: 1 }],
            pressure: 2.0,
            id: `pneumaticcraft:pressure_chamber/compressed_iron_ingot`
        },
        {
            results: [{ id: 'modularrouters:blank_module', count: 3 }],
            inputs: [
                { item: 'prettypipes:blank_module', count: 1 },
                { tag: 'c:gems/empowered_restonia', count: 3 },
                { item: 'modern_industrialization:copper_cable', count: 3 },
                { item: 'enderio:skeletal_contractor', count: 1 }
            ],
            pressure: 1.0,
            id: `${id_prefix}blank_module`
        },
        {
            results: [{ id: 'modularrouters:blank_upgrade', count: 3 }],
            inputs: [
                { item: 'prettypipes:blank_module', count: 1 },
                { tag: 'c:gems/empowered_palis', count: 3 },
                { item: 'modern_industrialization:copper_cable', count: 3 },
                { item: 'enderio:skeletal_contractor', count: 1 }
            ],
            pressure: 1.0,
            id: `${id_prefix}blank_upgrade`
        },
        {
            results: [{ id: 'minecraft:powder_snow_bucket', count: 1 }],
            inputs: [
                { item: 'minecraft:snow_block', count: 1 },
                { tag: 'c:buckets/empty', count: 1 }
            ],
            pressure: 1.0,
            id: `${id_prefix}powder_snow_bucket`
        },
        {
            results: [{ id: 'naturesaura:vacuum_bottle', count: 1 }],
            inputs: [{ item: 'naturesaura:bottle_two_the_rebottling', count: 1 }],
            pressure: -0.75,
            id: `${id_prefix}vacuum_bottle`
        },
        {
            results: [
                { id: 'ae2:formation_core', count: 2 },
                { id: 'minecraft:glass_bottle', count: 1 }
            ],
            inputs: [
                { item: 'arsdelight:neutralized_frostaya_jam', count: 1 },
                { item: 'enigmatica:mimic_meat', count: 1 },
                { item: 'malum:anomalous_design', count: 1 }
            ],
            pressure: 4.0,
            id: `${id_prefix}formation_core`
        },
        {
            results: [
                { id: 'ae2:annihilation_core', count: 2 },
                { id: 'minecraft:glass_bottle', count: 1 }
            ],
            inputs: [
                { item: 'arsdelight:neutralized_bombegrante_jam', count: 1 },
                { item: 'enigmatica:mimic_meat', count: 1 },
                { item: 'malum:anomalous_design', count: 1 }
            ],
            pressure: 4.0,
            id: `${id_prefix}annihilation_core`
        },
        {
            results: [
                { id: 'industrialforegoingsouls:soul_network_pipe', count: 3 },
                { id: 'minecraft:glass_bottle', count: 1 }
            ],
            inputs: [
                { item: 'arsdelight:activated_bastion_jam', count: 1 },
                { item: 'prettypipes:pipe', count: 3 },
                { item: 'minecraft:echo_shard', count: 1 }
            ],
            pressure: 4.0,
            id: `${id_prefix}soul_network_pipe`
        },
        {
            results: [
                { id: 'replication:matter_network_pipe', count: 3 },
                { id: 'minecraft:glass_bottle', count: 1 }
            ],
            inputs: [
                { item: 'arsdelight:activated_mendosteen_jam', count: 1 },
                { item: 'enigmatica:mimic_meat', count: 1 },
                { item: 'prettypipes:pipe', count: 3 }
            ],
            pressure: 4.0,
            id: `${id_prefix}matter_network_pipe`
        },
        {
            results: [
                { id: 'replication:replica_ingot', count: 1 },
                { id: 'minecraft:glass_bottle', count: 1 }
            ],
            inputs: [
                { tag: 'c:dusts/silicon', count: 1 },
                { tag: 'c:dusts/echo', count: 1 },
                { item: 'enigmatica:mimic_meat', count: 1 },
                { item: 'arsdelight:activated_mendosteen_jam', count: 1 }
            ],
            pressure: 4.0,
            id: `${id_prefix}replica_ingot`
        },
        {
            results: [
                { id: 'replication:replication_terminal', count: 1 },
                { id: 'minecraft:glass_bottle', count: 1 }
            ],
            inputs: [
                { item: 'arsdelight:activated_mendosteen_jam', count: 1 },
                { item: 'supplementaries:crystal_display', count: 1 }
            ],
            pressure: 4.0,
            id: `${id_prefix}replication_terminal`
        },
        {
            results: [{ id: 'oritech:machine_core_2', count: 1 }],
            inputs: [
                { item: 'modern_industrialization:steel_machine_casing', count: 1 },
                { item: 'enderio:pulsating_crystal', count: 3 },
                { tag: 'c:plates/iron', count: 6 }
            ],
            pressure: 4.0,
            id: `${id_prefix}machine_core_2`
        },
        {
            results: [{ id: 'oritech:machine_core_4', count: 1 }],
            inputs: [
                { item: 'oritech:machine_core_2', count: 1 },
                { item: 'oritech:reinforced_carbon_sheet', count: 6 }
            ],
            pressure: 4.0,
            id: `${id_prefix}machine_core_4`
        },
        {
            results: [{ id: 'oritech:machine_core_5', count: 1 }],
            inputs: [
                { item: 'modern_industrialization:clean_stainless_steel_machine_casing', count: 1 },
                { item: 'enderio:weather_crystal', count: 3 },
                { item: 'oritech:reinforced_carbon_sheet', count: 6 }
            ],
            pressure: 4.0,
            id: `${id_prefix}machine_core_5`
        },
        {
            results: [{ id: 'oritech:machine_core_7', count: 1 }],
            inputs: [
                { item: 'oritech:machine_core_5', count: 1 },
                { item: 'modern_industrialization:cooling_cell', count: 6 }
            ],
            pressure: 4.0,
            id: `${id_prefix}machine_core_7`
        },
        {
            results: [{ id: 'modern_industrialization:conductive_cable', count: 6 }],
            inputs: [
                { tag: 'c:ingots/conductive_alloy', count: 3 },
                { item: 'modern_industrialization:rubber_sheet', count: 12 }
            ],
            pressure: 4.0,
            id: `${id_prefix}conductive_cable`
        },
        {
            results: [{ id: 'modern_industrialization:energetic_cable', count: 6 }],
            inputs: [
                { tag: 'c:ingots/energetic_alloy', count: 3 },
                { item: 'modern_industrialization:rubber_sheet', count: 12 }
            ],
            pressure: 4.0,
            id: `${id_prefix}energetic_cable`
        },
        {
            results: [{ id: 'modern_industrialization:vibrant_cable', count: 6 }],
            inputs: [
                { tag: 'c:ingots/vibrant_alloy', count: 3 },
                { item: 'pneumaticcraft:plastic', count: 12 }
            ],
            pressure: 10.0,
            id: `${id_prefix}vibrant_cable`
        },
        {
            results: [{ id: 'modern_industrialization:superconductor_cable', count: 6 }],
            inputs: [
                { tag: 'c:ingots/sky', count: 3 },
                { item: 'pneumaticcraft:plastic', count: 12 },
                { item: 'modern_industrialization:cooling_cell', count: 3 }
            ],
            pressure: 19.0,
            id: `${id_prefix}superconductor_cable`
        },
        {
            results: [{ id: 'pneumaticcraft:transistor', count: 3 }],
            inputs: [
                { item: 'modern_industrialization:conductive_cable', count: 3 },
                { tag: 'c:nuggets/redstone_alloy', count: 3 },
                { tag: 'c:plates/silicon', count: 2 }
            ],
            pressure: 4.0,
            id: `${id_prefix}transistor`
        },
        {
            results: [{ id: 'enderio:basic_capacitor', count: 2 }],
            inputs: [
                { item: 'modern_industrialization:conductive_cable', count: 2 },
                { tag: 'c:dusts/grains_of_infinity', count: 3 },
                { tag: 'c:plates/iron', count: 2 }
            ],
            pressure: 4.0,
            id: `${id_prefix}basic_capacitor`
        },
        {
            results: [{ id: 'enderio:double_layer_capacitor', count: 1 }],
            inputs: [
                { item: 'modern_industrialization:energetic_cable', count: 2 },
                { item: 'enderio:basic_capacitor', count: 2 },
                { tag: 'c:plates/copper', count: 2 }
            ],
            pressure: 4.0,
            id: `${id_prefix}double_layer_capacitor`
        },
        {
            results: [{ id: 'enderio:octadic_capacitor', count: 1 }],
            inputs: [
                { item: 'modern_industrialization:vibrant_cable', count: 2 },
                { item: 'enderio:double_layer_capacitor', count: 2 },
                { tag: 'c:plates/carbon', count: 2 }
            ],
            pressure: 15.0,
            id: `${id_prefix}octadic_capacitor`
        },
        {
            results: [{ id: 'ae2:fluix_pearl', count: 1 }],
            inputs: [
                { item: 'malum:strange_crystal', count: 1 },
                { tag: 'c:dusts/ender_pearl', count: 4 },
                { tag: 'c:dusts/fluix', count: 4 }
            ],
            pressure: 4.0,
            id: `${id_prefix}fluix_pearl`
        },
        {
            results: [{ id: 'pneumaticcraft:turbine_blade', count: 1 }],
            inputs: [
                { tag: 'c:plates/steel', count: 1 },
                { tag: 'c:rods/steel', count: 1 },
                { tag: 'c:gems/empowered_restonia', count: 1 }
            ],
            pressure: 4.0,
            id: `${id_prefix}turbine_blade`
        },
        {
            results: [{ id: 'minecraft:podzol', count: 1 }],
            inputs: [
                { item: 'minecraft:mud', count: 1 },
                { item: 'minecraft:spruce_leaves', count: 16 }
            ],
            pressure: 4.0,
            id: `${id_prefix}podzol`
        },
        {
            results: [{ id: 'minecraft:mycelium', count: 1 }],
            inputs: [
                { item: 'minecraft:mud', count: 1 },
                { tag: 'c:mushrooms', count: 16 }
            ],
            pressure: 4.0,
            id: `${id_prefix}mycelium`
        },
        {
            results: [{ id: 'create:blaze_cake_base', count: 1 }],
            inputs: [
                { tag: 'c:eggs', count: 1 },
                { item: 'minecraft:sugar', count: 1 },
                { item: 'create:cinder_flour', count: 1 }
            ],
            pressure: 4.0,
            id: `${id_prefix}blaze_cake_base`
        },

        {
            results: [{ id: 'modern_industrialization:lv_storage_unit', count: 1 }],
            inputs: [
                { item: 'oritech:flux_gate', count: 1 },
                { item: 'modern_industrialization:bronze_machine_casing', count: 1 },
                { item: 'ae2:cell_component_1k', count: 24 }
            ],
            pressure: 4.0,
            id: `${id_prefix}lv_storage_unit`
        },
        {
            results: [{ id: 'modern_industrialization:mv_storage_unit', count: 1 }],
            inputs: [
                { item: 'enigmatica:pulsating_mechanism', count: 1 },
                { item: 'modern_industrialization:advanced_machine_hull', count: 1 },
                { item: 'ae2:cell_component_4k', count: 24 }
            ],
            pressure: 4.0,
            id: `${id_prefix}mv_storage_unit`
        },
        {
            results: [{ id: 'modern_industrialization:hv_storage_unit', count: 1 }],
            inputs: [
                { item: 'enigmatica:pulsating_mechanism', count: 1 },
                { item: 'modern_industrialization:turbo_machine_hull', count: 1 },
                { item: 'ae2:cell_component_16k', count: 24 }
            ],
            pressure: 4.0,
            id: `${id_prefix}hv_storage_unit`
        },
        {
            results: [{ id: 'modern_industrialization:ev_storage_unit', count: 1 }],
            inputs: [
                { item: 'enigmatica:tempestuous_mechanism', count: 1 },
                { item: 'modern_industrialization:highly_advanced_machine_hull', count: 1 },
                { item: 'ae2:cell_component_64k', count: 24 }
            ],
            pressure: 10.0,
            id: `${id_prefix}ev_storage_unit`
        },
        {
            results: [{ id: 'modern_industrialization:superconductor_storage_unit', count: 1 }],
            inputs: [
                { item: 'enigmatica:tempestuous_mechanism', count: 1 },
                { item: 'modern_industrialization:quantum_machine_hull', count: 1 },
                { item: 'ae2:cell_component_256k', count: 24 }
            ],
            pressure: 19.0,
            id: `${id_prefix}superconductor_storage_unit`
        },
        {
            results: [{ id: 'extended_industrialization:machine_chainer', count: 1 }],
            inputs: [
                { tag: 'modern_industrialization:item_pipes', count: 64 },
                { tag: 'modern_industrialization:fluid_pipes', count: 64 },
                { item: 'modern_industrialization:conductive_cable', count: 64 },
                { item: 'modern_industrialization:advanced_machine_hull', count: 1 },
                { item: 'modern_industrialization:large_motor', count: 2 },
                { item: 'modern_industrialization:pump', count: 2 }
            ],
            pressure: 4.0,
            id: `${id_prefix}machine_chainer`
        },
        {
            results: [{ id: 'extended_industrialization:nano_helmet', count: 1 }],
            inputs: [
                { item: 'justdirethings:eclipsealloy_helmet', count: 1 },
                { tag: 'c:plates/reinforced_carbon', count: 4 },
                { item: 'oritech:advanced_battery', count: 2 },

                { item: 'oritech:heisenberg_compensator', count: 1 }
            ],
            pressure: 19.0,
            id: `${id_prefix}nano_helmet`
        },
        {
            results: [{ id: 'extended_industrialization:nano_chestplate', count: 1 }],
            inputs: [
                { item: 'justdirethings:eclipsealloy_chestplate', count: 1 },
                { tag: 'c:plates/reinforced_carbon', count: 4 },
                { item: 'oritech:advanced_battery', count: 2 },

                { item: 'oritech:heisenberg_compensator', count: 1 }
            ],
            pressure: 19.0,
            id: `${id_prefix}nano_chestplate`
        },
        {
            results: [{ id: 'extended_industrialization:nano_leggings', count: 1 }],
            inputs: [
                { item: 'justdirethings:eclipsealloy_leggings', count: 1 },
                { tag: 'c:plates/reinforced_carbon', count: 4 },
                { item: 'oritech:advanced_battery', count: 2 },

                { item: 'oritech:heisenberg_compensator', count: 1 }
            ],
            pressure: 19.0,
            id: `${id_prefix}nano_leggings`
        },
        {
            results: [{ id: 'extended_industrialization:nano_boots', count: 1 }],
            inputs: [
                { item: 'justdirethings:eclipsealloy_boots', count: 1 },
                { tag: 'c:plates/reinforced_carbon', count: 4 },
                { item: 'oritech:advanced_battery', count: 2 },

                { item: 'oritech:heisenberg_compensator', count: 1 }
            ],
            pressure: 19.0,
            id: `${id_prefix}nano_boots`
        },
        {
            results: [{ id: 'extended_industrialization:nano_saber', count: 1 }],
            inputs: [
                { item: 'justdirethings:eclipsealloy_sword', count: 1 },
                { tag: 'c:plates/reinforced_carbon', count: 4 },
                { item: 'oritech:advanced_battery', count: 2 },

                { item: 'oritech:heisenberg_compensator', count: 1 }
            ],
            pressure: 19.0,
            id: `${id_prefix}nano_saber`
        },
        {
            results: [{ id: 'ae2wtlib:quantum_bridge_card', count: 1 }],
            inputs: [
                { item: 'ae2:quantum_ring', count: 8 },
                { item: 'ae2:quantum_link', count: 1 },
                { item: 'ae2:advanced_card', count: 1 }
            ],
            pressure: 4.0,
            id: `${id_prefix}quantum_bridge_card`
        },
        {
            results: [{ id: 'modern_industrialization:carbon_plate', count: 1 }],
            inputs: [{ tag: 'c:dusts/carbon', count: 1 }],
            pressure: 2.0,
            id: `${id_prefix}carbon_plate`
        },
        {
            results: [{ id: 'aether:blue_aercloud', count: 1 }],
            inputs: [{ item: 'aether:cold_aercloud', count: 1 }],
            pressure: 1.0,
            id: `${id_prefix}blue_aercloud`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = `pneumaticcraft:pressure_chamber`;
        event.custom(recipe).id(recipe.id);
    });
});
