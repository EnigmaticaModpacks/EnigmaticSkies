//priority: 1001

const statue_conversions = {
    'handcrafted:witch_trophy': {
        mobID: 'minecraft:witch',
        mobData: {
            PatrolLeader: 0,
            CustomName: '{"color":"gold","translate":"entity.enigmatica.clockwork_witch"}',
            DeathLootTable: 'enigmatica:statue_tokens/witch',
            HandItems: [
                {
                    id: 'malum:soul_stained_steel_knife',
                    components: { 'minecraft:enchantments': { levels: { 'minecraft:sharpness': 5 } } },
                    count: 1
                },
                {}
            ],
            HandDropChances: [0.0, 0.0],
            attributes: [
                { id: 'minecraft:generic.armor', base: 20 },
                { id: 'minecraft:generic.armor_toughness', base: 10 }
            ]
        }
    },
    'handcrafted:evoker_trophy': {
        mobID: 'minecraft:evoker',
        mobData: {
            PatrolLeader: 0,
            CustomName: '{"color":"gold","translate":"entity.enigmatica.clockwork_evoker"}',
            DeathLootTable: 'enigmatica:statue_tokens/evoker',
            HandItems: [
                {
                    id: 'malum:mnemonic_hex_staff',
                    components: { 'minecraft:enchantments': { levels: { 'malum:haunted': 2 } } },
                    count: 1
                },
                {}
            ],
            HandDropChances: [0.0, 0.0],
            attributes: [
                { id: 'minecraft:generic.armor', base: 20 },
                { id: 'minecraft:generic.armor_toughness', base: 10 }
            ]
        }
    },
    'handcrafted:vindicator_trophy': {
        mobID: 'minecraft:vindicator',
        mobData: {
            PatrolLeader: 0,
            CustomName: '{"color":"gold","translate":"entity.enigmatica.clockwork_vindicator"}',
            DeathLootTable: 'enigmatica:statue_tokens/vindicator',
            HandItems: [
                {
                    id: 'minecraft:netherite_axe',
                    components: { 'minecraft:enchantments': { levels: { 'minecraft:sharpness': 5 } } },
                    count: 1
                },
                {}
            ],
            HandDropChances: [0.0, 0.0],
            attributes: [
                { id: 'minecraft:generic.armor', base: 20 },
                { id: 'minecraft:generic.armor_toughness', base: 10 }
            ]
        }
    },
    'handcrafted:pillager_trophy': {
        mobID: 'minecraft:pillager',
        mobData: {
            PatrolLeader: 0,
            CustomName: '{"color":"gold","translate":"entity.enigmatica.clockwork_pillager"}',
            DeathLootTable: 'enigmatica:statue_tokens/pillager',
            HandItems: [
                {
                    id: 'minecraft:crossbow',
                    components: {
                        'minecraft:enchantments': {
                            levels: { 'minecraft:quick_charge': 3, 'minecraft:multishot': 1 }
                        }
                    },
                    count: 1
                },
                {}
            ],
            HandDropChances: [0.0, 0.0],
            attributes: [
                { id: 'minecraft:generic.armor', base: 20 },
                { id: 'minecraft:generic.armor_toughness', base: 10 }
            ]
        }
    }
};
