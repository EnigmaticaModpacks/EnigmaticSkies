ItemEvents.rightClicked((event) => {
    const { item } = event;
    if (item.id == 'minecraft:glass_bottle') event.cancel();
});

BlockEvents.rightClicked((event) => {
    const { block } = event;
    if (block.id.match(/mcw.*_kitchen_sink/)) event.cancel();
});
