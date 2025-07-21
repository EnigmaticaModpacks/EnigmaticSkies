MoreJS.villagerTrades((event) => {
    // https://docs.almostreliable.com/morejs/villager-trades.html

    // Villagers have 2 trade slots per level and 5 total levels.
    const recipes = [
        {
            result: Item.of('minecraft:carrot', 4),
            ingredients: [TradeItem.of('aether:golden_amber', 8, 12), TradeItem.of('farmersdelight:cabbage_crate', 1)],
            level: 1,
            villagerExperience: 10,
            maxUses: 1
        },
        {
            result: Item.of('minecraft:potato', 4),
            ingredients: [TradeItem.of('aether:golden_amber', 8, 12), TradeItem.of('farmersdelight:cabbage_crate', 1)],
            level: 1,
            villagerExperience: 10,
            maxUses: 1
        }
        // {
        //     result: Item.of('minecraft:cooked_beef', 4),
        //     ingredients: [TradeItem.of('aether:golden_amber', 8, 12), TradeItem.of('farmersdelight:cabbage_crate', 1)],
        //     level: 1
        //     // maxUses: 1
        // }
    ];

    event.removeTrades({ professions: 'minecraft:farmer' });
    event.removeModdedTypedTrades({ professions: 'minecraft:farmer' });

    recipes.forEach((recipe) => {
        event.addTrade('minecraft:farmer', recipe.level, recipe.ingredients, recipe.result).transform((offer) => {
            if (recipe.maxUses) offer.maxUses = recipe.maxUses;
            if (recipe.villagerExperience) offer.villagerExperience = recipe.villagerExperience;
        });
    });
});
