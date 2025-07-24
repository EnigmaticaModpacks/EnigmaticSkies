MoreJS.villagerTrades((event) => {
    // https://docs.almostreliable.com/morejs/villager-trades.html

    Object.keys(villager_trades).forEach((profession) => {
        event.removeTrades({ professions: profession });

        villager_trades[profession].forEach((recipe) => {
            let result = Item.of(recipe.result.id, recipe.result.count);
            let firstTrade = recipe.ingredients[0];
            let ingredients = [TradeItem.of(firstTrade.id, firstTrade.count.min, firstTrade.count.max)];

            if (recipe.ingredients[1]) {
                let secondTrade = recipe.ingredients[1];
                ingredients.push(TradeItem.of(secondTrade.id, secondTrade.count.min, secondTrade.count.max));
            }

            event.addTrade(profession, recipe.level, ingredients, result).transform((offer) => {
                if (recipe.maxUses) offer.maxUses = recipe.maxUses;
                if (recipe.villagerExperience) offer.villagerExperience = recipe.villagerExperience;
            });
        });
    });
});

MoreJS.updateOffer((event) => {
    // Remove Supplementaries trades that are injected at trade-refresh time.
    if (event.offer.firstCost.id.includes('supplementaries') || event.offer.output.id.includes('supplementaries')) {
        console.log('Blocked Supplementaries Injection!');
        return event.cancel();
    }
});
