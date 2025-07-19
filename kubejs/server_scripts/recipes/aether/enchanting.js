ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:aether/enchanting/';

    const recipes = [
        {
            ingredient: { item: 'minecraft:mud' },
            result: { id: 'minecraft:clay', count: 1 },
            category: 'enchanting_blocks',
            cookingtime: 200,
            experience: 0.15,
            id: `${id_prefix}icestone`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'aether:enchanting';
        event.custom(recipe).id(recipe.id);
    });
});
