ServerEvents.tags('item', (event) => {
    let additions = {
        milk: ['aether:skyroot_milk_bucket']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`c:drinks/${tag}`).add(additions[tag]);
        event.get('c:drinks').add(additions[tag]);
    });
});
