ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/industrial_cauldron/';

    const recipes = [
        {
            item_outputs: [{ item: 'aether:blue_gummy_swet', amount: 1 }],
            item_inputs: [
                { item: 'aether:swet_ball', amount: 1 },
                { tag: 'c:sugars', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}blue_gummy_swet`
        },
        {
            item_outputs: [{ item: 'supplementaries:soap', amount: 6 }],
            item_inputs: [
                { tag: 'c:dusts/ash', amount: 4 },
                { tag: 'c:tallow', amount: 1 }
            ],
            duration: 5,
            eu: 16,
            id: `${id_prefix}soap`
        },
        {
            item_outputs: [{ item: 'minecraft:rabbit_stew', amount: 1 }],
            item_inputs: [
                { item: 'minecraft:potato', amount: 1 },
                { item: 'minecraft:rabbit', amount: 1 },
                { item: 'minecraft:carrot', amount: 1 },
                { tag: 'c:mushrooms', amount: 1 },
                { item: 'minecraft:bowl', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}rabbit_stew`
        },
        {
            item_outputs: [{ item: 'minecraft:mushroom_stew', amount: 1 }],
            item_inputs: [
                { item: 'minecraft:brown_mushroom', amount: 1 },
                { item: 'minecraft:red_mushroom', amount: 1 },
                { item: 'minecraft:bowl', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}mushroom_stew`
        },
        {
            item_outputs: [{ item: 'minecraft:beetroot_soup', amount: 1 }],
            item_inputs: [
                { item: 'minecraft:beetroot', amount: 3 },
                { item: 'minecraft:bowl', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}beetroot_soup`
        },
        {
            item_outputs: [
                { item: 'farmersdelight:onion_soup', amount: 1 },
                { item: 'minecraft:glass_bottle', amount: 1 }
            ],
            item_inputs: [
                { tag: 'c:crops/onion', amount: 2 },
                { tag: 'c:foods/bread', amount: 1 },
                { item: 'farmersdelight:milk_bottle', amount: 1 },
                { item: 'minecraft:bowl', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}onion_soup`
        },
        {
            item_outputs: [{ item: 'farmersdelight:dumplings', amount: 4 }],
            item_inputs: [
                { tag: 'c:foods/dough', amount: 1 },
                { tag: 'c:crops/cabbage', amount: 1 },
                { tag: 'c:crops/onion', amount: 1 },
                {
                    type: 'neoforge:compound',
                    children: [
                        { tag: 'c:foods/raw_chicken' },
                        { tag: 'c:foods/raw_pork' },
                        { tag: 'c:foods/raw_beef' },
                        { item: 'minecraft:brown_mushroom' }
                    ],
                    amount: 1
                }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}dumplings`
        },
        {
            item_outputs: [{ item: 'farmersdelight:pasta_with_mutton_chop', amount: 1 }],
            item_inputs: [
                { tag: 'c:foods/raw_mutton', amount: 1 },
                { tag: 'c:foods/pasta', amount: 1 },
                { tag: 'c:crops/tomato', amount: 2 },
                { item: 'minecraft:bowl', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}pasta_with_mutton_chop`
        },
        {
            item_outputs: [{ item: 'farmersdelight:pasta_with_meatballs', amount: 1 }],
            item_inputs: [
                { item: 'farmersdelight:minced_beef', amount: 1 },
                { tag: 'c:foods/pasta', amount: 1 },
                { tag: 'c:crops/tomato', amount: 2 },
                { item: 'minecraft:bowl', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}pasta_with_meatballs`
        },
        {
            item_outputs: [{ item: 'farmersdelight:fried_rice', amount: 1 }],
            item_inputs: [
                { item: 'farmersdelight:rice', amount: 1 },
                { tag: 'c:eggs', amount: 1 },
                { item: 'minecraft:carrot', amount: 1 },
                { tag: 'c:crops/onion', amount: 1 },
                { item: 'minecraft:bowl', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}fried_rice`
        },
        {
            item_outputs: [{ item: 'farmersdelight:vegetable_soup', amount: 1 }],
            item_inputs: [
                { item: 'minecraft:carrot', amount: 1 },
                { item: 'minecraft:potato', amount: 1 },
                { item: 'minecraft:beetroot', amount: 1 },
                { tag: 'c:foods/leafy_green', amount: 1 },
                { item: 'minecraft:bowl', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}vegetable_soup`
        },
        {
            item_outputs: [{ item: 'farmersdelight:apple_cider', amount: 1 }],
            item_inputs: [
                { item: 'minecraft:apple', amount: 2 },
                { tag: 'c:sugars', amount: 1 },
                { item: 'minecraft:glass_bottle', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}apple_cider`
        },
        {
            item_outputs: [
                { item: 'farmersdelight:pumpkin_soup', amount: 1 },
                { item: 'minecraft:glass_bottle', amount: 1 }
            ],
            item_inputs: [
                { item: 'farmersdelight:pumpkin_slice', amount: 1 },
                { tag: 'c:foods/leafy_green', amount: 1 },
                { tag: 'c:foods/raw_pork', amount: 1 },
                { item: 'farmersdelight:milk_bottle', amount: 1 },
                { item: 'minecraft:bowl', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}pumpkin_soup`
        },
        {
            item_outputs: [{ item: 'farmersdelight:cooked_rice', amount: 1 }],
            item_inputs: [
                { item: 'farmersdelight:rice', amount: 1 },
                { item: 'minecraft:bowl', amount: 1 }
            ],
            duration: 5,
            eu: 16,
            id: `${id_prefix}cooked_rice`
        },
        {
            item_outputs: [{ item: 'farmersdelight:baked_cod_stew', amount: 1 }],
            item_inputs: [
                { tag: 'c:foods/raw_cod', amount: 1 },
                { item: 'minecraft:potato', amount: 1 },
                { tag: 'c:eggs', amount: 1 },
                { tag: 'c:crops/tomato', amount: 1 },
                { item: 'minecraft:bowl', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}baked_cod_stew`
        },
        {
            item_outputs: [{ item: 'farmersdelight:tomato_sauce', amount: 1 }],
            item_inputs: [
                { tag: 'c:crops/tomato', amount: 2 },
                { item: 'minecraft:bowl', amount: 1 }
            ],
            duration: 5,
            eu: 16,
            id: `${id_prefix}tomato_sauce`
        },
        {
            item_outputs: [{ item: 'farmersdelight:dog_food', amount: 1 }],
            item_inputs: [
                { item: 'minecraft:rotten_flesh', amount: 1 },
                { item: 'minecraft:bone_meal', amount: 1 },
                { tag: 'c:foods/raw_meat', amount: 1 },
                { item: 'farmersdelight:rice', amount: 1 },
                { item: 'minecraft:bowl', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}dog_food`
        },
        {
            item_outputs: [{ item: 'farmersdelight:beef_stew', amount: 1 }],
            item_inputs: [
                { tag: 'c:foods/raw_beef', amount: 1 },
                { item: 'minecraft:carrot', amount: 1 },
                { item: 'minecraft:potato', amount: 1 },
                { tag: 'c:mushrooms', amount: 1 },
                { item: 'minecraft:bowl', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}beef_stew`
        },
        {
            item_outputs: [{ item: 'farmersdelight:bone_broth', amount: 1 }],
            item_inputs: [
                { tag: 'c:bones', amount: 1 },
                {
                    type: 'neoforge:compound',
                    children: [
                        { item: 'minecraft:glow_berries' },
                        { tag: 'c:mushrooms' },
                        { item: 'minecraft:hanging_roots' },
                        { item: 'minecraft:glow_lichen' }
                    ],
                    amount: 1
                },
                { item: 'minecraft:bowl', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}bone_broth`
        },
        {
            item_outputs: [{ item: 'farmersdelight:squid_ink_pasta', amount: 1 }],
            item_inputs: [
                { tag: 'c:foods/safe_raw_fish', amount: 1 },
                { tag: 'c:foods/pasta', amount: 1 },
                { tag: 'c:crops/tomato', amount: 1 },
                { item: 'minecraft:ink_sac', amount: 1 },
                { item: 'minecraft:bowl', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}squid_ink_pasta`
        },
        {
            item_outputs: [{ item: 'farmersdelight:fish_stew', amount: 1 }],
            item_inputs: [
                { tag: 'c:foods/safe_raw_fish', amount: 1 },
                { tag: 'c:crops/tomato', amount: 2 },
                { tag: 'c:crops/onion', amount: 1 },
                { item: 'minecraft:bowl', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}fish_stew`
        },
        {
            item_outputs: [{ item: 'farmersdelight:ratatouille', amount: 1 }],
            item_inputs: [
                { tag: 'c:crops/tomato', amount: 1 },
                { tag: 'c:crops/onion', amount: 1 },
                { item: 'minecraft:beetroot', amount: 1 },
                {
                    type: 'neoforge:difference',
                    base: { tag: 'c:foods/vegetable' },
                    subtracted: { item: 'minecraft:melon_slice' },
                    amount: 1
                },
                { item: 'minecraft:bowl', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}ratatouille`
        },
        {
            item_outputs: [{ item: 'farmersdelight:vegetable_noodles', amount: 1 }],
            item_inputs: [
                { item: 'minecraft:carrot', amount: 1 },
                { item: 'minecraft:brown_mushroom', amount: 1 },
                { tag: 'c:foods/pasta', amount: 1 },
                { tag: 'c:foods/leafy_green', amount: 1 },
                {
                    type: 'neoforge:difference',
                    base: { tag: 'c:foods/vegetable' },
                    subtracted: { item: 'minecraft:melon_slice' },
                    amount: 1
                },
                { item: 'minecraft:bowl', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}vegetable_noodles`
        },
        {
            item_outputs: [{ item: 'farmersdelight:hot_cocoa', amount: 1 }],
            item_inputs: [
                { item: 'farmersdelight:milk_bottle', amount: 1 },
                { tag: 'c:sugars', amount: 1 },
                { item: 'minecraft:cocoa_beans', amount: 2 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}hot_cocoa`
        },
        {
            item_outputs: [{ item: 'farmersdelight:noodle_soup', amount: 1 }],
            item_inputs: [
                { tag: 'c:foods/pasta', amount: 1 },
                { tag: 'c:foods/cooked_egg', amount: 1 },
                { item: 'minecraft:dried_kelp', amount: 1 },
                { tag: 'c:foods/raw_pork', amount: 1 },
                { item: 'minecraft:bowl', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}noodle_soup`
        },
        {
            item_outputs: [{ item: 'farmersdelight:chicken_soup', amount: 1 }],
            item_inputs: [
                { tag: 'c:foods/raw_chicken', amount: 1 },
                { item: 'minecraft:carrot', amount: 1 },
                { tag: 'c:foods/leafy_green', amount: 1 },
                {
                    type: 'neoforge:difference',
                    base: { tag: 'c:foods/vegetable' },
                    subtracted: { item: 'minecraft:melon_slice' },
                    amount: 1
                },
                { item: 'minecraft:bowl', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}chicken_soup`
        },
        {
            item_outputs: [{ item: 'farmersdelight:glow_berry_custard', amount: 1 }],
            item_inputs: [
                { item: 'minecraft:glow_berries', amount: 1 },
                { item: 'farmersdelight:milk_bottle', amount: 1 },
                { tag: 'c:eggs', amount: 1 },
                { tag: 'c:sugars', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}glow_berry_custard`
        },
        {
            item_outputs: [{ item: 'farmersdelight:mushroom_rice', amount: 1 }],
            item_inputs: [
                { item: 'minecraft:brown_mushroom', amount: 1 },
                { item: 'minecraft:red_mushroom', amount: 1 },
                { item: 'farmersdelight:rice', amount: 1 },
                {
                    type: 'neoforge:compound',
                    children: [{ item: 'minecraft:carrot' }, { item: 'minecraft:potato' }],
                    amount: 1
                },
                { item: 'minecraft:bowl', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}mushroom_rice`
        },
        {
            item_outputs: [{ item: 'farmersdelight:cabbage_rolls', amount: 2 }],
            item_inputs: [
                { tag: 'c:crops/cabbage', amount: 1 },
                {
                    type: 'neoforge:compound',
                    children: [
                        { tag: 'c:foods/raw_chicken' },
                        { tag: 'c:foods/raw_pork' },
                        { tag: 'c:foods/raw_beef' },
                        { tag: 'c:foods/safe_raw_fish' },
                        { tag: 'c:foods/raw_mutton' },
                        { tag: 'c:eggs' },
                        { tag: 'c:mushrooms' },
                        { item: 'minecraft:carrot' },
                        { item: 'minecraft:potato' },
                        { item: 'minecraft:beetroot' }
                    ],
                    amount: 1
                },
                { item: 'farmersdelight:rice', amount: 1 }
            ],
            duration: 5,
            eu: 16,
            id: `${id_prefix}cabbage_rolls`
        },
        {
            item_outputs: [{ item: 'farmersdelight:stuffed_pumpkin_block', amount: 1 }],
            item_inputs: [
                { item: 'farmersdelight:rice', amount: 1 },
                { tag: 'c:crops/onion', amount: 1 },
                { item: 'minecraft:brown_mushroom', amount: 1 },
                { item: 'minecraft:potato', amount: 1 },
                { tag: 'c:foods/berry', amount: 1 },
                {
                    type: 'neoforge:difference',
                    base: { tag: 'c:foods/vegetable' },
                    subtracted: { item: 'minecraft:melon_slice' },
                    amount: 1
                },
                { item: 'minecraft:pumpkin', amount: 1 }
            ],
            duration: 20,
            eu: 16,
            id: `${id_prefix}stuffed_pumpkin_block`
        },
        {
            item_outputs: [{ item: 'arsdelight:arch_soup', amount: 1 }],
            item_inputs: [
                { item: 'arsdelight:blazing_bark', amount: 1 },
                { item: 'arsdelight:cascading_bark', amount: 1 },
                { item: 'arsdelight:flourishing_bark', amount: 1 },
                { item: 'arsdelight:vexing_bark', amount: 1 },
                { item: 'minecraft:bowl', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}arch_soup`
        },
        {
            item_outputs: [{ item: 'arsdelight:unstable_cocktail', amount: 1 }],
            item_inputs: [
                { item: 'ars_nouveau:bombegranate_pod', amount: 2 },
                { item: 'arsdelight:blazing_bark', amount: 1 },
                { item: 'minecraft:gunpowder', amount: 1 },
                { tag: 'c:sugars', amount: 1 },
                { item: 'ars_nouveau:fire_essence', amount: 1 },
                { item: 'minecraft:glass_bottle', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}unstable_cocktail`
        },
        {
            item_outputs: [{ item: 'arsdelight:mendosteen_tea', amount: 1 }],
            item_inputs: [
                { item: 'ars_nouveau:mendosteen_pod', amount: 2 },
                { item: 'arsdelight:cascading_bark', amount: 1 },
                { item: 'ars_nouveau:blue_archwood_leaves', amount: 1 },
                { item: 'ars_nouveau:sourceberry_bush', amount: 1 },
                { item: 'minecraft:glass_bottle', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}mendosteen_tea`
        },
        {
            item_outputs: [{ item: 'arsdelight:bastion_tea', amount: 1 }],
            item_inputs: [
                { item: 'ars_nouveau:bastion_pod', amount: 2 },
                { item: 'arsdelight:flourishing_bark', amount: 1 },
                { item: 'ars_nouveau:green_archwood_leaves', amount: 1 },
                { item: 'ars_nouveau:sourceberry_bush', amount: 1 },
                { item: 'minecraft:glass_bottle', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}bastion_tea`
        },
        {
            item_outputs: [{ item: 'arsdelight:bombegrante_tea', amount: 1 }],
            item_inputs: [
                { item: 'ars_nouveau:bombegranate_pod', amount: 2 },
                { item: 'arsdelight:vexing_bark', amount: 1 },
                { item: 'ars_nouveau:purple_archwood_leaves', amount: 1 },
                { item: 'ars_nouveau:sourceberry_bush', amount: 1 },
                { item: 'minecraft:glass_bottle', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}bombegrante_tea`
        },
        {
            item_outputs: [{ item: 'arsdelight:frostaya_tea', amount: 1 }],
            item_inputs: [
                { item: 'ars_nouveau:frostaya_pod', amount: 2 },
                { item: 'arsdelight:blazing_bark', amount: 1 },
                { item: 'ars_nouveau:red_archwood_leaves', amount: 1 },
                { item: 'ars_nouveau:sourceberry_bush', amount: 1 },
                { item: 'minecraft:glass_bottle', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}frostaya_tea`
        },
        {
            item_outputs: [{ item: 'arsdelight:source_berry_tea', amount: 1 }],
            item_inputs: [
                { item: 'ars_nouveau:sourceberry_bush', amount: 3 },
                { tag: 'arsdelight:leaves', amount: 1 },
                { tag: 'arsdelight:barks', amount: 1 },
                { item: 'minecraft:glass_bottle', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}source_berry_tea`
        },
        {
            item_outputs: [{ item: 'arsdelight:activated_mendosteen_jam', amount: 1 }],
            item_inputs: [
                { item: 'ars_nouveau:mendosteen_pod', amount: 2 },
                { item: 'arsdelight:cascading_bark', amount: 1 },
                { tag: 'c:sugars', amount: 1 },
                { item: 'minecraft:glass_bottle', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}activated_mendosteen_jam`
        },
        {
            item_outputs: [{ item: 'arsdelight:activated_bastion_jam', amount: 1 }],
            item_inputs: [
                { item: 'ars_nouveau:bastion_pod', amount: 2 },
                { item: 'arsdelight:flourishing_bark', amount: 1 },
                { tag: 'c:sugars', amount: 1 },
                { item: 'minecraft:glass_bottle', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}activated_bastion_jam`
        },
        {
            item_outputs: [{ item: 'arsdelight:neutralized_bombegrante_jam', amount: 1 }],
            item_inputs: [
                { item: 'ars_nouveau:bombegranate_pod', amount: 2 },
                { item: 'arsdelight:vexing_bark', amount: 1 },
                { tag: 'c:sugars', amount: 1 },
                { item: 'minecraft:glass_bottle', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}neutralized_bombegrante_jam`
        },
        {
            item_outputs: [{ item: 'arsdelight:neutralized_frostaya_jam', amount: 1 }],
            item_inputs: [
                { item: 'ars_nouveau:frostaya_pod', amount: 2 },
                { item: 'arsdelight:blazing_bark', amount: 1 },
                { tag: 'c:sugars', amount: 1 },
                { item: 'minecraft:glass_bottle', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}neutralized_frostaya_jam`
        },
        {
            item_outputs: [{ item: 'arsdelight:source_berry_jam', amount: 1 }],
            item_inputs: [
                { item: 'ars_nouveau:sourceberry_bush', amount: 2 },
                { tag: 'arsdelight:barks', amount: 1 },
                { tag: 'c:sugars', amount: 1 },
                { item: 'minecraft:glass_bottle', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}source_berry_jam`
        },
        {
            item_outputs: [
                { item: 'arsdelight:mendosteen_chicken', amount: 1 },
                { item: 'minecraft:glass_bottle', amount: 1 }
            ],
            item_inputs: [
                { item: 'ars_nouveau:mendosteen_pod', amount: 1 },
                { item: 'arsdelight:activated_mendosteen_jam', amount: 1 },
                { tag: 'c:foods/raw_chicken', amount: 1 },
                { tag: 'c:foods/cabbage', amount: 1 },
                { item: 'arsdelight:wilden_sauce', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}mendosteen_chicken`
        },
        {
            item_outputs: [
                { item: 'arsdelight:bastion_pork', amount: 1 },
                { item: 'minecraft:glass_bottle', amount: 1 }
            ],
            item_inputs: [
                { item: 'ars_nouveau:bastion_pod', amount: 1 },
                { item: 'arsdelight:activated_bastion_jam', amount: 1 },
                { tag: 'c:foods/raw_pork', amount: 1 },
                { tag: 'c:foods/tomato', amount: 1 },
                { item: 'arsdelight:wilden_sauce', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}bastion_pork`
        },
        {
            item_outputs: [
                { item: 'arsdelight:bombegrante_steak', amount: 1 },
                { item: 'minecraft:glass_bottle', amount: 1 }
            ],
            item_inputs: [
                { item: 'ars_nouveau:bombegranate_pod', amount: 1 },
                { item: 'arsdelight:neutralized_bombegrante_jam', amount: 1 },
                { tag: 'c:foods/raw_beef', amount: 1 },
                { item: 'minecraft:potato', amount: 1 },
                { item: 'arsdelight:wilden_sauce', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}bombegrante_steak`
        },
        {
            item_outputs: [
                { item: 'arsdelight:frostaya_mutton', amount: 1 },
                { item: 'minecraft:glass_bottle', amount: 1 }
            ],
            item_inputs: [
                { item: 'ars_nouveau:frostaya_pod', amount: 1 },
                { item: 'arsdelight:neutralized_frostaya_jam', amount: 1 },
                { tag: 'c:foods/raw_mutton', amount: 1 },
                { tag: 'c:foods/onion', amount: 1 },
                { item: 'arsdelight:wilden_sauce', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}frostaya_mutton`
        },
        {
            item_outputs: [{ item: 'arsdelight:mendosteen_hornbeer', amount: 1 }],
            item_inputs: [
                { item: 'ars_nouveau:mendosteen_pod', amount: 2 },
                { item: 'arsdelight:cascading_bark', amount: 1 },
                { item: 'ars_nouveau:magebloom', amount: 1 },
                { item: 'ars_nouveau:sourceberry_bush', amount: 1 },
                { item: 'arsdelight:chimera_horn', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}mendosteen_hornbeer`
        },
        {
            item_outputs: [{ item: 'arsdelight:bastion_hornbeer', amount: 1 }],
            item_inputs: [
                { item: 'ars_nouveau:bastion_pod', amount: 2 },
                { item: 'arsdelight:flourishing_bark', amount: 1 },
                { item: 'ars_nouveau:magebloom', amount: 1 },
                { item: 'ars_nouveau:sourceberry_bush', amount: 1 },
                { item: 'arsdelight:chimera_horn', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}bastion_hornbeer`
        },
        {
            item_outputs: [{ item: 'arsdelight:frostaya_hornbeer', amount: 1 }],
            item_inputs: [
                { item: 'ars_nouveau:frostaya_pod', amount: 2 },
                { item: 'arsdelight:blazing_bark', amount: 1 },
                { item: 'ars_nouveau:magebloom', amount: 1 },
                { item: 'ars_nouveau:sourceberry_bush', amount: 1 },
                { item: 'arsdelight:chimera_horn', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}frostaya_hornbeer`
        },
        {
            item_outputs: [{ item: 'arsdelight:bombegrante_hornbeer', amount: 1 }],
            item_inputs: [
                { item: 'ars_nouveau:bombegranate_pod', amount: 2 },
                { item: 'arsdelight:vexing_bark', amount: 1 },
                { item: 'ars_nouveau:magebloom', amount: 1 },
                { item: 'ars_nouveau:sourceberry_bush', amount: 1 },
                { item: 'arsdelight:chimera_horn', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}bombegrante_hornbeer`
        },
        {
            item_outputs: [{ item: 'arsdelight:source_berry_hornbeer', amount: 1 }],
            item_inputs: [
                { item: 'ars_nouveau:sourceberry_bush', amount: 3 },
                { tag: 'arsdelight:barks', amount: 1 },
                { item: 'ars_nouveau:magebloom', amount: 1 },
                { item: 'arsdelight:chimera_horn', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}source_berry_hornbeer`
        },
        {
            item_outputs: [{ item: 'arsdelight:wilden_stew', amount: 1 }],
            item_inputs: [
                { tag: 'arsdelight:raw_wilden_meat', amount: 1 },
                { tag: 'c:foods/tomato', amount: 1 },
                { tag: 'c:foods/onion', amount: 1 },
                { tag: 'c:foods/cabbage', amount: 1 },
                { item: 'arsdelight:wilden_horn_powder', amount: 1 },
                { item: 'minecraft:bowl', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}wilden_stew`
        },
        {
            item_outputs: [
                { item: 'arsdelight:arch_sauce', amount: 1 },
                { item: 'minecraft:glass_bottle', amount: 4 }
            ],
            item_inputs: [
                { item: 'arsdelight:neutralized_frostaya_jam', amount: 1 },
                { item: 'arsdelight:neutralized_bombegrante_jam', amount: 1 },
                { item: 'arsdelight:activated_bastion_jam', amount: 1 },
                { item: 'arsdelight:activated_mendosteen_jam', amount: 1 },
                { item: 'ars_nouveau:sourceberry_bush', amount: 1 },
                { item: 'minecraft:bowl', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}arch_sauce`
        },
        {
            item_outputs: [
                { item: 'arsdelight:honey_glazed_chimera', amount: 1 },
                { item: 'minecraft:glass_bottle', amount: 1 }
            ],
            item_inputs: [
                { item: 'arsdelight:chimera_meat', amount: 1 },
                { item: 'farmersdelight:rice', amount: 1 },
                { item: 'arsdelight:arch_sauce', amount: 1 },
                { item: 'minecraft:honey_bottle', amount: 1 },
                { item: 'ars_nouveau:sourceberry_bush', amount: 1 },
                { item: 'minecraft:glow_berries', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}honey_glazed_chimera`
        },

        {
            item_outputs: [{ item: 'arsdelight:mendosteen_jelly', amount: 1 }],
            item_inputs: [
                { item: 'ars_nouveau:mendosteen_pod', amount: 2 },
                { item: 'arsdelight:flourishing_bark', amount: 1 },
                { item: 'ars_nouveau:sourceberry_bush', amount: 1 },
                { item: 'minecraft:slime_ball', amount: 1 },
                { tag: 'c:sugars', amount: 1 },
                { item: 'minecraft:bowl', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}mendosteen_jelly`
        },
        {
            item_outputs: [{ item: 'arsdelight:bastion_jelly', amount: 1 }],
            item_inputs: [
                { item: 'ars_nouveau:bastion_pod', amount: 2 },
                { item: 'arsdelight:vexing_bark', amount: 1 },
                { item: 'ars_nouveau:sourceberry_bush', amount: 1 },
                { item: 'minecraft:slime_ball', amount: 1 },
                { tag: 'c:sugars', amount: 1 },
                { item: 'minecraft:bowl', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}bastion_jelly`
        },
        {
            item_outputs: [{ item: 'arsdelight:bombegrante_jelly', amount: 1 }],
            item_inputs: [
                { item: 'ars_nouveau:bombegranate_pod', amount: 2 },
                { item: 'arsdelight:blazing_bark', amount: 1 },
                { item: 'ars_nouveau:sourceberry_bush', amount: 1 },
                { item: 'minecraft:slime_ball', amount: 1 },
                { tag: 'c:sugars', amount: 1 },
                { item: 'minecraft:bowl', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}bombegrante_jelly`
        },
        {
            item_outputs: [{ item: 'arsdelight:frostaya_jelly', amount: 1 }],
            item_inputs: [
                { item: 'ars_nouveau:frostaya_pod', amount: 2 },
                { item: 'arsdelight:cascading_bark', amount: 1 },
                { item: 'ars_nouveau:sourceberry_bush', amount: 1 },
                { item: 'minecraft:slime_ball', amount: 1 },
                { tag: 'c:sugars', amount: 1 },
                { item: 'minecraft:bowl', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}frostaya_jelly`
        },
        {
            item_outputs: [{ item: 'arsdelight:source_berry_jelly', amount: 1 }],
            item_inputs: [
                { item: 'arsdelight:source_berry_jam', amount: 3 },
                { item: 'minecraft:slime_ball', amount: 1 },
                { item: 'minecraft:bowl', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}source_berry_jelly`
        },
        {
            item_outputs: [
                { item: 'arsdelight:source_berry_cupcake', amount: 4 },
                { item: 'minecraft:glass_bottle', amount: 1 },
                { item: 'minecraft:bowl', amount: 1 }
            ],
            item_inputs: [
                { item: 'arsdelight:arch_sauce', amount: 1 },
                { item: 'ars_nouveau:sourceberry_bush', amount: 1 },
                { tag: 'c:eggs', amount: 1 },
                { tag: 'c:flours/wheat', amount: 2 },
                { item: 'farmersdelight:milk_bottle', amount: 1 },
                { item: 'minecraft:paper', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}source_berry_cupcake`
        },
        {
            item_outputs: [{ item: 'arsdelight:wilden_sauce', amount: 1 }],
            item_inputs: [
                { item: 'arsdelight:wilden_horn_powder', amount: 1 },
                { item: 'arsdelight:wilden_spike_powder', amount: 1 },
                { item: 'ars_nouveau:wilden_wing', amount: 1 },
                { item: 'occultism:tallow', amount: 1 },
                { item: 'minecraft:bowl', amount: 1 }
            ],
            duration: 10,
            eu: 16,
            id: `${id_prefix}wilden_sauce`
        },
        {
            item_outputs: [{ item: 'enigmatica:qulliq_vessel', amount: 1 }],
            item_inputs: [
                { item: 'enigmatica:borrowed_flame', amount: 1 },
                { item: 'occultism:tallow_block', amount: 16 },
                { item: 'farmersdelight:straw_bale', amount: 16 },
                { item: 'enigmatica:warded_vessel', amount: 1 }
            ],
            no_batch: true,
            duration: 10,
            eu: 5000,
            id: `${id_prefix}qulliq_vessel`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:industrial_cauldron';
        recipe.duration *= 20;

        if (!recipe.no_batch) {
            recipe.item_outputs = recipe.item_outputs.map((stack) => {
                stack.amount *= 64;
                return stack;
            });
            recipe.item_inputs = recipe.item_inputs.map((stack) => {
                stack.amount *= 64;
                return stack;
            });
        }

        event.custom(recipe).id(recipe.id);
    });
});
