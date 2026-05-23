ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:malum/favor_of_the_void/';

    const recipes = [
        {
            result: { id: 'malum:runewood_sapling' },
            input: { item: 'ars_nouveau:green_archwood_sapling' },
            id: `${id_prefix}runewood_sapling`
        },
        {
            result: { id: 'malum:azure_runewood_sapling' },
            input: { item: 'ars_nouveau:blue_archwood_sapling' },
            id: `${id_prefix}azure_runewood_sapling`
        },
        {
            result: { id: 'malum:raw_soulstone' },
            input: { tag: 'c:ingots/neptunium' },
            id: `${id_prefix}raw_soulstone`
        },
        {
            result: { id: 'minecraft:crimson_fungus' },
            input: { item: 'minecraft:red_mushroom' },
            id: `${id_prefix}crimson_fungus`
        },
        {
            result: { id: 'minecraft:warped_fungus' },
            input: { item: 'minecraft:brown_mushroom' },
            id: `${id_prefix}warped_fungus`
        },
        {
            result: { id: 'oritech:wither_crop_block' },
            input: { item: 'minecraft:nether_wart' },
            id: `${id_prefix}wither_crop_block`
        },
        {
            result: { id: 'malum:anomalous_design' },
            input: { item: 'ae2:fluix_block' },
            id: `${id_prefix}anomalous_design`
        },
        {
            result: {
                type: 'neoforge:components',
                id: 'naturesaura:aura_bottle',
                components: { 'naturesaura:aura_bottle_data': { aura_type: 'naturesaura:end' } }
            },
            input: {
                type: 'neoforge:components',
                items: 'naturesaura:aura_bottle',
                components: { 'naturesaura:aura_bottle_data': { aura_type: 'naturesaura:overworld' } }
            },
            id: `${id_prefix}bottled_darkness`
        },
        {
            result: { id: 'occultism:eldritch_chalice' },
            input: { item: 'actuallyadditions:coffee_cup' },
            id: `${id_prefix}eldritch_chalice`
        },
        {
            result: { id: AlmostUnified.getTagTargetItem(`c:ingots/silver`).getId() },
            input: { tag: 'c:ingots/gold' },
            id: `${id_prefix}silver_ingot`
        },
        {
            result: { id: 'oritech:prometheum_ingot' },
            input: { item: 'industrialforegoing:infinity_nuke' },
            id: `${id_prefix}prometheum_ingot`
        },
        {
            result: { id: 'enderio:player_token' },
            input: { item: 'enderio:monster_token' },
            id: `${id_prefix}player_token`
        },
        {
            result: { id: 'occultism:otherstone' },
            input: { item: 'minecraft:diorite' },
            id: `${id_prefix}otherstone`
        },
        {
            result: { id: 'occultism:otherrock' },
            input: { item: 'minecraft:andesite' },
            id: `${id_prefix}otherrock`
        },
        {
            result: { id: 'occultism:otherworld_essence' },
            input: { item: 'occultism:demons_dream_essence' },
            id: `${id_prefix}otherworld_essence`
        },
        {
            result: { id: 'occultism:otherworld_sapling' },
            input: { item: 'malum:soulwood_sapling' },
            id: `${id_prefix}otherworld_sapling`
        },
        {
            result: { id: 'create:zinc_block' },
            input: { tag: 'c:ingots/ferricore' },
            id: `${id_prefix}zinc_block`
        }
    ];

    const aa_crystals = ['restonia', 'palis', 'diamatine', 'void', 'emeradic', 'enori'];

    aa_crystals.forEach((crystal) => {
        recipes.push(
            {
                result: { id: `actuallyadditions:empowered_${crystal}_crystal` },
                input: { tag: `c:gems/${crystal}` },
                id: `${id_prefix}empowered_${crystal}_crystal`
            },
            {
                result: { id: `actuallyadditions:empowered_${crystal}_crystal_block` },
                input: { tag: `c:storage_blocks/${crystal}` },
                id: `${id_prefix}empowered_${crystal}_crystal_block`
            }
        );
    });

    recipes.forEach((recipe) => {
        recipe.type = 'malum:void_favor';
        event.custom(recipe).id(recipe.id);
    });
});
