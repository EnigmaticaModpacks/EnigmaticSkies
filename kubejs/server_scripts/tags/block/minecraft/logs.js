ServerEvents.tags('block', (event) => {
    let additions = [
        'malum:runewood_log',
        'malum:runewood',
        'malum:exposed_runewood_log',
        'malum:stripped_runewood_log',
        'malum:stripped_runewood',
        'malum:revealed_runewood_log'
    ];

    event.get('minecraft:logs').add(additions);
});
