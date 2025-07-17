ServerEvents.generateData('before_mods', (event) => {
    const carried_items = [
        {
            name: 'warm_stackables',
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
            temperature: 0.2 / 64,
            trait: 'core'
        },
        {
            name: 'hot_unstackables',
            item: {
                items: [
                    'enderio:fire_water_bucket',
                    'mekanism:superheated_sodium_bucket',
                    'mekanism:uranium_oxide_bucket',
                    'minecraft:lava_bucket'
                ]
            },
            slots: [{ min: 0, max: 44 }],
            temperature: 0.5,
            trait: 'core'
        },
        {
            name: 'cold_stackables',
            item: {
                items: ['#minecraft:snow', '#minecraft:ice', 'minecraft:snowball']
            },
            slots: [{ min: 0, max: 44 }],
            temperature: -0.1 / 64,
            trait: 'core'
        },
        {
            name: 'cold_unstackables',
            item: {
                items: ['justdirethings:time_fluid_bucket', 'starbunclemania:source_fluid_bucket']
            },
            slots: [{ min: 0, max: 44 }],
            temperature: -0.1,
            trait: 'core'
        }
    ];

    carried_items.forEach((carried_item) => {
        event.json(`enigmatica:cold_sweat/item/carried_temp/${carried_item.name}`, carried_item);
    });
});
