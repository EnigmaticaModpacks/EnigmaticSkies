ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:aether/block_placement_ban/';

    const recipes = [
        {
            ingredient: { tag: 'enigmatica:lantern' },
            biome: '#aether:ultracold',
            id: 'aether:lantern_block_ban'
        },
        {
            ingredient: { tag: 'enigmatica:torch' },
            biome: '#aether:ultracold',
            id: 'aether:torch_block_ban'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'aether:block_placement_ban';
        event.custom(recipe).id(recipe.id);
    });
});
