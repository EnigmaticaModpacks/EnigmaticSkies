ServerEvents.tags('enchantment', (event) => {
    event.get('minecraft:on_random_loot').removeAll();
});
