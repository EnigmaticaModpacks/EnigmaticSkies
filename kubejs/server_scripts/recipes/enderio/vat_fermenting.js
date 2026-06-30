ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:enderio/vat_fermenting/';

    const recipes = [
        {
            output: { id: 'enderio:fluid_liquid_darkness_still', amount: 8000 },
            input: { tag: 'theurgy:sal_ammoniac', amount: 500 },
            left_reagent: 'enigmatica:reagents/darkness',
            right_reagent: 'c:dusts/sky_stone',
            time: 5,
            id: `${id_prefix}fluid_liquid_darkness_still`
        },
        {
            output: { id: 'enderio:fluid_liquid_sunshine_still', amount: 8000 },
            input: { tag: 'theurgy:sal_ammoniac', amount: 500 },
            left_reagent: 'enigmatica:reagents/sunshine',
            right_reagent: 'c:dusts/sky_stone',
            time: 5,
            id: `${id_prefix}fluid_liquid_sunshine_still`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'enderio:vat_fermenting';
        recipe.ticks = recipe.time * 20;
        event.custom(recipe).id(recipe.id);
    });
});
