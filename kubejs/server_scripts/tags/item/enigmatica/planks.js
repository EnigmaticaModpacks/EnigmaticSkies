ServerEvents.tags('item', (event) => {
    let additions = ['#minecraft:planks', '#aether:planks_crafting'];
    event.get('enigmatica:planks').add(additions);
});
