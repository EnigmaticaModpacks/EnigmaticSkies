ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:minecraft/shaped/';

    const recipes = [
        {
            output: 'minecraft:slime_block',
            pattern: ['AAA', 'AAA', 'AAA'],
            key: {
                A: 'actuallyadditions:rice_slimeball'
            },
            id: `${id_prefix}slime_block`
        },
        {
            output: 'minecraft:furnace',
            pattern: ['AAA', 'A A', 'BBB'],
            key: {
                A: 'aether:holystone',
                B: 'aether:holystone_bricks'
            },
            id: `minecraft:furnace`
        },
        {
            output: '8x minecraft:mud',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'aether:aether_dirt',
                B: '#c:buckets/water'
            },
            id: `${id_prefix}mud`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
