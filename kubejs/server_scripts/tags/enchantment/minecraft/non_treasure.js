ServerEvents.tags('enchantment', (event) => {
    let exclusions = ['occultism:fracture_soul'];
    event.get('minecraft:non_treasure').remove(exclusions);
});
