ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:create/shapeless/';

    const recipes = [
        {
            output: 'create:cogwheel',
            inputs: ['create:shaft', '#c:gears/wood'],
            id: `create:crafting/kinetics/cogwheel`
        }
    ];

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);
    });
});
