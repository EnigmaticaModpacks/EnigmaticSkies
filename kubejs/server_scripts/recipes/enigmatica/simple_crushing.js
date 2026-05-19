ServerEvents.recipes((event) => {
    // multiply values: 'none', 'multiply_output', 'chance_only'

    const id_prefix = 'enigmatica:simple_crushing/';
    const recipes = [
        {
            input: { tag: `c:ingots/iron` },
            outputs: [{ id: AlmostUnified.getTagTargetItem(`c:dusts/iron`).getId(), count: 1 }],
            multiply: 'none',
            exclusions: ['create:milling', 'create:crushing', 'enderio', 'modern_industrialization'],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: 'iron_dust_from_iron'
        },
        {
            input: { tag: `c:ingots/copper` },
            outputs: [{ id: AlmostUnified.getTagTargetItem(`c:dusts/copper`).getId(), count: 1 }],
            multiply: 'none',
            exclusions: ['create:milling', 'create:crushing', 'modern_industrialization'],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: 'copper_dust_from_copper'
        },
        {
            input: { tag: `c:ingots/gold` },
            outputs: [{ id: AlmostUnified.getTagTargetItem(`c:dusts/gold`).getId(), count: 1 }],
            multiply: 'none',
            exclusions: ['create:milling', 'create:crushing', 'enderio', 'modern_industrialization'],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: 'gold_dust_from_gold'
        },
        {
            input: { tag: `c:ingots/silver` },
            outputs: [{ id: AlmostUnified.getTagTargetItem(`c:dusts/silver`).getId(), count: 1 }],
            multiply: 'none',
            exclusions: ['create:milling', 'modern_industrialization'],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: 'silver_dust_from_silver'
        },
        {
            input: { tag: `c:ingots/iesnium` },
            outputs: [{ id: AlmostUnified.getTagTargetItem(`c:dusts/iesnium`).getId(), count: 1 }],
            multiply: 'none',
            exclusions: ['create:milling'],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: 'iesnium_dust_from_iesnium'
        },
        {
            input: { tag: `c:ingots/netherite` },
            outputs: [{ id: AlmostUnified.getTagTargetItem(`c:dusts/netherite`).getId(), count: 1 }],
            multiply: 'none',
            exclusions: ['create:milling', 'modern_industrialization'],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: 'netherite_dust_from_netherite'
        },
        {
            input: { tag: `c:ingots/steel` },
            outputs: [{ id: AlmostUnified.getTagTargetItem(`c:dusts/steel`).getId(), count: 1 }],
            multiply: 'none',
            exclusions: ['create:milling', 'modern_industrialization'],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: 'steel_dust_from_steel'
        },
        {
            input: { tag: `c:gems/black_quartz` },
            outputs: [{ id: 'modern_industrialization:silicon_dust', count: 1 }],
            multiply: 'none',
            exclusions: [],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: 'silicon_dust_from_black_quartz'
        },
        {
            input: { item: `malum:large_strange_crystal` },
            outputs: [{ id: 'malum:strange_crystal', count: 2 }],
            multiply: 'none',
            exclusions: [],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: 'strange_crystal_from_large_strange_crystal'
        },
        {
            input: { tag: `c:gems/certus_quartz` },
            outputs: [{ id: 'ae2:certus_quartz_dust', count: 1 }],
            multiply: 'none',
            exclusions: ['create:milling', 'create:crushing', 'modern_industrialization'],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: 'certus_quartz_dust_from_certus_quartz'
        },
        {
            input: { tag: `c:gems/fluix` },
            outputs: [{ id: 'ae2:fluix_dust', count: 1 }],
            multiply: 'none',
            exclusions: ['create:milling', 'create:crushing'],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: 'fluix_dust_from_fluix'
        },
        {
            input: { item: 'minecraft:ender_pearl' },
            outputs: [{ id: AlmostUnified.getTagTargetItem(`c:dusts/ender_pearl`).getId(), count: 1 }],
            multiply: 'none',
            exclusions: [
                'modern_industrialization',
                'create:milling',
                'create:crushing',
                'oritech:pulverizer',
                'oritech:grinder'
            ],
            fe: 2400,
            eu: { cost: 2, duration: 5 },
            ori: { time: { pulverizer: 120, grinder: 60 } },
            create: { time: { crushing: 200, milling: 100 } },
            na: { aura: 5000, time: 20 },
            id_suffix: 'ender_pearl_dust_from_ender_pearl'
        },
        {
            input: { item: 'ae2:sky_stone_block' },
            outputs: [{ id: 'ae2:sky_dust', count: 1 }],
            multiply: 'none',
            exclusions: ['create:milling', 'create:crushing'],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: 'sky_stone_dust_from_sky_stone_block'
        },
        {
            input: { tag: 'c:obsidians' },
            outputs: [{ id: AlmostUnified.getTagTargetItem(`c:dusts/obsidian`).getId(), count: 4 }],
            multiply: 'none',
            exclusions: ['create:milling', 'create:crushing', 'enderio'],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: 'obsidian_dust_from_obsidian'
        },
        {
            input: { tag: 'c:gems/coal' },
            outputs: [{ id: AlmostUnified.getTagTargetItem(`c:dusts/coal`).getId(), count: 1 }],
            multiply: 'none',
            exclusions: ['create:milling', 'modern_industrialization'],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: 'coal_dust_from_coal'
        },
        {
            input: { tag: 'c:gems/diamond' },
            outputs: [{ id: AlmostUnified.getTagTargetItem(`c:dusts/diamond`).getId(), count: 1 }],
            multiply: 'none',
            exclusions: ['modern_industrialization'],
            fe: 9600,
            eu: 2,
            duration: 40,
            id_suffix: 'diamond_dust_from_diamond'
        },
        {
            input: { tag: 'c:gems/emerald' },
            outputs: [{ id: AlmostUnified.getTagTargetItem(`c:dusts/emerald`).getId(), count: 1 }],
            multiply: 'none',
            exclusions: ['modern_industrialization'],
            fe: 9600,
            eu: 2,
            duration: 40,
            id_suffix: 'emerald_dust_from_emerald'
        },
        {
            input: { tag: 'c:gems/lapis' },
            outputs: [{ id: AlmostUnified.getTagTargetItem(`c:dusts/lapis`).getId(), count: 1 }],
            multiply: 'none',
            exclusions: ['create:milling', 'modern_industrialization'],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: 'lapis_dust_from_lapis'
        },
        {
            input: { tag: 'c:gems/quartz' },
            outputs: [{ id: AlmostUnified.getTagTargetItem(`c:dusts/quartz`).getId(), count: 1 }],
            multiply: 'none',
            exclusions: ['create:milling', 'create:crushing', 'modern_industrialization'],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: 'quartz_dust_from_quartz'
        },
        {
            input: { tag: 'c:rods/blaze' },
            outputs: [{ id: 'minecraft:blaze_powder', count: 4 }],
            multiply: 'none',
            exclusions: ['create:milling', 'create:crushing', 'modern_industrialization'],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: 'blaze_powder_from_blaze_rod'
        },
        {
            input: { tag: 'c:gems/blaze_ember' },
            outputs: [{ id: 'minecraft:blaze_powder', count: 6 }],
            multiply: 'none',
            exclusions: ['create:milling'],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: 'blaze_powder_from_blaze_ember'
        },
        {
            input: { tag: 'enigmatica:logs' },
            outputs: [{ id: 'modern_industrialization:wood_pulp', count: 12 }],
            multiply: 'none',
            exclusions: ['modern_industrialization'],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: 'sawdust_from_logs'
        },
        {
            input: { tag: 'c:rods/wooden' },
            outputs: [{ id: 'modern_industrialization:wood_pulp', count: 1 }],
            multiply: 'none',
            exclusions: ['modern_industrialization'],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: 'sawdust_from_sticks'
        },
        {
            input: { tag: 'enigmatica:planks' },
            outputs: [{ id: 'modern_industrialization:wood_pulp', count: 3 }],
            multiply: 'none',
            exclusions: ['modern_industrialization'],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: 'sawdust_from_planks'
        },
        {
            input: { item: 'minecraft:prismarine' },
            outputs: [{ id: 'minecraft:prismarine_shard', count: 4 }],
            multiply: 'none',
            exclusions: ['create:milling'],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: 'prismarine_shard_from_prismarine'
        },
        {
            input: { item: 'minecraft:prismarine_bricks' },
            outputs: [{ id: 'minecraft:prismarine_shard', count: 9 }],
            multiply: 'none',
            exclusions: ['create:milling'],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: 'prismarine_shard_from_prismarine_bricks'
        },
        {
            input: { item: 'minecraft:dark_prismarine' },
            outputs: [
                { id: 'minecraft:prismarine_shard', count: 8 },
                { id: 'minecraft:black_dye', count: 1 }
            ],
            multiply: 'none',
            exclusions: ['create:milling'],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: 'prismarine_shard_from_dark_prismarine'
        },
        {
            input: { item: 'minecraft:sea_lantern' },
            outputs: [
                { id: 'minecraft:prismarine_shard', count: 4 },
                { id: 'minecraft:prismarine_crystals', count: 5 }
            ],
            multiply: 'none',
            exclusions: ['create:milling'],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: 'prismarine_from_sea_lantern'
        },
        {
            input: { tag: 'c:sandstone/uncolored_blocks' },
            outputs: [{ id: 'minecraft:sand', count: 4 }],
            multiply: 'none',
            exclusions: ['enderio'],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: 'sand_from_sandstone'
        },
        {
            input: { tag: 'c:sandstone/red_blocks' },
            outputs: [{ id: 'minecraft:red_sand', count: 4 }],
            multiply: 'none',
            exclusions: ['enderio'],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: 'red_sand_from_red_sandstone'
        },
        {
            input: { tag: 'c:gravels' },
            outputs: [{ id: 'minecraft:sand', count: 1 }],
            multiply: 'none',
            exclusions: ['enderio', 'modern_industrialization', 'create:milling'],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: 'sand_from_gravel'
        },
        {
            input: { tag: 'c:cobblestones' },
            outputs: [{ id: 'minecraft:gravel', count: 1 }],
            multiply: 'none',
            exclusions: ['enderio', 'modern_industrialization', 'create:milling'],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: 'gravel_from_cobblestones'
        },
        {
            input: { item: 'minecraft:tuff' },
            outputs: [{ id: 'minecraft:gravel', count: 1 }],
            multiply: 'none',
            exclusions: [],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: 'gravel_from_tuff'
        },
        {
            input: { item: 'aether:icestone' },
            outputs: [{ id: 'minecraft:gravel', count: 1 }],
            multiply: 'none',
            exclusions: [],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: 'gravel_from_icestone'
        },
        {
            input: { tag: 'c:end_stones' },
            outputs: [{ id: 'occultism:crushed_end_stone', count: 4 }],
            multiply: 'none',
            exclusions: ['create:milling'],
            fe: 9600,
            eu: 2,
            duration: 20,
            id_suffix: 'crushed_end_stone'
        },
        {
            input: { tag: 'c:gems/pulsating_crystal' },
            outputs: [{ id: 'enderio:pulsating_powder', count: 1 }],
            multiply: 'none',
            exclusions: ['enderio'],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: 'pulsating_powder'
        },
        {
            input: { item: 'ars_nouveau:wilden_horn' },
            outputs: [{ id: 'arsdelight:wilden_horn_powder', count: 2 }],
            multiply: 'none',
            exclusions: [],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: 'wilden_horn_powder'
        },
        {
            input: { item: 'ars_nouveau:wilden_spike' },
            outputs: [{ id: 'arsdelight:wilden_spike_powder', count: 2 }],
            multiply: 'none',
            exclusions: [],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: 'wilden_spike_powder'
        },
        {
            input: { item: 'minecraft:calcite' },
            outputs: [{ id: 'occultism:crushed_calcite', count: 4 }],
            multiply: 'none',
            exclusions: [],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: 'calcite_powder'
        },
        {
            input: { item: 'farmersdelight:rice' },
            outputs: [
                { id: 'minecraft:sugar', count: 2 },
                { id: 'minecraft:sugar', count: 1, chance: 0.1 }
            ],
            multiply: 'chance_only',
            exclusions: [],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: 'sugar_from_rice'
        },
        {
            input: { item: 'farmersdelight:rice_bag' },
            outputs: [
                { id: 'minecraft:sugar', count: 18 },
                { id: 'minecraft:sugar', count: 9, chance: 0.1 }
            ],
            multiply: 'chance_only',
            exclusions: ['create:crushing', 'create:milling', 'enderio', 'modern_industrialization'],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: 'sugar_from_rice_bag'
        },
        {
            input: { item: 'malum:raw_brilliance' },
            outputs: [
                { id: 'malum:crushed_brilliance', count: 2 },
                { id: 'malum:crushed_brilliance', count: 1, chance: 0.5 }
            ],
            multiply: 'chance_only',
            exclusions: [],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: 'crushed_brilliance'
        },

        {
            input: { item: 'farmersdelight:rice_panicle' },
            outputs: [
                { id: 'farmersdelight:rice', count: 1 },
                { id: 'farmersdelight:straw', count: 1 }
            ],
            multiply: 'none',
            exclusions: ['create:crushing', 'create:milling'],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: 'rice_panicle'
        },
        {
            input: { item: 'minecraft:wheat' },
            outputs: [
                { id: 'pneumaticcraft:wheat_flour', count: 1 },
                { id: 'pneumaticcraft:wheat_flour', count: 1, chance: 0.5 }
            ],
            multiply: 'chance_only',
            exclusions: ['create:milling', 'create:crushing', 'modern_industrialization'],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: 'wheat_flour'
        },
        {
            input: { tag: 'create:pulpifiable' },
            outputs: [
                { id: 'oritech:biomass', count: 2 },
                { id: 'oritech:biomass', count: 1, chance: 0.5 }
            ],
            multiply: 'chance_only',
            exclusions: [],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: 'biomass'
        },
        {
            input: { item: 'malum:scarstone' },
            outputs: [
                { id: 'naturesaura:infused_stone', count: 1 },
                { id: 'malum:strange_crystal', count: 1, chance: 0.05 }
            ],
            multiply: 'chance_only',
            exclusions: [],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: 'strange_crystal'
        }
    ];

    let mi_materials = ['silicon', 'stainless_steel'];

    mi_materials.forEach((material) => {
        recipes.push({
            input: { tag: `c:ingots/${material}` },
            outputs: [{ id: `modern_industrialization:${material}_dust`, count: 1 }],
            multiply: 'none',
            exclusions: ['create:milling', 'modern_industrialization'],
            fe: 2400,
            eu: 2,
            duration: 5,
            id_suffix: `${material}_dust_from_${material}`
        });
    });

    recipes.forEach((recipe) => {
        // Ars Nouveau
        if (!recipe.exclusions.includes('ars_nouveau')) {
            let r = {
                type: 'ars_nouveau:crush',
                input: recipe.input,
                output: []
            };

            recipe.outputs.forEach((output) => {
                r.output.push({ stack: output, chance: output.chance ? output.chance : 1.0, maxRange: 1 });
            });
            event.custom(r).id(`${id_prefix}${getID(r.type)}/${recipe.id_suffix}`);
        }

        // EnderIO
        if (!recipe.exclusions.includes('enderio')) {
            let r = {
                type: 'enderio:sag_milling',
                input: recipe.input,
                outputs: [],
                multiply: 'none',
                bonus: recipe.multiply,
                energy: recipe.fe
            };

            recipe.outputs.forEach((output) => {
                r.outputs.push({ item: output, chance: output.chance ? output.chance : 1.0 });
            });
            event.custom(r).id(`${id_prefix}${getID(r.type)}/${recipe.id_suffix}`);
        }

        // Create Crushing
        if (!recipe.exclusions.includes('create:crushing')) {
            let r = {
                type: 'create:crushing',
                ingredients: [recipe.input],
                results: recipe.outputs,
                processing_time: recipe.duration * 2 * 20
            };
            event.custom(r).id(`${id_prefix}${getID(r.type)}/${recipe.id_suffix}`);
        }

        // Create Milling
        if (!recipe.exclusions.includes('create:milling')) {
            let r = {
                type: 'create:milling',
                ingredients: [recipe.input],
                results: recipe.outputs,
                processing_time: recipe.duration * 1.5 * 20
            };
            event.custom(r).id(`${id_prefix}${getID(r.type)}/${recipe.id_suffix}`);
        }

        // Modern Industrialization Macerator
        if (!recipe.exclusions.includes('modern_industrialization')) {
            recipe.input.amount = recipe.input.count;
            let r = {
                type: 'modern_industrialization:macerator',
                item_inputs: recipe.input,
                item_outputs: [],
                eu: recipe.eu,
                duration: recipe.duration * 20
            };

            recipe.outputs.forEach((output) => {
                r.item_outputs.push({
                    item: output.id,
                    amount: output.count,
                    probability: output.chance ? output.chance : 1.0
                });
            });
            event.custom(r).id(`${id_prefix}${getID(r.type)}/${recipe.id_suffix}`);
        }
    });
});
