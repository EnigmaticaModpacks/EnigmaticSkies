ServerEvents.tags('block', (event) => {
    let additions = [/thesilverage:.*_grate/];
    event.get('create:fan_transparent').add(additions);
});
