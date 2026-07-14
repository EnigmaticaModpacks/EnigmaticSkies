ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:pneumaticcraft/thermo_plant/';

    // Default Recipe Speed = 60 ticks or 3 seconds
    // Specify time in seconds

    const recipes = [
        {
            outputs: { fluid_output: { id: 'actuallyadditions:canola_oil', amount: 160 } },
            inputs: { item: { item: 'actuallyadditions:canola' } },
            pressure: 2.0,
            time: 0.05,
            id: `${id_prefix}canola_oil`
        },
        {
            outputs: { fluid_output: { id: 'actuallyadditions:refined_canola_oil', amount: 2000 } },
            inputs: {
                fluid: { fluid: 'actuallyadditions:canola_oil', amount: 1000 },
                item: { item: 'theurgy:fermentation_starter' }
            },
            temperature: { min: CtoK(100) },
            pressure: 2.0,
            time: 0.05,
            id: `${id_prefix}refined_canola_oil`
        },
        {
            outputs: { fluid_output: { id: 'actuallyadditions:crystallized_oil', amount: 1000 } },
            inputs: {
                fluid: { fluid: 'actuallyadditions:refined_canola_oil', amount: 1000 },
                item: { item: 'actuallyadditions:crystallized_canola_seed' }
            },
            pressure: 2.0,
            exothermic: true,
            time: 0.05,
            id: `${id_prefix}crystallized_oil`
        },
        {
            outputs: { fluid_output: { id: 'actuallyadditions:empowered_oil', amount: 1000 } },
            inputs: {
                fluid: { fluid: 'actuallyadditions:crystallized_oil', amount: 1000 },
                item: { item: 'actuallyadditions:empowered_canola_seed' }
            },
            pressure: 2.0,
            exothermic: true,
            time: 0.05,
            id: `${id_prefix}empowered_oil`
        },
        {
            outputs: { fluid_output: { id: 'industrialforegoing:ether_gas', amount: 125 } },
            inputs: { item: { item: 'ars_nouveau:frostaya_pod' } },
            pressure: 2.0,
            time: 0.05,
            id: `${id_prefix}ether_gas`
        },
        {
            outputs: { fluid_output: { id: 'enderio:fluid_vapor_of_levity_still', amount: 125 } },
            inputs: { item: { item: 'ars_elemental:flashpine_pod' } },
            pressure: 2.0,
            time: 0.05,
            id: `${id_prefix}fluid_vapor_of_levity_still`
        },
        {
            outputs: { fluid_output: { id: 'supplementaries:lumisene', amount: 125 } },
            inputs: { item: { item: 'minecraft:glow_berries' } },
            pressure: 1.0,
            exothermic: true,
            time: 1.0,
            id: `${id_prefix}lumisene`
        },
        {
            outputs: { item_output: { count: 1, id: 'pneumaticcraft:salmon_tempura' } },
            inputs: {
                fluid: { fluid: 'actuallyadditions:canola_oil', amount: 100 },
                item: { item: 'pneumaticcraft:raw_salmon_tempura' }
            },
            temperature: { min: CtoK(150) },
            id: `${id_prefix}salmon_tempura`
        },
        {
            outputs: { item_output: { count: 4, id: 'pneumaticcraft:chips' } },
            inputs: {
                fluid: { fluid: 'actuallyadditions:canola_oil', amount: 100 },
                item: { tag: 'c:crops/potato' }
            },
            temperature: { min: CtoK(150) },
            id: `${id_prefix}chips`
        },
        {
            outputs: { fluid_output: { id: 'modern_industrialization:lubricant', amount: 250 } },
            inputs: {
                fluid: { fluid: 'enigmatica:heavy_oil', amount: 250 },
                item: { tag: 'c:dusts/grains_of_infinity' }
            },
            temperature: { min: CtoK(100) },
            id: `${id_prefix}lubricant`
        },
        {
            outputs: { fluid_output: { id: 'pneumaticcraft:plastic', amount: 500 } },
            inputs: {
                fluid: { amount: 100, fluid: 'enigmatica:light_oil' },
                item: { tag: 'c:gems/primal_coal' }
            },
            temperature: { min: CtoK(100) },
            id: `${id_prefix}plastic`
        },
        {
            outputs: { item_output: { id: 'pneumaticcraft:drill_bit_iron', count: 1 } },
            inputs: {
                fluid: { fluid: 'modern_industrialization:lubricant', amount: 2000 },
                item: { tag: 'c:ingots/iron' }
            },
            air_use_multiplier: 2.0,
            pressure: 3.0,
            time: 6.0,
            id: `${id_prefix}drill_bit_iron`
        },
        {
            outputs: { item_output: { id: 'pneumaticcraft:drill_bit_compressed_iron', count: 1 } },
            inputs: {
                fluid: { fluid: 'modern_industrialization:lubricant', amount: 4000 },
                item: { tag: 'c:ingots/compressed_iron' }
            },
            air_use_multiplier: 5.0,
            pressure: 4.0,
            temperature: { min: CtoK(200) },
            time: 12.0,
            id: `${id_prefix}drill_bit_compressed_iron`
        },
        {
            outputs: { item_output: { id: 'pneumaticcraft:drill_bit_diamond', count: 1 } },
            inputs: {
                fluid: { fluid: 'modern_industrialization:lubricant', amount: 8000 },
                item: { tag: 'c:storage_blocks/diamond' }
            },
            air_use_multiplier: 10.0,
            pressure: 7.5,
            temperature: { min: CtoK(500) },
            time: 3.0,
            id: `${id_prefix}drill_bit_diamond`
        },
        {
            outputs: { fluid_output: { id: 'industrialforegoing:latex', amount: 60 } },
            inputs: { item: { item: 'minecraft:dandelion' } },
            pressure: 2.0,
            exothermic: true,
            time: 0.05,
            id: `${id_prefix}latex_from_dandelion`
        },
        {
            outputs: { fluid_output: { id: 'industrialforegoing:latex', amount: 120 } },
            inputs: { item: { item: 'minecraft:vine' } },
            pressure: 2.0,
            exothermic: true,
            time: 0.1,
            id: `${id_prefix}latex_from_vine`
        },
        {
            outputs: { item_output: { count: 1, id: 'oritech:reinforced_carbon_sheet' } },
            inputs: {
                fluid: { fluid: 'pneumaticcraft:plastic', amount: 500 },
                item: { item: 'oritech:carbon_fibre_strands' }
            },
            pressure: 2.0,
            exothermic: true,
            time: 32,
            id: `${id_prefix}reinforced_carbon_sheet`
        },
        {
            outputs: { item_output: { id: 'create:sturdy_sheet', count: 1 } },
            inputs: {
                fluid: { tag: 'c:lava', amount: 500 },
                item: { tag: 'c:dusts/obsidian' }
            },
            pressure: 2.0,
            exothermic: true,
            id: `${id_prefix}sturdy_sheet`
        },
        {
            outputs: { fluid_output: { id: 'minecraft:water', amount: 4000 } },
            inputs: { item: { item: 'theurgy:crystallized_water' } },
            pressure: 1.0,
            exothermic: true,
            time: 1.0,
            id: `${id_prefix}water`
        },
        {
            outputs: { fluid_output: { id: 'minecraft:lava', amount: 4000 } },
            inputs: { item: { item: 'theurgy:crystallized_lava' } },
            pressure: 1.0,
            temperature: { min: CtoK(1000) },
            time: 1.5,
            id: `${id_prefix}lava`
        },
        {
            outputs: { fluid_output: { id: 'enigmatica:espresso', amount: 250 } },
            inputs: {
                fluid: { fluid: 'minecraft:water', amount: 250 },
                item: { item: 'actuallyadditions:coffee_beans' }
            },
            pressure: 9.0,
            temperature: { min: CtoK(90), max: CtoK(96) },
            id: `${id_prefix}espresso`
        },
        {
            outputs: { item_output: { id: 'enigmatica:kerogen', count: 1 } },
            inputs: {
                fluid: { fluid: 'justdirethings:polymorphic_fluid_source', amount: 100 },
                item: { item: 'enigmatica:pelagite' }
            },
            air_use_multiplier: 100.0,
            temperature: { min: CtoK(1500) },
            pressure: -0.75,
            time: 1.0,
            id: `${id_prefix}kerogen`
        },
        {
            outputs: { fluid_output: { id: 'pneumaticcraft:oil', amount: 1000 } },
            inputs: {
                fluid: { fluid: 'justdirethings:time_fluid_source', amount: 100 },
                item: { item: 'enigmatica:kerogen' }
            },
            air_use_multiplier: 100.0,
            temperature: { min: CtoK(1500) },
            pressure: 9.0,
            time: 2.0,
            id: `${id_prefix}crude_oil`
        },
        {
            outputs: { fluid_output: { id: 'modern_industrialization:liquid_air', amount: 1000 } },
            inputs: { item: { item: 'minecraft:wind_charge' } },
            air_use_multiplier: 1800.0,
            temperature: { max: CtoK(-175) },
            pressure: 9.0,
            time: 16.0,
            id: `${id_prefix}liquid_air`
        },
        {
            outputs: { item_output: { id: 'actuallyadditions:lens_of_the_miner', count: 1 } },
            inputs: {
                fluid: { fluid: 'supplementaries:lumisene', amount: 8000 },
                item: { item: 'actuallyadditions:lens' }
            },
            air_use_multiplier: 10.0,
            pressure: 7.5,
            temperature: { min: CtoK(500) },
            time: 32.0,
            id: `${id_prefix}lens_of_the_miner`
        },
        {
            outputs: { fluid_output: { id: 'justdirethings:time_fluid_source', amount: 1000 } },
            inputs: {
                fluid: { fluid: 'justdirethings:polymorphic_fluid_source', amount: 1000 },
                item: { tag: 'c:gems/time' }
            },
            air_use_multiplier: 10.0,
            temperature: { min: CtoK(100) },
            pressure: 2.0,
            id: `${id_prefix}time_fluid_source`
        },
        {
            outputs: { item_output: { id: 'minecraft:blaze_rod', count: 1 } },
            inputs: {
                fluid: { fluid: 'supplementaries:lumisene', amount: 1000 },
                item: { item: 'enderio:infinity_rod' }
            },
            temperature: { min: CtoK(1000) },
            id: `${id_prefix}blaze_rod`
        },
        {
            outputs: { item_output: { id: 'minecraft:breeze_rod', count: 1 } },
            inputs: {
                fluid: { fluid: 'modern_industrialization:liquid_air', amount: 1000 },
                item: { item: 'enderio:infinity_rod' }
            },
            temperature: { max: CtoK(-175) },
            id: `${id_prefix}breeze_rod`
        },

        {
            outputs: { fluid_output: { id: 'modern_industrialization:high_pressure_steam', amount: 125 } },
            inputs: { fluid: { fluid: 'modern_industrialization:steam', amount: 1000 } },
            air_use_multiplier: 500.0,
            temperature: { min: CtoK(1500) },
            pressure: 9.0,
            time: 16.0,
            id: `${id_prefix}high_pressure_steam`
        },
        {
            outputs: { fluid_output: { id: 'modern_industrialization:lubricant', amount: 250 } },
            inputs: {
                fluid: { fluid: 'justdirethings:polymorphic_fluid_source', amount: 250 },
                item: { item: 'ars_nouveau:starbuncle_charm' }
            },
            pressure: 1.0,
            exothermic: true,
            id: `${id_prefix}lubricant_from_starbuncle`
        },

        {
            outputs: { item_output: { id: 'modern_industrialization:rubber_sheet', count: 1 } },
            inputs: {
                fluid: { fluid: 'enigmatica:vulcanized_rubber', amount: 50 },
                item: { item: 'farmersdelight:canvas' }
            },
            pressure: 2.0,
            exothermic: true,
            time: 0.5,
            id: `${id_prefix}rubber_sheet`
        },

        {
            outputs: {
                fluid_output: { id: 'oritech:still_sheol_fire', amount: 1000 },
                item_output: { id: 'minecraft:bowl', count: 1 }
            },
            inputs: {
                fluid: { fluid: 'minecraft:lava', amount: 1000 },
                item: { item: 'arsdelight:bombegrante_jelly' }
            },
            air_use_multiplier: 6.66,
            temperature: { min: CtoK(1666) },
            pressure: 6.66,
            time: 1.0,
            id: `${id_prefix}still_sheol_fire`
        },
        {
            outputs: { fluid_output: { id: 'oritech:still_strange_matter', amount: 1000 } },
            inputs: {
                fluid: { fluid: 'oritech:still_sheol_fire', amount: 250 },
                item: { item: 'malum:strange_crystal' }
            },
            air_use_multiplier: 6.66,
            temperature: { min: CtoK(1666) },
            pressure: 6.66,
            time: 1.0,
            id: `${id_prefix}still_strange_matter`
        },
        {
            outputs: { item_output: { id: 'minecraft:netherite_scrap', count: 1 } },
            inputs: {
                fluid: { fluid: 'oritech:still_sheol_fire', amount: 250 },
                item: { tag: 'c:dusts/netherite_scrap' }
            },
            air_use_multiplier: 6.66,
            temperature: { min: CtoK(1666) },
            pressure: 6.66,
            time: 4.0,
            id: `${id_prefix}netherite_scrap`
        },
        {
            outputs: { item_output: { id: 'malum:cthonic_gold', count: 1 } },
            inputs: {
                fluid: { fluid: 'oritech:still_sheol_fire', amount: 250 },
                item: { tag: 'c:storage_blocks/hallowed_gold' }
            },
            air_use_multiplier: 6.66,
            temperature: { min: CtoK(1666) },
            pressure: 6.66,
            time: 4.0,
            id: `${id_prefix}cthonic_gold`
        },
        {
            outputs: { item_output: { id: 'create:blaze_cake', count: 1 } },
            inputs: {
                fluid: { fluid: 'minecraft:lava', amount: 250 },
                item: { item: 'create:blaze_cake_base' }
            },
            pressure: 1.0,
            time: 0.05,
            id: `${id_prefix}blaze_cake`
        },

        {
            outputs: { item_output: { id: 'theurgy:alchemical_salt_mineral', count: 8 } },
            inputs: { item: { tag: 'c:pebbles' } },
            temperature: { min: CtoK(500) },
            pressure: -0.75,
            time: 0.05,
            id: `${id_prefix}alchemical_salt_mineral_from_pebbles`
        },
        {
            outputs: { item_output: { id: 'theurgy:alchemical_salt_mineral', count: 32 } },
            inputs: { item: { tag: 'c:gravels' } },
            temperature: { min: CtoK(500) },
            pressure: -0.75,
            time: 1.0,
            id: `${id_prefix}alchemical_salt_mineral_from_gravels`
        },
        {
            outputs: { item_output: { id: 'justdirethings:coal_t1', count: 2 } },
            inputs: { item: { tag: 'minecraft:logs_that_burn' } },
            temperature: { min: CtoK(500) },
            pressure: -0.75,
            time: 0.05,
            id: `${id_prefix}coal_t1`
        },
        {
            outputs: { item_output: { id: 'malum:grim_talc', count: 2 } },
            inputs: { item: { item: 'minecraft:bone' } },
            temperature: { min: CtoK(500) },
            pressure: -0.75,
            time: 0.05,
            id: `${id_prefix}grim_talc_from_bone`
        },
        {
            outputs: { item_output: { id: 'malum:grim_talc', count: 1 } },
            inputs: { item: { item: 'aquaculture:fish_bones' } },
            temperature: { min: CtoK(500) },
            pressure: -0.75,
            time: 0.05,
            id: `${id_prefix}grim_talc_from_fish_bones`
        },
        {
            outputs: { item_output: { id: 'malum:rotting_essence', count: 2 } },
            inputs: { item: { item: 'minecraft:rotten_flesh' } },
            temperature: { min: CtoK(500) },
            pressure: -0.75,
            time: 0.05,
            id: `${id_prefix}rotting_essence_from_rotten_flesh`
        }
    ];

    event.forEachRecipe({ type: 'create:deploying' }, (r) => {
        let recipe = JSON.parse(r.json);
        let recipe_id = r.getId();

        if (recipe_id.toString().match(/.*deoxidising/)) {
            recipes.push({
                outputs: { item_output: { id: recipe.ingredients[0].item, count: 1 } },
                inputs: {
                    fluid: { fluid: 'minecraft:water', amount: 50 },
                    item: { item: recipe.results[0].id }
                },
                pressure: 1.0,
                exothermic: true,
                time: 0.05,
                id: `${id_prefix}${recipe_id.split('/')[1].replace('_deox', '_ox')}`
            });
        }
    });

    recipes.forEach((recipe) => {
        recipe.type = `pneumaticcraft:thermo_plant`;
        if (recipe.time) {
            recipe.speed = 3 / recipe.time;
        }

        event.custom(recipe).id(recipe.id);
    });
});
