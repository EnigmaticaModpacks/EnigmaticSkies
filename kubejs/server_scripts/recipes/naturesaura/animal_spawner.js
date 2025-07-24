ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:naturesaura/animal_spawner/';

    const recipes = [
        {
            entity: 'aether:flying_cow',
            ingredients: [{ item: 'enigmatica:flying_cow_iou' }],
            aura: 5000,
            time: 40,
            id: `${id_prefix}flying_cow`
        },
        {
            entity: 'aether:phyg',
            ingredients: [{ item: 'enigmatica:phyg_iou' }],
            aura: 5000,
            time: 40,
            id: `${id_prefix}phyg`
        },
        {
            entity: 'aether:sheepuff',
            ingredients: [{ item: 'enigmatica:sheepuff_iou' }],
            aura: 5000,
            time: 40,
            id: `${id_prefix}sheepuff`
        },
        {
            entity: 'minecraft:goat',
            ingredients: [{ item: 'enigmatica:goat_iou' }],
            aura: 5000,
            time: 40,
            id: `${id_prefix}goat`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:animal_spawner';
        event.custom(recipe).id(recipe.id);
    });
});
