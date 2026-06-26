ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:malum/spirit_infusion/';

    const recipes = [
        {
            result: { id: 'malum:soul_stained_steel_ingot', count: 1 },
            input: { tag: 'c:ingots/steel', count: 1 },
            extraInputs: [{ item: 'enderio:soul_chain', count: 1 }],
            spirits: [
                { type: 'malum:arcane', count: 6 },
                { type: 'malum:wicked', count: 6 }
            ],
            id: `${id_prefix}soul_stained_steel_ingot`
        },
        {
            result: { id: 'malum:living_flesh', count: 8 },
            input: { item: 'minecraft:rotten_flesh', count: 4 },
            extraInputs: [{ item: 'enigmatica:mimic_meat', count: 1 }],
            spirits: [
                { type: 'malum:sacred', count: 8 },
                { type: 'malum:wicked', count: 8 }
            ],
            id: `${id_prefix}living_flesh`
        },
        {
            result: { id: 'malum:imitation_flesh', count: 8 },
            input: { item: 'malum:alchemical_calx', count: 1 },
            extraInputs: [
                { item: 'malum:living_flesh', count: 16 },
                { item: 'oritech:wither_crop_block', count: 8 },
                { item: 'modern_industrialization:rubber_sheet', count: 4 }
            ],
            spirits: [
                { type: 'malum:sacred', count: 32 },
                { type: 'malum:arcane', count: 32 },
                { type: 'malum:aqueous', count: 32 }
            ],
            id: `${id_prefix}imitation_flesh`
        },

        {
            result: { id: 'naturesaura:birth_spirit', count: 4 },
            input: {
                type: 'neoforge:components',
                items: 'naturesaura:aura_bottle',
                components: { 'naturesaura:aura_bottle_data': { aura_type: 'naturesaura:overworld' } }
            },
            extraInputs: [{ tag: 'c:essences/conjuration', count: 1 }],
            spirits: [{ type: 'malum:sacred', count: 4 }],
            id: `${id_prefix}birth_spirit`
        },
        {
            result: { id: 'naturesaura:calling_spirit', count: 4 },
            input: {
                type: 'neoforge:components',
                items: 'naturesaura:aura_bottle',
                components: { 'naturesaura:aura_bottle_data': { aura_type: 'naturesaura:nether' } }
            },
            extraInputs: [{ tag: 'c:essences/conjuration', count: 1 }],
            spirits: [
                { type: 'malum:arcane', count: 2 },
                { type: 'malum:wicked', count: 2 }
            ],
            id: `${id_prefix}calling_spirit`
        },
        {
            result: { id: 'enderio:vibrant_crystal', count: 1 },
            input: { tag: 'c:gems/emerald', count: 1 },
            extraInputs: [{ item: 'malum:paracausal_flame', count: 1 }],
            spirits: [
                { type: 'malum:arcane', count: 32 },
                { type: 'malum:infernal', count: 32 },
                { type: 'malum:earthen', count: 32 }
            ],
            id: `${id_prefix}vibrant_crystal`
        },
        {
            result: { id: 'malum:soulwoven_silk', count: 4 },
            input: { item: 'cold_sweat:goat_fur', count: 8 },
            extraInputs: [{ item: 'ars_nouveau:magebloom_fiber', count: 4 }],
            spirits: [
                { type: 'malum:aerial', count: 8 },
                { type: 'malum:earthen', count: 8 }
            ],
            id: `${id_prefix}soulwoven_silk`
        },
        {
            result: { id: 'handcrafted:witch_trophy', count: 4 },
            input: { item: 'minecraft:clay', count: 8 },
            extraInputs: [
                { tag: 'c:essences/anima', count: 1 },
                { item: 'naturesaura:token_sorrow', count: 1 },
                { item: 'ars_additions:ancient_codex_entry', count: 1 }
            ],
            spirits: [
                { type: 'malum:eldritch', count: 8 },
                { type: 'malum:aqueous', count: 8 },
                { type: 'malum:arcane', count: 8 }
            ],
            id: `${id_prefix}witch_trophy`
        },
        {
            result: { id: 'handcrafted:evoker_trophy', count: 4 },
            input: { item: 'minecraft:clay', count: 8 },
            extraInputs: [
                { tag: 'c:essences/anima', count: 1 },
                { item: 'naturesaura:token_joy', count: 1 },
                { item: 'ars_additions:ancient_codex_entry', count: 1 }
            ],
            spirits: [
                { type: 'malum:eldritch', count: 8 },
                { type: 'malum:aerial', count: 8 },
                { type: 'malum:arcane', count: 8 }
            ],
            id: `${id_prefix}evoker_trophy`
        },
        {
            result: { id: 'handcrafted:pillager_trophy', count: 4 },
            input: { item: 'minecraft:clay', count: 8 },
            extraInputs: [
                { tag: 'c:essences/anima', count: 1 },
                { item: 'naturesaura:token_fear', count: 1 },
                { item: 'ars_additions:ancient_codex_entry', count: 1 }
            ],
            spirits: [
                { type: 'malum:eldritch', count: 8 },
                { type: 'malum:earthen', count: 8 },
                { type: 'malum:arcane', count: 8 }
            ],
            id: `${id_prefix}pillager_trophy`
        },
        {
            result: { id: 'handcrafted:vindicator_trophy', count: 4 },
            input: { item: 'minecraft:clay', count: 8 },
            extraInputs: [
                { tag: 'c:essences/anima', count: 1 },
                { item: 'naturesaura:token_anger', count: 1 },
                { item: 'ars_additions:ancient_codex_entry', count: 1 }
            ],
            spirits: [
                { type: 'malum:eldritch', count: 8 },
                { type: 'malum:infernal', count: 8 },
                { type: 'malum:arcane', count: 8 }
            ],
            id: `${id_prefix}vindicator_trophy`
        },
        {
            result: { id: 'enderio:prescient_crystal', count: 1 },
            input: { item: 'enderio:vibrant_crystal', count: 1 },
            extraInputs: [],
            spirits: [{ type: 'malum:eldritch', count: 42 }],
            id: `${id_prefix}prescient_crystal`
        },
        {
            result: { id: 'enderio:ender_crystal', count: 1 },
            input: { item: 'enderio:pulsating_crystal', count: 1 },
            extraInputs: [
                { item: 'enderio:ender_crystal_powder', count: 4 },
                { item: 'occultism:crushed_end_stone', count: 4 }
            ],
            spirits: [
                { type: 'malum:aerial', count: 8 },
                { type: 'malum:eldritch', count: 8 },
                { type: 'malum:arcane', count: 8 }
            ],
            id: `${id_prefix}ender_crystal`
        },
        {
            result: { id: 'malum:iridescent_ether', count: 1 },
            input: { item: 'malum:ether', count: 1 },
            extraInputs: [{ item: 'minecraft:prismarine_crystals', count: 1 }],
            spirits: [{ type: 'malum:sacred', count: 2 }],
            id: `${id_prefix}iridescent_ether`
        },
        {
            result: { id: 'malum:paracausal_flame', count: 1 },
            input: { item: 'malum:ether', count: 1 },
            extraInputs: [
                { item: 'oritech:enderic_compound', count: 1 },
                { item: 'malum:hex_ash', count: 8 }
            ],
            spirits: [
                { type: 'malum:arcane', count: 8 },
                { type: 'malum:eldritch', count: 8 }
            ],
            id: `${id_prefix}paracausal_flame`
        },
        {
            result: { id: 'malum:zephyr_impetus', count: 1 },
            input: { item: 'malum:alchemical_impetus', count: 1 },
            extraInputs: [
                { tag: 'c:gems/celestigem', count: 1 },
                { item: 'malum:wind_nucleus', count: 4 },
                { item: 'minecraft:heavy_core', count: 1 }
            ],
            spirits: [
                { type: 'malum:aerial', count: 16 },
                { type: 'malum:arcane', count: 16 }
            ],
            id: `${id_prefix}zephyr_impetus`
        },
        {
            result: { id: 'malum:alchemical_impetus', count: 1 },
            input: { item: 'malum:alchemical_calx', count: 4 },
            extraInputs: [
                { tag: 'c:gems/soulstone', count: 4 },
                { tag: 'c:essences/hex_ash', count: 2 }
            ],
            spirits: [
                { type: 'malum:arcane', count: 4 },
                { type: 'malum:earthen', count: 4 }
            ],
            id: `${id_prefix}alchemical_impetus`
        },
        {
            result: { id: 'occultism:magic_lamp_empty', count: 1 },
            input: { tag: 'c:ingots/iesnium', count: 4 },
            extraInputs: [{ item: 'minecraft:cookie', count: 12 }],
            spirits: [
                { type: 'malum:sacred', count: 4 },
                { type: 'malum:arcane', count: 4 },
                { type: 'malum:aqueous', count: 4 },
                { type: 'malum:aerial', count: 4 }
            ],
            id: `${id_prefix}magic_lamp_empty`
        },
        {
            result: { id: 'ae2:controller', count: 1 },
            input: { item: 'ae2:mysterious_cube', count: 1 },
            extraInputs: [
                { tag: 'c:gems/mnemonic_fragment', count: 4 },
                { item: 'enigmatica:magic_lamp', count: 1 },
                { item: 'naturesaura:item_distributor', count: 1 }
            ],
            spirits: [
                { type: 'malum:sacred', count: 4 },
                { type: 'malum:arcane', count: 4 },
                { type: 'malum:aqueous', count: 4 },
                { type: 'malum:aerial', count: 4 }
            ],
            id: `${id_prefix}controller`
        },
        {
            result: { id: 'enderio:ensouled_chassis', count: 1 },
            input: { item: 'enderio:soul_chain', count: 8 },
            extraInputs: [
                { tag: 'c:gems/mnemonic_fragment', count: 4 },
                { item: 'malum:cursed_sapball', count: 4 },
                { item: 'enderio:skeletal_contractor', count: 1 }
            ],
            spirits: [
                { type: 'malum:sacred', count: 8 },
                { type: 'malum:arcane', count: 8 },
                { type: 'malum:eldritch', count: 8 }
            ],
            id: `${id_prefix}ensouled_chassis`
        },
        {
            result: { id: 'oritech:flux_gate', count: 1 },
            input: { tag: 'c:plates/obsidian', count: 1 },
            extraInputs: [
                { tag: 'c:gems/amethyst', count: 1 },
                { tag: 'c:nuggets/hallowed_gold', count: 4 }
            ],
            spirits: [
                { type: 'malum:eldritch', count: 4 },
                { type: 'malum:aqueous', count: 4 },
                { type: 'malum:earthen', count: 4 }
            ],
            id: `${id_prefix}flux_gate`
        },
        {
            result: { id: 'enigmatica:pulsating_mechanism', count: 1 },
            input: { item: 'oritech:flux_gate', count: 1 },
            extraInputs: [
                { tag: 'c:gems/pulsating_crystal', count: 2 },
                { item: 'malum:mimicry_relay', count: 1 },
                { item: 'enderio:basic_capacitor', count: 3 }
            ],
            spirits: [
                { type: 'malum:arcane', count: 16 },
                { type: 'malum:infernal', count: 16 },
                { type: 'malum:aerial', count: 16 }
            ],
            id: `${id_prefix}pulsating_mechanism`
        },
        {
            result: { id: 'enigmatica:tempestuous_mechanism', count: 1 },
            input: { item: 'enigmatica:pulsating_mechanism', count: 1 },
            extraInputs: [
                { tag: 'c:gems/weather_crystal', count: 2 },
                { item: 'enderio:sentient_ender', count: 1 },
                { item: 'enderio:octadic_capacitor', count: 3 }
            ],
            spirits: [
                { type: 'malum:arcane', count: 32 },
                { type: 'malum:aqueous', count: 32 },
                { type: 'malum:aerial', count: 32 },
                { type: 'malum:eldritch', count: 32 }
            ],
            id: `${id_prefix}tempestuous_mechanism`
        },
        {
            result: { id: 'malum:alchemical_calx', count: 4 },
            input: { item: 'occultism:otherworld_ashes', count: 4 },
            extraInputs: [],
            spirits: [
                { type: 'malum:arcane', count: 2 },
                { type: 'malum:earthen', count: 2 },
                { type: 'malum:aqueous', count: 2 }
            ],
            id: `${id_prefix}alchemical_calx`
        },
        {
            result: { id: 'malum:hex_ash', count: 8 },
            input: { tag: 'c:gunpowders', count: 8 },
            extraInputs: [],
            spirits: [{ type: 'malum:arcane', count: 8 }],
            id: `${id_prefix}hex_ash`
        },

        {
            result: { id: 'modern_industrialization:large_steam_turbine', count: 1 },
            input: { item: 'modern_industrialization:mv_steam_turbine', count: 4 },
            extraInputs: [
                { item: 'ae2:engineering_processor', count: 4 },
                { item: 'modern_industrialization:stainless_steel_rotor', count: 8 },
                { item: 'modern_industrialization:advanced_pump', count: 4 },
                { item: 'modern_industrialization:clean_stainless_steel_machine_casing', count: 1 }
            ],
            spirits: [
                { type: 'malum:arcane', count: 64 },
                { type: 'malum:aerial', count: 64 },
                { type: 'malum:aqueous', count: 64 },
                { type: 'malum:eldritch', count: 64 }
            ],
            id: `${id_prefix}large_steam_turbine`
        },
        {
            result: { id: 'modern_industrialization:high_pressure_advanced_large_steam_boiler', count: 1 },
            input: { item: 'modern_industrialization:advanced_large_steam_boiler', count: 1 },
            extraInputs: [
                { item: 'ae2:engineering_processor', count: 4 },
                { item: 'modern_industrialization:small_heat_exchanger', count: 4 },
                { item: 'modern_industrialization:clean_stainless_steel_machine_casing', count: 1 }
            ],
            spirits: [
                { type: 'malum:arcane', count: 64 },
                { type: 'malum:earthen', count: 64 },
                { type: 'malum:infernal', count: 64 },
                { type: 'malum:eldritch', count: 64 }
            ],
            id: `${id_prefix}high_pressure_advanced_large_steam_boiler`
        },
        {
            result: { id: 'modern_industrialization:plasma_turbine', count: 1 },
            input: { item: 'modern_industrialization:quantum_machine_casing', count: 1 },
            extraInputs: [
                { item: 'modern_industrialization:quantum_circuit', count: 4 },
                { item: 'modern_industrialization:sky_rotor', count: 8 },
                { item: 'modern_industrialization:advanced_pump', count: 4 },
                { item: 'modern_industrialization:superconductor_coil', count: 4 }
            ],
            spirits: [
                { type: 'malum:arcane', count: 64 },
                { type: 'malum:aerial', count: 64 },
                { type: 'malum:aqueous', count: 64 },
                { type: 'malum:eldritch', count: 64 }
            ],
            id: `${id_prefix}plasma_turbine`
        },
        {
            result: { id: 'modern_industrialization:fusion_reactor', count: 1 },
            input: { item: 'modern_industrialization:quantum_machine_casing', count: 1 },
            extraInputs: [
                { item: 'modern_industrialization:quantum_circuit', count: 4 },
                { item: 'modern_industrialization:fusion_chamber', count: 8 }
            ],
            spirits: [
                { type: 'malum:arcane', count: 64 },
                { type: 'malum:earthen', count: 64 },
                { type: 'malum:infernal', count: 64 },
                { type: 'malum:eldritch', count: 64 }
            ],
            id: `${id_prefix}fusion_reactor`
        },
        {
            result: { id: 'modern_industrialization:heat_exchanger', count: 1 },
            input: { item: 'modern_industrialization:stainless_steel_machine_casing_pipe', count: 1 },
            extraInputs: [
                { item: 'ae2:engineering_processor', count: 4 },
                { item: 'modern_industrialization:heatproof_machine_casing', count: 2 },
                { item: 'modern_industrialization:small_heat_exchanger', count: 2 },
                { item: 'modern_industrialization:frostproof_machine_casing', count: 2 }
            ],
            spirits: [
                { type: 'malum:arcane', count: 64 },
                { type: 'malum:infernal', count: 64 },
                { type: 'malum:aqueous', count: 64 },
                { type: 'malum:eldritch', count: 64 }
            ],
            id: `${id_prefix}heat_exchanger`
        },
        {
            result: { id: 'extended_industrialization:processing_array', count: 1 },
            input: { item: 'ae2:molecular_assembler', count: 1 },
            extraInputs: [
                { item: 'ae2:engineering_processor', count: 4 },
                { item: 'modern_industrialization:robot_arm', count: 4 },
                { item: 'modern_industrialization:large_advanced_motor', count: 4 },
                { item: 'modern_industrialization:clean_stainless_steel_machine_casing', count: 1 }
            ],
            spirits: [
                { type: 'malum:arcane', count: 64 },
                { type: 'malum:aerial', count: 64 },
                { type: 'malum:earthen', count: 64 },
                { type: 'malum:eldritch', count: 64 }
            ],
            id: `${id_prefix}processing_array`
        },

        {
            result: { id: 'industrialforegoing:hydroponic_simulation_processor', count: 1 },
            input: { item: 'enderio:frank_n_zombie', count: 1 },
            extraInputs: [
                { item: 'pneumaticcraft:plastic', count: 4 },
                { item: 'minecraft:conduit', count: 1 }
            ],
            spirits: [
                { type: 'malum:arcane', count: 32 },
                { type: 'malum:aqueous', count: 64 },
                { type: 'malum:sacred', count: 32 }
            ],
            id: `${id_prefix}hydroponic_simulation_processor`
        },
        {
            result: { id: 'modern_industrialization:iridium_plate', count: 1 },
            input: { item: 'modern_industrialization:mixed_ingot_iridium', count: 1 },
            extraInputs: [{ item: 'malum:auric_embers', count: 4 }],
            spirits: [
                { type: 'malum:arcane', count: 16 },
                { type: 'malum:infernal', count: 16 },
                { type: 'malum:earthen', count: 16 }
            ],
            id: `${id_prefix}iridium_plate`
        },
        {
            result: { id: 'enigmatica:welkin_decanter', count: 1 },
            input: { item: 'malum:spirit_jar', count: 1 },
            extraInputs: [
                { item: 'malum:rune_of_sky_tether', count: 1 },
                { item: 'malum:astral_weave', count: 7 },
                { item: 'oritech:overcharged_crystal', count: 1 },
                { tag: 'c:plates/sky', count: 7 },
                { item: 'malum:rune_of_howling_gale', count: 1 }
            ],
            spirits: [
                { type: 'malum:arcane', count: 32 },
                { type: 'malum:aerial', count: 32 }
            ],
            id: `${id_prefix}welkin_decanter`
        },
        {
            result: { id: 'ars_elemental:everfull_urn', count: 1 },
            input: { item: 'handcrafted:terracotta_thick_pot', count: 1 },
            extraInputs: [
                { item: 'malum:rune_of_flowing_grasp', count: 1 },
                { item: 'oritech:overcharged_crystal', count: 1 },
                { item: 'malum:rune_of_good_tides', count: 1 }
            ],
            spirits: [
                { type: 'malum:arcane', count: 32 },
                { type: 'malum:aqueous', count: 32 }
            ],
            id: `${id_prefix}everfull_urn`
        },
        {
            result: { id: 'enigmatica:unfired_vessel', count: 1 },
            input: { item: 'minecraft:clay', count: 4 },
            extraInputs: [
                { item: 'malum:alchemical_calx', count: 1 },
                { item: 'enigmatica:primordial_mud', count: 16 }
            ],
            spirits: [
                { type: 'malum:sacred', count: 32 },
                { type: 'malum:earthen', count: 32 }
            ],
            id: `${id_prefix}unfired_vessel`
        },
        {
            result: { id: 'extended_industrialization:tesla_interdimensional_upgrade', count: 1 },
            input: { item: 'ae2:quantum_link', count: 1 },
            extraInputs: [
                { item: 'ae2:singularity', count: 1 },
                { item: 'ae2:quantum_ring', count: 8 },
                { item: 'malum:warp_flux', count: 1 }
            ],
            spirits: [
                { type: 'malum:arcane', count: 32 },
                { type: 'malum:aerial', count: 32 },
                { type: 'malum:eldritch', count: 32 }
            ],
            id: `${id_prefix}tesla_interdimensional_upgrade`
        },
        {
            result: { id: 'enderio:skeletal_contractor', count: 2 },
            input: { item: 'minecraft:skeleton_skull', count: 1 },
            extraInputs: [
                { item: 'minecraft:bone', count: 4 },
                { item: 'aether:life_shard', count: 1 },
                { item: 'prettypipes:blank_module', count: 1 }
            ],
            spirits: [
                { type: 'malum:arcane', count: 4 },
                { type: 'malum:sacred', count: 4 }
            ],
            id: `${id_prefix}skeletal_contractor`
        },
        {
            result: { id: 'malum:ether', count: 2 },
            input: { tag: 'c:dusts/glowstone', count: 4 },
            extraInputs: [{ tag: 'c:gems/blazing_quartz', count: 1 }],
            spirits: [
                { type: 'malum:infernal', count: 2 },
                { type: 'malum:arcane', count: 1 },
                { type: 'malum:aerial', count: 2 }
            ],
            id: `${id_prefix}ether`
        }
    ];

    const materials = ['copper', 'gold', 'iron'];

    materials.forEach((material) => {
        recipes.push({
            result: { id: `malum:${material}_impetus`, count: 1 },
            input: { item: 'malum:alchemical_impetus', count: 1 },
            extraInputs: [
                { item: 'theurgy:alchemical_salt_mineral', count: 8 },
                { item: 'malum:cthonic_gold', count: 1 },
                { tag: `c:ingots/${material}`, count: 16 }
            ],
            spirits: [
                { type: 'malum:earthen', count: 8 },
                { type: 'malum:infernal', count: 8 },
                { type: 'malum:aqueous', count: 8 }
            ],
            id: `${id_prefix}${material}_impetus`
        });
    });

    const spirits = ['sacred', 'wicked', 'arcane', 'eldritch', 'earthen', 'aerial', 'aqueous', 'infernal'];
    spirits.forEach((spirit) => {
        recipes.push({
            result: { id: `malum:${spirit}_spirited_glass`, count: 8 },
            input: { item: `ae2:quartz_glass`, count: 8 },
            extraInputs: [{ tag: `c:ingots/andesite_alloy`, count: 1 }],
            spirits: [{ type: `malum:${spirit}`, count: 2 }],
            id: `${id_prefix}${spirit}_spirited_glass`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'malum:spirit_infusion';
        event.custom(recipe).id(recipe.id);
    });
});
