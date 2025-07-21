ServerEvents.tags('item', (event) => {
    event.get(`c:crops/flax`).remove('actuallyadditions:flax_seeds');
    event.get('c:crops').remove('actuallyadditions:flax_seeds');
});
