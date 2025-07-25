//priority: 900
StartupEvents.registry('item', (event) => {
    const metals = [
        'aluminum',
        'copper',
        'gold',
        'iesnium',
        'iridium',
        'iron',
        'lead',
        'nickel',
        'osmium',
        'platinum',
        'silver',
        'tin',
        'uranium',
        'zinc'
    ];

    metals.forEach((metal) => {
        event.create(`emendatusenigmatica:${metal}_clump`).texture(`emendatusenigmatica:item/${metal}_clump`);
        event.create(`emendatusenigmatica:${metal}_crystal`).texture(`emendatusenigmatica:item/${metal}_crystal`);
        event.create(`emendatusenigmatica:dirty_${metal}_dust`).texture(`emendatusenigmatica:item/dirty_${metal}_dust`);
        event.create(`emendatusenigmatica:${metal}_shard`).texture(`emendatusenigmatica:item/${metal}_shard`);
        event.create(`emendatusenigmatica:${metal}_dust`).texture(`emendatusenigmatica:item/${metal}_dust`);
    });

    // const ritualDummies = [
    //     {
    //         id: 'occultism:ritual_dummy/misc_eldritch_manuscript',
    //         type: 'misc',
    //         tooltip: 'Obtain an Eldritch Manuscript at the small cost of your sanity.'
    //     },
    //     {
    //         id: 'occultism:ritual_dummy/craft_archevoker_logbook_translated',
    //         type: 'craft',
    //         tooltip: 'Request the aid of a Djinni in translating the Logbook'
    //     }
    // ];

    // ritualDummies.forEach((item) => {
    //     event.create(item.id, 'occultism:ritual_dummy').pentacleType(item.type).ritualTooltip(item.tooltip);
    // });

    const IOU_slips = [
        { name: 'Flying Cow', layer: 'beef' },
        { name: 'Phyg', layer: 'porkchop' },
        { name: 'Sheepuff', layer: 'mutton' },
        { name: 'Goat', layer: 'goat_fur' }
    ];

    IOU_slips.forEach((slip) => {
        let item_id = `enigmatica:${String(slip.name).toLowerCase().replace(' ', '_')}_iou`;
        event
            .create(item_id)
            .displayName(`§6IOU:§r 1x ${slip.name}`)
            .texture('layer0', 'minecraft:item/paper')
            .texture('layer1', `enigmatica:item/${slip.layer}`)
            .color(0, '#f2e1a5')
            // .color(1, '#00FFF0')
            .tooltip(`§5May be exchanged for a ${slip.name}`);
    });

    event
        .create(`enigmatica:poutine`)
        .texture(`enigmatica:item/poutine`)
        .displayName('Poutine')
        .maxStackSize(64)
        .useAnimation('eat')
        .food((food) => {
            food.nutrition(8).saturation(8 / 7.5); // Final saturation is nutrition * saturation... Shenanigans.
        });
});
