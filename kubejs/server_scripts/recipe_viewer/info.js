RecipeViewerEvents.addInformation('item', (event) => {
    // https://kubejs.com/wiki/events/RecipeViewerEvents/addInformation

    /* Format Codes
    Obfuscated      §k
    Bold            §l
    Strikethrough   §m
    Underline       §n
    Italic          §o
    Reset Format    §r

    Colors:
    Dark Red        §4
    Red             §c
    Gold            §6
    Yellow          §e
    Dark Green      §2
    Green           §a
    Aqua            §b
    Dark Aqua       §3
    Dark Blue       §1
    Blue            §9
    Light Purple    §d
    Dark Purple 	§5
    White           §f
    Gray            §7
    Dark Gray       §8
    Black           §0

    */
    const descriptions = [
        {
            filter: ['ae2:sky_dust'],
            text: [Text.translate('info.enigmatica.sky_dust')]
        },
        {
            filter: beheading_tools,
            text: [Text.translate('info.enigmatica.beheading_tools')]
        },
        {
            filter: [
                'minecraft:zombie_head',
                'minecraft:creeper_head',
                'minecraft:piglin_head',
                'minecraft:dragon_head',
                'minecraft:skeleton_skull',
                'minecraft:wither_skeleton_skull',
                'enderio:enderman_head'
            ],
            text: [
                Text.translate('info.enigmatica.mob_heads'),
                ' ',
                Text.translate('info.enigmatica.mob_heads.search')
            ]
        },

        {
            filter: ['enderio:industrial_insulation_block'],
            text: [Text.translate('info.enigmatica.industrial_insulation_block')]
        },
        {
            filter: ['naturesaura:vacuum_bottle'],
            text: [
                Text.translate('info.enigmatica.vacuum_bottle'),
                ' ',
                Text.translate('info.enigmatica.justdirethings_clicker')
            ]
        },
        {
            filter: [
                Item.of('naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:"naturesaura:overworld"}]')
            ],
            text: [
                Text.translate('info.enigmatica.aura_bottle'),
                ' ',
                Text.translate('info.enigmatica.justdirethings_clicker')
            ]
        },

        {
            filter: ['naturesaura:gold_leaf'],
            text: [Text.translate('info.enigmatica.gold_leaf')]
        },
        {
            filter: ['naturesaura:golden_leaves'],
            text: [Text.translate('info.enigmatica.golden_leaves')]
        },
        {
            filter: ['naturesaura:break_prevention'],
            text: [
                Text.translate('info.enigmatica.break_prevention')
            ]
        },
        {
            filter: ['naturesaura:birth_spirit'],
            text: [Text.translate('info.enigmatica.birth_spirit')]
        },
        {
            filter: ['naturesaura:projectile_generator'],
            text: [
                Text.translate('info.enigmatica.projectile_generator.automation'),
                ` `,
                Text.translate('info.enigmatica.projectile_generator.valid_projectiles'),
                ` `,
                Text.translate('info.enigmatica.projectile_generator.snowball'),
                Text.translate('info.enigmatica.projectile_generator.egg'),
                Text.translate('info.enigmatica.projectile_generator.pollen_puff'),
                Text.translate('info.enigmatica.projectile_generator.slimeball'),
                Text.translate('info.enigmatica.projectile_generator.arrow'),
                Text.translate('info.enigmatica.projectile_generator.fire_charge'),
                Text.translate('info.enigmatica.projectile_generator.cannonball'),
                Text.translate('info.enigmatica.projectile_generator.bomb'),
                Text.translate('info.enigmatica.projectile_generator.spectral_arrow'),
                Text.translate('info.enigmatica.projectile_generator.ender_pearl'),
                Text.translate('info.enigmatica.projectile_generator.wind_charge'),
                // Text.translate('info.enigmatica.projectile_generator.llama_spit'),
                Text.translate('info.enigmatica.projectile_generator.bottle_o_enchanting'),
                // Text.translate('info.enigmatica.projectile_generator.shulker_bullet'),
                Text.translate('info.enigmatica.projectile_generator.trident')
            ]
        },
        {
            filter: ['industrialforegoing:ether_gas_bucket'],
            text: [
                Text.translate('info.enigmatica.ether_gas.auto_harvesting'),
                ` `,
                Text.translate('info.enigmatica.ether_gas.ore_multiplier'),
                ` `,
                Text.translate('info.enigmatica.ether_gas.gentle_harvesting')
            ]
        },
        {
            filter: ['#malum:strange_materials'],
            text: [Text.translate('info.enigmatica.strange_materials')]
        },
        {
            filter: ['#industrialforegoing:sludge'],
            text: [Text.translate('info.enigmatica.sludge')]
        },
        {
            filter: [
                'handcrafted:pillager_trophy',
                'handcrafted:vindicator_trophy',
                'handcrafted:evoker_trophy',
                'handcrafted:witch_trophy'
            ],
            text: [Text.translate('info.enigmatica.illager_trophy')]
        },
        {
            filter: ['enigmatica:antikythera_mechanism'],
            text: [Text.translate('info.enigmatica.antikythera_mechanism')]
        },
        {
            filter: ['naturesaura:token_grief'],
            text: [
                Text.translate('info.enigmatica.token_grief'),
                ` `,
                Text.translate('info.enigmatica.witch_trophy')
            ]
        },
        {
            filter: ['naturesaura:token_euphoria'],
            text: [
                Text.translate('info.enigmatica.token_euphoria'),
                ` `,
                Text.translate('info.enigmatica.evoker_trophy')
            ]
        },
        {
            filter: ['naturesaura:token_rage'],
            text: [
                Text.translate('info.enigmatica.token_rage'),
                ` `,
                Text.translate('info.enigmatica.vindicator_trophy')
            ]
        },
        {
            filter: ['naturesaura:token_terror'],
            text: [
                Text.translate('info.enigmatica.token_terror'),
                ` `,
                Text.translate('info.enigmatica.pillager_trophy')
            ]
        },
        {
            filter: [
                Ingredient.of(['arts_and_crafts:lotus_pistils', 'minecraft:lily_pad', 'arts_and_crafts:bleachdew'])
            ],
            text: [
                Text.translate('info.enigmatica.lotus_pistils'),
                ` `,
                Text.translate('info.enigmatica.bleachdew')
            ]
        },
        {
            filter: ['naturesaura:time_changer'],
            text: [
                Text.translate('info.enigmatica.time_changer.use'),
                ` `,
                Text.translate('info.enigmatica.time_changer.setup'),
                ` `,
                Text.translate('info.enigmatica.time_changer.rotation'),
                ` `,
                Text.translate('info.enigmatica.time_changer.trigger')
            ]
        },
        {
            filter: ['naturesaura:weather_changer'],
            text: [
                Text.translate('info.enigmatica.weather_changer.use'),
                ` `,
                Text.translate('info.enigmatica.weather_changer.trigger'),
                ` `,
                Text.translate('info.enigmatica.weather_changer.sunflower'),
                Text.translate('info.enigmatica.weather_changer.dark_prismarine'),
                Text.translate('info.enigmatica.weather_changer.fire_charge')
            ]
        },
        {
            filter: ['ae2:logic_processor', 'ae2:calculation_processor', 'ae2:engineering_processor'],
            text: [Text.translate('info.enigmatica.processors.crafted'), ` `, Text.translate('info.enigmatica.processors.blueprint')]
        },
        {
            filter: [`enderio:wireless_charger_antenna`, `enderio:wireless_charger_antenna_advanced`],
            text: [Text.translate('info.enigmatica.wireless_charger_antenna')]
        },
        {
            filter: [
                'enigmatica:forest_essentia',
                'enigmatica:desert_essentia',
                'enigmatica:taiga_essentia',
                'enigmatica:tundra_essentia',
                'enigmatica:savanna_essentia',
                'enigmatica:plains_essentia',
                'enigmatica:swamp_essentia'
            ],
            text: [Text.translate('info.enigmatica.biome_essentia')]
        },
        {
            filter: [
                'minecraft:brain_coral',
                'minecraft:tube_coral',
                'minecraft:horn_coral',
                'minecraft:bubble_coral',
                'minecraft:fire_coral',
                'minecraft:horn_coral_fan',
                'minecraft:tube_coral_fan',
                'minecraft:bubble_coral_fan',
                'minecraft:fire_coral_fan',
                'minecraft:brain_coral_fan'
            ],
            text: [
                Text.translate('info.enigmatica.coral'),
                ` `,
                Text.translate('info.enigmatica.coral.cascading_islands')
            ]
        },
        {
            filter: ['enigmatica:borrowed_flame', 'gateways:gate_pearl[gateways:gateway="gateways:catching_fire"]'],
            text: [
                Text.translate('info.enigmatica.borrowed_flame.create_gateway'),
                ` `,
                Text.translate('info.enigmatica.borrowed_flame.defeat_gateway')
            ]
        }
    ];

    Object.keys(spiritEntities).forEach((type) => {
        let description = {
            filter: [`${type}_spirit`],
            text: [Text.translate('info.enigmatica.soul_shattering_mobs')]
        };
        let previous_mod = '';

        spiritEntities[type].sort().forEach((entity) => {
            let current_mod = entity.split(':')[0];
            if (current_mod != previous_mod) {
                previous_mod = current_mod;

                if (current_mod == 'creeperoverhaul') {
                    current_mod = 'Creeper Overhaul';
                } else if (current_mod == 'sushigocrafting') {
                    current_mod = 'Sushi Go Crafting';
                } else {
                    current_mod = toTitleCase(current_mod.replace('_', ' '));
                }

                description.text.push(' ', `${current_mod}`);
            }
            description.text.push(Text.string(' ● ').append(Text.translate(`entity.${entity.replace(':', '.')}`)));
        });
        descriptions.push(description);
    });

    Object.keys(essenceEntities).forEach((type) => {
        let description = { filter: [type], text: [Text.translate('info.enigmatica.soul_shattering_mobs')] };
        let previous_mod = '';

        essenceEntities[type].sort().forEach((entity) => {
            let current_mod = entity.split(':')[0];
            if (current_mod != previous_mod) {
                previous_mod = current_mod;

                if (current_mod == 'creeperoverhaul') {
                    current_mod = 'Creeper Overhaul';
                } else if (current_mod == 'sushigocrafting') {
                    current_mod = 'Sushi Go Crafting';
                } else {
                    current_mod = toTitleCase(current_mod.replace('_', ' '));
                }

                description.text.push(' ', `${current_mod}`);
            }
            description.text.push(Text.string(' ● ').append(Text.translate(`entity.${entity.replace(':', '.')}`)));
        });
        descriptions.push(description);
    });

    const villagerTradesClient = { trades: [] };

    Object.keys(villagerTrades).forEach((profession) => {
        villagerTrades[profession].forEach((recipe) => {
            // "entity.minecraft.villager.farmer"
            // "entity.minecraft.villager.actuallyadditions.engineer"

            let lang_key = `entity.minecraft.villager.${profession.replace('minecraft:', '').replace(':', '.')}`;

            descriptions.push({
                filter: [Item.of(recipe.result.id)],
                text: [
                    Text.translate('info.enigmatica.villager_trade', Text.translate(lang_key)),
                    ` `,
                    Text.translate(
                        'info.enigmatica.villager_trade.level',
                        Text.translate(`merchant.level.${recipe.level}`)
                    )
                ]
            });

            let payload = {
                left: [],
                right: [
                    {
                        type: 'item',
                        id: villagerWorkstations[profession],
                        nbt: `{"minecraft:lore":['{"color":"green","translate":"tooltip.enigmatica.villager_trade","with":[{"translate":"merchant.level.${recipe.level}"},{"translate":"${lang_key}"}]}']}`,
                        amount: 1
                    }
                ]
            };

            // Generate formatted JSON for EMI to display Villager Trades as World Interaction recipes
            let output_data = JSON.parse(Ingredient.of(recipe.result.id).toJson());

            payload.output = {
                type: 'item',
                id: output_data.items ? output_data.items : output_data.item,
                amount: recipe.result.count
            };

            if (recipe.id_suffix) {
                payload.id = `${profession}_tier_${recipe.level}_selling_${recipe.id_suffix}`;
            } else {
                payload.id = `${profession}_tier_${recipe.level}_selling_${output_data.items ? output_data.items : output_data.item}`;
            }

            if (output_data.components) {
                payload.output.nbt = JSON.stringify(output_data.components);
            }

            recipe.ingredients.forEach((input) => {
                payload.left.push({
                    type: 'item',
                    id: input.id,
                    count: input.count.min
                });
            });

            villagerTradesClient.trades.push(payload);
        });
    });

    JsonIO.write('kubejs/config/emi_villagers.json', villagerTradesClient);

    descriptions.forEach((description) => {
        event.add(description.filter, description.text);
    });
});
