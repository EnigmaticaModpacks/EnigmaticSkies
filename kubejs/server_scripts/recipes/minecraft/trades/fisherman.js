MoreJS.villagerTrades((event) => {
    // https://docs.almostreliable.com/morejs/villager-trades.html
    const profession = 'minecraft:fisherman';

    // Villagers have 2 trade slots per level and 5 total levels.
    const recipes = [
        {
            result: Item.of('aquaculture:goldfish', 9),
            ingredients: [TradeItem.of('farmersdelight:safety_net', 1), TradeItem.of('minecraft:baked_potato', 2, 4)],
            level: 1,
            villagerExperience: 10
        },
        {
            result: Item.of('minecraft:salmon', 9),
            ingredients: [TradeItem.of('farmersdelight:safety_net', 1), TradeItem.of('minecraft:baked_potato', 2, 4)],
            level: 1,
            villagerExperience: 10
        },
        {
            result: Item.of('aquaculture:red_shrooma', 9),
            ingredients: [
                TradeItem.of('farmersdelight:safety_net', 1),
                TradeItem.of('farmersdelight:salmon_roll', 2, 4)
            ],
            level: 2,
            villagerExperience: 20
        },
        {
            result: Item.of('aquaculture:brown_shrooma', 9),
            ingredients: [
                TradeItem.of('farmersdelight:safety_net', 1),
                TradeItem.of('farmersdelight:salmon_roll', 2, 4)
            ],
            level: 2,
            villagerExperience: 20
        }
    ];

    event.removeTrades({ professions: profession });
    recipes.forEach((recipe) => {
        event.addTrade(profession, recipe.level, recipe.ingredients, recipe.result).transform((offer) => {
            if (recipe.maxUses) offer.maxUses = recipe.maxUses;
            if (recipe.villagerExperience) offer.villagerExperience = recipe.villagerExperience;
        });
    });
});
