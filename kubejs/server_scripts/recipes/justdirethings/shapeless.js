ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:justdirethings/shapeless/';

    const recipes = [
        {
            output: Item.of('justdirethings:polymorphic_catalyst', 4),
            inputs: ['#c:ingots/blazegold', 'ars_nouveau:abjuration_essence'],
            id: `${id_prefix}polymorphic_catalyst`
        }
    ];

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);
    });
});
