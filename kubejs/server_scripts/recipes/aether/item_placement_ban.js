ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:aether/item_placement_ban/';

    const recipes = [
        {
            ingredient: { tag: 'enigmatica:lantern' },
            biome: '#aether:ultracold',
            id: 'aether:lantern_item_ban'
        },
        {
            ingredient: { tag: 'enigmatica:torch' },
            biome: '#aether:ultracold',
            id: 'aether:torch_item_ban'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'aether:item_placement_ban';
        event.custom(recipe).id(recipe.id);
    });
});
