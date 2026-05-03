ClientEvents.generateAssets('before_mods', (event) => {
    // https://github.com/emilyploszaj/emi/wiki/Adding-Recipes#adding-info-recipes

    const Lore = (translationKey) => {
        return `{"minecraft:lore":['{"color":"green","translate":"${translationKey}"}']}`;
    };

    const recipes = [
        {
            left: {
                type: 'item',
                id: 'ars_nouveau:wixie_charm',
                nbt: Lore('tooltip.enigmatica.wixie_conversion'),
                amount: 1
            },
            right: 'item:minecraft:cauldron',
            output: {
                type: 'item',
                id: 'ars_nouveau:wixie_cauldron',
                amount: 1
            },
            id: 'ars_nouveau:wixie_cauldron'
        },
        {
            left: {
                type: 'item',
                id: 'ars_nouveau:wixie_charm',
                nbt: Lore('tooltip.enigmatica.wixie_conversion'),
                amount: 1
            },
            right: 'item:ars_nouveau:enchanting_apparatus',
            output: {
                type: 'item',
                id: 'ars_additions:enchanting_wixie_cauldron',
                amount: 1
            },
            id: 'ars_additions:enchanting_wixie_cauldron'
        },
        {
            left: {
                type: 'item',
                id: 'ars_nouveau:wixie_charm',
                nbt: Lore('tooltip.enigmatica.wixie_conversion'),
                amount: 1
            },
            right: 'item:farmersdelight:cooking_pot',
            output: {
                type: 'item',
                id: 'starbunclemania:cooking_pot_wixie_cauldron',
                amount: 1
            },
            id: 'starbunclemania:cooking_pot_wixie_cauldron'
        },
        {
            left: {
                type: 'item',
                id: 'ars_nouveau:wixie_charm',
                nbt: Lore('tooltip.enigmatica.wixie_conversion'),
                amount: 1
            },
            right: 'item:minecraft:furnace',
            output: {
                type: 'item',
                id: 'starbunclemania:smelting_wixie_cauldron',
                amount: 1
            },
            id: 'starbunclemania:smelting_wixie_cauldron'
        },
        {
            left: {
                type: 'item',
                id: 'ars_nouveau:wixie_charm',
                nbt: Lore('tooltip.enigmatica.wixie_conversion'),
                amount: 1
            },
            right: 'item:minecraft:stonecutter',
            output: {
                type: 'item',
                id: 'starbunclemania:stonecutting_wixie_cauldron',
                amount: 1
            },
            id: 'starbunclemania:stonecutting_wixie_cauldron'
        },
        {
            left: {
                type: 'item',
                id: 'ars_nouveau:wixie_charm',
                nbt: Lore('tooltip.enigmatica.wixie_conversion'),
                amount: 1
            },
            right: 'item:farmersdelight:cutting_board',
            output: {
                type: 'item',
                id: 'starbunclemania:cutting_wixie_cauldron',
                amount: 1
            },
            id: 'starbunclemania:cutting_wixie_cauldron'
        },
        {
            left: {
                type: 'item',
                id: 'ars_nouveau:wixie_charm',
                nbt: Lore('tooltip.enigmatica.wixie_conversion'),
                amount: 1
            },
            right: 'item:starbunclemania:fluid_jar',
            output: {
                type: 'item',
                id: 'starbunclemania:mixer_wixie_cauldron',
                amount: 1
            },
            id: 'starbunclemania:mixer_wixie_cauldron'
        },
        {
            left: 'item:ars_nouveau:drygmy_charm',
            right: 'item:minecraft:mossy_cobblestone',
            output: {
                type: 'item',
                id: 'ars_nouveau:drygmy_stone',
                amount: 1
            },
            id: 'ars_nouveau:drygmy_stone'
        },
        {
            left: 'item:ars_elemental:siren_charm',
            right: 'item:minecraft:prismarine',
            output: {
                type: 'item',
                id: 'ars_elemental:mermaid_rock',
                amount: 1
            },
            id: 'ars_elemental:mermaid_rock'
        },
        {
            left: 'item:ars_nouveau:whirlisprig_charm',
            right: '#item:minecraft:flowers',
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
                nbt: Lore('tooltip.enigmatica.worm_from_grass'),
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
                nbt: Lore('tooltip.enigmatica.armadillo_scute'),
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
            left: 'item:actuallyadditions:enori_crystal_cluster',
            right: '#item:minecraft:pickaxes',
            output: {
                type: 'item',
                id: 'actuallyadditions:enori_crystal',
                amount: 3
            },
            id: 'actuallyadditions:enori_crystal'
        },
        {
            left: 'item:actuallyadditions:restonia_crystal_cluster',
            right: '#item:minecraft:pickaxes',
            output: {
                type: 'item',
                id: 'actuallyadditions:restonia_crystal',
                amount: 3
            },
            id: 'actuallyadditions:restonia_crystal'
        },
        {
            left: 'item:actuallyadditions:palis_crystal_cluster',
            right: '#item:minecraft:pickaxes',
            output: {
                type: 'item',
                id: 'actuallyadditions:palis_crystal',
                amount: 3
            },
            id: 'actuallyadditions:palis_crystal'
        },
        {
            left: 'item:actuallyadditions:diamatine_crystal_cluster',
            right: '#item:minecraft:pickaxes',
            output: {
                type: 'item',
                id: 'actuallyadditions:diamatine_crystal',
                amount: 3
            },
            id: 'actuallyadditions:diamatine_crystal'
        },
        {
            left: 'item:actuallyadditions:void_crystal_cluster',
            right: '#item:minecraft:pickaxes',
            output: {
                type: 'item',
                id: 'actuallyadditions:void_crystal',
                amount: 3
            },
            id: 'actuallyadditions:void_crystal'
        },
        {
            left: 'item:actuallyadditions:emeradic_crystal_cluster',
            right: '#item:minecraft:pickaxes',
            output: {
                type: 'item',
                id: 'actuallyadditions:emeradic_crystal',
                amount: 3
            },
            id: 'actuallyadditions:emeradic_crystal'
        },
        {
            left: '#item:farmersdelight:straw_harvesters',
            right: ['item:minecraft:tall_grass', 'item:minecraft:short_grass'],
            output: {
                type: 'item',
                id: 'farmersdelight:straw',
                nbt: Lore('tooltip.enigmatica.straw_from_grass'),
                chance: 0.2
            },
            id: 'farmersdelight:straw_from_grass'
        },
        {
            left: 'item:enigmatica:antikythera_mechanism',
            right: 'item:handcrafted:witch_trophy',
            output: [
                { type: 'item', id: 'naturesaura:token_grief' },
                {
                    type: 'item',
                    id: 'minecraft:witch_spawn_egg',
                    nbt: Lore('tooltip.enigmatica.awaken_trophy')
                }
            ],
            id: 'handcrafted:witch_trophy'
        },
        {
            left: 'item:enigmatica:antikythera_mechanism',
            right: 'item:handcrafted:evoker_trophy',
            output: [
                { type: 'item', id: 'naturesaura:token_euphoria' },
                {
                    type: 'item',
                    id: 'minecraft:evoker_spawn_egg',
                    nbt: Lore('tooltip.enigmatica.awaken_trophy')
                }
            ],
            id: 'handcrafted:evoker_trophy'
        },
        {
            left: 'item:enigmatica:antikythera_mechanism',
            right: 'item:handcrafted:vindicator_trophy',
            output: [
                { type: 'item', id: 'naturesaura:token_rage' },
                {
                    type: 'item',
                    id: 'minecraft:vindicator_spawn_egg',
                    nbt: Lore('tooltip.enigmatica.awaken_trophy')
                }
            ],
            id: 'handcrafted:vindicator_trophy'
        },
        {
            left: 'item:enigmatica:antikythera_mechanism',
            right: 'item:handcrafted:pillager_trophy',
            output: [
                { type: 'item', id: 'naturesaura:token_terror' },
                {
                    type: 'item',
                    id: 'minecraft:pillager_spawn_egg',
                    nbt: Lore('tooltip.enigmatica.awaken_trophy')
                }
            ],
            id: 'handcrafted:pillager_trophy'
        },
        {
            left: 'item:malum:exposed_runewood_log',
            right: ['#item:minecraft:axes'],
            output: 'item:malum:revealed_runewood_log',
            id: 'malum:revealed_runewood_log'
        },
        {
            left: 'item:malum:revealed_runewood_log',
            right: ['item:minecraft:glass_bottle'],
            output: 'item:malum:runic_sap',
            id: 'malum:runic_sap'
        },
        {
            left: 'item:malum:exposed_soulwood_log',
            right: ['#item:minecraft:axes'],
            output: 'item:malum:revealed_soulwood_log',
            id: 'malum:revealed_soulwood_log'
        },
        {
            left: 'item:malum:revealed_soulwood_log',
            right: ['item:minecraft:glass_bottle'],
            output: 'item:malum:cursed_sap',
            id: 'malum:cursed_sap'
        }
    ];

    emi_villagers.trades.forEach((trade) => {
        recipes.push(trade);
    });

    recipes.forEach((recipe) => {
        recipe.type = 'emi:world_interaction';
        event.json(`emi:recipe/additions/${recipe.id.replace(/\:/g, '_')}`, recipe);
    });
});
