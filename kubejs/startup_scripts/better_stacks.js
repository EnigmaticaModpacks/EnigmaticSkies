ItemEvents.modification((event) => {
    const betterStacks = [
        {
            size: 64,
            items: [
                /occultism:book_of_binding_(empty|foliot|djinni|afrit|marid)/,
                /enderio:.*_capacitor/,
                /arsdelight:.*_(jam|sauce|tea|jelly|cocktail|hornbeer|skewer)/,

                'aether:life_shard',

                'aquaculture:turtle_soup',

                'arsdelight:arch_soup',
                'arsdelight:bastion_pork',
                'arsdelight:bombegrante_steak',
                'arsdelight:bowl_of_honey_glazed_chimera',
                'arsdelight:bowl_of_wilden_salad',
                'arsdelight:frostaya_mutton',
                'arsdelight:mendosteen_chicken',
                'arsdelight:wilden_stew',

                'enderio:enderios',

                'farmersdelight:bacon_and_eggs',
                'farmersdelight:baked_cod_stew',
                'farmersdelight:beef_stew',
                'farmersdelight:bone_broth',
                'farmersdelight:chicken_soup',
                'farmersdelight:cooked_rice',
                'farmersdelight:dog_food',
                'farmersdelight:fish_stew',
                'farmersdelight:fried_rice',
                'farmersdelight:fruit_salad',

                'farmersdelight:apple_cider',
                'farmersdelight:glow_berry_custard',
                'farmersdelight:grilled_salmon',
                'farmersdelight:honey_glazed_ham',
                'farmersdelight:honey_glazed_ham_block',
                'farmersdelight:horse_feed',
                'farmersdelight:hot_cocoa',
                'farmersdelight:melon_juice',
                'farmersdelight:milk_bottle',
                'farmersdelight:mixed_salad',
                'farmersdelight:mushroom_rice',
                'farmersdelight:nether_salad',
                'farmersdelight:noodle_soup',
                'farmersdelight:pasta_with_meatballs',
                'farmersdelight:pasta_with_mutton_chop',
                'farmersdelight:pumpkin_soup',
                'farmersdelight:ratatouille',
                'farmersdelight:rice_roll_medley_block',
                'farmersdelight:roast_chicken',
                'farmersdelight:roast_chicken_block',
                'farmersdelight:roasted_mutton_chops',
                'farmersdelight:shepherds_pie',
                'farmersdelight:shepherds_pie_block',
                'farmersdelight:squid_ink_pasta',
                'farmersdelight:steak_and_potatoes',
                'farmersdelight:stuffed_pumpkin',
                'farmersdelight:stuffed_pumpkin_block',
                'farmersdelight:vegetable_noodles',
                'farmersdelight:vegetable_soup',
                'farmersdelight:onion_soup',

                'minecraft:armor_stand',
                'minecraft:beetroot_soup',
                'minecraft:bucket',
                'minecraft:cake',
                'minecraft:egg',
                'minecraft:ender_pearl',
                'minecraft:honey_bottle',
                'minecraft:mushroom_stew',
                'minecraft:rabbit_stew',
                'minecraft:saddle',
                'minecraft:snowball',
                'minecraft:suspicious_stew',

                'modern_industrialization:small_heat_exchanger',

                'oritech:heisenberg_compensator',

                'supplementaries:lumisene_bottle',

                'the_bumblezone:pollen_puff',

                //signs
                /(minecraft|supplementaries|occultism|farmersdelight|arts_and_crafts|framedblocks|aether):\w+_sign/,
                // shulker boxes
                /shulker_box/,
                // boats
                /(minecraft|aether|deeperdarker):\w+_boat/,
                // beds
                /minecraft:\w+_bed/,
                // banners
                /minecraft:\w+_banner/,
                /banner_pattern/,
                /actuallyadditions:.*_pattern$/,
                // minecarts
                /minecraft:(\w+)?minecart/,
                // music discs
                /music_disc/
            ]
        },
        {
            size: 1,
            items: ['oritech:small_tank_block']
        }
    ];

    betterStacks.forEach((stack) => {
        event.modify(stack.items, (item) => {
            item.maxStackSize = stack.size;
        });
    });
});
