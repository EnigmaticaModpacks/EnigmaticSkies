ServerEvents.tags('enchantment', (event) => {
    let exclusions = ['occultism:fracture_soul'];
    event.get('minecraft:on_mob_spawn_equipment').remove(exclusions);
});
