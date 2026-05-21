ServerEvents.tags('entity_type', (event) => {
    let additions = ['ars_nouveau:alakarkinos'];
    event.get('c:capturing_not_supported').add(additions);
});
