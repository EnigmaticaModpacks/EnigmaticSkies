ServerEvents.tags('item', (event) => {
    let additions = {
        sandwich: [
            'farmersdelight:mutton_wrap',
            'farmersdelight:hamburger',
            'farmersdelight:egg_sandwich',
            'farmersdelight:chicken_sandwich',
            'farmersdelight:bacon_sandwich'
        ],
        soup: [
            'farmersdelight:chicken_soup',
            'farmersdelight:beef_stew',
            'farmersdelight:noodle_soup',
            'farmersdelight:baked_cod_stew',
            'farmersdelight:pumpkin_soup',
            'farmersdelight:fish_stew',
            'farmersdelight:onion_soup',
            'minecraft:rabbit_stew',
            'farmersdelight:vegetable_soup'
        ],
        drink: [
            'farmersdelight:hot_cocoa',
            'farmersdelight:melon_juice',
            'farmersdelight:apple_cider',
            'create:builders_tea'
        ],
        magic_drink: [
            'arsdelight:mendosteen_tea',
            'arsdelight:frostaya_tea',
            'arsdelight:bombegrante_tea',
            'arsdelight:bastion_tea',
            'arsdelight:flashpine_tea'
        ]
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`enigmatica:meal_ingredients/${tag}`).add(additions[tag]);
        event.get('enigmatica:meal_ingredients').add(additions[tag]);
    });
});
