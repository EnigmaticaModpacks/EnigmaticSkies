MoreJS.villagerTrades((event) => {
    // https://docs.almostreliable.com/morejs/villager-trades.html
    const profession = 'minecraft:shepherd';

    // Villagers have 2 trade slots per level and 5 total levels.
    const recipes = [
        {
            result: Item.of(
                'create:cardboard_package_10x12[create:package_contents=[{item:{count:4,id:"farmersdelight:onion"},slot:0},{item:{count:4,id:"minecraft:potato"},slot:1},{item:{count:4,id:"farmersdelight:rice"},slot:2},{item:{count:4,id:"minecraft:carrot"},slot:3}]]'
            ),
            ingredients: [
                TradeItem.of('aether:golden_amber', 8, 12),
                TradeItem.of('expandeddelight:cranberry_jelly', 8)
            ],
            level: 1,
            villagerExperience: 10,
            maxUses: 1
        }
    ];

    // event.removeTrades({ professions: profession });
    // recipes.forEach((recipe) => {
    //     event.addTrade(profession, recipe.level, recipe.ingredients, recipe.result).transform((offer) => {
    //         if (recipe.maxUses) offer.maxUses = recipe.maxUses;
    //         if (recipe.villagerExperience) offer.villagerExperience = recipe.villagerExperience;
    //     });
    // });
});
