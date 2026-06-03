ServerEvents.generateData('before_mods', (event) => {
    const id_prefix = 'enigmatica:cold_sweat/item/insulator/';
    // Item Requirement: https://mikul.gitbook.io/cold-sweat/datapacks/requirements/item-requirement
    // Component Requirement: https://mikul.gitbook.io/cold-sweat/datapacks/requirements/components-requirement
    // Insulation Config: https://mikul.gitbook.io/cold-sweat/datapacks/item-configs#insulation-items

    const recipes = [
        {
            item: {
                items: [
                    'extended_industrialization:nano_chestplate',
                    'extended_industrialization:nano_gravichestplate'
                ],
                components: { 'modern_industrialization:energy': '1:' }
            },
            insulation: { heat: 0, cold: 0 },
            entity: {
                entities: ['*'],
                equipment: {
                    head: {
                        items: ['extended_industrialization:nano_helmet'],
                        components: { 'modern_industrialization:energy': '1:' }
                    },
                    chest: {
                        items: [
                            'extended_industrialization:nano_chestplate',
                            'extended_industrialization:nano_gravichestplate'
                        ],
                        components: { 'modern_industrialization:energy': '1:' }
                    },
                    legs: {
                        items: ['extended_industrialization:nano_leggings'],
                        components: { 'modern_industrialization:energy': '1:' }
                    },
                    feet: {
                        items: ['extended_industrialization:nano_boots'],
                        components: { 'modern_industrialization:energy': '1:' }
                    }
                }
            },
            attributes: {
                'cold_sweat:cold_dampening': [
                    {
                        name: 'enigmatica:cold_dampening_set_bonus',
                        operation: 'add_value',
                        amount: 1.0
                    }
                ],
                'cold_sweat:heat_dampening': [
                    {
                        name: 'enigmatica:heat_dampening_set_bonus',
                        operation: 'add_value',
                        amount: 1.0
                    }
                ]
            },
            hint: { key: 'tooltip.hint.enigmatica.extended_industrialization_nano_armor_set' },
            id: `${id_prefix}extended_industrialization_nano_armor_set`
        },
        {
            item: {
                items: ['ars_nouveau:sorcerer_robes', 'ars_nouveau:arcanist_robes', 'ars_nouveau:battlemage_robes'],
                components: { 'ars_nouveau:armor_perks': { tier: '1:1' } }
            },
            insulation: { heat: 0, cold: 0 },
            entity: {
                entities: ['*'],
                equipment: {
                    head: {
                        items: [
                            'ars_nouveau:sorcerer_hood',
                            'ars_nouveau:arcanist_hood',
                            'ars_nouveau:battlemage_hood'
                        ],
                        components: { 'ars_nouveau:armor_perks': { tier: '1:1' } }
                    },
                    chest: {
                        items: [
                            'ars_nouveau:sorcerer_robes',
                            'ars_nouveau:arcanist_robes',
                            'ars_nouveau:battlemage_robes'
                        ],
                        components: { 'ars_nouveau:armor_perks': { tier: '1:1' } }
                    },
                    legs: {
                        items: [
                            'ars_nouveau:sorcerer_leggings',
                            'ars_nouveau:arcanist_leggings',
                            'ars_nouveau:battlemage_leggings'
                        ],
                        components: { 'ars_nouveau:armor_perks': { tier: '1:1' } }
                    },
                    feet: {
                        items: [
                            'ars_nouveau:sorcerer_boots',
                            'ars_nouveau:arcanist_boots',
                            'ars_nouveau:battlemage_boots'
                        ],
                        components: { 'ars_nouveau:armor_perks': { tier: '1:1' } }
                    }
                }
            },
            attributes: {
                'cold_sweat:cold_dampening': [
                    {
                        name: 'enigmatica:cold_dampening_set_bonus',
                        operation: 'add_value',
                        amount: 0.25
                    }
                ]
            },
            hint: { key: 'tooltip.hint.enigmatica.ars_nouveau_armor_tier_2' },
            id: `${id_prefix}ars_nouveau_armor_tier_2`
        },
        {
            item: {
                items: ['ars_nouveau:sorcerer_robes', 'ars_nouveau:arcanist_robes', 'ars_nouveau:battlemage_robes'],
                components: { 'ars_nouveau:armor_perks': { tier: '2:2' } }
            },
            insulation: { heat: 0, cold: 0 },
            entity: {
                entities: ['*'],
                equipment: {
                    head: {
                        items: [
                            'ars_nouveau:sorcerer_hood',
                            'ars_nouveau:arcanist_hood',
                            'ars_nouveau:battlemage_hood'
                        ],
                        components: { 'ars_nouveau:armor_perks': { tier: '2:2' } }
                    },
                    chest: {
                        items: [
                            'ars_nouveau:sorcerer_robes',
                            'ars_nouveau:arcanist_robes',
                            'ars_nouveau:battlemage_robes'
                        ],
                        components: { 'ars_nouveau:armor_perks': { tier: '2:2' } }
                    },
                    legs: {
                        items: [
                            'ars_nouveau:sorcerer_leggings',
                            'ars_nouveau:arcanist_leggings',
                            'ars_nouveau:battlemage_leggings'
                        ],
                        components: { 'ars_nouveau:armor_perks': { tier: '2:2' } }
                    },
                    feet: {
                        items: [
                            'ars_nouveau:sorcerer_boots',
                            'ars_nouveau:arcanist_boots',
                            'ars_nouveau:battlemage_boots'
                        ],
                        components: { 'ars_nouveau:armor_perks': { tier: '2:2' } }
                    }
                }
            },
            attributes: {
                'cold_sweat:cold_dampening': [
                    {
                        name: 'enigmatica:cold_dampening_set_bonus',
                        operation: 'add_value',
                        amount: 0.5
                    }
                ]
            },
            hint: { key: 'tooltip.hint.enigmatica.ars_nouveau_armor_tier_3' },
            id: `${id_prefix}ars_nouveau_armor_tier_3`
        },
        {
            item: {
                items: [
                    'ars_technica:technomancer_chestplate',
                    'ars_technica:machinaguard_chestplate',
                    'ars_technica:artificer_tunic'
                ]
            },
            insulation: { heat: 0, cold: 0 },
            entity: {
                entities: ['*'],
                equipment: {
                    head: {
                        items: [
                            'ars_technica:technomancer_helmet',
                            'ars_technica:machinaguard_helmet',
                            'ars_technica:artificer_cap'
                        ]
                    },
                    chest: {
                        items: [
                            'ars_technica:technomancer_chestplate',
                            'ars_technica:machinaguard_chestplate',
                            'ars_technica:artificer_tunic'
                        ]
                    },
                    legs: {
                        items: [
                            'ars_technica:technomancer_leggings',
                            'ars_technica:machinaguard_leggings',
                            'ars_technica:artificer_pants'
                        ]
                    },
                    feet: {
                        items: [
                            'ars_technica:technomancer_boots',
                            'ars_technica:machinaguard_boots',
                            'ars_technica:artificer_shoes'
                        ]
                    }
                }
            },
            attributes: {
                'cold_sweat:cold_dampening': [
                    {
                        name: 'enigmatica:cold_dampening_set_bonus',
                        operation: 'add_value',
                        amount: 0.375
                    }
                ],
                'cold_sweat:heat_dampening': [
                    {
                        name: 'enigmatica:heat_dampening_set_bonus',
                        operation: 'add_value',
                        amount: 0.375
                    }
                ]
            },
            hint: { key: 'tooltip.hint.enigmatica.ars_technica_technomancer_armor_set' },
            id: `${id_prefix}ars_technica_technomancer_armor_set`
        }
    ];

    const elemental_sets = [
        { helmet: 'hood', chestplate: 'tunic', leggings: 'pants', boots: 'shoes' },
        { helmet: 'hat', chestplate: 'robes', leggings: 'leggings', boots: 'boots' },
        { helmet: 'helmet', chestplate: 'chestplate', leggings: 'leggings_heavy', boots: 'boots_heavy' }
    ];
    const elemental_bonuses = {
        air: {
            'cold_sweat:cold_dampening': [
                {
                    name: 'enigmatica:cold_dampening_set_bonus',
                    operation: 'add_value',
                    amount: 0.5
                }
            ],
            'cold_sweat:heat_dampening': [
                {
                    name: 'enigmatica:heat_dampening_set_bonus',
                    operation: 'add_value',
                    amount: 0.25
                }
            ]
        },
        fire: {
            'cold_sweat:heat_dampening': [
                {
                    name: 'enigmatica:heat_dampening_set_bonus',
                    operation: 'add_value',
                    amount: 0.75
                }
            ]
        },
        earth: {
            'cold_sweat:cold_dampening': [
                {
                    name: 'enigmatica:cold_dampening_set_bonus',
                    operation: 'add_value',
                    amount: 0.25
                }
            ],
            'cold_sweat:heat_dampening': [
                {
                    name: 'enigmatica:heat_dampening_set_bonus',
                    operation: 'add_value',
                    amount: 0.5
                }
            ]
        },
        aqua: {
            'cold_sweat:cold_dampening': [
                {
                    name: 'enigmatica:cold_dampening_set_bonus',
                    operation: 'add_value',
                    amount: 0.75
                }
            ]
        }
    };
    Object.keys(elemental_bonuses).forEach((element) => {
        elemental_sets.forEach((set) => {
            recipes.push({
                item: { items: [`ars_elemental:${element}_${set.chestplate}`] },
                insulation: { heat: 0, cold: 0 },
                entity: {
                    entities: ['*'],
                    equipment: {
                        head: { items: [`ars_elemental:${element}_${set.helmet}`] },
                        chest: { items: [`ars_elemental:${element}_${set.chestplate}`] },
                        legs: { items: [`ars_elemental:${element}_${set.leggings}`] },
                        feet: { items: [`ars_elemental:${element}_${set.boots}`] }
                    }
                },
                attributes: elemental_bonuses[element],
                hint: { key: `tooltip.hint.enigmatica.ars_elemental_${element}_${set.chestplate}_set` },
                id: `${id_prefix}ars_elemental_${element}_${set.chestplate}_set`
            });
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'armor';
        let path = recipe.id;
        delete recipe.id;

        event.json(path, recipe);
    });
});
