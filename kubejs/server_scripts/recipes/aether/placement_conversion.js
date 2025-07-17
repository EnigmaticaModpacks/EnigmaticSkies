ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:aether/placement_conversion/';

    const recipes = [
        {
            ingredient: { block: 'minecraft:cobblestone' },
            result: { block: 'aether:icestone' },
            biome: '#aether:ultracold',
            id: `${id_prefix}icestone`
        },
        {
            ingredient: { block: 'minecraft:cobblestone_stairs' },
            result: { block: 'aether:icestone_stairs' },
            biome: '#aether:ultracold',
            id: `${id_prefix}icestone_stairs`
        },
        {
            ingredient: { block: 'minecraft:cobblestone_slab' },
            result: { block: 'aether:icestone_slab' },
            biome: '#aether:ultracold',
            id: `${id_prefix}icestone_slab`
        },
        {
            ingredient: { block: 'minecraft:cobblestone_wall' },
            result: { block: 'aether:icestone_wall' },
            biome: '#aether:ultracold',
            id: `${id_prefix}icestone_wall`
        },
        {
            ingredient: { block: 'minecraft:dirt' },
            result: { block: 'aether:aether_dirt' },
            biome: '#aether:ultracold',
            id: `${id_prefix}aether_dirt`
        },
        {
            ingredient: { block: 'minecraft:dirt_path' },
            result: { block: 'aether:aether_dirt_path' },
            biome: '#aether:ultracold',
            id: `${id_prefix}aether_dirt_path`
        },
        {
            ingredient: { block: 'minecraft:grass_block' },
            result: { block: 'aether:aether_grass_block' },
            biome: '#aether:ultracold',
            id: `${id_prefix}aether_grass_block`
        },
        {
            ingredient: { block: 'minecraft:farmland' },
            result: { block: 'aether:aether_farmland' },
            biome: '#aether:ultracold',
            id: `${id_prefix}aether_farmland`
        },
        {
            ingredient: { block: 'minecraft:sand' },
            result: { block: 'aether:cold_aercloud' },
            biome: '#aether:ultracold',
            id: `${id_prefix}cold_aercloud`
        },
        {
            ingredient: { block: 'minecraft:sandstone' },
            result: { block: 'aether:quicksoil' },
            biome: '#aether:ultracold',
            id: `${id_prefix}quicksoil`
        },
        {
            ingredient: { block: 'minecraft:mud' },
            result: { block: 'aether:aerogel' },
            biome: '#aether:ultracold',
            id: `${id_prefix}aerogel`
        },
        {
            ingredient: { block: 'the_bumblezone:super_candle_base', properties: { lit: 'true' } },
            result: { block: 'the_bumblezone:super_candle_base', properties: { lit: 'false' } },
            biome: '#aether:ultracold',
            id: `${id_prefix}the_bumblezone_super_candle_base`
        },
        {
            ingredient: { block: 'occultism:large_candle', properties: { lit: 'true' } },
            result: { block: 'occultism:large_candle', properties: { lit: 'false' } },
            biome: '#aether:ultracold',
            id: `${id_prefix}occultism_large_candle`
        },
        {
            ingredient: { block: 'supplementaries:candle_holder', properties: { lit: 'true' } },
            result: { block: 'supplementaries:candle_holder', properties: { lit: 'false' } },
            biome: '#aether:ultracold',
            id: `${id_prefix}supplementaries_candle_holder`
        }
    ];

    const materials = ['golden', 'copper', 'iron'];
    const mcw_types = ['low_candle', 'candle', 'wall_candle', 'double_candle', 'triple_candle'];

    materials.forEach((material) => {
        mcw_types.forEach((type) => {
            recipes.push({
                ingredient: { block: `mcwlights:${material}_${type}_holder`, properties: { lit: 'true' } },
                result: { block: `mcwlights:${material}_${type}_holder`, properties: { lit: 'false' } },
                biome: '#aether:ultracold',
                id: `${id_prefix}mcwlights_${material}_${type}_holder`
            });
        });
    });

    colors.forEach((color) => {
        recipes.push(
            {
                ingredient: { block: `supplementaries:candle_holder_${color}`, properties: { lit: 'true' } },
                result: { block: `supplementaries:candle_holder_${color}`, properties: { lit: 'false' } },
                biome: '#aether:ultracold',
                id: `${id_prefix}supplementaries_candle_holder_${color}`
            },
            {
                ingredient: { block: `occultism:large_candle_${color}`, properties: { lit: 'true' } },
                result: { block: `occultism:large_candle_${color}`, properties: { lit: 'false' } },
                biome: '#aether:ultracold',
                id: `${id_prefix}occultism_large_candle_${color}`
            },
            {
                ingredient: { block: `the_bumblezone:super_candle_base_${color}`, properties: { lit: 'true' } },
                result: { block: `the_bumblezone:super_candle_base_${color}`, properties: { lit: 'false' } },
                biome: '#aether:ultracold',
                id: `${id_prefix}the_bumblezone_super_candle_base_${color}`
            }
        );
    });

    recipes.forEach((recipe) => {
        recipe.type = 'aether:placement_conversion';
        event.custom(recipe).id(recipe.id);
    });
});
