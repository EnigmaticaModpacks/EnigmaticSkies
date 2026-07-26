ServerEvents.tags('item', (event) => {
    let additions = {
        durability: ['#c:tools/knife'],
        vanishing: ['#c:tools/knife'],
        armor: ['minecraft:wolf_armor'],
        sword: ['#c:tools/knife', '#malum:scythe'],
        weapon: ['#c:tools/knife', '#malum:scythe'],
        sharp_weapon: ['#c:tools/knife', '#malum:scythe'],
        fire_aspect: ['#c:tools/knife']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`minecraft:enchantable/${tag}`).add(additions[tag]);
    });
});
