MoreJS.villagerTrades((event) => {
    // https://docs.almostreliable.com/morejs/villager-trades.html

    const recipes = [
        {
            ingredients: [Item.of('farmersdelight:mixed_salad'), Item.of('aether:golden_amber', 8)],
            level: 1,
            result: 'minecraft:potato'
        },
        {
            ingredients: [Item.of('farmersdelight:mixed_salad'), Item.of('aether:golden_amber', 8)],
            level: 1,
            result: 'minecraft:carrot'
        }
    ];

    event.removeTrades({ professions: 'minecraft:farmer' });
    recipes.forEach((recipe) => {
        event.addTrade('minecraft:farmer', recipe.level, recipe.ingredients, recipe.result);
    });
});
