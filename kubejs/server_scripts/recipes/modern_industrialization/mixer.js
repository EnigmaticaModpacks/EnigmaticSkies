ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/mixer/';

    const recipes = [
        {
            item_outputs: [{ item: 'justdirethings:polymorphic_catalyst', amount: 4 }],
            item_inputs: [
                { item: 'ars_nouveau:abjuration_essence', amount: 1, probability: 0.0 },
                { tag: 'c:ingots/blazegold', amount: 1 }
            ],
            duration: 5,
            eu: 2,
            id: `${id_prefix}polymorphic_catalyst`
        },
        {
            fluid_outputs: [{ fluid: 'justdirethings:polymorphic_fluid_source', amount: 1000 }],
            item_inputs: [{ item: 'justdirethings:polymorphic_catalyst', amount: 1 }],
            fluid_inputs: [{ fluid: 'minecraft:water', amount: 1000 }],
            duration: 10,
            eu: 2,
            id: `${id_prefix}polymorphic_fluid_source`
        },
        {
            fluid_outputs: [{ fluid: 'actuallyadditions:crystallized_oil', amount: 1000 }],
            item_inputs: [{ item: 'actuallyadditions:crystallized_canola_seed', amount: 1 }],
            fluid_inputs: [{ fluid: 'actuallyadditions:refined_canola_oil', amount: 1000 }],
            duration: 10,
            eu: 8,
            id: `${id_prefix}crystallized_oil`
        },
        {
            fluid_outputs: [{ fluid: 'actuallyadditions:empowered_oil', amount: 1000 }],
            item_inputs: [{ item: 'actuallyadditions:empowered_canola_seed', amount: 1 }],
            fluid_inputs: [{ fluid: 'actuallyadditions:crystallized_oil', amount: 1000 }],
            duration: 10,
            eu: 16,
            id: `${id_prefix}empowered_oil`
        },
        {
            item_outputs: [{ item: 'enderio:industrial_insulation_block', amount: 1 }],
            fluid_inputs: [{ tag: 'theurgy:solvent', amount: 250 }],
            item_inputs: [
                { item: 'aether:aerogel', amount: 8 },
                { tag: 'c:gems/empowered_void', amount: 4 }
            ],
            duration: 10,
            eu: 2,
            id: `${id_prefix}industrial_insulation_block`
        },
        {
            item_outputs: [{ item: 'enderio:pulsating_crystal', amount: 1 }],
            fluid_inputs: [{ tag: 'c:lumisene', amount: 1000 }],
            item_inputs: [
                { tag: 'c:gems/brilliance', amount: 4 },
                { tag: 'c:gems/source', amount: 1 }
            ],
            duration: 10,
            eu: 2,
            id: `${id_prefix}pulsating_crystal`
        },
        {
            fluid_outputs: [{ fluid: 'supplementaries:lumisene', amount: 250 }],
            item_inputs: [{ item: 'minecraft:glow_berries', amount: 2 }],
            duration: 5,
            eu: 2,
            id: `${id_prefix}lumisene`
        },
        {
            item_outputs: [{ item: 'enigmatica:pelagite', amount: 1 }],
            item_inputs: [
                { item: 'minecraft:nautilus_shell', amount: 24 },
                { item: 'aquaculture:fish_bones', amount: 18 }
            ],
            fluid_inputs: [{ fluid: 'extended_industrialization:manure', amount: 16000 }],
            duration: 20,
            eu: 2,
            id: `${id_prefix}pelagite_from_manure`
        },
        {
            item_outputs: [
                { item: 'enigmatica:pelagite', amount: 2 },
                { item: 'enigmatica:pelagite', amount: 1, probability: 0.75 }
            ],
            item_inputs: [
                { item: 'minecraft:nautilus_shell', amount: 24 },
                { item: 'aquaculture:fish_bones', amount: 18 }
            ],
            fluid_inputs: [{ fluid: 'extended_industrialization:composted_manure', amount: 16000 }],
            duration: 20,
            eu: 2,
            id: `${id_prefix}pelagite_from_composted_manure`
        },

        {
            fluid_outputs: [{ fluid: 'theurgy:sal_ammoniac', amount: 1000 }],
            item_inputs: [
                { tag: 'c:gems/ambrosium', amount: 1, probability: 0.0 },
                { tag: 'c:gems/sal_ammoniac', amount: 1, probability: 0.5 }
            ],
            fluid_inputs: [{ fluid: `minecraft:water`, amount: 1000 }],
            duration: 5,
            eu: 2,
            id: `${id_prefix}sal_ammoniac`
        },
        {
            fluid_outputs: [{ fluid: 'sauce:source_fluid', amount: 1000 }],
            item_inputs: [
                { tag: 'c:gems/ambrosium', amount: 1, probability: 0.0 },
                { item: 'ars_additions:codex_entry', amount: 1, probability: 1 / 2 }
            ],
            fluid_inputs: [{ fluid: 'theurgy:sal_ammoniac', amount: 100 }],
            duration: 5,
            eu: 2,
            id: `${id_prefix}source_fluid_from_codex_entry`
        },
        {
            fluid_outputs: [{ fluid: 'sauce:source_fluid', amount: 1000 }],
            item_inputs: [
                { tag: 'c:gems/ambrosium', amount: 1, probability: 0.0 },
                { item: 'ars_additions:lost_codex_entry', amount: 1, probability: 1 / 4 }
            ],
            fluid_inputs: [{ fluid: 'theurgy:sal_ammoniac', amount: 100 }],
            duration: 5,
            eu: 4,
            id: `${id_prefix}source_fluid_from_lost_codex_entry`
        },
        {
            fluid_outputs: [{ fluid: 'sauce:source_fluid', amount: 1000 }],
            item_inputs: [
                { tag: 'c:gems/ambrosium', amount: 1, probability: 0.0 },
                { item: 'ars_additions:ancient_codex_entry', amount: 1, probability: 1 / 8 }
            ],
            fluid_inputs: [{ fluid: 'theurgy:sal_ammoniac', amount: 100 }],
            duration: 5,
            eu: 16,
            id: `${id_prefix}source_fluid_from_ancient_codex_entry`
        },
        {
            fluid_outputs: [{ fluid: 'create:chocolate', amount: 250 }],
            item_inputs: [
                { tag: 'c:sugars', amount: 1 },
                { tag: 'c:crops/cocoa_bean', amount: 1 }
            ],
            fluid_inputs: [{ tag: `c:milk`, amount: 250 }],
            duration: 5,
            eu: 2,
            id: `${id_prefix}chocolate`
        },
        {
            fluid_outputs: [{ fluid: 'create:chocolate', amount: 250 }],
            item_inputs: [{ item: 'create:bar_of_chocolate', amount: 1 }],
            duration: 5,
            eu: 2,
            id: `${id_prefix}chocolate_from_bar`
        },

        {
            fluid_outputs: [{ fluid: 'enigmatica:vulcanized_rubber', amount: 1000 }],
            item_inputs: [{ item: 'create:cinder_flour', amount: 1 }],
            fluid_inputs: [
                { tag: `c:latex`, amount: 1000 },
                { tag: `c:lumisene`, amount: 250 }
            ],
            duration: 5,
            eu: 2,
            id: `${id_prefix}vulcanized_rubber`
        },
        {
            item_outputs: [{ item: 'modern_industrialization:rubber_sheet', amount: 1 }],
            item_inputs: [{ item: 'farmersdelight:canvas', amount: 1 }],
            fluid_inputs: [{ tag: `c:vulcanized_rubber`, amount: 100 }],
            duration: 5,
            eu: 2,
            id: `${id_prefix}rubber_sheet`
        },

        {
            item_outputs: [{ item: 'minecraft:paper', amount: 1 }],
            item_inputs: [{ item: 'minecraft:sugar_cane', amount: 3 }],
            fluid_inputs: [{ fluid: 'minecraft:water', amount: 100 }],
            duration: 5,
            eu: 2,
            id: `${id_prefix}paper_from_sugar_cane`
        },
        {
            item_outputs: [{ item: 'minecraft:paper', amount: 1 }],
            item_inputs: [{ tag: 'farmersdelight:barks', amount: 3 }],
            fluid_inputs: [{ fluid: 'minecraft:water', amount: 100 }],
            duration: 5,
            eu: 2,
            id: `${id_prefix}paper_from_barks`
        },
        {
            item_outputs: [{ item: 'minecraft:paper', amount: 3 }],
            item_inputs: [{ item: 'modern_industrialization:wood_pulp', amount: 3 }],
            fluid_inputs: [{ fluid: 'minecraft:water', amount: 100 }],
            duration: 5,
            eu: 2,
            id: `${id_prefix}paper_from_wood_pulp`
        },
        {
            item_outputs: [{ item: 'minecraft:paper', amount: 9 }],
            item_inputs: [{ tag: 'c:doughs/rice', amount: 3 }],
            fluid_inputs: [{ fluid: 'minecraft:water', amount: 100 }],
            duration: 5,
            eu: 2,
            id: `${id_prefix}paper_from_rice`
        },
        {
            item_outputs: [{ item: 'extended_industrialization:mulch', amount: 8 }],
            item_inputs: [
                { item: 'farmersdelight:organic_compost', amount: 1 },
                { item: 'modern_industrialization:wood_pulp', amount: 8 }
            ],
            duration: 1,
            eu: 2,
            id: `${id_prefix}mulch`
        },
        {
            item_outputs: [{ item: 'oritech:diamond_paint', amount: 4 }],
            item_inputs: [
                { item: 'minecraft:bucket', amount: 1 },
                { item: 'malum:malignant_lead', amount: 1 },
                { tag: 'c:dyes/cyan', amount: 8 }
            ],
            fluid_inputs: [
                { fluid: 'industrialforegoing:latex', amount: 1000 },
                { fluid: 'minecraft:water', amount: 3000 }
            ],
            duration: 5,
            eu: 2,
            id: `${id_prefix}diamond_paint`
        },
        {
            item_outputs: [{ item: 'oritech:redstone_paint', amount: 4 }],
            item_inputs: [
                { item: 'minecraft:bucket', amount: 1 },
                { item: 'malum:malignant_lead', amount: 1 },
                { tag: 'c:dyes/red', amount: 8 }
            ],
            fluid_inputs: [
                { fluid: 'industrialforegoing:latex', amount: 1000 },
                { fluid: 'minecraft:water', amount: 3000 }
            ],
            duration: 5,
            eu: 2,
            id: `${id_prefix}redstone_paint`
        },
        {
            item_outputs: [{ item: 'oritech:netherite_paint', amount: 4 }],
            item_inputs: [
                { item: 'minecraft:bucket', amount: 1 },
                { item: 'malum:malignant_lead', amount: 1 },
                { tag: 'c:dyes/black', amount: 4 },
                { tag: 'c:dyes/yellow', amount: 4 }
            ],
            fluid_inputs: [
                { fluid: 'industrialforegoing:latex', amount: 1000 },
                { fluid: 'minecraft:water', amount: 3000 }
            ],
            duration: 5,
            eu: 2,
            id: `${id_prefix}netherite_paint`
        },
        {
            item_outputs: [{ item: 'oritech:orange_paint', amount: 4 }],
            item_inputs: [
                { item: 'minecraft:bucket', amount: 1 },
                { item: 'malum:malignant_lead', amount: 1 },
                { tag: 'c:dyes/orange', amount: 8 }
            ],
            fluid_inputs: [
                { fluid: 'industrialforegoing:latex', amount: 1000 },
                { fluid: 'minecraft:water', amount: 3000 }
            ],
            duration: 5,
            eu: 2,
            id: `${id_prefix}orange_paint`
        },
        {
            item_outputs: [{ item: 'oritech:industrial_paint', amount: 4 }],
            item_inputs: [
                { item: 'minecraft:bucket', amount: 1 },
                { item: 'malum:malignant_lead', amount: 1 },
                { tag: 'c:dyes/yellow', amount: 8 }
            ],
            fluid_inputs: [
                { fluid: 'industrialforegoing:latex', amount: 1000 },
                { fluid: 'minecraft:water', amount: 3000 }
            ],
            duration: 5,
            eu: 2,
            id: `${id_prefix}industrial_paint`
        },
        {
            item_outputs: [{ item: 'oritech:white_paint', amount: 4 }],
            item_inputs: [
                { item: 'minecraft:bucket', amount: 1 },
                { item: 'malum:malignant_lead', amount: 1 },
                { tag: 'c:dyes/white', amount: 8 }
            ],
            fluid_inputs: [
                { fluid: 'industrialforegoing:latex', amount: 1000 },
                { fluid: 'minecraft:water', amount: 3000 }
            ],
            duration: 5,
            eu: 2,
            id: `${id_prefix}white_paint`
        },
        {
            item_outputs: [{ item: 'oritech:sculk_paint', amount: 4 }],
            item_inputs: [
                { item: 'minecraft:bucket', amount: 1 },
                { item: 'malum:malignant_lead', amount: 1 },
                { tag: 'c:dyes/black', amount: 4 },
                { tag: 'c:dyes/cyan', amount: 3 },
                { tag: 'c:dyes/purple', amount: 1 }
            ],
            fluid_inputs: [
                { fluid: 'industrialforegoing:latex', amount: 1000 },
                { fluid: 'minecraft:water', amount: 3000 }
            ],
            duration: 5,
            eu: 2,
            id: `${id_prefix}sculk_paint`
        },
        {
            item_outputs: [{ item: 'oritech:camo_paint', amount: 4 }],
            item_inputs: [
                { item: 'minecraft:bucket', amount: 1 },
                { item: 'malum:malignant_lead', amount: 1 },
                { tag: 'c:dyes/green', amount: 4 },
                { tag: 'c:dyes/brown', amount: 4 }
            ],
            fluid_inputs: [
                { fluid: 'industrialforegoing:latex', amount: 1000 },
                { fluid: 'minecraft:water', amount: 3000 }
            ],
            duration: 5,
            eu: 2,
            id: `${id_prefix}camo_paint`
        }
    ];

    const anemoi = [
        { id: 'northern', essentia: ['tundra', 'taiga'] },
        { id: 'western', essentia: ['desert', 'savanna'] },
        { id: 'southern', essentia: ['ocean', 'swamp'] },
        { id: 'eastern', essentia: ['plains', 'forest'] }
    ];

    anemoi.forEach((recipe) => {
        recipes.push({
            item_outputs: [{ item: `enigmatica:${recipe.id}_anemo`, amount: 1, probability: 1 / 500 }],
            item_inputs: [
                { item: `enigmatica:${recipe.essentia[0]}_essentia`, amount: 1, probability: 1 / 50 },
                { item: `malum:wind_nucleus`, amount: 1 },
                { item: `enigmatica:${recipe.essentia[1]}_essentia`, amount: 1, probability: 1 / 50 }
            ],
            fluid_inputs: [
                { fluid: `modern_industrialization:helium_plasma`, amount: 30 },
                { fluid: `enigmatica:vapours_of_nyx`, amount: 30 }
            ],
            duration: 10,
            eu: 5000,
            id: `${id_prefix}${recipe.id}_anemo`
        });
    });

    ae_washables.forEach((washable) => {
        recipes.push({
            item_outputs: [{ item: `ae2:fluix_${washable}_cable`, amount: 1 }],
            item_inputs: [{ tag: `ae2:${washable}_cable`, amount: 1 }],
            fluid_inputs: [{ fluid: 'minecraft:water', amount: 100 }],
            duration: 5,
            eu: 2,
            id: `${id_prefix}fluix_${washable}_cable_washing`
        });
    });

    copper_types.forEach((type) => {
        copper_oxides.forEach((oxide) => {
            recipes.push({
                item_outputs: [{ item: `create:waxed_${oxide}${type}`, amount: 1 }],
                item_inputs: [{ item: `create:${oxide}${type}`, amount: 1 }],
                fluid_inputs: [{ tag: 'c:honey', amount: 1 }],
                duration: 5,
                eu: 2,
                id: `${id_prefix}waxed_${oxide}${type}`
            });
        });
    });

    silver_types.forEach((type) => {
        silver_oxides.forEach((oxide) => {
            let output = `thesilverage:waxed_${oxide}_${type}`;
            let input = `thesilverage:${oxide}_${type}`;

            if (oxide == 'base') {
                if (type == 'silver') {
                    output = `thesilverage:waxed_silver_block`;
                    input = `thesilverage:silver_block`;
                } else {
                    output = `thesilverage:waxed_${type}`;
                    input = `thesilverage:${type}`;
                }
            }

            recipes.push({
                item_outputs: [{ item: output, amount: 1 }],
                item_inputs: [{ item: input, amount: 1 }],
                fluid_inputs: [{ tag: 'c:honey', amount: 1 }],
                duration: 5,
                eu: 2,
                id: `${id_prefix}waxed_${oxide}_${type}`
            });
        });
    });

    const jdt_materials = [
        { input: 'c:ingots/iron', output: 'justdirethings:ferricore_ingot', tier: 1, eu: 2 },
        { input: 'c:ingots/gold', output: 'justdirethings:blazegold_ingot', tier: 2, eu: 2 },
        { input: 'c:gems/blazing_quartz', output: 'justdirethings:coal_t2', tier: 2, eu: 2 },
        { input: 'c:gems/diamond', output: 'justdirethings:celestigem', tier: 3, eu: 8 },
        { input: 'c:gems/blaze_ember', output: 'justdirethings:coal_t3', tier: 3, eu: 8 },
        { input: 'c:ingots/dark_steel', output: 'justdirethings:eclipsealloy_ingot', tier: 4, eu: 32 },
        { input: 'c:gems/voidflame', output: 'justdirethings:coal_t4', tier: 4, eu: 32 }
    ];

    jdt_materials.forEach((material) => {
        recipes.push({
            item_outputs: [
                { item: material.output, amount: 3 },
                { item: material.output, amount: 1, probability: 0.5 }
            ],
            item_inputs: [
                { tag: `justdirethings:goo/tier${material.tier}`, amount: 1, probability: 0.0 },
                { tag: material.input, amount: 4 },
                { tag: `justdirethings:goo_revive_tier_${material.tier}`, amount: 1, probability: 0.1 }
            ],
            duration: 10,
            eu: material.eu,
            id: `${id_prefix}${material.output.split(':')[1]}`
        });
    });

    const jdt_fuels = [
        { input: 'c:gems/blaze_ember', additive: 'actuallyadditions:refined_canola_oil', tier: 2, eu: 2 },
        { input: 'c:gems/voidflame', additive: 'actuallyadditions:crystallized_oil', tier: 3, eu: 8 },
        { input: 'c:gems/eclipse_ember', additive: 'actuallyadditions:empowered_oil', tier: 4, eu: 32 }
    ];

    jdt_fuels.forEach((material) => {
        recipes.push({
            fluid_outputs: [{ fluid: `justdirethings:refined_t${material.tier}_fluid_source`, amount: 3000 }],
            item_inputs: [
                { tag: `justdirethings:goo/tier${material.tier}`, amount: 1, probability: 0.0 },
                { tag: `justdirethings:goo_revive_tier_${material.tier}`, amount: 1, probability: 0.1 },
                { tag: material.input, amount: 1 }
            ],
            fluid_inputs: [
                {
                    fluid:
                        material.tier == 2
                            ? `justdirethings:polymorphic_fluid_source`
                            : `justdirethings:refined_t${material.tier - 1}_fluid_source`,
                    amount: 1000
                },
                { fluid: material.additive, amount: 1000 }
            ],
            duration: 10,
            eu: material.eu,
            id: `${id_prefix}refined_t${material.tier}_fluid_source`
        });
    });

    const aa_materials = [
        { input: 'create:andesite_alloy_block', output: 'actuallyadditions:enori_crystal', tier: 1 },
        { input: 'minecraft:terracotta', output: 'actuallyadditions:restonia_crystal', tier: 1 },
        { input: 'minecraft:slime_block', output: 'actuallyadditions:emeradic_crystal', tier: 1 },
        { input: 'actuallyadditions:black_quartz_block', output: 'actuallyadditions:void_crystal', tier: 1 },
        { input: 'minecraft:blue_ice', output: 'actuallyadditions:palis_crystal', tier: 1 },
        { input: 'minecraft:prismarine_bricks', output: 'actuallyadditions:diamatine_crystal', tier: 2 }
    ];

    aa_materials.forEach((material) => {
        recipes.push({
            item_outputs: [
                { item: material.output, amount: 6 },
                { item: material.output, amount: 2, probability: 0.5 }
            ],
            item_inputs: [
                { tag: `justdirethings:goo/tier${material.tier}`, amount: 1, probability: 0.0 },
                { item: material.input, amount: 1 },
                { tag: `justdirethings:goo_revive_tier_${material.tier}`, amount: 1, probability: 0.1 }
            ],
            duration: material.tier * 5,
            eu: 2,
            id: `${id_prefix}${getID(material.output)}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:mixer';
        recipe.duration *= 20;
        event.custom(recipe).id(recipe.id);
    });
});
