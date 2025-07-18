ClientEvents.generateAssets('before_mods', (event) => {
    // https://github.com/emilyploszaj/emi/wiki/Adding-Recipes#adding-info-recipes

    const categories = [
        {
            id: 'emi_loot:chest_loot',
            options: { order: 10001 }
        },
        {
            id: 'emi_loot:block_drops',
            options: { order: 10002 }
        },
        {
            id: 'emi_loot:mob_drops',
            options: { order: 10003 }
        },
        {
            id: 'emi_loot:gameplay_drops',
            options: { order: 10004 }
        },
        {
            id: 'emi_loot:archaeology_drops',
            options: { order: 10005 }
        },
        {
            id: 'jearchaeology:brushing',
            options: { order: 10006 }
        },
        {
            id: 'jearchaeology:sniffing',
            options: { order: 10007 }
        }
    ];

    categories.forEach((category) => {
        let payload = {};
        payload[category.id] = category.options;
        event.json(`emi:category/properties/${category.id.replace(/\:/g, '_')}`, payload);
    });
});
