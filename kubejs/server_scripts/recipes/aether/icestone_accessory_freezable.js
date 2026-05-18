ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:aether/freezing/';

    const recipes = [
        {
            result: { block: 'minecraft:ice' },
            ingredient: {
                block: 'minecraft:water',
                properties: { level: '0' }
            },
            id: `${id_prefix}ice`
        },
        {
            result: { block: 'minecraft:obsidian' },
            ingredient: {
                block: 'minecraft:lava',
                properties: { level: '0' }
            },
            id: `${id_prefix}obsidian`
        }
    ];

    recipes.forEach((recipe) => {
        let types = ['accessory_freezable', 'icestone_freezable'];

        types.forEach((type) => {
            recipe.type = `aether:${type}`;
            event.custom(recipe).id(`${type}_${recipe.id}`);
        });
    });
});
