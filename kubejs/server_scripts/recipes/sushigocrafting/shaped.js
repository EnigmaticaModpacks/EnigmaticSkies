ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:sushigocrafting/shaped/';

    const recipes = [
        {
            output: `sushigocrafting:fermentation_barrel`,
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'aether:skyroot_planks',
                B: 'minecraft:furnace'
            },
            id: `sushigocrafting:fermentation_barrel`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
