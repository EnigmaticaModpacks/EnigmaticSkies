ServerEvents.tags('item', (event) => {
    event.get('enigmatica:iou').add(/enigmatica:.*_iou$/);
});
