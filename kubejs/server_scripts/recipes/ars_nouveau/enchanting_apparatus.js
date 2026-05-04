ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ars_nouveau/enchanting_apparatus/';

    const recipes = [
        {
            result: { id: 'ars_nouveau:wixie_charm', count: 1 },
            reagent: { item: 'ars_nouveau:wixie_shards' },
            pedestalItems: [
                { item: 'farmersdelight:beef_stew' },
                { item: 'arsdelight:source_berry_pie_slice' },
                { item: 'arsdelight:source_berry_tea' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}wixie_charm`
        },
        {
            result: { id: 'ars_nouveau:starbuncle_charm', count: 1 },
            reagent: { item: 'ars_nouveau:starbuncle_shards' },
            pedestalItems: [
                { item: 'ars_nouveau:source_berry_roll' },
                { tag: 'c:nuggets/gold' },
                { tag: 'c:nuggets/gold' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}starbuncle_charm`
        },
        {
            result: { id: 'ars_nouveau:alakarkinos_charm', count: 1 },
            reagent: { item: 'ars_nouveau:alakarkinos_token' },
            pedestalItems: [
                { item: 'farmersdelight:kelp_roll' },
                { item: 'aether:skyroot_shovel' },
                { item: 'aether:skyroot_bucket' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}alakarkinos_charm`
        },
        {
            result: { id: 'ars_nouveau:enchanters_sword', count: 1 },
            reagent: { item: 'malum:soul_stained_steel_sword' },
            pedestalItems: [
                { tag: 'c:gems/celestigem' },
                { tag: 'c:storage_blocks/gold' },
                { tag: 'c:storage_blocks/gold' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `${id_prefix}enchanters_sword`
        },
        {
            result: { id: 'arsdelight:enchanters_knife', count: 1 },
            reagent: { item: 'malum:soul_stained_steel_knife' },
            pedestalItems: [
                { tag: 'c:gems/celestigem' },
                { tag: 'c:storage_blocks/gold' },
                { tag: 'c:storage_blocks/source' }
            ],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `${id_prefix}enchanters_knife`
        },
        {
            result: { id: 'ars_nouveau:enchanters_gauntlet', count: 1 },
            reagent: { item: 'malum:soulwoven_silk' },
            pedestalItems: [
                { tag: 'c:gems/celestigem' },
                { tag: 'c:storage_blocks/gold' },
                { tag: 'c:storage_blocks/gold' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}enchanters_gauntlet`
        },
        {
            result: { id: 'minecraft:heart_of_the_sea', count: 1 },
            reagent: { tag: 'c:storage_blocks/empowered_diamatine' },
            pedestalItems: [
                { tag: 'c:ingots/neptunium' },
                { tag: 'c:essences/water' },
                { tag: 'c:ingots/neptunium' },
                { tag: 'c:essences/water' },
                { tag: 'c:ingots/neptunium' },
                { tag: 'c:essences/water' },
                { tag: 'c:ingots/neptunium' },
                { tag: 'c:essences/water' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 5000,
            id: `${id_prefix}heart_of_the_sea`
        },
        {
            result: { id: 'naturesaura:furnace_heater', count: 1 },
            reagent: { item: 'aether:golden_amber' },
            pedestalItems: [
                { item: 'naturesaura:infused_stone' },
                { tag: 'c:essences/fire' },
                { tag: 'c:ingots/infused_iron' },
                { item: 'naturesaura:infused_stone' },
                { tag: 'c:essences/earth' },
                { tag: 'c:ingots/hallowed_gold' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}furnace_heater`
        },
        {
            result: { id: 'naturesaura:eye', count: 1 },
            reagent: { item: 'aether:golden_amber' },
            pedestalItems: [
                { item: 'malum:strange_crystal' },
                { item: 'malum:strange_crystal' },
                { item: 'malum:strange_crystal' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}eye`
        },
        {
            result: { id: 'naturesaura:eye_improved', count: 1 },
            reagent: { item: 'naturesaura:eye' },
            pedestalItems: [
                { tag: 'c:essences/water' },
                { tag: 'c:essences/fire' },
                { tag: 'c:essences/earth' },
                { tag: 'c:essences/air' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}eye_improved`
        },
        {
            result: { id: 'create:blaze_burner', count: 1 },
            reagent: { item: 'create:empty_blaze_burner' },
            pedestalItems: [
                { item: 'minecraft:skeleton_skull' },
                { tag: 'c:eggs' },
                { tag: 'c:essences/fire' },
                { tag: 'c:eggs' },
                { tag: 'c:essences/fire' },
                { tag: 'c:eggs' },
                { tag: 'c:essences/fire' },
                { tag: 'c:eggs' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}blaze_burner`
        },
        {
            result: { id: 'naturesaura:ancient_sapling', count: 1 },
            reagent: { item: 'aether:golden_oak_sapling' },
            pedestalItems: [
                { tag: 'c:essences/water' },
                { tag: 'c:essences/fire' },
                { tag: 'c:essences/earth' },
                { tag: 'c:essences/air' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}ancient_sapling`
        },
        {
            result: {
                type: 'neoforge:components',
                id: 'naturesaura:effect_powder',
                components: { 'naturesaura:effect_powder_data': { effect: 'naturesaura:animal' } },
                count: 16
            },
            reagent: { item: 'farmersdelight:rice' },
            pedestalItems: [
                { tag: 'c:gems/source' },
                { item: 'aether:golden_amber' },
                { item: 'aether:enchanted_berry' },
                { item: 'aether:golden_amber' },
                { item: 'supplementaries:lumisene_bottle' },
                { item: 'aether:golden_amber' },
                { item: 'aether:enchanted_berry' },
                { item: 'aether:golden_amber' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}effect_powder_animal`
        },
        {
            result: {
                type: 'neoforge:components',
                id: 'naturesaura:effect_powder',
                components: { 'naturesaura:effect_powder_data': { effect: 'naturesaura:plant_boost' } },
                count: 16
            },
            reagent: { item: 'farmersdelight:rice' },
            pedestalItems: [
                { tag: 'c:essences/earth' },
                { item: 'aether:golden_amber' },
                { item: 'aether:enchanted_berry' },
                { item: 'aether:golden_amber' },
                { item: 'supplementaries:lumisene_bottle' },
                { item: 'aether:golden_amber' },
                { item: 'aether:enchanted_berry' },
                { item: 'aether:golden_amber' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}effect_powder_plant_boost`
        },
        {
            result: {
                type: 'neoforge:components',
                id: 'naturesaura:effect_powder',
                components: { 'naturesaura:effect_powder_data': { effect: 'naturesaura:cache_recharge' } },
                count: 16
            },
            reagent: { item: 'farmersdelight:rice' },
            pedestalItems: [
                { tag: 'c:essences/water' },
                { item: 'aether:golden_amber' },
                { item: 'aether:enchanted_berry' },
                { item: 'aether:golden_amber' },
                { item: 'supplementaries:lumisene_bottle' },
                { item: 'aether:golden_amber' },
                { item: 'aether:enchanted_berry' },
                { item: 'aether:golden_amber' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}effect_powder_cache_recharge`
        },
        {
            result: { id: 'aether:enchanted_gravitite', count: 1 },
            reagent: { item: 'naturesaura:infused_stone' },
            pedestalItems: [
                { tag: 'c:essences/earth' },
                { tag: 'aether:gems/zanite' },
                { tag: 'c:dusts/grains_of_the_end' },
                { tag: 'aether:gems/zanite' },
                { tag: 'c:essences/air' },
                { tag: 'aether:gems/zanite' },
                { tag: 'c:dusts/grains_of_the_end' },
                { tag: 'aether:gems/zanite' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}enchanted_gravitite`
        },
        {
            result: { id: 'ars_technica:mark_of_technomancy', count: 5 },
            reagent: { item: 'ars_nouveau:wilden_tribute' },
            pedestalItems: [
                { item: 'ars_technica:calibrated_precision_mechanism' },
                { tag: 'c:plates/brass' },
                { item: 'enigmatica:pulsating_mechanism' },
                { tag: 'c:plates/brass' },
                { tag: 'c:gems/vibrant_crystal' },
                { tag: 'c:plates/brass' },
                { item: 'enigmatica:pulsating_mechanism' },
                { tag: 'c:plates/brass' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 10000,
            id: `${id_prefix}mark_of_technomancy`
        },

        {
            result: { id: 'naturesaura:token_joy', count: 1 },
            reagent: { item: 'supplementaries:statue' },
            pedestalItems: [
                { item: 'ars_technica:calibrated_precision_mechanism' },
                { item: 'ars_nouveau:magebloom_fiber' },
                { tag: 'c:essences/air' },
                { item: 'ars_nouveau:magebloom_fiber' },
                { item: 'ars_additions:lost_codex_entry' },
                { item: 'ars_nouveau:magebloom_fiber' },
                { tag: 'c:essences/air' },
                { item: 'ars_nouveau:magebloom_fiber' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}token_joy`
        },
        {
            result: { id: 'naturesaura:token_fear', count: 1 },
            reagent: { item: 'supplementaries:statue' },
            pedestalItems: [
                { item: 'ars_technica:calibrated_precision_mechanism' },
                { item: 'ars_nouveau:magebloom_fiber' },
                { tag: 'c:essences/earth' },
                { item: 'ars_nouveau:magebloom_fiber' },
                { item: 'ars_additions:lost_codex_entry' },
                { item: 'ars_nouveau:magebloom_fiber' },
                { tag: 'c:essences/earth' },
                { item: 'ars_nouveau:magebloom_fiber' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}token_fear`
        },
        {
            result: { id: 'naturesaura:token_anger', count: 1 },
            reagent: { item: 'supplementaries:statue' },
            pedestalItems: [
                { item: 'ars_technica:calibrated_precision_mechanism' },
                { item: 'ars_nouveau:magebloom_fiber' },
                { tag: 'c:essences/fire' },
                { item: 'ars_nouveau:magebloom_fiber' },
                { item: 'ars_additions:lost_codex_entry' },
                { item: 'ars_nouveau:magebloom_fiber' },
                { tag: 'c:essences/fire' },
                { item: 'ars_nouveau:magebloom_fiber' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}token_anger`
        },
        {
            result: { id: 'naturesaura:token_sorrow', count: 1 },
            reagent: { item: 'supplementaries:statue' },
            pedestalItems: [
                { item: 'ars_technica:calibrated_precision_mechanism' },
                { item: 'ars_nouveau:magebloom_fiber' },
                { tag: 'c:essences/water' },
                { item: 'ars_nouveau:magebloom_fiber' },
                { item: 'ars_additions:lost_codex_entry' },
                { item: 'ars_nouveau:magebloom_fiber' },
                { tag: 'c:essences/water' },
                { item: 'ars_nouveau:magebloom_fiber' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}token_sorrow`
        },
        {
            result: { id: 'modern_industrialization:iron_rod_magnetic', count: 1 },
            reagent: { tag: 'c:rods/iron' },
            pedestalItems: [
                { tag: 'c:ingots/redstone_alloy' },
                { tag: 'c:ingots/redstone_alloy' },
                { tag: 'c:ingots/redstone_alloy' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 2000,
            id: `${id_prefix}iron_rod_magnetic`
        },
        {
            result: { id: 'modern_industrialization:steel_rod_magnetic', count: 1 },
            reagent: { tag: 'c:rods/steel' },
            pedestalItems: [
                { tag: 'c:ingots/redstone_alloy' },
                { tag: 'c:ingots/redstone_alloy' },
                { tag: 'c:ingots/redstone_alloy' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 2000,
            id: `${id_prefix}steel_rod_magnetic`
        },
        {
            result: { id: 'modern_industrialization:stainless_steel_rod_magnetic', count: 1 },
            reagent: { tag: 'c:rods/stainless_steel' },
            pedestalItems: [
                { tag: 'c:ingots/redstone_alloy' },
                { tag: 'c:ingots/redstone_alloy' },
                { tag: 'c:ingots/redstone_alloy' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 2000,
            id: `${id_prefix}stainless_steel_rod_magnetic`
        },
        {
            result: { id: 'modern_industrialization:heatproof_machine_casing', count: 1 },
            reagent: { item: 'modern_industrialization:bronze_machine_casing' },
            pedestalItems: [
                { item: 'arsdelight:neutralized_frostaya_jam' },
                { item: 'arsdelight:neutralized_frostaya_jam' },
                { item: 'arsdelight:neutralized_frostaya_jam' },
                { item: 'arsdelight:neutralized_frostaya_jam' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 2000,
            id: `${id_prefix}heatproof_machine_casing`
        },
        {
            result: { id: 'modern_industrialization:frostproof_machine_casing', count: 1 },
            reagent: { item: 'modern_industrialization:bronze_machine_casing' },
            pedestalItems: [
                { item: 'arsdelight:neutralized_bombegrante_jam' },
                { item: 'arsdelight:neutralized_bombegrante_jam' },
                { item: 'arsdelight:neutralized_bombegrante_jam' },
                { item: 'arsdelight:neutralized_bombegrante_jam' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 2000,
            id: `${id_prefix}frostproof_machine_casing`
        },
        {
            result: { id: 'ars_nouveau:shapers_focus', count: 1 },
            reagent: { tag: 'c:essences/manipulation' },
            pedestalItems: [
                { tag: 'c:ingots/hallowed_gold' },
                { tag: 'c:gems/ruby' },
                { tag: 'c:gems/emeradic' },
                { tag: 'c:gems/ruby' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}shapers_focus`
        },
        {
            result: { id: 'ars_nouveau:spell_turret', count: 1 },
            reagent: { item: 'ars_nouveau:basic_spell_turret' },
            pedestalItems: [
                { tag: 'c:storage_blocks/source' },
                { item: 'supplementaries:lumisene_bottle' },
                { item: 'supplementaries:lumisene_bottle' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}spell_turret`
        },
        {
            result: { id: 'actuallyadditions:atomic_reconstructor', count: 1 },
            reagent: { item: 'modern_industrialization:bronze_machine_casing' },
            pedestalItems: [
                { item: 'ars_elemental:manipulation_turret' },
                { item: 'actuallyadditions:lens' },
                { item: 'create:rose_quartz_lamp' },
                { item: 'actuallyadditions:lens' },
                { item: 'oritech:flux_gate' },
                { item: 'actuallyadditions:lens' },
                { item: 'create:rose_quartz_lamp' },
                { item: 'actuallyadditions:lens' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 5000,
            id: `${id_prefix}atomic_reconstructor`
        },
        {
            result: { id: 'simplemagnets:basicmagnet', count: 1 },
            reagent: { tag: 'c:gems/enori' },
            pedestalItems: [
                { tag: 'c:gems/palis' },
                { tag: 'c:gems/palis' },
                { tag: 'c:gems/restonia' },
                { tag: 'c:gems/restonia' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 500,
            id: `${id_prefix}basicmagnet`
        },
        {
            result: { id: 'aether:enchanted_berry', count: 1 },
            reagent: { item: 'aether:blue_berry' },
            pedestalItems: [
                { tag: 'c:nuggets/hallowed_gold' },
                { tag: 'c:nuggets/hallowed_gold' },
                { tag: 'c:nuggets/hallowed_gold' },
                { tag: 'c:nuggets/hallowed_gold' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 500,
            id: `${id_prefix}enchanted_berry`
        },
        {
            result: { id: 'aether:life_shard', count: 2 },
            reagent: { tag: 'c:gems/ruby' },
            pedestalItems: [
                { tag: 'c:ingots/hallowed_gold' },
                { tag: 'c:gems/emeradic' },
                { item: 'arsdelight:activated_mendosteen_jam' },
                { tag: 'c:gems/emeradic' },
                { tag: 'c:ingots/hallowed_gold' },
                { tag: 'c:gems/emeradic' },
                { item: 'arsdelight:activated_mendosteen_jam' },
                { tag: 'c:gems/emeradic' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 10000,
            id: `${id_prefix}life_shard`
        },
        {
            result: { id: 'ars_nouveau:splash_flask_cannon', count: 1 },
            reagent: { item: 'pneumaticcraft:cannon_barrel' },
            pedestalItems: [
                { tag: 'c:ingots/hallowed_gold' },
                { tag: 'c:ingots/hallowed_gold' },
                { item: 'supplementaries:lumisene_bottle' },
                { item: 'supplementaries:lumisene_bottle' },
                { tag: 'c:gunpowders' },
                { tag: 'c:gunpowders' },
                { tag: 'c:gunpowders' },
                { tag: 'c:gunpowders' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}splash_flask_cannon`
        },
        {
            result: { id: 'minecraft:trident', count: 1 },
            reagent: { item: 'apothic_enchanting:inert_trident' },
            pedestalItems: [
                { tag: 'c:gems/prismarine' },
                { tag: 'c:gems/prismarine' },
                { tag: 'c:gems/prismarine' },
                { tag: 'c:dusts/prismarine' },
                { tag: 'c:dusts/prismarine' },
                { tag: 'c:dusts/prismarine' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 10000,
            id: `${id_prefix}trident`
        },
        {
            result: { id: 'ars_nouveau:relay_splitter', count: 1 },
            reagent: { item: 'ars_nouveau:relay' },
            pedestalItems: [
                { tag: 'c:gems/charged_certus' },
                { tag: 'c:gems/charged_certus' },
                { tag: 'c:gems/charged_certus' },
                { tag: 'c:gems/charged_certus' },
                { tag: 'c:gems/lapis' },
                { tag: 'c:gems/lapis' },
                { tag: 'c:gems/lapis' },
                { tag: 'c:gems/lapis' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}relay_splitter`
        },
        {
            result: { id: 'naturesaura:clock_hand', count: 1 },
            reagent: { item: 'justdirethings:time_crystal_block' },
            pedestalItems: [
                { tag: 'c:essences/air' },
                { tag: 'c:ingots/hallowed_gold' },
                { tag: 'c:essences/fire' },
                { tag: 'c:ingots/hallowed_gold' },
                { tag: 'c:essences/earth' },
                { tag: 'c:ingots/hallowed_gold' },
                { tag: 'c:essences/water' },
                { tag: 'c:ingots/hallowed_gold' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 10000,
            id: `${id_prefix}clock_hand`
        },
        {
            result: { id: 'ars_nouveau:potion_diffuser', count: 1 },
            reagent: { item: 'supplementaries:bellows' },
            pedestalItems: [
                { tag: 'c:ingots/hallowed_gold' },
                { tag: 'c:ingots/hallowed_gold' },
                { tag: 'c:ingots/hallowed_gold' },
                { item: 'naturesaura:infused_stone' },
                { item: 'naturesaura:infused_stone' },
                { item: 'naturesaura:infused_stone' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}potion_diffuser`
        },
        {
            result: { id: 'minecraft:skeleton_skull', count: 1 },
            reagent: { item: 'create:cardboard_helmet' },
            pedestalItems: [
                { item: 'malum:grim_talc' },
                { item: 'malum:grim_talc' },
                { item: 'malum:grim_talc' },
                { item: 'malum:grim_talc' },
                { item: 'malum:grim_talc' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 1000,
            id: `${id_prefix}skeleton_skull`
        },
        {
            result: { id: 'minecraft:zombie_head', count: 1 },
            reagent: { item: 'minecraft:skeleton_skull' },
            pedestalItems: [
                { tag: 'c:essences/anima' },
                { item: 'malum:rotting_essence' },
                { item: 'malum:rotting_essence' },
                { item: 'malum:rotting_essence' },
                { item: 'malum:rotting_essence' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}zombie_head`
        },
        {
            result: { id: 'minecraft:creeper_head', count: 1 },
            reagent: { item: 'minecraft:skeleton_skull' },
            pedestalItems: [
                { item: 'ars_nouveau:bombegranate_pod' },
                { tag: 'minecraft:leaves' },
                { tag: 'minecraft:leaves' },
                { tag: 'minecraft:leaves' },
                { tag: 'minecraft:leaves' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}creeper_head`
        },
        {
            result: {
                type: 'neoforge:components',
                id: 'minecraft:elytra',
                components: { unbreakable: {} },
                count: 1
            },
            reagent: { item: 'aether:gravitite_chestplate' },
            pedestalItems: [
                { tag: 'c:essences/air' },
                { tag: 'c:plates/andesite_alloy' },
                { tag: 'c:feathers' },
                { tag: 'c:feathers' },
                { tag: 'c:feathers' },
                { tag: 'c:feathers' },
                { tag: 'c:plates/andesite_alloy' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}elytra`
        },
        {
            result: { id: 'enderio:skeletal_contractor', count: 1 },
            reagent: { item: 'minecraft:skeleton_skull' },
            pedestalItems: [
                { item: 'aether:life_shard' },
                { tag: 'c:bones' },
                { tag: 'c:bones' },
                { item: 'prettypipes:blank_module' },
                { tag: 'c:bones' },
                { tag: 'c:bones' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 5000,
            id: `${id_prefix}skeletal_contractor`
        },
        {
            result: { id: 'actuallyadditions:ender_casing', count: 1 },
            reagent: { item: 'enderio:ensouled_chassis' },
            pedestalItems: [
                { tag: 'c:gems/ender_crystal' },
                { tag: 'c:essences/void_salts' },
                { tag: 'c:essences/void_salts' },
                { tag: 'c:gems/ender_crystal' },
                { tag: 'c:essences/void_salts' },
                { tag: 'c:essences/void_salts' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 5000,
            id: `${id_prefix}ender_casing`
        },
        {
            result: { id: 'ars_controle:scryers_linkage', count: 1 },
            reagent: { item: 'ars_nouveau:scryers_crystal' },
            pedestalItems: [
                { tag: 'c:ender_pearls' },
                { tag: 'c:ender_pearls' },
                { tag: 'c:ender_pearls' },
                { tag: 'c:ender_pearls' },
                { tag: 'c:plates/obsidian' },
                { tag: 'c:plates/obsidian' },
                { tag: 'c:plates/obsidian' },
                { tag: 'c:plates/obsidian' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 5000,
            id: `${id_prefix}scryers_linkage`
        },
        {
            result: { id: 'ars_additions:warp_nexus', count: 1 },
            reagent: { item: 'actuallyadditions:ender_casing' },
            pedestalItems: [
                { item: 'ars_nouveau:sourcestone' },
                { tag: 'c:ingots/hallowed_gold' },
                { tag: 'c:gems/source' },
                { tag: 'c:ingots/hallowed_gold' },
                { item: 'ars_nouveau:sourcestone' },
                { tag: 'c:ingots/hallowed_gold' },
                { tag: 'c:gems/source' },
                { tag: 'c:ingots/hallowed_gold' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 1000,
            id: `${id_prefix}warp_nexus`
        },
        {
            result: { id: 'extended_industrialization:nano_gravichestplate', count: 1 },
            reagent: { item: 'extended_industrialization:nano_chestplate' },
            pedestalItems: [
                { tag: 'c:tokens/greater_air' },
                { item: 'oritech:ion_thruster' },
                { item: 'enigmatica:tempestuous_mechanism' },
                { item: 'oritech:ion_thruster' },
                { tag: 'c:tokens/greater_air' },
                { item: 'oritech:ion_thruster' },
                { item: 'enigmatica:tempestuous_mechanism' },
                { item: 'oritech:ion_thruster' }
            ],
            keepNbtOfReagent: true,
            sourceCost: 10000,
            id: `${id_prefix}nano_gravichestplate`
        },
        {
            result: { id: 'enigmatica:world_seed', count: 1 },
            reagent: { item: 'minecraft:enchanted_golden_apple' },
            pedestalItems: [
                { tag: 'c:essences/rebirth' },
                { tag: 'c:essences/rebirth' },
                { tag: 'c:essences/knowledge' },
                { tag: 'c:essences/knowledge' },
                { tag: 'c:essences/knowledge' },
                { tag: 'c:essences/rebirth' }
            ],
            keepNbtOfReagent: false,
            sourceCost: 10000,
            id: `${id_prefix}world_seed`
        },
        {
            result: { id: 'ars_nouveau:dominion_wand', count: 1 },
            reagent: { tag: 'c:rods/wooden' },
            pedestalItems: [{ tag: 'c:gems/source' }, { tag: 'c:gems/source' }, { tag: 'c:ingots/gold' }],
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}dominion_wand`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:enchanting_apparatus';
        event.custom(recipe).id(recipe.id);
    });
});
