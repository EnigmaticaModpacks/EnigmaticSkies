//priority: 1001
const smeltWhenBurning = {
    function: 'minecraft:furnace_smelt',
    conditions: [
        {
            condition: 'minecraft:any_of',
            terms: [
                {
                    condition: 'minecraft:entity_properties',
                    entity: 'this',
                    predicate: { flags: { is_on_fire: true } }
                },
                {
                    condition: 'minecraft:entity_properties',
                    entity: 'direct_attacker',
                    predicate: {
                        equipment: {
                            mainhand: {
                                predicates: {
                                    'minecraft:enchantments': [{ enchantments: '#minecraft:smelts_loot' }]
                                }
                            }
                        }
                    }
                }
            ]
        }
    ]
};
