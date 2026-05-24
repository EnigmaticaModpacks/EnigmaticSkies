ServerEvents.generateData('after_mods', (event) => {
    const id_prefix = 'gateways:gateways/';

    const recipes = [
        { id: 'emerald_grove' },
        { id: 'hellish_fortress' },
        { id: 'overworldian_nights' },
        { id: 'basic/blaze' },
        { id: 'basic/enderman' },
        { id: 'basic/slime' },
        { id: 'endless/blaze' }
    ];

    recipes.forEach((recipe) => {
        event.json(`${id_prefix}${recipe.id}`, never_load);
    });
});
