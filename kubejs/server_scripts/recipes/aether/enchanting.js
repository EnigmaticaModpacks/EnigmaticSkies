ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:aether/enchanting/';

    const recipes = [
        {
            result: { id: 'aether:golden_oak_sapling', count: 1 },
            ingredient: { item: 'aether:skyroot_sapling' },
            category: 'enchanting_misc',
            cookingtime: 200,
            experience: 0.15,
            id: `${id_prefix}golden_oak_sapling`
        },
        {
            result: Item.of(
                'occultism:fragile_soul_gem[entity_data={id:"minecraft:villager",VillagerData:{type:"minecraft:snow"}}]'
            ).toJson(),
            ingredient: { item: 'supplementaries:statue' },
            category: 'enchanting_misc',
            cookingtime: 200,
            experience: 0.15,
            id: `${id_prefix}villager`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'aether:enchanting';
        event.custom(recipe).id(recipe.id);
    });
});
