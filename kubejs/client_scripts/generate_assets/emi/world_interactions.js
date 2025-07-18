ClientEvents.generateAssets('before_mods', (event) => {
    // https://github.com/emilyploszaj/emi/wiki/Adding-Recipes#adding-info-recipes

    const descriptions = [
        {
            left: 'item:justdirethings:raw_coal_t1_ore',
            right: '#item:minecraft:pickaxes',
            output: {
                type: 'item',
                id: 'justdirethings:coal_t1',
                amount: 3
            },
            id: 'justdirethings:coal_t1'
        },
        {
            left: 'item:justdirethings:raw_coal_t2_ore',
            right: '#item:minecraft:pickaxes',
            output: {
                type: 'item',
                id: 'justdirethings:coal_t2',
                amount: 3
            },
            id: 'justdirethings:coal_t2'
        },
        {
            left: 'item:justdirethings:raw_coal_t3_ore',
            right: '#item:minecraft:pickaxes',
            output: {
                type: 'item',
                id: 'justdirethings:coal_t3',
                amount: 3
            },
            id: 'justdirethings:coal_t3'
        },
        {
            left: 'item:justdirethings:raw_coal_t4_ore',
            right: '#item:minecraft:pickaxes',
            output: {
                type: 'item',
                id: 'justdirethings:coal_t4',
                amount: 3
            },
            id: 'justdirethings:coal_t4'
        },
        {
            left: 'item:justdirethings:raw_ferricore_ore',
            right: '#item:minecraft:pickaxes',
            output: {
                type: 'item',
                id: 'justdirethings:raw_ferricore',
                amount: 3
            },
            id: 'justdirethings:raw_ferricore'
        },
        {
            left: 'item:justdirethings:raw_blazegold_ore',
            right: '#item:minecraft:pickaxes',
            output: {
                type: 'item',
                id: 'justdirethings:raw_blazegold',
                amount: 3
            },
            id: 'justdirethings:raw_blazegold'
        },
        {
            left: 'item:justdirethings:raw_celestigem_ore',
            right: '#item:minecraft:pickaxes',
            output: {
                type: 'item',
                id: 'justdirethings:celestigem',
                amount: 3
            },
            id: 'justdirethings:celestigem'
        },
        {
            left: 'item:justdirethings:raw_eclipsealloy_ore',
            right: '#item:minecraft:pickaxes',
            output: {
                type: 'item',
                id: 'justdirethings:raw_eclipsealloy',
                amount: 3
            },
            id: 'justdirethings:raw_eclipsealloy'
        },
        {
            left: 'item:minecraft:cauldron',
            right: {
                type: 'item',
                id: 'ars_nouveau:wixie_charm',
                nbt: '{"minecraft:lore":[\u0027{"color":"green","text":"Sneak Right-Click on the block to convert."}\u0027]}',
                amount: 1
            },
            output: {
                type: 'item',
                id: 'ars_nouveau:wixie_cauldron',
                amount: 1
            },
            id: 'ars_nouveau:wixie_cauldron'
        },
        {
            left: 'item:ars_nouveau:enchanting_apparatus',
            right: {
                type: 'item',
                id: 'ars_nouveau:wixie_charm',
                nbt: '{"minecraft:lore":[\u0027{"color":"green","text":"Sneak Right-Click on the block to convert."}\u0027]}',
                amount: 1
            },
            output: {
                type: 'item',
                id: 'ars_additions:enchanting_wixie_cauldron',
                amount: 1
            },
            id: 'ars_additions:enchanting_wixie_cauldron'
        },
        {
            left: 'item:farmersdelight:cooking_pot',
            right: {
                type: 'item',
                id: 'ars_nouveau:wixie_charm',
                nbt: '{"minecraft:lore":[\u0027{"color":"green","text":"Sneak Right-Click on the block to convert."}\u0027]}',
                amount: 1
            },
            output: {
                type: 'item',
                id: 'starbunclemania:cooking_pot_wixie_cauldron',
                amount: 1
            },
            id: 'starbunclemania:cooking_pot_wixie_cauldron'
        },
        {
            left: 'item:minecraft:furnace',
            right: {
                type: 'item',
                id: 'ars_nouveau:wixie_charm',
                nbt: '{"minecraft:lore":[\u0027{"color":"green","text":"Sneak Right-Click on the block to convert."}\u0027]}',
                amount: 1
            },
            output: {
                type: 'item',
                id: 'starbunclemania:smelting_wixie_cauldron',
                amount: 1
            },
            id: 'starbunclemania:smelting_wixie_cauldron'
        },
        {
            left: 'item:minecraft:stonecutter',
            right: {
                type: 'item',
                id: 'ars_nouveau:wixie_charm',
                nbt: '{"minecraft:lore":[\u0027{"color":"green","text":"Sneak Right-Click on the block to convert."}\u0027]}',
                amount: 1
            },
            output: {
                type: 'item',
                id: 'starbunclemania:stonecutting_wixie_cauldron',
                amount: 1
            },
            id: 'starbunclemania:stonecutting_wixie_cauldron'
        },
        {
            left: 'item:farmersdelight:cutting_board',
            right: {
                type: 'item',
                id: 'ars_nouveau:wixie_charm',
                nbt: '{"minecraft:lore":[\u0027{"color":"green","text":"Sneak Right-Click on the block to convert."}\u0027]}',
                amount: 1
            },
            output: {
                type: 'item',
                id: 'starbunclemania:cutting_wixie_cauldron',
                amount: 1
            },
            id: 'starbunclemania:cutting_wixie_cauldron'
        },
        {
            left: 'item:starbunclemania:fluid_jar',
            right: {
                type: 'item',
                id: 'ars_nouveau:wixie_charm',
                nbt: '{"minecraft:lore":[\u0027{"color":"green","text":"Sneak Right-Click on the block to convert."}\u0027]}',
                amount: 1
            },
            output: {
                type: 'item',
                id: 'starbunclemania:mixer_wixie_cauldron',
                amount: 1
            },
            id: 'starbunclemania:mixer_wixie_cauldron'
        },
        {
            left: 'item:minecraft:mossy_cobblestone',
            right: 'item:ars_nouveau:drygmy_charm',
            output: {
                type: 'item',
                id: 'ars_nouveau:drygmy_stone',
                amount: 1
            },
            id: 'ars_nouveau:drygmy_stone'
        },
        {
            left: 'item:minecraft:prismarine',
            right: 'item:ars_elemental:siren_charm',
            output: {
                type: 'item',
                id: 'ars_elemental:mermaid_rock',
                amount: 1
            },
            id: 'ars_elemental:mermaid_rock'
        },
        {
            left: '#item:minecraft:flowers',
            right: 'item:ars_nouveau:whirlisprig_charm',
            output: {
                type: 'item',
                id: 'ars_nouveau:whirlisprig_flower',
                amount: 1
            },
            id: 'ars_nouveau:whirlisprig_flower'
        },

        {
            left: 'item:actuallyadditions:crystallized_canola_seed',
            right: {
                type: 'fluid',
                id: 'actuallyadditions:refined_canola_oil',
                amount: 1000
            },
            output: {
                type: 'fluid',
                id: 'actuallyadditions:crystallized_oil',
                amount: 1000
            },
            id: 'actuallyadditions:crystallized_oil'
        },
        {
            left: 'item:actuallyadditions:empowered_canola_seed',
            right: {
                type: 'fluid',
                id: 'actuallyadditions:crystallized_oil',
                amount: 1000
            },
            output: {
                type: 'fluid',
                id: 'actuallyadditions:empowered_oil',
                amount: 1000
            },
            id: 'actuallyadditions:empowered_oil'
        },
        {
            left: '#item:minecraft:hoes',
            right: 'item:minecraft:grass_block',
            output: {
                type: 'item',
                id: 'actuallyadditions:worm',
                nbt: '{"minecraft:lore":[\u0027{"color":"green","text":"Small chance when tilling Grass"}\u0027]}',
                amount: 1
            },
            id: 'actuallyadditions:worm'
        },
        {
            left: 'item:minecraft:brush',
            right: 'item:minecraft:armadillo_spawn_egg',
            output: {
                type: 'item',
                id: 'minecraft:armadillo_scute',
                nbt: '{"minecraft:lore":[\u0027{"color":"green","text":"Obtained by brushing Armadillos"}\u0027]}',
                amount: 1
            },
            id: 'minecraft:armadillo_scute'
        },
        {
            left: '#item:justdirethings:goo_revive_tier_1',
            right: 'item:justdirethings:gooblock_tier1',
            output: 'item:justdirethings:gooblock_tier1',
            id: 'justdirethings:goo_revive_tier_1'
        },
        {
            left: '#item:justdirethings:goo_revive_tier_2',
            right: 'item:justdirethings:gooblock_tier2',
            output: 'item:justdirethings:gooblock_tier2',
            id: 'justdirethings:goo_revive_tier_2'
        },
        {
            left: '#item:justdirethings:goo_revive_tier_3',
            right: 'item:justdirethings:gooblock_tier3',
            output: 'item:justdirethings:gooblock_tier3',
            id: 'justdirethings:goo_revive_tier_3'
        },
        {
            left: '#item:justdirethings:goo_revive_tier_4',
            right: 'item:justdirethings:gooblock_tier4',
            output: 'item:justdirethings:gooblock_tier4',
            id: 'justdirethings:goo_revive_tier_4'
        },
        {
            left: ['item:minecraft:tall_grass', 'item:minecraft:short_grass'],
            right: '#item:farmersdelight:straw_harvesters',
            output: {
                type: 'item',
                id: 'farmersdelight:straw',
                nbt: '{"minecraft:lore":[\u0027{"color":"green","text":"Break Grass with a Knife!"}\u0027]}',
                chance: 0.2
            },
            id: 'farmersdelight:straw_from_grass'
        }
    ];

    descriptions.forEach((description) => {
        description.type = 'emi:world_interaction';
        event.json(`emi:recipe/additions/${description.id.replace(/\:/g, '_')}`, description);
    });
});
