ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:simple_alloying/';
    const recipes = [
        {
            output: { id: 'create:andesite_alloy', count: 4 },
            inputs: [
                { tag: 'c:dusts/sky_stone', count: 4 },
                { item: 'minecraft:andesite', count: 1 }
            ],
            duration: 20,
            tier: 0,
            exclusions: ['create'],
            id_suffix: `andesite_alloy`
        },
        {
            output: { id: 'create:andesite_alloy', count: 1 },
            inputs: [
                { tag: 'c:dusts/sky_stone', count: 1 },
                { item: 'enigmatica:andesite_pebble', count: 1 }
            ],
            tier: 0,
            exclusions: ['create'],
            id_suffix: `andesite_alloy_from_pebble`
        },
        {
            output: { id: 'occultism:iesnium_ingot', count: 1 },
            inputs: [
                { tag: 'c:ingots/silver', count: 1 },
                { tag: 'c:dusts/diamond', count: 7 }
            ],
            tier: 2,
            exclusions: ['create'],
            id_suffix: `iesnium_ingot`
        },
        {
            output: { id: 'naturesaura:depth_ingot', count: 1 },
            inputs: [
                { tag: 'c:ingots/sky', count: 2 },
                { tag: 'c:ingots/netherite', count: 2 }
            ],
            tier: 3,
            exclusions: ['create'],
            id_suffix: `depth_ingot`
        },
        {
            output: { id: 'minecraft:netherite_ingot', count: 2 },
            inputs: [
                { item: 'minecraft:netherite_scrap', count: 4 },
                { tag: 'c:ingots/hallowed_gold', count: 4 }
            ],
            tier: 3,
            exclusions: ['create'],
            id_suffix: `netherite_ingot`
        },

        {
            output: { id: 'create:rose_quartz', count: 2 },
            inputs: [
                { item: 'malum:strange_crystal', count: 1 },
                { tag: 'c:gems/quartz', count: 1 }
            ],
            tier: 0,
            exclusions: [],
            id_suffix: `rose_quartz`
        },
        {
            output: { id: 'enderio:redstone_alloy_ingot', count: 1 },
            inputs: [
                { tag: 'c:dusts/redstone', count: 1 },
                { tag: 'c:dusts/silicon', count: 1 }
            ],
            tier: 0,
            exclusions: [],
            id_suffix: `redstone_alloy_ingot`
        },
        {
            output: { id: 'enderio:conductive_alloy_ingot', count: 2 },
            inputs: [
                { tag: 'c:ingots/infused_iron', count: 1 },
                { tag: 'c:ingots/copper', count: 1 }
            ],
            tier: 0,
            exclusions: [],
            id_suffix: `conductive_alloy_ingot`
        },
        {
            output: { id: 'enderio:energetic_alloy_ingot', count: 1 },
            inputs: [
                { tag: 'c:ingots/hallowed_gold', count: 1 },
                { item: 'malum:strange_crystal', count: 1 }
            ],
            tier: 2,
            exclusions: [],
            id_suffix: `energetic_alloy_ingot`
        },
        {
            output: { id: 'enderio:pulsating_alloy_ingot', count: 1 },
            inputs: [
                { tag: 'c:ingots/infused_iron', count: 1 },
                { tag: 'c:dusts/grains_of_pizeallity', count: 1 }
            ],
            tier: 0,
            exclusions: [],
            id_suffix: `pulsating_alloy_ingot`
        },
        {
            output: { id: 'enderio:soularium_ingot', count: 3 },
            inputs: [
                { tag: 'c:gems/soulstone', count: 2 },
                { tag: 'c:ingots/hallowed_gold', count: 1 }
            ],
            tier: 0,
            exclusions: ['create'],
            id_suffix: `soularium_ingot`
        },
        {
            output: { id: 'malum:refined_soulstone', count: 1 },
            inputs: [
                { item: 'malum:crushed_soulstone', count: 1 },
                { tag: 'aether:gems/zanite', count: 1 }
            ],
            tier: 0,
            exclusions: ['create'],
            id_suffix: `refined_soulstone`
        },
        {
            output: { id: 'enigmatica:magic_lamp', count: 1 },
            inputs: [
                { item: 'malum:iridescent_ether', count: 1 },
                { item: 'occultism:magic_lamp_empty', count: 1 }
            ],
            tier: 3,
            exclusions: ['create', 'modern_industrialization'],
            id_suffix: `magic_lamp`
        },
        {
            output: { id: 'modern_industrialization:stainless_steel_ingot', count: 1 },
            inputs: [
                { item: 'malum:iridescent_ether', count: 1 },
                { tag: 'c:ingots/soul_stained_steel', count: 1 }
            ],
            tier: 2,
            exclusions: ['create', 'modern_industrialization'],
            id_suffix: `stainless_steel_ingot`
        },
        {
            output: { id: 'enderio:vibrant_alloy_ingot', count: 1 },
            inputs: [
                { tag: 'c:dusts/grains_of_vibrancy', count: 4 },
                { tag: 'c:ingots/sky', count: 1 }
            ],
            tier: 3,
            exclusions: ['create', 'modern_industrialization'],
            id_suffix: `vibrant_alloy_ingot`
        }
    ];

    recipes.forEach((recipe) => {
        let tiers = [
            { eu: 2, fe: 25600 },
            { eu: 4, fe: 51200 },
            { eu: 32, fe: 102400 },
            { eu: 64, fe: 204800 }
        ];

        // EnderIO
        if (!recipe.exclusions.includes('enderio')) {
            let r = {
                type: 'enderio:alloy_smelting',
                inputs: recipe.inputs,
                output: recipe.output,
                energy: tiers[recipe.tier].fe,
                experience: recipe.tier == 2 ? 1.5 : 0.3
            };
            event.custom(r).id(`${id_prefix}${getID(r.type)}/${recipe.id_suffix}`);
        }

        // Create Mixing
        if (!recipe.exclusions.includes('create') && recipe.tier <= 1) {
            let ingredients = [];
            recipe.inputs.forEach((input) => {
                for (var i = 0; i < input.count; i++) {
                    ingredients.push(input);
                }
            });
            let r = {
                type: 'create:mixing',
                ingredients: ingredients,
                results: [recipe.output],
                heat_requirement: recipe.tier == 1 ? 'superheated' : 'heated'
            };
            event.custom(r).id(`${id_prefix}${getID(r.type)}/${recipe.id_suffix}`);
        }

        // MI Kiln
        if (!recipe.exclusions.includes('modern_industrialization')) {
            let r = {
                item_inputs: recipe.inputs.map((input) => {
                    input.amount = input.count;
                    return input;
                }),
                item_outputs: [{ item: recipe.output.id, amount: recipe.output.count }],
                duration: recipe.duration ? recipe.duration : 10,
                eu: tiers[recipe.tier].eu
            };

            if (r.eu <= 4) {
                r.type = 'modern_industrialization:steam_kiln';
                event.custom(r).id(`${id_prefix}${getID(r.type)}/${recipe.id_suffix}`);
            }

            r.type = 'modern_industrialization:electric_kiln';
            event.custom(r).id(`${id_prefix}${getID(r.type)}/${recipe.id_suffix}`);
        }
    });
});
