// Replace farmersdelight:tree_bark output with minecraft:diamond in Create cutting recipes
ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:create/cutting/';

    const recipes = [];

    tree_registry.forEach((tree) => {
        if (tree.bark != 'farmersdelight:tree_bark') {
            recipes.push(
                {
                    results: [{ id: tree.stripped_wood }, { id: tree.bark }],
                    ingredients: [{ item: tree.wood }],
                    id: `${id_prefix}${tree.wood.split(':')[1]}_to_${tree.stripped_wood.split(':')[1]}`
                },
                {
                    results: [{ id: tree.stripped_log }, { id: tree.bark }],
                    ingredients: [{ item: tree.log }],
                    id: `${id_prefix}${tree.log.split(':')[1]}_to_${tree.stripped_log.split(':')[1]}`
                }
            );
        }
    });
    recipes.forEach((recipe) => {
        recipe.type = 'create:cutting';
        event.custom(recipe).id(recipe.id);
    });
});
