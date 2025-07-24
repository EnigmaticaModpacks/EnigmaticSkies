//priority: 1001

// Villagers have 2 trade slots per level and 5 total levels.
const villager_trades = {
    'minecraft:farmer': [
        {
            result: { id: 'minecraft:potato', count: 2 },
            ingredients: [
                { id: 'aether:golden_amber', count: { min: 8, max: 12 } },
                { id: 'minecraft:bread', count: { min: 8, max: 8 } }
            ],
            level: 1,
            villagerExperience: 10,
            maxUses: 1
        },
        {
            result: { id: 'minecraft:carrot', count: 2 },
            ingredients: [
                { id: 'aether:golden_amber', count: { min: 8, max: 12 } },
                { id: 'minecraft:bread', count: { min: 8, max: 8 } }
            ],
            level: 1,
            villagerExperience: 10,
            maxUses: 1
        },
        {
            result: { id: 'farmersdelight:onion', count: 2 },
            ingredients: [
                { id: 'aether:golden_amber', count: { min: 8, max: 12 } },
                { id: 'minecraft:bread', count: { min: 8, max: 8 } }
            ],
            level: 2,
            villagerExperience: 20,
            maxUses: 1
        },
        {
            result: { id: 'farmersdelight:rice', count: 2 },
            ingredients: [
                { id: 'aether:golden_amber', count: { min: 8, max: 12 } },
                { id: 'minecraft:bread', count: { min: 8, max: 8 } }
            ],
            level: 2,
            villagerExperience: 20,
            maxUses: 1
        }
    ],
    'minecraft:fisherman': [
        {
            result: { id: 'aquaculture:goldfish', count: 9 },
            ingredients: [
                { id: 'farmersdelight:safety_net', count: { min: 1, max: 1 } },
                { id: 'minecraft:baked_potato', count: { min: 2, max: 4 } }
            ],
            level: 1,
            villagerExperience: 10
        },
        {
            result: { id: 'minecraft:salmon', count: 9 },
            ingredients: [
                { id: 'farmersdelight:safety_net', count: { min: 1, max: 1 } },
                { id: 'minecraft:baked_potato', count: { min: 2, max: 4 } }
            ],
            level: 1,
            villagerExperience: 10
        },
        {
            result: { id: 'aquaculture:red_shrooma', count: 9 },
            ingredients: [
                { id: 'farmersdelight:safety_net', count: { min: 1, max: 1 } },
                { id: 'farmersdelight:barbecue_stick', count: { min: 2, max: 4 } }
            ],
            level: 2,
            villagerExperience: 20
        },
        {
            result: { id: 'aquaculture:brown_shrooma', count: 9 },
            ingredients: [
                { id: 'farmersdelight:safety_net', count: { min: 1, max: 1 } },
                { id: 'farmersdelight:barbecue_stick', count: { min: 2, max: 4 } }
            ],
            level: 2,
            villagerExperience: 20
        }
    ],
    'minecraft:shepherd': [
        {
            result: { id: 'ars_caelum:ritual_conjure_island_starter', count: 1 },
            ingredients: [
                { id: 'aether:golden_amber', count: { min: 8, max: 12 } },
                { id: 'minecraft:bread', count: { min: 8, max: 8 } }
            ],
            level: 1,
            villagerExperience: 10,
            maxUses: 1
        },
        {
            result: { id: 'enigmatica:flying_cow_iou', count: 1 },
            ingredients: [
                { id: 'farmersdelight:rope', count: { min: 8, max: 12 } },
                { id: 'farmersdelight:salmon_roll', count: { min: 8, max: 8 } }
            ],
            level: 1,
            villagerExperience: 10,
            maxUses: 1
        },
        {
            result: { id: 'enigmatica:sheepuff_iou', count: 1 },
            ingredients: [
                { id: 'farmersdelight:rope', count: { min: 8, max: 12 } },
                { id: 'farmersdelight:hamburger', count: { min: 8, max: 8 } }
            ],
            level: 2,
            villagerExperience: 20,
            maxUses: 1
        },
        {
            result: { id: 'enigmatica:phyg_iou', count: 1 },
            ingredients: [
                { id: 'farmersdelight:rope', count: { min: 8, max: 12 } },
                { id: 'farmersdelight:hamburger', count: { min: 8, max: 8 } }
            ],
            level: 2,
            villagerExperience: 20,
            maxUses: 1
        }
    ]
};
