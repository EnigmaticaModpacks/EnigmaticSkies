ServerEvents.tags('block', (event) => {
    let additions = [/.*/];
    event.get('aether:aechor_plant_spawnable_on').add(additions);
});
