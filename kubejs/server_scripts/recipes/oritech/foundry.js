ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/foundry/';
    const recipes = [
        {
            results: [
                {
                    id: AlmostUnified.getTagTargetItem(`c:ingots/steel`).getId(),
                    count: 1
                }
            ],
            ingredients: [{ tag: 'c:ingots/iron' }, { tag: 'c:gems/coal' }],
            time: 300,
            id: `${id_prefix}steel_from_coal`
        },
        {
            results: [
                {
                    id: AlmostUnified.getTagTargetItem(`c:ingots/steel`).getId(),
                    count: 1
                }
            ],
            ingredients: [{ tag: 'c:gems/coal' }, { tag: 'c:ingots/iron' }],
            time: 300,
            id: `${id_prefix}steel_from_coal_inverse`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:foundry';
        event.custom(recipe).id(recipe.id);
    });
});
