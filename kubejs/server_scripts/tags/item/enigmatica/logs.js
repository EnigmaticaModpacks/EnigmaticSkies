ServerEvents.tags('item', (event) => {
    let additions = ['#minecraft:logs', '#aether:skyroot_logs'];
    event.get('enigmatica:logs').add(additions);
});
