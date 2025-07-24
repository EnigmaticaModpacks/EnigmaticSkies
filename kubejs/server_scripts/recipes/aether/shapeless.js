ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:actuallyadditions/shapeless/';

    const recipes = [
        {
            output: 'aether:skyroot_water_bucket',
            inputs: ['theurgy:crystallized_water', 'aether:skyroot_bucket'],
            id: `${id_prefix}skyroot_water_bucket_from_crystallized_water`
        },
        {
            output: 'aether:skyroot_water_bucket',
            inputs: ['ars_nouveau:water_essence', 'aether:skyroot_bucket'],
            id: `${id_prefix}skyroot_water_bucket_from_water_essence`
        }
    ];

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);
    });
});
