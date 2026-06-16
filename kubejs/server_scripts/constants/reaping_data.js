//priority: 1001

const reapingData = [
    {
        registry_name: 'minecraft:breeze',
        drops: [{ ingredient: { item: 'malum:wind_nucleus' }, chance: '1.0', min: '1', max: '2' }]
    },
    {
        registry_name: 'aether:zephyr',
        drops: [{ ingredient: { item: 'malum:wind_nucleus' }, chance: '1.0', min: '1', max: '2' }]
    },

    // {
    //     registry_name: 'minecraft:enderman',
    //     drops: [{ ingredient: { item: 'malum:warp_flux' }, chance: '1.0', min: '1', max: '2' }]
    // },
    {
        registry_name: 'minecraft:shulker',
        drops: [{ ingredient: { item: 'malum:warp_flux' }, chance: '1.0', min: '1', max: '2' }]
    },

    // {
    //     registry_name: 'minecraft:ghast',
    //     drops: [{ ingredient: { item: 'malum:astral_weave' }, chance: '1.0', min: '1', max: '3' }]
    // },
    {
        registry_name: 'minecraft:phantom',
        drops: [{ ingredient: { item: 'malum:astral_weave' }, chance: '1.0', min: '1', max: '3' }]
    },

    {
        registry_name: 'minecraft:skeleton',
        drops: [{ ingredient: { item: 'malum:grim_talc' }, chance: '1.0', min: '1', max: '2' }]
    },
    {
        registry_name: 'minecraft:stray',
        drops: [{ ingredient: { item: 'malum:grim_talc' }, chance: '1.0', min: '1', max: '2' }]
    },
    {
        registry_name: 'minecraft:wither_skeleton',
        drops: [{ ingredient: { item: 'malum:grim_talc' }, chance: '1.0', min: '1', max: '2' }]
    },
    {
        registry_name: 'minecraft:bogged',
        drops: [{ ingredient: { item: 'malum:grim_talc' }, chance: '1.0', min: '1', max: '2' }]
    },

    {
        registry_name: 'minecraft:zoglin',
        drops: [{ ingredient: { item: 'malum:rotting_essence' }, chance: '1.0', min: '1', max: '2' }]
    },
    {
        registry_name: 'minecraft:zombie',
        drops: [{ ingredient: { item: 'malum:rotting_essence' }, chance: '1.0', min: '1', max: '2' }]
    },
    {
        registry_name: 'minecraft:zombie_villager',
        drops: [{ ingredient: { item: 'malum:rotting_essence' }, chance: '1.0', min: '1', max: '2' }]
    },
    {
        registry_name: 'minecraft:zombified_piglin',
        drops: [{ ingredient: { item: 'malum:rotting_essence' }, chance: '1.0', min: '1', max: '2' }]
    },
    {
        registry_name: 'minecraft:husk',
        drops: [{ ingredient: { item: 'malum:rotting_essence' }, chance: '1.0', min: '1', max: '2' }]
    },
    {
        registry_name: 'minecraft:drowned',
        drops: [{ ingredient: { item: 'malum:rotting_essence' }, chance: '1.0', min: '1', max: '2' }]
    },

    {
        registry_name: 'ars_elemental:flashing_weald_walker',
        drops: [{ ingredient: { item: 'farmersdelight:tree_bark' }, chance: '1.0', min: '16', max: '32' }]
    },
    {
        registry_name: 'ars_nouveau:flourishing_weald_walker',
        drops: [{ ingredient: { item: 'arsdelight:flourishing_bark' }, chance: '1.0', min: '16', max: '32' }]
    },
    {
        registry_name: 'ars_nouveau:blazing_weald_walker',
        drops: [{ ingredient: { item: 'arsdelight:blazing_bark' }, chance: '1.0', min: '16', max: '32' }]
    },
    {
        registry_name: 'ars_nouveau:cascading_weald_walker',
        drops: [{ ingredient: { item: 'arsdelight:cascading_bark' }, chance: '1.0', min: '16', max: '32' }]
    },
    {
        registry_name: 'ars_nouveau:vexing_weald_walker',
        drops: [{ ingredient: { item: 'arsdelight:vexing_bark' }, chance: '1.0', min: '16', max: '32' }]
    },

    {
        registry_name: 'ars_nouveau:wilden_hunter',
        drops: [{ ingredient: { item: 'ars_nouveau:wilden_horn' }, chance: '1.0', min: '2', max: '2' }]
    },
    {
        registry_name: 'ars_nouveau:wilden_guardian',
        drops: [{ ingredient: { item: 'ars_nouveau:wilden_spike' }, chance: '1.0', min: '2', max: '4' }]
    },
    {
        registry_name: 'ars_nouveau:wilden_stalker',
        drops: [{ ingredient: { item: 'ars_nouveau:wilden_wing' }, chance: '1.0', min: '2', max: '2' }]
    }
];

const essenceEntities = {};

reapingData.forEach((data) => {
    data.drops.forEach((entry) => {
        if (!essenceEntities[entry.ingredient.item]) essenceEntities[entry.ingredient.item] = [];
        essenceEntities[entry.ingredient.item].push(data.registry_name);
    });
});
