ServerEvents.tags('entity_type', (event) => {
    let additions = ['aether:aerbunny'];
    event.get('geneticsresequenced:allows_preventing_interaction').add(additions);
});
