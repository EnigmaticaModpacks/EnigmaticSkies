ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:occultism/ritual/';
    const sacrifice = {
        llama: { display_name: 'ritual.occultism.sacrifice.llamas', tag: 'c:llamas' },
        chicken: { display_name: 'ritual.occultism.sacrifice.chicken', tag: 'c:chickens' },
        cow: { display_name: 'ritual.occultism.sacrifice.cows', tag: 'c:cows' },
        fish: { display_name: 'ritual.occultism.sacrifice.fish', tag: 'c:fish' },
        warden: { display_name: 'ritual.occultism.sacrifice.warden', tag: 'c:wardens' },
        sheep: { display_name: 'ritual.occultism.sacrifice.sheep', tag: 'c:sheep' },
        villager: { display_name: 'ritual.occultism.sacrifice.humans', tag: 'occultism:humans' }
    };

    const recipes = [
        {
            ritual_type: 'occultism:summon',
            entity_to_summon: 'ars_nouveau:wilden_boss',
            entity_to_sacrifice: sacrifice.villager,
            result: {
                id: 'ars_nouveau:wilden_tribute',
                components: {
                    'minecraft:item_name': `{"color":"gold","translate":"item.occultism.ritual_dummy.transmute_wilden_boss"}`,
                    'minecraft:lore': [`{"translate":"item.occultism.ritual_dummy.transmute_wilden_boss.tooltip"}`]
                },
                count: 1
            },
            activation_item: { item: 'arsdelight:wilden_salad' },
            ingredients: [
                { item: 'arsdelight:bombegrante_steak' },
                { item: 'arsdelight:frostaya_mutton' },
                { item: 'arsdelight:mendosteen_chicken' },
                { item: 'arsdelight:bastion_pork' },
                { item: 'malum:imitation_heart' }
            ],
            ritual_dummy: { id: `occultism:ritual_dummy/transmute_wilden_boss`, count: 1 },
            duration: 30,
            id: `${id_prefix}transmute_wilden_boss`
        },
        {
            ritual_type: 'occultism:summon',
            entity_to_summon: 'ars_nouveau:whirlisprig',
            result: {
                id: 'ars_nouveau:whirlisprig_se',
                components: {
                    'minecraft:item_name': `{"color":"gold","translate":"item.occultism.ritual_dummy.transmute_whirlisprig"}`,
                    'minecraft:lore': [`{"translate":"item.occultism.ritual_dummy.transmute_whirlisprig.tooltip"}`]
                },
                count: 1
            },
            activation_item: Ingredient.of(
                `geneticsresequenced:organic_matter[geneticsresequenced:entity_type="ars_nouveau:whirlisprig"]`
            ).toJson(),
            ingredients: [
                { item: 'naturesaura:ancient_sapling' },
                { item: 'ars_nouveau:ritual_harvest' },
                { item: 'naturesaura:calling_spirit' },
                { item: 'ars_nouveau:ritual_harvest' }
            ],
            ritual_dummy: { id: `occultism:ritual_dummy/transmute_whirlisprig`, count: 1 },
            duration: 30,
            id: `${id_prefix}transmute_whirlisprig`
        },
        {
            ritual_type: 'occultism:summon',
            entity_to_summon: 'ars_nouveau:drygmy',
            result: {
                id: 'ars_nouveau:drygmy_se',
                components: {
                    'minecraft:item_name': `{"color":"gold","translate":"item.occultism.ritual_dummy.transmute_drygmy"}`,
                    'minecraft:lore': [`{"translate":"item.occultism.ritual_dummy.transmute_drygmy.tooltip"}`]
                },
                count: 1
            },
            activation_item: Ingredient.of(
                `geneticsresequenced:organic_matter[geneticsresequenced:entity_type="ars_nouveau:drygmy"]`
            ).toJson(),
            ingredients: [
                { item: 'arsdelight:wilden_salad' },
                { item: 'ars_nouveau:ritual_fertility' },
                { item: 'naturesaura:calling_spirit' },
                { item: 'ars_nouveau:ritual_fertility' }
            ],
            ritual_dummy: { id: `occultism:ritual_dummy/transmute_drygmy`, count: 1 },
            duration: 30,
            id: `${id_prefix}transmute_drygmy`
        },
        {
            ritual_type: 'occultism:craft',
            result: {
                id: 'gateways:gate_pearl',
                components: { 'gateways:gateway': 'gateways:psychic_squid_rift' },
                count: 1
            },
            activation_item: { item: 'arsdelight:source_berry_jelly' },
            ingredients: [
                { tag: 'c:gems/mnemonic_fragment' },
                { item: 'oritech:wither_crop_block' },
                { item: 'naturesaura:calling_spirit' },
                { item: 'oritech:wither_crop_block' }
            ],
            ritual_dummy: { id: `occultism:ritual_dummy/psychic_squid_rift`, count: 1 },
            duration: 30,
            id: `${id_prefix}psychic_squid_rift`
        },
        {
            ritual_type: 'occultism:summon',
            entity_to_summon: 'minecraft:elder_guardian',
            result: {
                id: 'minecraft:elder_guardian_spawn_egg',
                components: {
                    'minecraft:item_name': `{"color":"gold","translate":"item.occultism.ritual_dummy.animate_elder_guardian"}`,
                    'minecraft:lore': [`{"translate":"item.occultism.ritual_dummy.animate_elder_guardian.tooltip"}`]
                },
                count: 1
            },
            activation_item: Ingredient.of('enderio:guardian_diode').toJson(),
            ingredients: [
                { tag: 'c:gems/mnemonic_fragment' },
                { item: 'oritech:wither_crop_block' },
                { item: 'naturesaura:calling_spirit' },
                { item: 'oritech:wither_crop_block' },
                { tag: 'c:gems/time' }
            ],
            ritual_dummy: { id: `occultism:ritual_dummy/animate_elder_guardian`, count: 1 },
            duration: 30,
            id: `${id_prefix}animate_elder_guardian`
        }
    ];

    /*
        Ingredient Display in EMI
            inputs: [
                 '12 o'clock' ,
                 '3 o'clock' ,
                 '6 o'clock' ,
                 '9 o'clock' ,

                 '1 o'clock',
                 '2 o'clock' ,
                 '7 o'clock' ,
                 '8 o'clock' ,

                 '11 o'clock' ,
                 '4 o'clock' ,
                 '5 o'clock' ,
                 '10 o'clock',
            ],
    */

    const animated_blocks = [
        {
            entity: 'aether:blue_swet',
            egg: 'aether:blue_swet_spawn_egg',
            block: 'arsdelight:frostaya_jelly',
            spirit: 'naturesaura:birth_spirit'
        },
        {
            entity: 'minecraft:slime',
            egg: 'minecraft:slime_spawn_egg',
            block: 'arsdelight:mendosteen_jelly',
            spirit: 'naturesaura:birth_spirit'
        },
        {
            entity: 'minecraft:magma_cube',
            egg: 'minecraft:magma_cube_spawn_egg',
            block: 'arsdelight:bombegrante_jelly',
            spirit: 'naturesaura:birth_spirit'
        },

        {
            entity: 'the_bumblezone:honey_slime',
            egg: 'the_bumblezone:honey_slime_spawn_egg',
            block: 'minecraft:honey_block',
            spirit: 'naturesaura:calling_spirit'
        },
        {
            entity: 'aether:zephyr',
            egg: 'aether:zephyr_spawn_egg',
            block: 'aether:cold_aercloud',
            spirit: 'naturesaura:calling_spirit'
        },
        {
            entity: 'aether:sentry',
            egg: 'aether:sentry_spawn_egg',
            block: 'aether:holystone_bricks',
            spirit: 'naturesaura:calling_spirit'
        },
        {
            entity: 'the_bumblezone:rootmin',
            egg: 'the_bumblezone:rootmin_spawn_egg',
            block: 'minecraft:packed_mud',
            spirit: 'naturesaura:calling_spirit'
        },
        {
            entity: 'aether:golden_swet',
            egg: 'aether:golden_swet_spawn_egg',
            block: 'aether:golden_gummy_swet',
            spirit: 'naturesaura:calling_spirit'
        },
        {
            entity: 'minecraft:guardian',
            egg: 'minecraft:guardian_spawn_egg',
            block: 'enderio:guardian_diode',
            spirit: 'naturesaura:calling_spirit'
        },
        {
            entity: 'minecraft:shulker',
            egg: 'minecraft:shulker_spawn_egg',
            block: 'arsdelight:bastion_jelly',
            spirit: 'naturesaura:calling_spirit'
        },
        {
            entity: 'aether:mimic',
            egg: 'aether:mimic_spawn_egg',
            block: 'industrialforegoing:pink_slime_block',
            spirit: 'naturesaura:calling_spirit'
        },
        {
            entity: 'ars_nouveau:flourishing_weald_walker',
            egg: 'ars_nouveau:green_archwood_sapling',
            block: 'ars_nouveau:green_archwood_sapling',
            spirit: 'naturesaura:calling_spirit'
        },
        {
            entity: 'ars_nouveau:blazing_weald_walker',
            egg: 'ars_nouveau:red_archwood_sapling',
            block: 'ars_nouveau:red_archwood_sapling',
            spirit: 'naturesaura:calling_spirit'
        },
        {
            entity: 'ars_nouveau:cascading_weald_walker',
            egg: 'ars_nouveau:blue_archwood_sapling',
            block: 'ars_nouveau:blue_archwood_sapling',
            spirit: 'naturesaura:calling_spirit'
        },
        {
            entity: 'ars_nouveau:vexing_weald_walker',
            egg: 'ars_nouveau:purple_archwood_sapling',
            block: 'ars_nouveau:purple_archwood_sapling',
            spirit: 'naturesaura:calling_spirit'
        },
        {
            entity: 'ars_elemental:flashing_weald_walker',
            egg: 'ars_elemental:yellow_archwood_sapling',
            block: 'ars_elemental:yellow_archwood_sapling',
            spirit: 'naturesaura:calling_spirit'
        },
        {
            entity: 'aether:aechor_plant',
            egg: 'aether:aechor_plant_spawn_egg',
            block: 'arts_and_crafts:lotus_pistils',
            spirit: 'naturesaura:calling_spirit'
        }
    ];

    animated_blocks.forEach((animated) => {
        let mob_id = animated.entity.split(':')[1];
        recipes.push({
            ritual_type: 'occultism:summon',
            entity_to_summon: animated.entity,
            result: {
                id: animated.egg,
                components: {
                    'minecraft:item_name': `{"color":"gold","translate":"item.occultism.ritual_dummy.animate_${mob_id}"}`,
                    'minecraft:lore': [`{"translate":"item.occultism.ritual_dummy.animate_${mob_id}.tooltip"}`]
                },
                count: 1
            },
            activation_item: { item: animated.block },
            ingredients: [
                { tag: 'c:gems/mnemonic_fragment' },
                { item: 'oritech:wither_crop_block' },
                { item: animated.spirit },
                { item: 'oritech:wither_crop_block' }
            ],
            ritual_dummy: { id: `occultism:ritual_dummy/animate_${mob_id}`, count: 1 },
            duration: 30,
            id: `${id_prefix}animate_${mob_id}`
        });
    });

    const transmuted_creatures = [
        {
            entity: 'minecraft:mooshroom',
            egg: 'minecraft:mooshroom_spawn_egg'
        },
        {
            entity: 'aether:cockatrice',
            egg: 'aether:cockatrice_spawn_egg'
        },
        {
            entity: 'minecraft:ravager',
            egg: 'minecraft:ravager_spawn_egg'
        },
        {
            entity: 'ars_nouveau:wilden_hunter',
            egg: 'ars_nouveau:wilden_hunter_se',
            entity_to_sacrifice: sacrifice.villager
        },
        {
            entity: 'ars_nouveau:wilden_guardian',
            egg: 'ars_nouveau:wilden_guardian_se',
            entity_to_sacrifice: sacrifice.villager
        },
        {
            entity: 'ars_nouveau:wilden_stalker',
            egg: 'ars_nouveau:wilden_stalker_se',
            entity_to_sacrifice: sacrifice.villager
        }
    ];

    transmuted_creatures.forEach((transmuted) => {
        let mob_id = transmuted.entity.split(':')[1];
        let recipe = {
            ritual_type: 'occultism:summon',
            entity_to_summon: transmuted.entity,
            result: {
                id: transmuted.egg,
                components: {
                    'minecraft:item_name': `{"color":"gold","translate":"item.occultism.ritual_dummy.transmute_${mob_id}"}`,
                    'minecraft:lore': [`{"translate":"item.occultism.ritual_dummy.transmute_${mob_id}.tooltip"}`]
                },
                count: 1
            },
            activation_item: Ingredient.of(
                `geneticsresequenced:organic_matter[geneticsresequenced:entity_type="${transmuted.entity}"]`
            ).toJson(),
            ingredients: [
                { item: 'malum:imitation_heart' },
                { item: 'malum:imitation_flesh' },
                { item: 'naturesaura:calling_spirit' },
                { item: 'malum:imitation_flesh' }
            ],
            ritual_dummy: { id: `occultism:ritual_dummy/transmute_${mob_id}`, count: 1 },
            duration: 30,
            id: `${id_prefix}transmute_${mob_id}`
        };
        if (transmuted.entity_to_sacrifice) recipe.entity_to_sacrifice = transmuted.entity_to_sacrifice;
        recipes.push(recipe);
    });

    const animated_skeletons = [
        {
            entity: 'minecraft:skeleton',
            egg: 'minecraft:skeleton_spawn_egg',
            block: 'enderio:skeletal_contractor',
            spirit: 'naturesaura:calling_spirit',
            modifier: 'minecraft:bone_block'
        },
        {
            entity: 'minecraft:stray',
            egg: 'minecraft:skeleton_spawn_egg',
            block: 'enderio:skeletal_contractor',
            spirit: 'naturesaura:calling_spirit',
            modifier: '#handcrafted:sheets'
        },
        {
            entity: 'minecraft:bogged',
            egg: 'minecraft:skeleton_spawn_egg',
            block: 'enderio:skeletal_contractor',
            spirit: 'naturesaura:calling_spirit',
            modifier: 'minecraft:vine'
        },
        {
            entity: 'minecraft:phantom',
            egg: 'minecraft:skeleton_spawn_egg',
            block: 'enderio:skeletal_contractor',
            spirit: 'naturesaura:calling_spirit',
            modifier: 'minecraft:elytra'
        }
    ];

    animated_skeletons.forEach((animated) => {
        let mob_id = animated.entity.split(':')[1];
        let recipe = {
            ritual_type: 'occultism:summon',
            entity_to_summon: animated.entity,
            result: {
                id: animated.egg,
                components: {
                    'minecraft:item_name': `{"color":"gold","translate":"item.occultism.ritual_dummy.animate_${mob_id}"}`,
                    'minecraft:lore': [`{"translate":"item.occultism.ritual_dummy.animate_${mob_id}.tooltip"}`]
                },
                count: 1
            },
            activation_item: { item: animated.block },
            ingredients: [
                { tag: 'c:gems/mnemonic_fragment' },
                { item: 'oritech:wither_crop_block' },
                { item: animated.spirit },
                { item: 'oritech:wither_crop_block' }
            ],
            ritual_dummy: { id: `occultism:ritual_dummy/animate_${mob_id}`, count: 1 },
            duration: 30,
            id: `${id_prefix}animate_${mob_id}`
        };

        if (animated.modifier.startsWith('#')) {
            recipe.ingredients.push({ tag: animated.modifier.slice(1) });
        } else {
            recipe.ingredients.push({ item: animated.modifier });
        }
        recipes.push(recipe);
    });

    const animated_creepers = [
        {
            entity: 'minecraft:creeper',
            egg: 'minecraft:creeper_spawn_egg',
            block: 'minecraft:creeper_head',
            spirit: 'naturesaura:calling_spirit',
            modifier: 'minecraft:moss_block'
        },
        {
            entity: 'creeperoverhaul:jungle_creeper',
            egg: 'creeperoverhaul:jungle_creeper_spawn_egg',
            block: 'minecraft:creeper_head',
            spirit: 'naturesaura:calling_spirit',
            modifier: 'minecraft:vine'
        },
        {
            entity: 'creeperoverhaul:bamboo_creeper',
            egg: 'creeperoverhaul:bamboo_creeper_spawn_egg',
            block: 'minecraft:creeper_head',
            spirit: 'naturesaura:calling_spirit',
            modifier: 'minecraft:stick'
        },
        {
            entity: 'creeperoverhaul:desert_creeper',
            egg: 'creeperoverhaul:desert_creeper_spawn_egg',
            block: 'minecraft:creeper_head',
            spirit: 'naturesaura:calling_spirit',
            modifier: 'minecraft:sand'
        },
        {
            entity: 'creeperoverhaul:badlands_creeper',
            egg: 'creeperoverhaul:badlands_creeper_spawn_egg',
            block: 'minecraft:creeper_head',
            spirit: 'naturesaura:calling_spirit',
            modifier: 'minecraft:yellow_terracotta'
        },
        {
            entity: 'creeperoverhaul:hills_creeper',
            egg: 'creeperoverhaul:hills_creeper_spawn_egg',
            block: 'minecraft:creeper_head',
            spirit: 'naturesaura:calling_spirit',
            modifier: 'aether:aether_dirt'
        },
        {
            entity: 'creeperoverhaul:savannah_creeper',
            egg: 'creeperoverhaul:savannah_creeper_spawn_egg',
            block: 'minecraft:creeper_head',
            spirit: 'naturesaura:calling_spirit',
            modifier: 'minecraft:granite'
        },
        {
            entity: 'creeperoverhaul:mushroom_creeper',
            egg: 'creeperoverhaul:mushroom_creeper_spawn_egg',
            block: 'minecraft:creeper_head',
            spirit: 'naturesaura:calling_spirit',
            modifier: 'farmersdelight:organic_compost'
        },
        {
            entity: 'creeperoverhaul:swamp_creeper',
            egg: 'creeperoverhaul:swamp_creeper_spawn_egg',
            block: 'minecraft:creeper_head',
            spirit: 'naturesaura:calling_spirit',
            modifier: 'aquaculture:fish_bones'
        },
        {
            entity: 'creeperoverhaul:dripstone_creeper',
            egg: 'creeperoverhaul:dripstone_creeper_spawn_egg',
            block: 'minecraft:creeper_head',
            spirit: 'naturesaura:calling_spirit',
            modifier: 'minecraft:packed_mud'
        },
        {
            entity: 'creeperoverhaul:cave_creeper',
            egg: 'creeperoverhaul:cave_creeper_spawn_egg',
            block: 'minecraft:creeper_head',
            spirit: 'naturesaura:calling_spirit',
            modifier: 'minecraft:tuff'
        },
        {
            entity: 'creeperoverhaul:dark_oak_creeper',
            egg: 'creeperoverhaul:dark_oak_creeper_spawn_egg',
            block: 'minecraft:creeper_head',
            spirit: 'naturesaura:calling_spirit',
            modifier: 'minecraft:brown_mushroom'
        },
        {
            entity: 'creeperoverhaul:spruce_creeper',
            egg: 'creeperoverhaul:spruce_creeper_spawn_egg',
            block: 'minecraft:creeper_head',
            spirit: 'naturesaura:calling_spirit',
            modifier: 'minecraft:andesite'
        },
        {
            entity: 'creeperoverhaul:beach_creeper',
            egg: 'creeperoverhaul:beach_creeper_spawn_egg',
            block: 'minecraft:creeper_head',
            spirit: 'naturesaura:calling_spirit',
            modifier: 'minecraft:nautilus_shell'
        },
        {
            entity: 'creeperoverhaul:snowy_creeper',
            egg: 'creeperoverhaul:snowy_creeper_spawn_egg',
            block: 'minecraft:creeper_head',
            spirit: 'naturesaura:calling_spirit',
            modifier: 'minecraft:snow_block'
        },
        {
            entity: 'creeperoverhaul:ocean_creeper',
            egg: 'creeperoverhaul:ocean_creeper_spawn_egg',
            block: 'minecraft:creeper_head',
            spirit: 'naturesaura:calling_spirit',
            modifier: 'minecraft:slime_ball'
        },
        {
            entity: 'creeperoverhaul:birch_creeper',
            egg: 'creeperoverhaul:birch_creeper_spawn_egg',
            block: 'minecraft:creeper_head',
            spirit: 'naturesaura:calling_spirit',
            modifier: 'minecraft:red_mushroom'
        }
    ];

    animated_creepers.forEach((animated) => {
        let mob_id = animated.entity.split(':')[1];
        let recipe = {
            ritual_type: 'occultism:summon',
            entity_to_summon: animated.entity,
            result: {
                id: animated.egg,
                components: {
                    'minecraft:item_name': `{"color":"gold","translate":"item.occultism.ritual_dummy.animate_${mob_id}"}`,
                    'minecraft:lore': [`{"translate":"item.occultism.ritual_dummy.animate_${mob_id}.tooltip"}`]
                },
                count: 1
            },
            activation_item: { item: animated.block },
            ingredients: [
                { tag: 'c:gems/mnemonic_fragment' },
                { item: 'oritech:wither_crop_block' },
                { item: animated.spirit },
                { item: 'oritech:wither_crop_block' }
            ],
            ritual_dummy: { id: `occultism:ritual_dummy/animate_${mob_id}`, count: 1 },
            duration: 30,
            id: `${id_prefix}animate_${mob_id}`
        };

        if (animated.modifier.startsWith('#')) {
            recipe.ingredients.push({ tag: animated.modifier.slice(1) });
        } else {
            recipe.ingredients.push({ item: animated.modifier });
        }
        recipes.push(recipe);
    });

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:ritual';
        recipe.pentacle_id = 'occultism:contact_eldritch_spirit';
        event.custom(recipe).id(recipe.id);
    });
});
