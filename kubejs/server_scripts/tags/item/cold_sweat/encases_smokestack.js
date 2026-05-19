ServerEvents.tags('item', (event) => {
    let additions = ['aether:holystone'];
    event.get('cold_sweat:encases_smokestack').add(additions);
});
