ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ars_nouveau/imbuement/';

    const recipes = [
        {
            output: {
                id: 'naturesaura:aura_bottle',
                components: { 'naturesaura:aura_bottle_data': { aura_type: 'naturesaura:nether' } },
                count: 1
            },
            input: {
                type: 'neoforge:components',
                items: 'naturesaura:aura_bottle',
                components: { 'naturesaura:aura_bottle_data': { aura_type: 'naturesaura:overworld' } }
            },
            pedestalItems: [{ item: 'enderio:soul_powder' }, { item: 'minecraft:netherrack' }],
            source: 1000,
            id: `${id_prefix}bottled_ghosts`
        },
        {
            output: {
                id: 'occultism:fragile_soul_gem',
                components: {
                    'minecraft:entity_data': { VillagerData: { type: 'minecraft:snow' }, id: 'minecraft:villager' }
                },
                count: 1
            },
            input: { item: 'supplementaries:statue' },
            pedestalItems: [{ tag: 'c:essences/anima' }, { tag: 'c:essences/anima' }],
            source: 100,
            id: `${id_prefix}villager`
        },
        {
            output: { id: 'minecraft:wither_rose', count: 1 },
            input: { item: 'aether:white_flower' },
            pedestalItems: [{ tag: 'c:essences/anima' }, { tag: 'c:essences/anima' }],
            source: 100,
            id: `${id_prefix}wither_rose`
        },
        {
            output: { id: 'aether:healing_stone', count: 1 },
            input: { item: 'aether:holystone' },
            pedestalItems: [{ tag: 'c:essences/anima' }, { tag: 'c:essences/anima' }],
            source: 100,
            id: `${id_prefix}healing_stone`
        },
        {
            output: { id: 'mi_tweaks:snack_packer', count: 1 },
            input: { item: 'modern_industrialization:fire_clay_bricks' },
            pedestalItems: [{ tag: 'c:essences/anima' }, { tag: 'c:essences/anima' }],
            source: 100,
            id: `${id_prefix}snack_packer`
        },

        {
            output: { id: 'minecraft:ice', count: 1 },
            input: { item: 'theurgy:crystallized_water' },
            pedestalItems: [{ tag: 'c:essences/water' }, { tag: 'c:essences/water' }],
            source: 100,
            id: `${id_prefix}ice_from_crystallized_water`
        },
        {
            output: { id: 'minecraft:pitcher_pod', count: 1 },
            input: { item: 'minecraft:pitcher_plant' },
            pedestalItems: [{ tag: 'c:essences/water' }, { tag: 'c:essences/water' }],
            source: 100,
            id: `${id_prefix}pitcher_pod`
        },

        {
            output: { id: 'aether:berry_bush_stem', count: 1 },
            input: { item: 'minecraft:dead_bush' },
            pedestalItems: [{ tag: 'c:essences/earth' }, { tag: 'c:essences/earth' }],
            source: 100,
            id: `${id_prefix}berry_bush_stem`
        },
        {
            output: { id: 'ars_nouveau:magebloom_crop', count: 1 },
            input: { item: 'farmersdelight:rice_bag' },
            pedestalItems: [{ tag: 'c:essences/earth' }, { tag: 'c:essences/earth' }],
            source: 100,
            id: `${id_prefix}magebloom_crop`
        },
        {
            output: { id: 'farmersdelight:rice', count: 1 },
            input: { item: 'farmersdelight:straw_bale' },
            pedestalItems: [{ tag: 'c:essences/earth' }, { tag: 'c:essences/earth' }],
            source: 100,
            id: `${id_prefix}rice`
        },
        {
            output: { id: 'aether:golden_oak_sapling', count: 1 },
            input: { item: 'aether:skyroot_sapling' },
            pedestalItems: [{ tag: 'c:essences/earth' }, { tag: 'c:essences/earth' }],
            source: 100,
            id: `${id_prefix}golden_oak_sapling`
        },

        {
            output: { id: 'aether:quicksoil_glass', count: 1 },
            input: { item: 'aether:quicksoil' },
            pedestalItems: [{ tag: 'c:essences/fire' }, { tag: 'c:essences/fire' }],
            source: 100,
            id: `${id_prefix}quicksoil_glass`
        },
        {
            output: { id: 'aether:golden_gummy_swet', count: 1 },
            input: { item: 'aether:blue_gummy_swet' },
            pedestalItems: [{ tag: 'c:essences/fire' }, { tag: 'c:essences/fire' }],
            source: 100,
            id: `${id_prefix}golden_gummy_swet`
        },
        {
            output: { id: 'minecraft:torchflower_seeds', count: 1 },
            input: { item: 'minecraft:torchflower' },
            pedestalItems: [{ tag: 'c:essences/fire' }, { tag: 'c:essences/fire' }],
            source: 100,
            id: `${id_prefix}torchflower_seeds`
        },

        {
            output: { id: 'ars_nouveau:sourceberry_bush', count: 1 },
            input: { item: 'aether:blue_berry' },
            pedestalItems: [{ tag: 'c:essences/abjuration' }, { tag: 'c:essences/abjuration' }],
            source: 100,
            id: `${id_prefix}sourceberry_bush`
        },
        {
            output: { id: 'justdirethings:gooblock_tier1', count: 1 },
            input: { item: 'minecraft:clay' },
            pedestalItems: [{ tag: 'c:essences/abjuration' }, { tag: 'c:essences/abjuration' }],
            source: 100,
            id: `${id_prefix}gooblock_tier1`
        },
        {
            output: { id: 'aether:skyroot_remedy_bucket', count: 1 },
            input: { item: 'aether:skyroot_poison_bucket' },
            pedestalItems: [{ tag: 'c:essences/abjuration' }, { tag: 'c:essences/abjuration' }],
            source: 100,
            id: `${id_prefix}skyroot_remedy_bucket`
        },

        // Glyph removal fixes
        {
            output: { id: 'ars_elemental:acceleration_prism_lens', count: 1 },
            input: { tag: 'c:gems/quartz' },
            pedestalItems: [{ tag: 'c:essences/manipulation' }, { item: 'minecraft:powered_rail' }],
            source: 2000,
            id: `${id_prefix}acceleration_prism_lens`
        },
        {
            output: { id: 'ars_elemental:deceleration_prism_lens', count: 1 },
            input: { tag: 'c:gems/quartz' },
            pedestalItems: [{ tag: 'c:essences/manipulation' }, { item: 'minecraft:cobweb' }],
            source: 2000,
            id: `${id_prefix}deceleration_prism_lens`
        },
        {
            output: { id: 'ars_elemental:arc_prism_lens', count: 1 },
            input: { tag: 'c:gems/quartz' },
            pedestalItems: [{ tag: 'c:essences/manipulation' }, { item: 'minecraft:ender_pearl' }],
            source: 2000,
            id: `${id_prefix}arc_prism_lens`
        },
        {
            output: { id: 'ars_elemental:homing_prism_lens', count: 1 },
            input: { tag: 'c:gems/quartz' },
            pedestalItems: [{ tag: 'c:essences/manipulation' }, { item: 'minecraft:ender_eye' }],
            source: 2000,
            id: `${id_prefix}homing_prism_lens`
        },
        {
            output: { id: 'ars_elemental:piercing_prism_lens', count: 1 },
            input: { tag: 'c:gems/quartz' },
            pedestalItems: [{ tag: 'c:essences/manipulation' }, { item: 'ars_nouveau:wilden_spike' }],
            source: 2000,
            id: `${id_prefix}piercing_prism_lens`
        }
    ];

    const essences = [
        {
            output: 'ars_nouveau:air_essence',
            pedestalItems: [{ item: 'aether:blue_berry' }, { tag: 'c:feathers' }]
        },
        {
            output: 'ars_nouveau:earth_essence',
            pedestalItems: [{ tag: 'c:crops/potato' }, { tag: 'c:clay' }]
        },
        {
            output: 'ars_nouveau:fire_essence',
            pedestalItems: [{ tag: 'c:crops/wasabi_root' }, { item: 'supplementaries:lumisene_bottle' }]
        },
        {
            output: 'ars_nouveau:water_essence',
            pedestalItems: [{ item: 'farmersdelight:rice_panicle' }, { item: 'minecraft:blue_ice' }]
        },
        {
            output: 'ars_nouveau:manipulation_essence',
            pedestalItems: [{ item: 'minecraft:glow_berries' }, { item: 'actuallyadditions:restonia_crystal' }]
        },
        {
            output: 'ars_nouveau:abjuration_essence',
            pedestalItems: [{ item: 'minecraft:nether_wart' }, { item: 'actuallyadditions:diamatine_crystal' }]
        },
        {
            output: 'ars_nouveau:conjuration_essence',
            pedestalItems: [{ item: 'ars_nouveau:magebloom' }, { item: 'actuallyadditions:palis_crystal' }]
        },
        {
            output: 'ars_elemental:anima_essence',
            pedestalItems: [{ item: 'actuallyadditions:coffee_beans' }, { item: 'actuallyadditions:void_crystal' }]
        }
    ];

    essences.forEach((essence) => {
        recipes.push(
            {
                output: { id: essence.output, count: 1 },
                input: { tag: 'c:gems/source' },
                pedestalItems: essence.pedestalItems,
                source: 2000,
                id: `${id_prefix}${essence.output.split(':')[1]}_from_source_gem`
            },
            {
                output: { id: essence.output, count: 4 },
                input: { tag: 'c:storage_blocks/source' },
                pedestalItems: essence.pedestalItems,
                source: 6000,
                id: `${id_prefix}${essence.output.split(':')[1]}_from_source_block`
            },
            {
                output: { id: essence.output, count: 8 },
                input: { tag: 'c:gems/fluix' },
                pedestalItems: essence.pedestalItems,
                source: 500,
                id: `${id_prefix}${essence.output.split(':')[1]}_from_fluix_gem`
            },
            {
                output: { id: essence.output, count: 32 },
                input: { tag: 'c:storage_blocks/fluix' },
                pedestalItems: essence.pedestalItems,
                source: 1500,
                id: `${id_prefix}${essence.output.split(':')[1]}_from_fluix_block`
            }
        );
    });

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:imbuement';
        event.custom(recipe).id(recipe.id);
    });
});
