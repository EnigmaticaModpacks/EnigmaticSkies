ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:functionalstorage/custom_compacting/';

    const recipes = [
        {
            higher_input: { id: 'ae2:quartz_block', count: 1 },
            lower_input: { id: 'ae2:certus_quartz_crystal', count: 4 },
            id: `${id_prefix}certus_quartz_crystal_to_quartz_block`
        },
        {
            higher_input: { id: 'minecraft:snow_block', count: 1 },
            lower_input: { id: 'minecraft:snowball', count: 4 },
            id: `${id_prefix}snowball_to_snow_block`
        },
        {
            higher_input: { id: 'minecraft:moss_block', count: 2 },
            lower_input: { id: 'minecraft:moss_carpet', count: 3 },
            id: `${id_prefix}moss_carpet_to_moss_block`
        },
        {
            higher_input: { id: 'actuallyadditions:black_quartz_block', count: 1 },
            lower_input: { id: 'actuallyadditions:black_quartz', count: 4 },
            id: `${id_prefix}black_quartz_to_block`
        },
        {
            higher_input: { id: 'minecraft:copper_block', count: 1 },
            lower_input: { id: 'minecraft:copper_ingot', count: 9 },
            id: `${id_prefix}copper_ingot_to_copper_block`
        },
        {
            higher_input: { id: 'minecraft:copper_ingot', count: 1 },
            lower_input: { id: 'modern_industrialization:copper_nugget', count: 9 },
            id: `${id_prefix}copper_nugget_to_copper_ingot`
        },

        {
            higher_input: { id: 'malum:block_of_cthonic_gold', count: 1 },
            lower_input: { id: 'malum:cthonic_gold', count: 9 },
            id: `${id_prefix}cthonic_gold_to_block_of_cthonic_gold`
        },
        {
            higher_input: { id: 'malum:cthonic_gold', count: 1 },
            lower_input: { id: 'malum:cthonic_gold_fragment', count: 9 },
            id: `${id_prefix}cthonic_gold_fragment_to_cthonic_gold`
        },

        {
            higher_input: { id: 'malum:block_of_blazing_quartz', count: 1 },
            lower_input: { id: 'malum:blazing_quartz', count: 9 },
            id: `${id_prefix}block_of_blazing_quartz_to_blazing_quartz`
        },
        {
            higher_input: { id: 'malum:blazing_quartz', count: 1 },
            lower_input: { id: 'malum:blazing_quartz_fragment', count: 9 },
            id: `${id_prefix}blazing_quartz_to_blazing_quartz_fragment`
        },
        {
            higher_input: { id: 'minecraft:pumpkin', count: 1 },
            lower_input: { id: 'farmersdelight:pumpkin_slice', count: 4 },
            id: `${id_prefix}pumpkin_slice_to_block`
        },
        {
            higher_input: { id: 'farmersdelight:carrot_crate', count: 1 },
            lower_input: { id: 'minecraft:carrot', count: 9 },
            id: `${id_prefix}carrot_to_crate`
        },
        {
            higher_input: { id: 'farmersdelight:potato_crate', count: 1 },
            lower_input: { id: 'minecraft:potato', count: 9 },
            id: `${id_prefix}potato_to_crate`
        },
        {
            higher_input: { id: 'farmersdelight:beetroot_crate', count: 1 },
            lower_input: { id: 'minecraft:beetroot', count: 9 },
            id: `${id_prefix}beetroot_to_crate`
        },
        {
            higher_input: { id: 'farmersdelight:cabbage_crate', count: 1 },
            lower_input: { id: 'farmersdelight:cabbage', count: 9 },
            id: `${id_prefix}cabbage_to_crate`
        },
        {
            higher_input: { id: 'farmersdelight:tomato_crate', count: 1 },
            lower_input: { id: 'farmersdelight:tomato', count: 9 },
            id: `${id_prefix}tomato_to_crate`
        },
        {
            higher_input: { id: 'farmersdelight:onion_crate', count: 1 },
            lower_input: { id: 'farmersdelight:onion', count: 9 },
            id: `${id_prefix}onion_to_crate`
        },
        {
            higher_input: { id: 'farmersdelight:rice_bale', count: 1 },
            lower_input: { id: 'farmersdelight:rice_panicle', count: 9 },
            id: `${id_prefix}rice_panicle_to_bale`
        },
        {
            higher_input: { id: 'farmersdelight:rice_bag', count: 1 },
            lower_input: { id: 'farmersdelight:rice', count: 9 },
            id: `${id_prefix}rice_to_bag`
        },
        {
            higher_input: { id: 'farmersdelight:straw_bale', count: 1 },
            lower_input: { id: 'farmersdelight:straw', count: 9 },
            id: `${id_prefix}straw_to_bale`
        },
        {
            higher_input: { id: 'arsdelight:mendosteen_crate', count: 1 },
            lower_input: { id: 'ars_nouveau:mendosteen_pod', count: 9 },
            id: `${id_prefix}mendosteen_to_crate`
        },
        {
            higher_input: { id: 'arsdelight:bastion_crate', count: 1 },
            lower_input: { id: 'ars_nouveau:bastion_pod', count: 9 },
            id: `${id_prefix}bastion_to_crate`
        },
        {
            higher_input: { id: 'arsdelight:bombegrante_crate', count: 1 },
            lower_input: { id: 'ars_nouveau:bombegranate_pod', count: 9 },
            id: `${id_prefix}bombegranate_to_crate`
        },
        {
            higher_input: { id: 'arsdelight:frostaya_crate', count: 1 },
            lower_input: { id: 'ars_nouveau:frostaya_pod', count: 9 },
            id: `${id_prefix}frostaya_to_crate`
        },
        {
            higher_input: { id: 'arsdelight:flashpine_crate', count: 1 },
            lower_input: { id: 'ars_elemental:flashpine_pod', count: 9 },
            id: `${id_prefix}flashpine_to_crate`
        },
        {
            higher_input: { id: 'ars_nouveau:sourceberry_sack', count: 1 },
            lower_input: { id: 'ars_nouveau:sourceberry_bush', count: 9 },
            id: `${id_prefix}sourceberry_to_sack`
        },
        {
            higher_input: { id: 'minecraft:bamboo_block', count: 1 },
            lower_input: { id: 'minecraft:bamboo', count: 9 },
            id: `${id_prefix}bamboo_to_block`
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

        recipes.push({
            higher_input: { id: stone, count: 1 },
            lower_input: { id: `enigmatica:${pebble}_pebble`, count: 4 },
            id: `${id_prefix}${pebble}_pebble_to_${getID(stone)}`
        });
    });

    const crystals = ['restonia', 'palis', 'diamatine', 'void', 'emeradic', 'enori'];

    crystals.forEach((crystal) => {
        recipes.push(
            {
                higher_input: { id: `actuallyadditions:${crystal}_crystal_block`, count: 1 },
                lower_input: { id: `actuallyadditions:${crystal}_crystal`, count: 9 },
                id: `${id_prefix}${crystal}_crystal_to_block`
            },
            {
                higher_input: { id: `actuallyadditions:empowered_${crystal}_crystal_block`, count: 1 },
                lower_input: { id: `actuallyadditions:empowered_${crystal}_crystal`, count: 9 },
                id: `${id_prefix}empowered_${crystal}_crystal_to_block`
            }
        );
    });

    recipes.forEach((recipe) => {
        recipe.type = 'functionalstorage:custom_compacting';
        event.custom(recipe).id(recipe.id);
    });
});
