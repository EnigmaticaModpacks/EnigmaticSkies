ServerEvents.tags('item', (event) => {
    let additions = ['#minecraft:axes', '#c:tools/paxel'];
    event.get('aether:golden_amber_harvesters').add(additions);
});
