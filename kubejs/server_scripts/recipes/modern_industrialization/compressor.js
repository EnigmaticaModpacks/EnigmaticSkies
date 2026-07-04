ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/compressor/';

    const recipes = [
        {
            item_outputs: { item: 'minecraft:diamond', amount: 1 },
            item_inputs: { item: 'minecraft:coal_block', amount: 1 },
            duration: 240,
            eu: 2,
            id: 'modern_industrialization:vanilla_recipes/compressor/diamond_from_coal'
        },
        {
            item_outputs: { item: 'pneumaticcraft:compressed_iron_block', amount: 1 },
            item_inputs: { tag: 'c:storage_blocks/ferricore', amount: 1 },
            duration: 80,
            eu: 2,
            id: `${id_prefix}compressed_iron_block`
        },
        {
            item_outputs: { item: 'pneumaticcraft:ingot_iron_compressed', amount: 1 },
            item_inputs: { tag: 'c:ingots/ferricore', amount: 1 },
            duration: 10,
            eu: 2,
            id: `${id_prefix}ingot_iron_compressed`
        },
        {
            item_outputs: { item: 'enigmatica:ruby', amount: 1 },
            item_inputs: { tag: 'c:dusts/ruby', amount: 1 },
            duration: 10,
            eu: 4,
            id: `${id_prefix}ruby`
        },
        {
            item_outputs: { item: 'minecraft:emerald', amount: 1 },
            item_inputs: { tag: 'c:dusts/emerald', amount: 1 },
            duration: 10,
            eu: 4,
            id: `${id_prefix}emerald`
        },
        {
            item_outputs: { item: 'minecraft:ender_pearl', amount: 1 },
            item_inputs: { tag: 'c:dusts/grains_of_the_end', amount: 1 },
            duration: 10,
            eu: 4,
            id: `${id_prefix}ender_pearl`
        },
        {
            item_outputs: { item: AlmostUnified.getTagTargetItem(`c:plates/brass`).getId(), amount: 1 },
            item_inputs: { tag: 'c:ingots/brass', amount: 1 },
            duration: 5,
            eu: 2,
            id: `${id_prefix}brass_plate`
        },
        {
            item_outputs: { item: 'modern_industrialization:andesite_alloy_plate', amount: 1 },
            item_inputs: { tag: 'c:ingots/andesite_alloy', amount: 1 },
            duration: 5,
            eu: 2,
            id: `${id_prefix}andesite_alloy_plate`
        },
        {
            item_outputs: { item: 'modern_industrialization:sky_plate', amount: 1 },
            item_inputs: { tag: 'c:ingots/sky', amount: 1 },
            duration: 5,
            eu: 2,
            id: `${id_prefix}sky_plate`
        },
        {
            item_outputs: { item: 'create:cardboard', amount: 1 },
            item_inputs: { item: 'create:pulp', amount: 1 },
            duration: 2,
            eu: 1,
            id: `${id_prefix}cardboard`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:compressor';
        recipe.duration *= 20;
        event.custom(recipe).id(recipe.id);
    });
});
