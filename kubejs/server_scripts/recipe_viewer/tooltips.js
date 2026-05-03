ItemEvents.modifyTooltips((event) => {
    // https://kubejs.com/wiki/events/ItemEvents/modifyTooltips
    /*
    Valid Color Codes:
    
    .black()
    .darkBlue()
    .darkGreen()
    .darkAqua()
    .darkRed()
    .darkPurple()
    .gold()
    .gray()
    .darkGray()
    .blue()
    .green()
    .aqua()
    .red()
    .lightPurple()
    .yellow()
    .white()
    .color('#808080') //any hex color
    */
    const recipes = [
        {
            items: [
                'minecraft:reinforced_deepslate',
                'modularrouters:blast_upgrade',
                'enderio:reinforced_obsidian_block'
            ],
            text: [Text.translate('tooltip.enigmatica.wither_immune').lightPurple()]
        },
        {
            items: [
                'naturesaura:animal_generator',
                'naturesaura:projectile_generator',
                'naturesaura:chorus_generator',
                'naturesaura:oak_generator',
                'naturesaura:slime_split_generator',
                'naturesaura:firework_generator',
                'naturesaura:moss_generator',
                'naturesaura:flower_generator',
                'naturesaura:potion_generator'
            ],
            text: [Text.translate('tooltip.enigmatica.aura_generator').green()]
        },
        {
            items: ['naturesaura:effect_powder[naturesaura:effect_powder_data={effect:"naturesaura:plant_boost"}]'],
            text: [Text.translate('tooltip.enigmatica.inhibits_boosted_plant_growth').green()]
        },
        {
            items: ['naturesaura:effect_powder[naturesaura:effect_powder_data={effect:"naturesaura:nether_grass"}]'],
            text: [Text.translate('tooltip.enigmatica.inhibits_aura_nether_grass').green()]
        },
        {
            items: ['naturesaura:effect_powder[naturesaura:effect_powder_data={effect:"naturesaura:cache_recharge"}]'],
            text: [Text.translate('tooltip.enigmatica.inhibits_aura_cache_recharge').green()]
        },
        {
            items: ['naturesaura:effect_powder[naturesaura:effect_powder_data={effect:"naturesaura:ore_spawn"}]'],
            text: [Text.translate('tooltip.enigmatica.aura_ore_conversion').green()]
        },
        {
            items: ['naturesaura:effect_powder[naturesaura:effect_powder_data={effect:"naturesaura:animal"}]'],
            text: [Text.translate('tooltip.enigmatica.aura_animal_breeding').green()]
        },
        {
            items: ['naturesaura:break_prevention'],
            text: [Text.translate('tooltip.enigmatica.break_prevention').green()]
        },
        {
            items: ['naturesaura:snow_creator'],
            text: [Text.translate('tooltip.enigmatica.snow_and_ice_maker').green()]
        },
        {
            items: ['naturesaura:light_staff', 'ars_nouveau:jar_of_light'],
            text: [Text.translate('tooltip.enigmatica.creates_light_sources').gold()]
        },
        {
            items: ['naturesaura:cave_finder'],
            text: [Text.translate('tooltip.enigmatica.highlights_dark_areas').gold()]
        },
        {
            items: ['naturesaura:loot_finder'],
            text: [Text.translate('tooltip.enigmatica.highlights_inventories').gold()]
        },
        {
            items: ['naturesaura:netherite_finder'],
            text: [Text.translate('tooltip.enigmatica.highlights_netherite').gold()]
        },
        {
            items: ['naturesaura:death_ring'],
            text: [Text.translate('tooltip.enigmatica.prevents_death').gold()]
        },
        {
            items: ['naturesaura:shockwave_creator'],
            text: [Text.translate('tooltip.enigmatica.knocks_foes_back').gold()]
        },
        {
            items: [
                'naturesaura:aura_timer',
                'malum:wavemaker',
                'utilitarian:redstone_clock',
                'ars_nouveau:timer_spell_turret',
                'create:pulse_timer'
            ],
            text: [Text.translate('tooltip.enigmatica.redstone_timer').green()]
        },
        {
            items: ['naturesaura:animal_container'],
            text: [Text.translate('tooltip.enigmatica.invisible_fence').green()]
        },
        {
            items: ['naturesaura:field_creator'],
            text: [Text.translate('tooltip.enigmatica.block_breaker').green()]
        },
        {
            items: ['naturesaura:placer'],
            text: [Text.translate('tooltip.enigmatica.block_placer').green()]
        },
        {
            items: ['naturesaura:grated_chute'],
            text: [Text.translate('tooltip.enigmatica.filtered_hopper').green()]
        },
        {
            items: ['naturesaura:hopper_upgrade'],
            text: [Text.translate('tooltip.enigmatica.item_collector').green()]
        },
        {
            items: ['naturesaura:spawn_lamp', 'ars_nouveau:ritual_sanctuary'],
            text: [Text.translate('tooltip.enigmatica.prevents_mob_spawns').green()]
        },
        {
            items: ['naturesaura:rf_converter'],
            text: [Text.translate('tooltip.enigmatica.generates_fe_from_aura').red()]
        },
        {
            items: ['naturesaura:lower_limiter'],
            text: [Text.translate('tooltip.enigmatica.prevents_negative_aura_drain').green()]
        },
        {
            items: ['naturesaura:spring', 'ars_elemental:everfull_urn'],
            text: [Text.translate('tooltip.enigmatica.endless_water_source').green()]
        },
        {
            items: ['naturesaura:aura_detector'],
            text: [Text.translate('tooltip.enigmatica.detects_aura_levels').green()]
        },
        {
            items: ['naturesaura:pickup_stopper'],
            text: [Text.translate('tooltip.enigmatica.anti_magnet').green()]
        },
        {
            items: ['naturesaura:weather_changer'],
            text: [Text.translate('tooltip.enigmatica.weather_manipulator').green()]
        },
        {
            items: ['naturesaura:time_changer'],
            text: [Text.translate('tooltip.enigmatica.time_manipulator').green()]
        },
        {
            items: ['naturesaura:furnace_heater'],
            text: [Text.translate('tooltip.enigmatica.aura_furnace').green()]
        },
        {
            items: ['naturesaura:blast_furnace_booster'],
            text: [Text.translate('tooltip.enigmatica.ore_processing').green()]
        },
        {
            items: ['naturesaura:range_visualizer'],
            text: [Text.translate('tooltip.enigmatica.visualizes_apparatus_area').green()]
        },
        {
            items: [
                'naturesaura:ender_crate',
                'naturesaura:ender_access',
                'minecraft:ender_chest',
                'functionalstorage:ender_drawer',
                'occultism:stable_wormhole',
                'occultism:storage_controller',
                'occultism:storage_remote',
                'enderstorage:ender_pouch',
                'enderstorage:ender_chest',
                'enderstorage:ender_tank'
            ],
            text: [Text.translate('tooltip.enigmatica.cross_dimensional_storage').darkPurple()]
        },
        {
            items: [
                'ae2:quantum_link',
                'ae2:quantum_ring',
                'laserio:laser_connector_advanced',
                'modularrouters:sender_module_3'
            ],
            text: [Text.translate('tooltip.enigmatica.cross_dimensional_logistics').darkPurple()]
        },
        {
            items: ['ars_nouveau:enchanters_mirror'],
            text: [Text.translate('tooltip.enigmatica.arcane_focus_self').gold()]
        },
        {
            items: ['ars_elemental:spell_horn'],
            text: [Text.translate('tooltip.enigmatica.arcane_focus_area').gold()]
        },
        {
            items: ['ars_nouveau:wand'],
            text: [Text.translate('tooltip.enigmatica.arcane_focus_projectile').gold()]
        },
        {
            items: ['ars_nouveau:enchanters_sword'],
            text: [Text.translate('tooltip.enigmatica.arcane_focus_touch').gold()]
        },
        {
            items: ['ars_nouveau:enchanters_shield'],
            text: [Text.translate('tooltip.enigmatica.arcane_blocked_attacks').lightPurple()]
        },
        {
            items: ['ars_nouveau:splash_flask_cannon'],
            text: [Text.translate('tooltip.enigmatica.arcane_splash_potions').lightPurple()]
        },
        {
            items: ['ars_nouveau:lingering_flask_cannon'],
            text: [Text.translate('tooltip.enigmatica.arcane_lingering_potions').lightPurple()]
        },
        {
            items: ['ars_nouveau:void_jar'],
            text: [Text.translate('tooltip.enigmatica.arcane_item_to_source').lightPurple()]
        },
        {
            items: ['ars_nouveau:potion_diffuser'],
            text: [Text.translate('tooltip.enigmatica.applies_potions_area').lightPurple()]
        },
        {
            items: ['ars_nouveau:belt_of_levitation'],
            text: [Text.translate('tooltip.enigmatica.arcane_hover').lightPurple()]
        },
        {
            items: ['ars_nouveau:belt_of_unstable_gifts'],
            text: [Text.translate('tooltip.enigmatica.arcane_random_effects').lightPurple()]
        },
        {
            items: ['ars_nouveau:ring_of_lesser_discount', 'ars_nouveau:ring_of_greater_discount'],
            text: [Text.translate('tooltip.enigmatica.arcane_spell_cost').lightPurple()]
        },
        {
            items: ['ars_nouveau:amulet_of_mana_boost'],
            text: [Text.translate('tooltip.enigmatica.arcane_mana_pool').lightPurple()]
        },
        {
            items: ['ars_nouveau:amulet_of_mana_regen'],
            text: [Text.translate('tooltip.enigmatica.arcane_mana_regen').lightPurple()]
        },
        {
            items: [
                'ars_nouveau:wixie_cauldron',
                'ars_nouveau:wixie_charm',
                'enderio:crafter',
                'ae2:molecular_assembler',
                'minecraft:crafter'
            ],
            text: [Text.translate('tooltip.enigmatica.auto_crafter').green()]
        },
        {
            items: ['functionalstorage:armory_cabinet'],
            text: [Text.translate('tooltip.enigmatica.bulk_unstackable_storage').green()]
        },
        {
            items: ['occultism:chalk_void', 'occultism:chalk_rainbow'],
            text: [Text.translate('tooltip.enigmatica.universal_chalk').gold()]
        },
        {
            items: Object.keys(armor_insulation),
            text: [Text.translate('tooltip.enigmatica.armor_insulation').gold()]
        },
        {
            items: ['supplementaries:fodder'],
            text: [Text.translate('tooltip.enigmatica.animal_fodder').green()]
        },
        {
            items: ['minecraft:torchflower', 'ars_elemental:spore_blossom_up'],
            text: [Text.translate('tooltip.enigmatica.found_flourishing_islands').gold()]
        },
        {
            items: ['minecraft:allium', 'minecraft:pitcher_plant'],
            text: [Text.translate('tooltip.enigmatica.found_cascading_islands').gold()]
        },
        {
            items: ['aether:white_flower', 'aether:purple_flower'],
            text: [Text.translate('tooltip.enigmatica.found_platform_islands').gold()]
        },
        {
            items: ['minecraft:pink_petals'],
            text: [Text.translate('tooltip.enigmatica.found_flashing_islands').gold()]
        },
        {
            items: ['malum:strange_crystal', 'malum:large_strange_crystal'],
            text: [Text.translate('tooltip.enigmatica.found_vexing_islands').gold()]
        },
        {
            items: ['malum:void_depot'],
            text: [Text.translate('tooltip.enigmatica.weeping_well_location').gold()]
        },
        {
            items: ['#enigmatica:chilled'],
            text: [Text.translate('tooltip.enigmatica.cool_to_touch').aqua()]
        },
        {
            items: ['#enigmatica:cold'],
            text: [Text.translate('tooltip.enigmatica.cold_to_touch').aqua()]
        },
        {
            items: ['#enigmatica:super_cold'],
            text: [Text.translate('tooltip.enigmatica.freezing_to_touch').aqua()]
        },
        {
            items: ['#enigmatica:warm'],
            text: [Text.translate('tooltip.enigmatica.warm_to_touch').red()]
        },
        {
            items: ['#enigmatica:hot'],
            text: [Text.translate('tooltip.enigmatica.hot_to_touch').red()]
        },
        {
            items: ['#enigmatica:super_hot'],
            text: [Text.translate('tooltip.enigmatica.burning_to_touch').red()]
        }
    ];

    recipes.forEach((recipe) => {
        event.add(recipe.items, recipe.text);
    });

    emi.items.disabled.forEach((item) => {
        event.add(item, [Text.translate(disabled_item_tooltip).red()]);
    });
});
