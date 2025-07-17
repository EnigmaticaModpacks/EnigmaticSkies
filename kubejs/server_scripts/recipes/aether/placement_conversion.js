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
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'aether:placement_conversion';
        event.custom(recipe).id(recipe.id);
    });
});
