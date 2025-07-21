ServerEvents.tags('block', (event) => {
    let additions = {
        hot: ['minecraft:lava', 'minecraft:fire', 'minecraft:lava_cauldron', 'minecraft:magma_block'],
        warm_lit: ['theurgy:pyromantic_brazier', 'aether:altar', 'minecraft:furnace'],
        cool_lit: ['aether:freezer']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`enigmatica:temperature/${tag}`).add(additions[tag]);
    });
});
