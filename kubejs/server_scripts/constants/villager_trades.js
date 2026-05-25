//priority: 1001

// Villagers have 2 trade slots per level and 5 total levels.

const villagerTrades = {
    // Smithing Table
    'minecraft:toolsmith': [
        {
            result: { id: 'minecraft:brewing_stand', count: 1 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 1, max: 1 } }],
            level: 1
        },
        {
            result: { id: 'minecraft:barrel', count: 1 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 1, max: 1 } }],
            level: 1
        },

        {
            result: { id: 'minecraft:composter', count: 1 },
            ingredients: [{ id: 'enigmatica:suns_out_buns_out', count: { min: 1, max: 1 } }],
            level: 2
        },
        {
            result: { id: 'minecraft:loom', count: 1 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 1, max: 1 } }],
            level: 2
        },

        {
            result: { id: 'modern_industrialization:forge_hammer', count: 1 },
            ingredients: [{ id: 'enigmatica:braising_cain', count: { min: 1, max: 1 } }],
            level: 3
        },
        {
            result: { id: 'minecraft:smoker', count: 1 },
            ingredients: [{ id: 'enigmatica:braising_cain', count: { min: 1, max: 1 } }],
            level: 3
        },

        {
            result: { id: 'minecraft:cauldron', count: 1 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 1 } }],
            level: 4
        },
        {
            result: { id: 'minecraft:grindstone', count: 1 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 1 } }],
            level: 4
        },

        {
            result: { id: 'minecraft:blast_furnace', count: 1 },
            ingredients: [{ id: 'enigmatica:sheep_eatin_green', count: { min: 1, max: 1 } }],
            level: 5
        },
        {
            result: { id: 'minecraft:stonecutter', count: 1 },
            ingredients: [{ id: 'enigmatica:sheep_eatin_green', count: { min: 1, max: 1 } }],
            level: 5
        }
    ],
    // Composter
    'minecraft:farmer': [
        {
            result: { id: 'farmersdelight:organic_compost', count: 8 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 1 } }],
            level: 1
        },
        {
            result: {
                id: 'aether:holystone_hoe[enchantments={levels:{"apothic_enchanting:natures_blessing":1,"minecraft:silk_touch":1}}]',
                count: 1
            },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 1 } }],
            level: 1,
            id_suffix: 'enchanted_holystone_hoe'
        },

        {
            result: { id: 'actuallyadditions:feeder', count: 1 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 1 } }],
            level: 2
        },
        {
            result: { id: 'ars_nouveau:mycelial_sourcelink', count: 1 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 1 } }],
            level: 2
        },

        {
            result: { id: 'actuallyadditions:worm', count: 4 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 1 } }],
            level: 3
        },
        {
            result: { id: 'pneumaticcraft:crop_support', count: 4 },
            ingredients: [{ id: 'enigmatica:cozy_cauldron', count: { min: 1, max: 1 } }],
            level: 3
        },

        {
            result: { id: 'actuallyadditions:greenhouse_glass', count: 2 },
            ingredients: [{ id: 'enigmatica:cozy_cauldron', count: { min: 1, max: 1 } }],
            level: 4
        },
        {
            result: { id: 'ars_nouveau:ritual_overgrowth', count: 1 },
            ingredients: [{ id: 'enigmatica:cozy_cauldron', count: { min: 1, max: 1 } }],
            level: 4
        },

        {
            result: { id: 'ars_nouveau:ritual_fertility', count: 1 },
            ingredients: [{ id: 'enigmatica:cozy_cauldron', count: { min: 1, max: 1 } }],
            level: 5
        },
        {
            result: { id: 'the_bumblezone:royal_jelly_bottle', count: 1 },
            ingredients: [{ id: 'enigmatica:la_drygmese_poutine', count: { min: 1, max: 1 } }],
            level: 5
        }
    ],
    // Barrel
    'minecraft:fisherman': [
        {
            result: { id: 'minecraft:dried_kelp', count: 8 },
            ingredients: [{ id: 'minecraft:bread', count: { min: 2, max: 2 } }],
            level: 1
        },
        {
            result: { id: 'aquaculture:brown_shrooma', count: 8 },
            ingredients: [{ id: 'minecraft:bread', count: { min: 2, max: 2 } }],
            level: 1
        },

        {
            result: { id: 'aquaculture:red_shrooma', count: 8 },
            ingredients: [{ id: 'minecraft:bread', count: { min: 2, max: 2 } }],
            level: 2
        },
        {
            result: { id: 'aquaculture:goldfish', count: 8 },
            ingredients: [{ id: 'enigmatica:suns_out_buns_out', count: { min: 1, max: 1 } }],
            level: 2
        },

        {
            result: { id: 'minecraft:cod', count: 4 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 1 } }],
            level: 3
        },
        {
            result: { id: 'minecraft:salmon', count: 4 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 1 } }],
            level: 3
        },

        {
            result: { id: 'minecraft:pufferfish', count: 4 },
            ingredients: [{ id: 'enigmatica:sheep_eatin_green', count: { min: 1, max: 1 } }],
            level: 4
        },
        {
            result: { id: 'sushigocrafting:raw_tuna', count: 4 },
            ingredients: [{ id: 'enigmatica:sheep_eatin_green', count: { min: 1, max: 1 } }],
            level: 4
        },

        {
            result: { id: 'sushigocrafting:shrimp[sushigocrafting:amount=100]', count: 1 },
            ingredients: [{ id: 'enigmatica:sheep_eatin_green', count: { min: 1, max: 1 } }],
            level: 5
        },
        {
            result: { id: 'minecraft:sponge', count: 1 },
            ingredients: [{ id: 'enigmatica:cozy_cauldron', count: { min: 1, max: 1 } }],
            level: 5
        }
    ],
    // Loom
    'minecraft:shepherd': [
        {
            result: { id: 'ars_caelum:ritual_conjure_island_starter', count: 1 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 1, max: 1 } }],
            level: 1
        },
        {
            result: { id: 'enigmatica:flying_cow_iou', count: 1 },
            ingredients: [{ id: 'enigmatica:suns_out_buns_out', count: { min: 1, max: 1 } }],
            level: 1
        },

        {
            result: { id: 'enigmatica:sheepuff_iou', count: 1 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 1 } }],
            level: 2
        },
        {
            result: { id: 'enigmatica:phyg_iou', count: 1 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 1 } }],
            level: 2
        },

        {
            result: { id: 'enigmatica:chicken_iou', count: 1 },
            ingredients: [{ id: 'enigmatica:sheep_eatin_green', count: { min: 1, max: 1 } }],
            level: 3
        },
        {
            result: { id: 'enigmatica:aerbunny_iou', count: 1 },
            ingredients: [{ id: 'enigmatica:sheep_eatin_green', count: { min: 1, max: 1 } }],
            level: 3
        },

        {
            result: { id: 'enigmatica:moa_iou', count: 1 },
            ingredients: [{ id: 'enigmatica:dumpling_drop', count: { min: 1, max: 1 } }],
            level: 4
        },
        {
            result: { id: 'enigmatica:goat_iou', count: 1 },
            ingredients: [{ id: 'enigmatica:dumpling_drop', count: { min: 1, max: 1 } }],
            level: 4
        }
    ],
    // Arcane Core
    'ars_nouveau:shady_wizard': [
        {
            result: { id: 'ars_nouveau:enchanting_apparatus', count: 1 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 1, max: 1 } }],
            level: 1
        },
        {
            result: { id: 'minecraft:lectern', count: 1 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 1, max: 1 } }],
            level: 1
        },

        {
            result: { id: 'ars_nouveau:alakarkinos_token', count: 1 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 1, max: 1 } }],
            level: 2
        },
        {
            result: { id: 'ars_nouveau:starbuncle_shards', count: 1 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 1, max: 1 } }],
            level: 2
        },

        {
            result: { id: 'ars_nouveau:wixie_shards', count: 1 },
            ingredients: [{ id: 'enigmatica:suns_out_buns_out', count: { min: 1, max: 1 } }],
            level: 3
        },
        {
            result: { id: 'ars_nouveau:amethyst_golem_charm', count: 1 },
            ingredients: [{ id: 'enigmatica:suns_out_buns_out', count: { min: 1, max: 1 } }],
            level: 3
        }
    ],
    // Stonecutter
    'minecraft:mason': [
        {
            result: { id: 'pneumaticcraft:reinforced_stone', count: 4 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 1 } }],
            level: 1
        },
        {
            result: { id: `cold_sweat:hearth`, count: 1 },
            ingredients: [{ id: 'enigmatica:cozy_cauldron', count: { min: 1, max: 1 } }],
            level: 1
        }

        // Levels 2-5 covered below.
    ],
    // Smoker
    'minecraft:butcher': [
        {
            result: { id: 'farmersdelight:minced_beef', count: 32 },
            ingredients: [{ id: 'enigmatica:beef_bits', count: { min: 1, max: 1 } }],
            level: 1
        },
        {
            result: { id: 'farmersdelight:bacon', count: 32 },
            ingredients: [{ id: 'enigmatica:pork_pieces', count: { min: 1, max: 1 } }],
            level: 1
        },

        {
            result: { id: 'farmersdelight:chicken_cuts', count: 32 },
            ingredients: [{ id: 'enigmatica:chicken_chunks', count: { min: 1, max: 1 } }],
            level: 2
        },
        {
            result: { id: 'farmersdelight:mutton_chops', count: 32 },
            ingredients: [{ id: 'enigmatica:mutton_morsels', count: { min: 1, max: 1 } }],
            level: 2
        },

        {
            result: { id: 'farmersdelight:salmon_slice', count: 4 },
            ingredients: [{ id: 'minecraft:salmon', count: { min: 1, max: 1 } }],
            level: 3
        },
        {
            result: { id: 'farmersdelight:cod_slice', count: 4 },
            ingredients: [{ id: 'minecraft:cod', count: { min: 1, max: 1 } }],
            level: 3
        },

        {
            result: { id: 'farmersdelight:ham', count: 1 },
            ingredients: [{ id: 'minecraft:porkchop', count: { min: 8, max: 8 } }],
            level: 4
        },
        {
            result: { id: 'arsdelight:chimera_meat', count: 2 },
            ingredients: [{ id: 'ars_nouveau:wilden_tribute', count: { min: 1, max: 1 } }],
            level: 4
        },

        {
            result: {
                id: 'occultism:butcher_knife[enchantments={levels:{"minecraft:looting":1,"minecraft:sharpness":1}}]',
                count: 1
            },
            ingredients: [{ id: 'enigmatica:braising_cain', count: { min: 1, max: 1 } }],
            level: 5,
            id_suffix: 'enchanted_butcher_knife'
        }
    ],
    // Coffee Maker
    'actuallyadditions:engineer': [
        {
            result: { id: 'create:precision_mechanism', count: 4 },
            ingredients: [{ id: 'enigmatica:flappin_jack_s_trove', count: { min: 1, max: 1 } }],
            level: 1
        },
        {
            result: { id: 'modern_industrialization:copper_cable', count: 8 },
            ingredients: [{ id: 'enigmatica:flappin_jack_s_trove', count: { min: 1, max: 1 } }],
            level: 1
        },

        {
            result: { id: 'redstonepen:control_box', count: 1 },
            ingredients: [{ id: 'enigmatica:great_eggspectations', count: { min: 1, max: 1 } }],
            level: 2
        },
        {
            result: { id: 'actuallyadditions:lens', count: 1 },
            ingredients: [{ id: 'enigmatica:great_eggspectations', count: { min: 1, max: 1 } }],
            level: 2
        },

        {
            result: { id: 'actuallyadditions:laser_relay_item', count: 1 },
            ingredients: [{ id: 'enigmatica:la_drygmese_poutine', count: { min: 1, max: 1 } }],
            level: 3
        },
        {
            result: { id: 'actuallyadditions:laser_relay_fluids', count: 1 },
            ingredients: [{ id: 'enigmatica:la_drygmese_poutine', count: { min: 1, max: 1 } }],
            level: 3
        },

        {
            result: { id: 'actuallyadditions:item_interface', count: 1 },
            ingredients: [{ id: 'enigmatica:la_drygmese_poutine', count: { min: 1, max: 1 } }],
            level: 4
        },

        {
            result: { id: 'modern_industrialization:overdrive_module', count: 1 },
            ingredients: [{ id: 'enigmatica:glazed_and_confused', count: { min: 1, max: 1 } }],
            level: 5
        },
        {
            result: { id: 'replication:replicator_motor', count: 1 },
            ingredients: [{ id: 'enigmatica:glazed_and_confused', count: { min: 1, max: 1 } }],
            level: 5
        }
    ],
    // Forge Hammer
    'modern_industrialization:industrialist': [
        {
            result: { id: 'prettypipes:pipe', count: 8 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 1 } }],
            level: 1
        },
        {
            result: { id: 'ppfluids:fluid_pipe', count: 8 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 1 } }],
            level: 1
        },

        {
            result: { id: 'prettypipes:blank_module', count: 8 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 1 } }],
            level: 2
        },

        {
            result: { id: 'modern_industrialization:config_card', count: 1 },
            ingredients: [{ id: 'enigmatica:flyin_fox', count: { min: 1, max: 1 } }],
            level: 3
        },
        {
            result: { id: 'extended_industrialization:machine_config_card', count: 1 },
            ingredients: [{ id: 'enigmatica:flyin_fox', count: { min: 1, max: 1 } }],
            level: 3
        },

        {
            result: { id: 'modern_industrialization:configurable_chest', count: 1 },
            ingredients: [{ id: 'enigmatica:flyin_fox', count: { min: 1, max: 1 } }],
            level: 4
        },
        {
            result: { id: 'modern_industrialization:configurable_tank', count: 1 },
            ingredients: [{ id: 'enigmatica:flyin_fox', count: { min: 1, max: 1 } }],
            level: 4
        }
    ],
    // Brewing Stand
    'minecraft:cleric': [
        {
            result: { id: 'ars_nouveau:ritual_brazier', count: 1 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 1, max: 1 } }],
            level: 1
        },
        {
            result: { id: 'occultism:fragile_soul_gem', count: 1 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 1, max: 1 } }],
            level: 1
        },

        {
            result: { id: 'ars_nouveau:arcane_core', count: 1 },
            ingredients: [{ id: 'enigmatica:braising_cain', count: { min: 1, max: 1 } }],
            level: 2
        },
        {
            result: { id: 'occultism:celestial_chalice', count: 1 },
            ingredients: [{ id: 'enigmatica:braising_cain', count: { min: 1, max: 1 } }],
            level: 2
        },

        {
            result: { id: 'minecraft:potion[potion_contents={potion:"apothic_attributes:flying"}]', count: 1 },
            ingredients: [{ id: 'enigmatica:jaxs_snax', count: { min: 1, max: 1 } }],
            level: 3,
            id_suffix: 'potion_flying'
        },
        {
            result: { id: 'minecraft:potion[potion_contents={potion:"apothic_attributes:knowledge"}]', count: 1 },
            ingredients: [{ id: 'enigmatica:jaxs_snax', count: { min: 1, max: 1 } }],
            level: 3,
            id_suffix: 'potion_knowledge'
        },

        {
            result: { id: `aether:angelic_stone`, count: 32 },
            ingredients: [{ id: 'enigmatica:jaxs_snax', count: { min: 1, max: 1 } }],
            level: 4
        },
        {
            result: { id: `aether:hellfire_stone`, count: 32 },
            ingredients: [{ id: 'enigmatica:jaxs_snax', count: { min: 1, max: 1 } }],
            level: 4
        },

        {
            result: { id: 'ars_nouveau:ritual_flight', count: 1 },
            ingredients: [{ id: 'enigmatica:la_drygmese_poutine', count: { min: 1, max: 1 } }],
            level: 5
        },

        {
            result: { id: 'ars_nouveau:ritual_containment', count: 1 },
            ingredients: [{ id: 'enigmatica:glazed_and_confused', count: { min: 1, max: 1 } }],
            level: 5
        }
    ],
    // Lectern
    'minecraft:librarian': [
        {
            result: { id: 'ars_nouveau:bookwyrm_charm', count: 1 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 1, max: 1 } }],
            level: 1
        },
        {
            result: { id: 'ars_nouveau:storage_lectern', count: 1 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 1, max: 1 } }],
            level: 1
        },

        {
            result: { id: 'ars_nouveau:repository_controller', count: 1 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 1, max: 1 } }],
            level: 2
        },
        {
            result: { id: 'ars_nouveau:repository', count: 1 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 1, max: 1 } }],
            level: 2
        },

        {
            result: { id: 'ars_additions:codex_entry', count: 1 },
            ingredients: [{ id: 'enigmatica:the_bun_also_rises', count: { min: 1, max: 1 } }],
            level: 3
        },
        {
            result: { id: 'minecraft:enchanting_table', count: 1 },
            ingredients: [{ id: 'enigmatica:cozy_cauldron', count: { min: 1, max: 1 } }],
            level: 3
        },

        {
            result: { id: 'ars_additions:lost_codex_entry', count: 1 },
            ingredients: [{ id: 'enigmatica:cozy_cauldron', count: { min: 1, max: 1 } }],
            level: 4
        },
        {
            result: { id: 'ars_caelum:ritual_conjure_island_village', count: 1 },
            ingredients: [{ id: 'enigmatica:jaxs_snax', count: { min: 1, max: 1 } }],
            level: 4
        },

        {
            result: { id: 'ars_additions:ancient_codex_entry', count: 1 },
            ingredients: [{ id: 'enigmatica:la_drygmese_poutine', count: { min: 1, max: 1 } }],
            level: 5
        },
        {
            result: { id: 'enigmatica:antikythera_mechanism', count: 1 },
            ingredients: [{ id: 'enigmatica:glazed_and_confused', count: { min: 1, max: 1 } }],
            level: 5
        }
    ],
    // Grindstone
    'minecraft:weaponsmith': [
        {
            result: { id: 'naturesaura:break_prevention', count: 1 },
            ingredients: [{ id: 'enigmatica:jaxs_snax', count: { min: 1, max: 1 } }],
            level: 1
        },
        {
            result: {
                id: 'aether:candy_cane_sword[enchantments={levels:{"apothic_enchanting:scavenger":1}}]',
                count: 1
            },
            ingredients: [{ id: 'enigmatica:jaxs_snax', count: { min: 1, max: 1 } }],
            level: 1,
            id_suffix: 'enchanted_candy_cane_sword'
        },

        {
            result: {
                id: 'aether:zanite_sword[enchantments={levels:{"minecraft:looting":2}}]',
                count: 1
            },
            ingredients: [{ id: 'enigmatica:flyin_fox', count: { min: 1, max: 1 } }],
            level: 2,
            id_suffix: 'enchanted_zanite_sword'
        },
        {
            result: {
                id: 'aether:zanite_axe[enchantments={levels:{"minecraft:looting":2}}]',
                count: 1
            },
            ingredients: [{ id: 'enigmatica:flyin_fox', count: { min: 1, max: 1 } }],
            level: 2,
            id_suffix: 'enchanted_zanite_axe'
        },

        {
            result: {
                id: 'aether:vampire_blade[enchantments={levels:{"minecraft:mending":1}}]',
                count: 1
            },
            ingredients: [{ id: 'enigmatica:braising_cain', count: { min: 1, max: 1 } }],
            level: 3,
            id_suffix: 'enchanted_vampire_blade'
        },
        {
            result: {
                id: 'aether:flaming_sword[enchantments={levels:{"minecraft:sweeping_edge":1}}]',
                count: 1
            },
            ingredients: [{ id: 'enigmatica:braising_cain', count: { min: 1, max: 1 } }],
            level: 3,
            id_suffix: 'enchanted_flaming_sword'
        },

        {
            result: {
                id: 'malum:crude_scythe[enchantments={levels:{"malum:spirit_plunder":3}}]',
                count: 1
            },
            ingredients: [{ id: 'enigmatica:sheep_eatin_green', count: { min: 1, max: 1 } }],
            level: 4,
            id_suffix: 'enchanted_crude_scythe'
        },
        {
            result: {
                id: 'farmersdelight:skillet[enchantments={levels:{"minecraft:bane_of_arthropods":5}}]',
                count: 1
            },
            ingredients: [{ id: 'enigmatica:sheep_eatin_green', count: { min: 1, max: 1 } }],
            level: 4,
            id_suffix: 'enchanted_skillet'
        },

        {
            result: {
                id: 'aether:holy_sword[enchantments={levels:{"apothic_enchanting:knowledge_of_the_ages":1,"ars_elemental:soulbound":1,"minecraft:smite":3,"minecraft:unbreaking":2}}]',
                count: 1
            },
            ingredients: [{ id: 'enigmatica:cozy_cauldron', count: { min: 1, max: 1 } }],
            level: 5,
            id_suffix: 'enchanted_holy_sword'
        },
        {
            result: {
                id: 'aether:valkyrie_lance[enchantments={levels:{"ars_elemental:soulbound":1,"minecraft:sharpness":3,"minecraft:unbreaking":2}}]',
                count: 1
            },
            ingredients: [{ id: 'enigmatica:cozy_cauldron', count: { min: 1, max: 1 } }],
            level: 5,
            id_suffix: 'enchanted_valkyrie_lance'
        }
    ],
    // Blast Furnace
    'minecraft:armorer': [
        {
            result: { id: 'minecraft:host_armor_trim_smithing_template', count: 1 },
            ingredients: [{ id: 'enigmatica:great_eggspectations', count: { min: 1, max: 1 } }],
            level: 1
        },
        {
            result: { id: 'minecraft:wayfinder_armor_trim_smithing_template', count: 1 },
            ingredients: [{ id: 'enigmatica:great_eggspectations', count: { min: 1, max: 1 } }],
            level: 1
        },
        {
            result: { id: 'minecraft:shaper_armor_trim_smithing_template', count: 1 },
            ingredients: [{ id: 'enigmatica:great_eggspectations', count: { min: 1, max: 1 } }],
            level: 1
        },
        {
            result: { id: 'minecraft:raiser_armor_trim_smithing_template', count: 1 },
            ingredients: [{ id: 'enigmatica:great_eggspectations', count: { min: 1, max: 1 } }],
            level: 1
        },
        {
            result: { id: 'minecraft:dune_armor_trim_smithing_template', count: 1 },
            ingredients: [{ id: 'enigmatica:great_eggspectations', count: { min: 1, max: 1 } }],
            level: 1
        },

        {
            result: { id: 'minecraft:sentry_armor_trim_smithing_template', count: 1 },
            ingredients: [{ id: 'enigmatica:braising_cain', count: { min: 1, max: 1 } }],
            level: 2
        },
        {
            result: { id: 'minecraft:vex_armor_trim_smithing_template', count: 1 },
            ingredients: [{ id: 'enigmatica:braising_cain', count: { min: 1, max: 1 } }],
            level: 2
        },
        {
            result: { id: 'minecraft:wild_armor_trim_smithing_template', count: 1 },
            ingredients: [{ id: 'enigmatica:braising_cain', count: { min: 1, max: 1 } }],
            level: 2
        },
        {
            result: { id: 'minecraft:coast_armor_trim_smithing_template', count: 1 },
            ingredients: [{ id: 'enigmatica:braising_cain', count: { min: 1, max: 1 } }],
            level: 2
        },

        {
            result: { id: 'minecraft:tide_armor_trim_smithing_template', count: 1 },
            ingredients: [{ id: 'enigmatica:sheep_eatin_green', count: { min: 1, max: 1 } }],
            level: 3
        },
        {
            result: { id: 'minecraft:bolt_armor_trim_smithing_template', count: 1 },
            ingredients: [{ id: 'enigmatica:sheep_eatin_green', count: { min: 1, max: 1 } }],
            level: 3
        },
        {
            result: { id: 'minecraft:rib_armor_trim_smithing_template', count: 1 },
            ingredients: [{ id: 'enigmatica:sheep_eatin_green', count: { min: 1, max: 1 } }],
            level: 3
        },
        {
            result: { id: 'minecraft:snout_armor_trim_smithing_template', count: 1 },
            ingredients: [{ id: 'enigmatica:sheep_eatin_green', count: { min: 1, max: 1 } }],
            level: 3
        },

        {
            result: { id: 'minecraft:silence_armor_trim_smithing_template', count: 1 },
            ingredients: [{ id: 'enigmatica:flyin_fox', count: { min: 1, max: 1 } }],
            level: 4
        },
        {
            result: { id: 'minecraft:ward_armor_trim_smithing_template', count: 1 },
            ingredients: [{ id: 'enigmatica:flyin_fox', count: { min: 1, max: 1 } }],
            level: 4
        },
        {
            result: { id: 'minecraft:flow_armor_trim_smithing_template', count: 1 },
            ingredients: [{ id: 'enigmatica:flyin_fox', count: { min: 1, max: 1 } }],
            level: 4
        },
        {
            result: { id: 'minecraft:spire_armor_trim_smithing_template', count: 1 },
            ingredients: [{ id: 'enigmatica:flyin_fox', count: { min: 1, max: 1 } }],
            level: 4
        },

        {
            result: { id: 'minecraft:eye_armor_trim_smithing_template', count: 1 },
            ingredients: [{ id: 'enigmatica:la_drygmese_poutine', count: { min: 1, max: 1 } }],
            level: 5
        },
        {
            result: { id: 'minecraft:netherite_upgrade_smithing_template', count: 1 },
            ingredients: [{ id: 'enigmatica:la_drygmese_poutine', count: { min: 1, max: 1 } }],
            level: 5
        }
    ],
    // AE2 Charger
    'ae2:fluix_researcher': [
        {
            result: { id: 'ae2:blank_pattern', count: 1 },
            ingredients: [{ id: 'enigmatica:great_eggspectations', count: { min: 1, max: 1 } }],
            level: 1
        },
        {
            result: { id: 'ae2:pattern_encoding_terminal', count: 1 },
            ingredients: [{ id: 'enigmatica:great_eggspectations', count: { min: 1, max: 1 } }],
            level: 1
        },

        {
            result: {
                id: 'replication:matter_blueprint[replication:blueprint={Item:{count:1,id:"ae2:logic_processor"},Progress:1.0d}]',
                count: 1
            },
            ingredients: [{ id: 'enigmatica:flyin_fox', count: { min: 4, max: 8 } }],
            level: 2,
            id_suffix: 'matter_blueprint_logic_processor'
        },
        {
            result: {
                id: 'replication:matter_blueprint[replication:blueprint={Item:{count:1,id:"ae2:engineering_processor"},Progress:1.0d}]',
                count: 1
            },
            ingredients: [{ id: 'enigmatica:flyin_fox', count: { min: 4, max: 8 } }],
            level: 2,
            id_suffix: 'matter_blueprint_engineering_processor'
        },

        {
            result: {
                id: 'replication:matter_blueprint[replication:blueprint={Item:{count:1,id:"ae2:calculation_processor"},Progress:1.0d}]',
                count: 1
            },
            ingredients: [{ id: 'enigmatica:flyin_fox', count: { min: 4, max: 8 } }],
            level: 3,
            id_suffix: 'matter_blueprint_calculation_processor'
        },
        {
            result: {
                id: 'replication:matter_blueprint[replication:blueprint={Item:{count:1,id:"modern_industrialization:quantum_circuit"},Progress:1.0d}]',
                count: 1
            },
            ingredients: [{ id: 'enigmatica:flyin_fox', count: { min: 4, max: 8 } }],
            level: 3,
            id_suffix: 'matter_blueprint_quantum_circuit'
        },

        {
            result: { id: 'ae2:item_cell_housing', count: 1 },
            ingredients: [{ id: 'enigmatica:great_eggspectations', count: { min: 1, max: 1 } }],
            level: 4
        },
        {
            result: { id: 'ae2:fluid_cell_housing', count: 1 },
            ingredients: [{ id: 'enigmatica:great_eggspectations', count: { min: 1, max: 1 } }],
            level: 4
        },

        {
            result: { id: 'ae2:mysterious_cube', count: 1 },
            ingredients: [{ id: 'enigmatica:flyin_fox', count: { min: 4, max: 8 } }],
            level: 5
        },
        {
            result: {
                id: 'replication:matter_blueprint[replication:blueprint={Item:{count:1,id:"enigmatica:elemental_matrix"},Progress:1.0d}]',
                count: 1
            },
            ingredients: [{ id: 'enigmatica:glazed_and_confused', count: { min: 4, max: 8 } }],
            level: 5,
            id_suffix: 'matter_blueprint_elemental_matrix'
        }
    ],
    // PNC Charging Station
    'pneumaticcraft:mechanic': [
        {
            result: { id: 'pneumaticcraft:reinforced_pressure_tube', count: 8 },
            ingredients: [{ id: 'enigmatica:great_eggspectations', count: { min: 1, max: 1 } }],
            level: 1
        },
        {
            result: { id: 'pneumaticcraft:module_expansion_card', count: 1 },
            ingredients: [{ id: 'enigmatica:great_eggspectations', count: { min: 1, max: 1 } }],
            level: 1
        },

        {
            result: { id: 'pneumaticcraft:collector_drone', count: 1 },
            ingredients: [{ id: 'enigmatica:flyin_fox', count: { min: 1, max: 1 } }],
            level: 2
        },
        {
            result: { id: 'pneumaticcraft:harvesting_drone', count: 1 },
            ingredients: [{ id: 'enigmatica:flyin_fox', count: { min: 1, max: 1 } }],
            level: 2
        },

        {
            result: { id: 'pneumaticcraft:guard_drone', count: 1 },
            ingredients: [{ id: 'enigmatica:flyin_fox', count: { min: 1, max: 1 } }],
            level: 3
        },
        {
            result: { id: 'pneumaticcraft:logistics_drone', count: 1 },
            ingredients: [{ id: 'enigmatica:flyin_fox', count: { min: 1, max: 1 } }],
            level: 3
        },

        {
            result: { id: 'pneumaticcraft:drone', count: 1 },
            ingredients: [{ id: 'enigmatica:jaxs_snax', count: { min: 1, max: 1 } }],
            level: 4
        },
        {
            result: { id: 'pneumaticcraft:programming_puzzle', count: 16 },
            ingredients: [{ id: 'enigmatica:flyin_fox', count: { min: 1, max: 1 } }],
            level: 4
        },

        {
            result: { id: 'pneumaticcraft:assembly_program_drill_laser', count: 1 },
            ingredients: [{ id: 'enigmatica:great_eggspectations', count: { min: 8, max: 12 } }],
            level: 5
        }
    ],
    // Cauldron
    'minecraft:leatherworker': [
        {
            result: {
                id: 'minecraft:leather_helmet[enchantments={levels:{"minecraft:aqua_affinity":1,"minecraft:mending":1,"minecraft:protection":1}}]',
                count: 1
            },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 1 } }],
            level: 1,
            id_suffix: 'enchanted_leather_helmet'
        },
        {
            result: { id: 'toolbelt:belt', count: 1 },
            ingredients: [{ id: 'enigmatica:bun_believable_burger', count: { min: 1, max: 1 } }],
            level: 1
        },

        {
            result: {
                id: 'minecraft:leather_chestplate[enchantments={levels:{"ars_nouveau:mana_regen":1,"minecraft:projectile_protection":1,"minecraft:unbreaking":1}}]',
                count: 1
            },
            ingredients: [{ id: 'enigmatica:flyin_fox', count: { min: 1, max: 1 } }],
            level: 2,
            id_suffix: 'enchanted_leather_chestplate'
        },
        {
            result: { id: 'toolbelt:pouch', count: 1 },
            ingredients: [{ id: 'enigmatica:flyin_fox', count: { min: 1, max: 1 } }],
            level: 2
        },

        {
            result: {
                id: 'minecraft:leather_leggings[enchantments={levels:{"ars_nouveau:mana_boost":1,"minecraft:blast_protection":1,"minecraft:swift_sneak":1}}]',
                count: 1
            },
            ingredients: [{ id: 'enigmatica:braising_cain', count: { min: 1, max: 1 } }],
            level: 3,
            id_suffix: 'enchanted_leather_leggings'
        },
        {
            result: { id: 'sophisticatedbackpacks:backpack', count: 1 },
            ingredients: [{ id: 'enigmatica:braising_cain', count: { min: 1, max: 1 } }],
            level: 3
        },

        {
            result: {
                id: 'minecraft:leather_boots[enchantments={levels:{"apothic_enchanting:stable_footing":1,"minecraft:feather_falling":1,"minecraft:fire_protection":1}}]',
                count: 1
            },
            ingredients: [{ id: 'enigmatica:sheep_eatin_green', count: { min: 1, max: 1 } }],
            level: 4,
            id_suffix: 'enchanted_leather_boots'
        },
        {
            result: { id: 'not_enough_glyphs:spell_binder', count: 1 },
            ingredients: [{ id: 'enigmatica:sheep_eatin_green', count: { min: 1, max: 1 } }],
            level: 4
        },

        {
            result: { id: 'enderstorage:ender_pouch', count: 1 },
            ingredients: [{ id: 'enigmatica:cozy_cauldron', count: { min: 1, max: 1 } }],
            level: 5
        },
        {
            result: { id: 'minecraft:rabbit_foot', count: 1 },
            ingredients: [{ id: 'enigmatica:cozy_cauldron', count: { min: 1, max: 1 } }],
            level: 5
        }
    ]
};

let stonecutter_stones = [
    {
        ids: ['create:crimsite', 'create:ochrum', 'create:veridium', 'create:asurine', 'create:limestone'],
        level: 2
    },
    {
        ids: [
            'arts_and_crafts:gypsum',
            'arts_and_crafts:soapstone',
            'arts_and_crafts:cobbled_ochre_pietraforte',
            'arts_and_crafts:cobbled_verdant_pietraforte'
        ],
        level: 3
    },
    {
        ids: ['arts_and_crafts:jet_pietraforte', 'arts_and_crafts:hazel_pietraforte'],
        level: 4
    },
    {
        ids: ['arts_and_crafts:beige_pietraforte', 'arts_and_crafts:ivory_pietraforte'],
        level: 5
    }
];

stonecutter_stones.forEach((stones) => {
    stones.ids.forEach((block) => {
        villagerTrades['minecraft:mason'].push({
            result: { id: block, count: 32 },
            ingredients: [{ id: 'enigmatica:jaxs_snax', count: { min: 1, max: 1 } }],
            level: stones.level
        });
    });
});
