ServerEvents.generateData('before_mods', (event) => {
    const carried_items = [
        {
            name: 'warm_items',
            item: {
                items: [
                    '#c:rods/blaze',
                    '#c:dusts/blaze',
                    '#chipped:magma_blocks',
                    'minecraft:magma_block',
                    'minecraft:magma_cream'
                ]
            },
            slots: [{ min: 0, max: 44 }],
            temperature: 0.3,
            trait: 'core'
        },
        {
            name: 'hot_items',
            item: {
                items: [
                    'enderio:fire_water_bucket',
                    'mekanism:superheated_sodium_bucket',
                    'mekanism:uranium_oxide_bucket',
                    'minecraft:lava_bucket'
                ]
            },
            slots: [{ min: 0, max: 44 }],
            temperature: 1,
            trait: 'core'
        },
        {
            name: 'cold_items',
            slots: [{ min: 0, max: 44 }],
            temperature: -0.5,
            trait: 'core',
            item: {
                items: [
                    '#minecraft:snow',
                    '#minecraft:ice',
                    'justdirethings:time_fluid_bucket',
                    'minecraft:snowball',
                    'starbunclemania:source_fluid_bucket'
                ]
            }
        }
    ];

    carried_items.forEach((carried_item) => {
        event.json(`enigmatica:cold_sweat/item/carried_temp/${carried_item.name}`, carried_item);
    });
});
