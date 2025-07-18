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
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
