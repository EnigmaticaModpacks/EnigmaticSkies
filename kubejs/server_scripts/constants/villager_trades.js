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
            maxUses: 1
        },
        {
            result: { id: 'minecraft:carrot', count: 2 },
            ingredients: [
                { id: 'aether:golden_amber', count: { min: 8, max: 12 } },
                { id: 'minecraft:bread', count: { min: 8, max: 8 } }
            ],
            level: 1,
            maxUses: 1
        },
        {
            result: { id: 'farmersdelight:onion', count: 2 },
            ingredients: [
                { id: 'aether:golden_amber', count: { min: 8, max: 12 } },
                { id: 'minecraft:bread', count: { min: 8, max: 8 } }
            ],
            level: 2,
            maxUses: 1
        },
        {
            result: { id: 'farmersdelight:rice', count: 2 },
            ingredients: [
                { id: 'aether:golden_amber', count: { min: 8, max: 12 } },
                { id: 'minecraft:bread', count: { min: 8, max: 8 } }
            ],
            level: 2,
            maxUses: 1
        }
    ],
    'minecraft:fisherman': [
        {
            result: { id: 'aquaculture:goldfish', count: 9 },
            ingredients: [{ id: 'minecraft:baked_potato', count: { min: 2, max: 4 } }],
            level: 1
        },
        {
            result: { id: 'minecraft:salmon', count: 9 },
            ingredients: [{ id: 'minecraft:baked_potato', count: { min: 2, max: 4 } }],
            level: 1
        },
        {
            result: { id: 'aquaculture:red_shrooma', count: 9 },
            ingredients: [{ id: 'farmersdelight:barbecue_stick', count: { min: 2, max: 4 } }],
            level: 2
        },
        {
            result: { id: 'aquaculture:brown_shrooma', count: 9 },
            ingredients: [{ id: 'farmersdelight:barbecue_stick', count: { min: 2, max: 4 } }],
            level: 2
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
            maxUses: 1
        },
        {
            result: { id: 'enigmatica:flying_cow_iou', count: 1 },
            ingredients: [{ id: 'farmersdelight:salmon_roll', count: { min: 8, max: 8 } }],
            level: 1,
            maxUses: 4
        },
        {
            result: { id: 'enigmatica:sheepuff_iou', count: 1 },
            ingredients: [{ id: 'farmersdelight:hamburger', count: { min: 8, max: 8 } }],
            level: 2,
            maxUses: 4
        },
        {
            result: { id: 'enigmatica:phyg_iou', count: 1 },
            ingredients: [{ id: 'farmersdelight:hamburger', count: { min: 8, max: 8 } }],
            level: 2,
            maxUses: 4
        }
    ],
    'ars_nouveau:shady_wizard': [
        {
            result: { id: 'ars_additions:codex_entry', count: 1 },
            ingredients: [
                { id: 'ars_nouveau:blank_parchment', count: { min: 1, max: 1 } },
                { id: 'ars_nouveau:source_berry_roll', count: { min: 8, max: 12 } }
            ],
            level: 1
        },
        {
            result: { id: 'ars_additions:lost_codex_entry', count: 1 },
            ingredients: [
                { id: 'ars_nouveau:blank_parchment', count: { min: 1, max: 1 } },
                { id: 'arsdelight:source_berry_cupcake', count: { min: 8, max: 12 } }
            ],
            level: 3
        },
        {
            result: { id: 'ars_additions:ancient_codex_entry', count: 1 },
            ingredients: [
                { id: 'ars_nouveau:blank_parchment', count: { min: 1, max: 1 } },
                { id: 'arsdelight:source_berry_hornbeer', count: { min: 8, max: 12 } }
            ],
            level: 5
        }
    ]
};
