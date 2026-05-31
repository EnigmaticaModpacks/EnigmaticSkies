// Item Requirements: https://mikul.gitbook.io/cold-sweat/datapacks/requirements/item-requirement
// Item Config: https://mikul.gitbook.io/cold-sweat/datapacks/item-configs#item-temperature

ServerEvents.generateData('before_mods', (event) => {
    const recipes = [
        {
            name: 'warm',
            item: { items: ['#enigmatica:warm'] },
            slots: ['hand', 'hotbar', 'inventory'],
            temperature: 0.4,
            trait: 'world'
        },
        {
            name: 'hot',
            item: { items: ['#enigmatica:hot'] },
            slots: ['hand', 'hotbar', 'inventory'],
            temperature: 3.0,
            trait: 'world'
        },
        {
            name: 'super_hot',
            item: { items: ['#enigmatica:super_hot'] },
            slots: ['hand', 'hotbar', 'inventory'],
            temperature: 6.0,
            trait: 'world'
        },
        {
            name: 'chilled',
            item: { items: ['#enigmatica:chilled'] },
            slots: ['hand', 'hotbar', 'inventory'],
            temperature: -0.2,
            trait: 'world'
        },
        {
            name: 'cold',
            item: { items: ['#enigmatica:cold'] },
            slots: ['hand', 'hotbar', 'inventory'],
            temperature: -1.6,
            trait: 'world'
        },
        {
            name: 'super_cold',
            item: { items: ['#enigmatica:super_cold'] },
            slots: ['hand', 'hotbar', 'inventory'],
            temperature: -4.0,
            trait: 'world'
        }
    ];

    recipes.forEach((recipe) => {
        event.json(`enigmatica:cold_sweat/item/item_temp/${recipe.name}`, recipe);
    });
});
