ServerEvents.tags('enchantment', (event) => {
    let exclusions = ['occultism:fracture_soul', 'apothic_spawners:capturing', 'apothic_enchanting:boon_of_the_earth'];
    event.get('minecraft:in_enchanting_table').remove(exclusions);
});
