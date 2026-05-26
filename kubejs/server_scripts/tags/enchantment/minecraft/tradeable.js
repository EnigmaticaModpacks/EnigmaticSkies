ServerEvents.tags('enchantment', (event) => {
    event.get('minecraft:tradeable').removeAll();
});
