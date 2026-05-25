ServerEvents.tags('entity_type', (event) => {
    let additions = ['#enigmatica:senescence', 'c:villagers'];
    event.get('ars_nouveau:jar_blacklist').add([additions]);
});
