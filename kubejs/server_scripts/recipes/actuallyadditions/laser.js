ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:actuallyadditions/laser/';

    const recipes = [
        {
            result: { id: 'minecraft:moss_block' },
            ingredient: { item: 'minecraft:mud' },
            energy: 4500,
            id: `${id_prefix}moss_block`
        },
        {
            result: { id: 'minecraft:glowstone' },
            ingredient: { item: 'minecraft:netherrack' },
            energy: 4500,
            id: `${id_prefix}glowstone`
        },
        {
            result: { id: 'minecraft:quartz' },
            ingredient: { item: 'malum:blazing_quartz' },
            energy: 4500,
            id: `${id_prefix}quartz`
        },
        {
            result: { id: 'minecraft:ochre_froglight' },
            ingredient: { item: 'minecraft:honey_block' },
            energy: 4500,
            id: `${id_prefix}ochre_froglight`
        },
        {
            result: { id: 'minecraft:verdant_froglight' },
            ingredient: { item: 'minecraft:slime_block' },
            energy: 4500,
            id: `${id_prefix}verdant_froglight`
        },
        {
            result: { id: 'minecraft:pearlescent_froglight' },
            ingredient: { item: 'industrialforegoing:pink_slime_block' },
            energy: 4500,
            id: `${id_prefix}pearlescent_froglight`
        },
        {
            result: { id: 'minecraft:red_sandstone' },
            ingredient: { item: 'minecraft:terracotta' },
            energy: 4500,
            id: `${id_prefix}red_sandstone`
        },
        {
            result: { id: AlmostUnified.getTagTargetItem('c:nuggets/brass').getId() },
            ingredient: { item: 'aquaculture:neptunium_nugget' },
            energy: 100,
            id: `${id_prefix}brass_nugget_from_neptunium`
        },
        {
            result: { id: AlmostUnified.getTagTargetItem('c:ingots/brass').getId() },
            ingredient: { item: 'aquaculture:neptunium_ingot' },
            energy: 800,
            id: `${id_prefix}brass_ingot_from_neptunium`
        },
        {
            result: { id: AlmostUnified.getTagTargetItem('c:storage_blocks/brass').getId() },
            ingredient: { item: 'aquaculture:neptunium_block' },
            energy: 6400,
            id: `${id_prefix}brass_block_from_neptunium`
        },
        {
            result: { id: 'actuallyadditions:ethetic_green_block' },
            ingredient: { item: 'malum:earthen_spirited_glass' },
            energy: 4500,
            id: `${id_prefix}ethetic_green_block`
        },
        {
            result: { id: 'actuallyadditions:ethetic_white_block' },
            ingredient: { item: 'malum:aerial_spirited_glass' },
            energy: 4500,
            id: `${id_prefix}ethetic_white_block`
        }
    ];

    let conversions = [
        {
            set: ['create:crimsite', 'create:ochrum', 'create:veridium', 'create:asurine']
        },
        {
            set: ['arts_and_crafts:soapstone', 'arts_and_crafts:gypsum', 'create:limestone']
        },
        {
            set: [
                'minecraft:sandstone',
                'arts_and_crafts:cobbled_ochre_pietraforte',
                'arts_and_crafts:cobbled_verdant_pietraforte'
            ]
        },
        {
            set: ['minecraft:pitcher_plant', 'minecraft:blue_orchid', 'minecraft:cornflower', 'aether:purple_flower']
        },
        {
            set: ['minecraft:allium', 'minecraft:pink_tulip', 'minecraft:peony', 'minecraft:lilac']
        },
        {
            set: [
                'minecraft:torchflower',
                'minecraft:sunflower',
                'minecraft:dandelion',
                'minecraft:orange_tulip',
                'minecraft:red_tulip',
                'minecraft:poppy',
                'minecraft:rose_bush'
            ]
        },
        {
            set: [
                'minecraft:pink_petals',
                'aether:white_flower',
                'minecraft:white_tulip',
                'minecraft:azure_bluet',
                'minecraft:lily_of_the_valley',
                'minecraft:oxeye_daisy'
            ]
        }
    ];

    conversions.forEach((conversion) => {
        conversion.set.forEach((block, i) => {
            let previous_block = conversion.set.slice(i - 1)[0];
            recipes.push({
                result: { id: block },
                ingredient: { item: previous_block },
                energy: 500,
                id: `${id_prefix}${getID(block)}_from_${getID(previous_block)}`
            });
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'actuallyadditions:laser';
        event.custom(recipe).id(recipe.id);
    });
});
