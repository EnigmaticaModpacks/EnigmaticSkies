ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:arts_and_crafts/shaped/';

    const recipes = [
        {
            output: '8x arts_and_crafts:soapstone',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'supplementaries:soap_block',
                B: '#c:essences/conjuration'
            },
            id: `${id_prefix}conjure_soapstone`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
