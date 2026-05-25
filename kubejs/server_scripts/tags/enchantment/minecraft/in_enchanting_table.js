ServerEvents.tags('enchantment', (event) => {
    let exclusions = ['occultism:fracture_soul'];
    event.get('minecraft:in_enchanting_table').remove(exclusions);
});
