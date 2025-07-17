ServerEvents.tags('item', (event) => {
    let additions = [
        '#chipped:lantern',
        /mcwlights:.*wall_lanterns/,
        'mcwbridges:bridge_lantern',
        'framedblocks:framed_lantern'
    ];
    event.get('enigmatica:lantern').add(additions);
});
