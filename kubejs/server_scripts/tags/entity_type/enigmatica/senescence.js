ServerEvents.tags('entity_type', (event) => {
    let additions = [
        'minecraft:mooshroom',
        'minecraft:cow',
        'aether:flying_cow',
        'minecraft:pig',
        'aether:phyg',
        'minecraft:sheep',
        'aether:sheepuff',
        'minecraft:rabbit',
        'aether:aerbunny',
        'minecraft:chicken',
        'minecraft:goat'
    ];
    event.get('enigmatica:senescence').add(additions);
});
