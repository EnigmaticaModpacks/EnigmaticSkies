ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:smelting/';
    const recipes = [
        {
            output: 'supplementaries:ash',
            input: Ingredient.of(['#aether:planks_crafting', '#minecraft:planks']),
            xp: 0.7,
            cookingTime: 200,
            id: `${id_prefix}ash`
        }
    ];

    // const materials = ['copper', 'gold', 'iron', 'nickel', 'zinc', 'steel'];

    // materials.forEach((material) => {
    // recipes.push({
    //     output: AlmostUnified.getTagTargetItem(`c:ingots/${material}`).getId(),
    //     input: `#c:dusts/${material}`,
    //     xp: 0.7,
    //     cookingTime: 200,
    //     id: `${id_prefix}${material}_ingot`
    // });
    // });

    recipes.forEach((recipe) => {
        event.smelting(recipe.output, recipe.input, recipe.xp, recipe.cookingTime).id(recipe.id);
    });
});
