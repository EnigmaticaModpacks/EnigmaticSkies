ServerEvents.tags('block', (event) => {
    let additions = ['theurgy:pyromantic_brazier', 'aether:altar', 'minecraft:furnace'];
    event.get('enigmatica:temperature/warm_lit').add(additions);

    additions = ['aether:freezer'];
    event.get('enigmatica:temperature/cool_lit').add(additions);
});
