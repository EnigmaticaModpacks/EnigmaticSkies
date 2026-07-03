ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:enigmatica/shapeless/';

    const recipes = [
        {
            output: '4x enigmatica:poutine',
            inputs: [
                'pneumaticcraft:chips',
                'pneumaticcraft:chips',
                'pneumaticcraft:chips',
                'pneumaticcraft:chips',
                'sushigocrafting:cheese[sushigocrafting:amount=500]',
                'arsdelight:wilden_sauce'
            ],
            id: `${id_prefix}poutine`
        },
        {
            output: '6x enigmatica:source_berry_roll_dough',
            inputs: ['farmersdelight:wheat_dough', 'ars_nouveau:sourceberry_bush'],
            id: `${id_prefix}source_berry_roll_dough`
        },
        {
            output: '12x enigmatica:cookie_dough',
            inputs: ['farmersdelight:wheat_dough', '#c:sugars', 'create:bar_of_chocolate'],
            id: `${id_prefix}cookie_dough`
        },
        {
            output: '12x enigmatica:sweet_berry_cookie_dough',
            inputs: ['farmersdelight:wheat_dough', '#c:sugars', 'minecraft:sweet_berries'],
            id: `${id_prefix}sweet_berry_cookie_dough`
        },
        {
            output: '12x enigmatica:honey_cookie_dough',
            inputs: ['farmersdelight:wheat_dough', 'minecraft:honey_bottle'],
            id: `${id_prefix}honey_cookie_dough`
        },
        {
            output: '12x enigmatica:source_berry_cookie_dough',
            inputs: ['farmersdelight:wheat_dough', '#c:sugars', 'ars_nouveau:sourceberry_bush'],
            id: `${id_prefix}source_berry_cookie_dough`
        },
        {
            output: '4x enigmatica:fire_clay_ball',
            inputs: ['aether:aerogel', 'minecraft:clay', '#c:dusts/ash'],
            id: `${id_prefix}fire_clay_ball`
        },
        {
            output: 'enigmatica:source_ink',
            inputs: ['minecraft:glass_bottle', 'ars_nouveau:sourceberry_bush'],
            id: `${id_prefix}source_ink`
        }
    ];

    const pebbles = ['andesite', 'basalt', 'calcite', 'deepslate', 'diorite', 'granite', 'stone', 'tuff'];

    pebbles.forEach((pebble) => {
        let stone = `minecraft:${pebble}`;

        if (pebble == 'stone') {
            stone = 'minecraft:cobblestone';
        }

        if (pebble == 'deepslate') {
            stone = 'minecraft:cobbled_deepslate';
        }

        recipes.push(
            {
                output: `4x enigmatica:${pebble}_pebble`,
                inputs: [stone],
                id: `${id_prefix}${pebble}_pebble`
            },
            {
                output: stone,
                inputs: [
                    `enigmatica:${pebble}_pebble`,
                    `enigmatica:${pebble}_pebble`,
                    `enigmatica:${pebble}_pebble`,
                    `enigmatica:${pebble}_pebble`
                ],
                id: `${id_prefix}${getID(stone)}_from_pebble`
            }
        );
    });

    const upgrades = [
        { item: 'functionalstorage:copper_upgrade', matrix: 1 },
        { item: 'functionalstorage:diamond_upgrade', matrix: 1 },
        { item: 'functionalstorage:gold_upgrade', matrix: 1 },
        { item: 'functionalstorage:iron_downgrade', matrix: 1 },
        { item: 'functionalstorage:netherite_upgrade', matrix: 1 },
        { item: 'functionalstorage:redstone_upgrade', matrix: 1 },
        { item: 'functionalstorage:void_upgrade', matrix: 1 },

        { item: 'industrialforegoing:speed_addon_tier_1', matrix: 1 },
        { item: 'industrialforegoing:speed_addon_tier_2', matrix: 1 },

        { item: 'industrialforegoing:efficiency_addon_tier_1', matrix: 1 },
        { item: 'industrialforegoing:efficiency_addon_tier_2', matrix: 1 },

        { item: 'industrialforegoing:processing_addon_tier_1', matrix: 1 },
        { item: 'industrialforegoing:processing_addon_tier_2', matrix: 1 },

        { item: 'industrialforegoing:range_addon_tier_0', matrix: 1 },
        { item: 'industrialforegoing:range_addon_tier_1', matrix: 1 },
        { item: 'industrialforegoing:range_addon_tier_2', matrix: 1 },
        { item: 'industrialforegoing:range_addon_tier_3', matrix: 1 },
        { item: 'industrialforegoing:range_addon_tier_4', matrix: 1 },
        { item: 'industrialforegoing:range_addon_tier_5', matrix: 1 },
        { item: 'industrialforegoing:range_addon_tier_6', matrix: 1 },
        { item: 'industrialforegoing:range_addon_tier_7', matrix: 1 },
        { item: 'industrialforegoing:range_addon_tier_8', matrix: 1 },
        { item: 'industrialforegoing:range_addon_tier_9', matrix: 1 },
        { item: 'industrialforegoing:range_addon_tier_10', matrix: 1 },
        { item: 'industrialforegoing:range_addon_tier_11', matrix: 1 },

        { item: 'malum:blazing_diode', matrix: 1 },
        { item: 'malum:caustic_catalyst', matrix: 1 },
        { item: 'malum:impurity_stabilizer', matrix: 1 },
        { item: 'malum:intricate_assembly', matrix: 1 },
        { item: 'malum:prismatic_focus_lens', matrix: 1 },
        { item: 'malum:mending_diffuser', matrix: 1 },
        { item: 'malum:resonance_tuner', matrix: 1 },
        { item: 'malum:shielding_apparatus', matrix: 1 },
        { item: 'malum:suspicious_device', matrix: 1 },
        { item: 'malum:sympathy_drive', matrix: 1 },
        { item: 'malum:warping_engine', matrix: 1 },

        { item: 'modern_industrialization:basic_upgrade', matrix: 1 },
        { item: 'modern_industrialization:advanced_upgrade', matrix: 1 },
        { item: 'modern_industrialization:turbo_upgrade', matrix: 1 },
        { item: 'modern_industrialization:highly_advanced_upgrade', matrix: 1 },

        { item: 'modularrouters:blast_upgrade', matrix: 1 },
        { item: 'modularrouters:camouflage_upgrade', matrix: 1 },
        { item: 'modularrouters:fluid_upgrade', matrix: 1 },
        { item: 'modularrouters:muffler_upgrade', matrix: 1 },
        { item: 'modularrouters:security_upgrade', matrix: 1 },
        { item: 'modularrouters:sync_upgrade', matrix: 1 },
        { item: 'modularrouters:energy_upgrade', matrix: 1 },
        { item: 'modularrouters:speed_upgrade', matrix: 1 },
        { item: 'modularrouters:stack_upgrade', matrix: 1 },

        { item: 'modernindustrialrouters:lv_upgrade', matrix: 1 },
        { item: 'modernindustrialrouters:mv_upgrade', matrix: 1 },
        { item: 'modernindustrialrouters:hv_upgrade', matrix: 1 },
        { item: 'modernindustrialrouters:ev_upgrade', matrix: 1 },
        { item: 'modernindustrialrouters:superconductor_upgrade', matrix: 1 },

        { item: 'oritech:machine_speed_addon', matrix: 1 },
        { item: 'oritech:machine_efficiency_addon', matrix: 1 },
        { item: 'oritech:machine_ultimate_addon', matrix: 1 },
        { item: 'oritech:quarry_addon', matrix: 1 },
        { item: 'oritech:machine_processing_addon', matrix: 1 },
        { item: 'oritech:machine_fluid_addon', matrix: 1 },
        { item: 'oritech:crop_filter_addon', matrix: 1 },
        { item: 'oritech:machine_hunter_addon', matrix: 1 },
        { item: 'oritech:machine_acceptor_addon', matrix: 1 },
        { item: 'oritech:machine_redstone_addon', matrix: 1 },
        { item: 'oritech:machine_burst_addon', matrix: 1 },
        { item: 'oritech:machine_capacitor_addon', matrix: 1 },
        { item: 'oritech:machine_inventory_proxy_addon', matrix: 1 },

        { item: 'pneumaticcraft:security_upgrade', matrix: 1 },
        { item: 'pneumaticcraft:speed_upgrade', matrix: 1 },
        { item: 'pneumaticcraft:volume_upgrade', matrix: 1 },

        { item: 'ppfluids:fluid_limiter_module', matrix: 1 },

        { item: 'ppfluids:low_fluid_extraction_module', matrix: 1 },
        { item: 'ppfluids:medium_fluid_extraction_module', matrix: 1 },
        { item: 'ppfluids:high_fluid_extraction_module', matrix: 1 },

        { item: 'ppfluids:low_fluid_filter_module', matrix: 1 },
        { item: 'ppfluids:medium_fluid_filter_module', matrix: 1 },
        { item: 'ppfluids:high_fluid_filter_module', matrix: 1 },

        { item: 'ppfluids:low_fluid_retrieval_module', matrix: 1 },
        { item: 'ppfluids:medium_fluid_retrieval_module', matrix: 1 },
        { item: 'ppfluids:high_fluid_retrieval_module', matrix: 1 },

        { item: 'prettypipes:damage_filter_modifier', matrix: 1 },
        { item: 'prettypipes:filter_increase_modifier', matrix: 1 },
        { item: 'prettypipes:mod_filter_modifier', matrix: 1 },
        { item: 'prettypipes:nbt_filter_modifier', matrix: 1 },
        { item: 'prettypipes:random_sorting_modifier', matrix: 1 },
        { item: 'prettypipes:redstone_module', matrix: 1 },
        { item: 'prettypipes:round_robin_sorting_modifier', matrix: 1 },
        { item: 'prettypipes:stack_size_module', matrix: 1 },
        { item: 'prettypipes:tag_filter_modifier', matrix: 1 },

        { item: 'prettypipes:low_crafting_module', matrix: 1 },
        { item: 'prettypipes:medium_crafting_module', matrix: 1 },
        { item: 'prettypipes:high_crafting_module', matrix: 1 },

        { item: 'prettypipes:low_extraction_module', matrix: 1 },
        { item: 'prettypipes:medium_extraction_module', matrix: 1 },
        { item: 'prettypipes:high_extraction_module', matrix: 1 },

        { item: 'prettypipes:low_filter_module', matrix: 1 },
        { item: 'prettypipes:medium_filter_module', matrix: 1 },
        { item: 'prettypipes:high_filter_module', matrix: 1 },

        { item: 'prettypipes:low_high_priority_module', matrix: 1 },
        { item: 'prettypipes:medium_high_priority_module', matrix: 1 },
        { item: 'prettypipes:high_high_priority_module', matrix: 1 },

        { item: 'prettypipes:low_low_priority_module', matrix: 1 },
        { item: 'prettypipes:medium_low_priority_module', matrix: 1 },
        { item: 'prettypipes:high_low_priority_module', matrix: 1 },

        { item: 'prettypipes:low_retrieval_module', matrix: 1 },
        { item: 'prettypipes:medium_retrieval_module', matrix: 1 },
        { item: 'prettypipes:high_retrieval_module', matrix: 1 },

        { item: 'prettypipes:low_speed_module', matrix: 1 },
        { item: 'prettypipes:medium_speed_module', matrix: 1 },
        { item: 'prettypipes:high_speed_module', matrix: 1 },

        { item: 'sophisticatedbackpacks:void_upgrade', matrix: 1 },
        { item: 'sophisticatedbackpacks:advanced_void_upgrade', matrix: 1 },

        { item: 'sophisticatedbackpacks:magnet_upgrade', matrix: 1 },
        { item: 'sophisticatedbackpacks:advanced_magnet_upgrade', matrix: 1 },

        { item: 'sophisticatedbackpacks:compacting_upgrade', matrix: 1 },
        { item: 'sophisticatedbackpacks:advanced_compacting_upgrade', matrix: 1 },

        { item: 'sophisticatedbackpacks:stack_downgrade_tier_1', matrix: 1 },
        { item: 'sophisticatedbackpacks:stack_downgrade_tier_2', matrix: 1 },
        { item: 'sophisticatedbackpacks:stack_downgrade_tier_3', matrix: 1 },
        { item: 'sophisticatedbackpacks:stack_upgrade_starter_tier', matrix: 1 },
        { item: 'sophisticatedbackpacks:stack_upgrade_tier_1', matrix: 1 },
        { item: 'sophisticatedbackpacks:stack_upgrade_tier_2', matrix: 1 },
        { item: 'sophisticatedbackpacks:stack_upgrade_tier_3', matrix: 1 },
        { item: 'sophisticatedbackpacks:stack_upgrade_tier_4', matrix: 1 },

        { item: 'sophisticatedstorage:compacting_upgrade', matrix: 1 },
        { item: 'sophisticatedstorage:advanced_compacting_upgrade', matrix: 1 },

        { item: 'sophisticatedstorage:hopper_upgrade', matrix: 1 },
        { item: 'sophisticatedstorage:advanced_hopper_upgrade', matrix: 1 },

        { item: 'sophisticatedstorage:void_upgrade', matrix: 1 },
        { item: 'sophisticatedstorage:advanced_void_upgrade', matrix: 1 },

        { item: 'sophisticatedstorage:magnet_upgrade', matrix: 1 },
        { item: 'sophisticatedstorage:advanced_magnet_upgrade', matrix: 1 },

        { item: 'sophisticatedstorage:pickup_upgrade', matrix: 1 },
        { item: 'sophisticatedstorage:advanced_pickup_upgrade', matrix: 1 },

        { item: 'sophisticatedstorage:compression_upgrade', matrix: 1 },

        { item: 'sophisticatedstorage:stack_downgrade_tier_1', matrix: 1 },
        { item: 'sophisticatedstorage:stack_downgrade_tier_2', matrix: 1 },
        { item: 'sophisticatedstorage:stack_downgrade_tier_3', matrix: 1 },

        { item: 'sophisticatedstorage:stack_upgrade_tier_1', matrix: 1 },
        { item: 'sophisticatedstorage:stack_upgrade_tier_1_plus', matrix: 1 },
        { item: 'sophisticatedstorage:stack_upgrade_tier_2', matrix: 1 },
        { item: 'sophisticatedstorage:stack_upgrade_tier_3', matrix: 1 },
        { item: 'sophisticatedstorage:stack_upgrade_tier_4', matrix: 1 },
        { item: 'sophisticatedstorage:stack_upgrade_tier_5', matrix: 1 },

        { item: 'sophisticatedstorage:basic_tier_upgrade', matrix: 1 },
        { item: 'sophisticatedstorage:basic_to_copper_tier_upgrade', matrix: 1 },
        { item: 'sophisticatedstorage:basic_to_iron_tier_upgrade', matrix: 1 },
        { item: 'sophisticatedstorage:basic_to_gold_tier_upgrade', matrix: 1 },
        { item: 'sophisticatedstorage:basic_to_diamond_tier_upgrade', matrix: 1 },
        { item: 'sophisticatedstorage:basic_to_netherite_tier_upgrade', matrix: 1 },

        { item: 'sophisticatedstorage:copper_to_iron_tier_upgrade', matrix: 1 },
        { item: 'sophisticatedstorage:copper_to_gold_tier_upgrade', matrix: 1 },
        { item: 'sophisticatedstorage:copper_to_diamond_tier_upgrade', matrix: 1 },
        { item: 'sophisticatedstorage:copper_to_netherite_tier_upgrade', matrix: 1 },

        { item: 'sophisticatedstorage:iron_to_gold_tier_upgrade', matrix: 1 },
        { item: 'sophisticatedstorage:iron_to_diamond_tier_upgrade', matrix: 1 },
        { item: 'sophisticatedstorage:iron_to_netherite_tier_upgrade', matrix: 1 },

        { item: 'sophisticatedstorage:gold_to_diamond_tier_upgrade', matrix: 1 },
        { item: 'sophisticatedstorage:gold_to_netherite_tier_upgrade', matrix: 1 },

        { item: 'sophisticatedstorage:diamond_to_netherite_tier_upgrade', matrix: 1 }
    ];

    upgrades.forEach((upgrade) => {
        let payload = {
            output: Item.of(upgrade.item, 2),
            inputs: [upgrade.item],
            id: `${id_prefix}clone_${upgrade.item.replace(':', '_')}`
        };

        for (let i = 0; i < upgrade.matrix; i++) {
            payload.inputs.push('enigmatica:elemental_matrix');
        }

        recipes.push(payload);
    });

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);
    });
});
