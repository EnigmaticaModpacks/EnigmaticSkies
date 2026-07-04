ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:naturesaura/altar/';

    const recipes = [
        {
            output: { id: 'occultism:soul_gem' },
            input: { item: 'arsdelight:frostaya_jelly' },
            aura_multiplier: 250,
            time: 15,
            id: `${id_prefix}soul_gem`
        },
        {
            output: { id: 'minecraft:coal' },
            input: { item: 'minecraft:charcoal' },
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura_multiplier: 200,
            time: 4,
            id: `${id_prefix}coal`
        },
        {
            output: { id: 'minecraft:coal_block' },
            input: { item: AlmostUnified.getTagTargetItem(`c:storage_blocks/charcoal`).getId() },
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura_multiplier: 200,
            time: 24,
            id: `${id_prefix}coal_block`
        },
        {
            output: { id: 'minecraft:quartz' },
            input: { item: 'malum:blazing_quartz' },
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura_multiplier: 50,
            time: 4,
            id: `${id_prefix}quartz`
        },
        {
            output: { id: 'minecraft:sugar', count: 2 },
            input: { item: 'farmersdelight:rice' },
            catalyst: { item: 'naturesaura:crushing_catalyst' },
            aura_multiplier: 50,
            time: 1,
            id: `${id_prefix}sugar_from_rice`
        },
        {
            output: { id: 'enigmatica:ruby', count: 1 },
            input: { tag: 'c:dusts/ruby' },
            aura_multiplier: 100,
            time: 30,
            id: `${id_prefix}ruby`
        },
        {
            output: { id: 'minecraft:emerald', count: 1 },
            input: { tag: 'c:dusts/emerald' },
            aura_multiplier: 200,
            time: 30,
            id: `${id_prefix}emerald`
        },
        {
            output: { id: 'minecraft:nether_wart' },
            input: { item: 'occultism:datura' },
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura_multiplier: 200,
            time: 30,
            id: `${id_prefix}nether_wart`
        },
        {
            output: { id: 'malum:hallowed_gold_ingot' },
            input: { tag: 'c:ingots/gold' },
            aura_multiplier: 150,
            time: 4,
            id: `${id_prefix}hallowed_gold_ingot`
        },
        {
            output: { id: 'malum:block_of_hallowed_gold' },
            input: { tag: 'c:storage_blocks/gold' },
            aura_multiplier: 150,
            time: 24,
            id: `${id_prefix}block_of_hallowed_gold`
        },
        {
            output: { id: 'justdirethings:time_crystal' },
            input: { tag: 'c:gems/ender_crystal' },
            aura_multiplier: 250,
            time: 480,
            id: `${id_prefix}time_crystal`
        },
        {
            output: { id: 'minecraft:lily_pad' },
            input: { item: 'farmersdelight:cabbage_leaf' },
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura_multiplier: 200,
            time: 30,
            id: `${id_prefix}lily_pad`
        },
        {
            output: { id: 'arts_and_crafts:lotus_pistils' },
            input: { tag: 'enigmatica:spore_blossoms' },
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura_multiplier: 100,
            time: 2,
            id: `${id_prefix}lotus_pistils`
        },
        {
            output: { id: 'minecraft:vine' },
            input: { tag: 'c:ropes' },
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura_multiplier: 200,
            time: 30,
            id: `${id_prefix}vine`
        },
        {
            output: { id: 'minecraft:sugar_cane' },
            input: { item: 'minecraft:bamboo' },
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura_multiplier: 200,
            time: 30,
            id: `${id_prefix}sugar_cane`
        },
        {
            output: { id: 'minecraft:cocoa_beans' },
            input: { item: 'actuallyadditions:coffee_beans' },
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura_multiplier: 200,
            time: 30,
            id: `${id_prefix}cocoa_beans`
        },
        {
            output: { id: 'minecraft:ender_pearl' },
            input: { tag: 'c:dusts/grains_of_the_end' },
            aura_multiplier: 100,
            time: 2,
            id: `${id_prefix}ender_pearl`
        },
        {
            output: { id: 'minecraft:amethyst_shard' },
            input: { item: 'enigmatica:calcite_pebble' },
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura_multiplier: 50,
            time: 2,
            id: `${id_prefix}amethyst_shard`
        },
        {
            output: { id: 'minecraft:egg' },
            input: { item: 'ars_nouveau:bastion_pod' },
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura_multiplier: 50,
            time: 2,
            id: `${id_prefix}egg`
        },
        {
            output: { id: 'simplemagnets:advanced_demagnetization_coil' },
            input: { item: 'simplemagnets:basic_demagnetization_coil' },
            aura_multiplier: 50,
            time: 10,
            id: `${id_prefix}advanced_demagnetization_coil`
        },
        {
            output: { id: 'minecraft:red_sandstone', count: 1 },
            input: { item: 'minecraft:terracotta' },
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura_multiplier: 50,
            time: 2,
            id: `${id_prefix}red_sandstone`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:altar';
        recipe.time *= 20;

        // Aura Multiplier should be a value between 1 and 300.
        // 300 represents the most Aura the Altar can use per tick.

        recipe.aura = recipe.time * recipe.aura_multiplier;

        event.custom(recipe).id(recipe.id);
    });
});
