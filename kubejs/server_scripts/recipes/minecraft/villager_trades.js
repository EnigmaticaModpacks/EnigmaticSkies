MoreJS.villagerTrades((event) => {
    // https://docs.almostreliable.com/morejs/villager-trades.html

    Object.keys(villager_trades).forEach((profession) => {
        event.removeTrades({ professions: profession });

        villager_trades[profession].forEach((recipe) => {
            let result = Item.of(recipe.result.id, recipe.result.count);
            let ingredients = [
                TradeItem.of(recipe.ingredients[0].id, recipe.ingredients[0].count[0], recipe.ingredients[0].count[1]),
                TradeItem.of(recipe.ingredients[1].id, recipe.ingredients[1].count[1], recipe.ingredients[1].count[1])
            ];

            event.addTrade(profession, recipe.level, ingredients, result).transform((offer) => {
                if (recipe.maxUses) offer.maxUses = recipe.maxUses;
                if (recipe.villagerExperience) offer.villagerExperience = recipe.villagerExperience;
            });
        });
    });
});
