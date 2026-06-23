ServerEvents.tags('item', (event) => {
    let additions = {
        tier_1: ['ars_nouveau:source_berry_roll'],
        tier_2: ['arsdelight:activated_mendosteen_jam'],
        tier_3: ['arsdelight:mendosteen_pie', 'arsdelight:mendosteen_pie_slice'],
        tier_4: ['arsdelight:source_berry_cupcake']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`justdirethings:goo_revive_${tag}`).removeAll().add(additions[tag]);
    });
});
