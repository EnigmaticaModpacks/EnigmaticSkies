ServerEvents.generateData('before_mods', (event) => {
    let recipes = [
        {
            entities: ['aether:moa', 'aether:cockatrice'],
            genes: {
                'geneticsresequenced:basic': 5,
                'geneticsresequenced:no_fall_damage': 2,
                'geneticsresequenced:claws': 1,
                'geneticsresequenced:step_assist': 2
            }
        },
        {
            entities: ['minecraft:bogged'],
            genes: {
                'geneticsresequenced:basic': 3,
                'geneticsresequenced:poison_immunity': 1
            }
        },
        {
            entities: ['the_bumblezone:honey_slime', 'aether:blue_swet', 'aether:golden_swet'],
            genes: {
                'geneticsresequenced:basic': 5,
                'geneticsresequenced:no_fall_damage': 4,
                'geneticsresequenced:slimy_death': 2,
                'geneticsresequenced:oozing': 5
            }
        },
        {
            entities: [
                'creeperoverhaul:badlands_creeper',
                'creeperoverhaul:bamboo_creeper',
                'creeperoverhaul:beach_creeper',
                'creeperoverhaul:birch_creeper',
                'creeperoverhaul:cave_creeper',
                'creeperoverhaul:desert_creeper',
                'creeperoverhaul:dripstone_creeper',
                'creeperoverhaul:hills_creeper',
                'creeperoverhaul:jungle_creeper',
                'creeperoverhaul:mushroom_creeper',
                'creeperoverhaul:ocean_creeper',
                'creeperoverhaul:savannah_creeper',
                'creeperoverhaul:snowy_creeper',
                'creeperoverhaul:spruce_creeper',
                'creeperoverhaul:swamp_creeper'
            ],
            genes: {
                'geneticsresequenced:basic': 5,
                'geneticsresequenced:explosive_exit': 3
            }
        },
        {
            entities: [
                'ars_nouveau:vexing_weald_walker',
                'ars_nouveau:flourishing_weald_walker',
                'ars_nouveau:cascading_weald_walker',
                'ars_nouveau:blazing_weald_walker'
            ],
            genes: {
                'geneticsresequenced:basic': 5,
                'geneticsresequenced:more_hearts': 2,
                'geneticsresequenced:regeneration': 2,
                'geneticsresequenced:resistance': 4,
                'geneticsresequenced:strength': 3,
                'geneticsresequenced:photosynthesis': 3
            }
        },
        {
            entities: ['ars_nouveau:wilden_guardian'],
            genes: {
                'geneticsresequenced:basic': 5,
                'geneticsresequenced:chilling': 2,
                'geneticsresequenced:thorns': 2,
                'geneticsresequenced:claws': 1,
                'geneticsresequenced:wilden': 1
            }
        },
        {
            entities: ['ars_nouveau:wilden_hunter'],
            genes: {
                'geneticsresequenced:basic': 5,
                'geneticsresequenced:speed': 2,
                'geneticsresequenced:night_vision': 1,
                'geneticsresequenced:hunger': 1,
                'geneticsresequenced:claws': 1,
                'geneticsresequenced:wilden': 1
            }
        },
        {
            entities: ['ars_nouveau:wilden_stalker'],
            genes: {
                'geneticsresequenced:basic': 5,
                'geneticsresequenced:night_vision': 1,
                'geneticsresequenced:no_fall_damage': 1,
                'geneticsresequenced:claws': 1,
                'geneticsresequenced:wilden': 1
            }
        },
        {
            entities: ['ars_nouveau:wilden_boss'],
            genes: {
                'geneticsresequenced:basic': 3,
                'geneticsresequenced:mob_sight': 1,
                'geneticsresequenced:speed': 1,
                'geneticsresequenced:flight': 1,
                'geneticsresequenced:thorns': 1,
                'geneticsresequenced:claws': 1,
                'geneticsresequenced:wilden': 1
            }
        },
        {
            entities: ['the_bumblezone:beehemoth', 'the_bumblezone:bee_queen'],
            genes: {
                'geneticsresequenced:basic': 5,
                'geneticsresequenced:thorns': 3
            }
        },
        {
            entities: ['aether:flying_cow'],
            genes: {
                'geneticsresequenced:basic': 5,
                'geneticsresequenced:no_fall_damage': 1,
                'geneticsresequenced:eat_grass': 3,
                'geneticsresequenced:milky': 4
            }
        },
        {
            entities: ['aether:phyg'],
            genes: {
                'geneticsresequenced:basic': 5,
                'geneticsresequenced:no_fall_damage': 1,
                'geneticsresequenced:meaty': 2
            }
        },
        {
            entities: ['aether:aerbunny'],
            genes: {
                'geneticsresequenced:basic': 5,
                'geneticsresequenced:no_fall_damage': 1,
                'geneticsresequenced:jump_boost': 5,
                'geneticsresequenced:luck': 4,
                'geneticsresequenced:speed': 2,
                'geneticsresequenced:fertile': 3
            }
        },
        {
            entities: ['aether:sheepuff'],
            genes: {
                'geneticsresequenced:basic': 5,
                'geneticsresequenced:no_fall_damage': 1,
                'geneticsresequenced:eat_grass': 3,
                'geneticsresequenced:wooly': 4
            }
        },
        {
            entities: ['minecraft:stray'],
            genes: {
                'geneticsresequenced:basic': 6,
                'geneticsresequenced:frost_proof': 1,
                'geneticsresequenced:infinity': 3
            }
        },
        {
            entities: ['minecraft:breeze', 'aether:zephyr'],
            genes: {
                'geneticsresequenced:basic': 2,
                'geneticsresequenced:jump_boost': 5,
                'geneticsresequenced:wind_charged': 4,
                'geneticsresequenced:frost_proof': 1
            }
        },
        {
            entities: ['minecraft:elder_guardian'],
            genes: {
                'geneticsresequenced:mob_sight': 3,
                'geneticsresequenced:water_breathing': 4,
                'geneticsresequenced:frost_proof': 2
            }
        },
        {
            entities: ['aether:sentry', 'the_bumblezone:rootmin'],
            genes: {
                'geneticsresequenced:basic': 5,
                'geneticsresequenced:stone_skin': 3,
                'geneticsresequenced:efficiency': 1
            }
        },
        {
            entities: ['ribbits:ribbit'],
            genes: {
                'geneticsresequenced:basic': 5,
                'geneticsresequenced:water_breathing': 2,
                'geneticsresequenced:slimy_death': 1,
                'geneticsresequenced:jump_boost': 1,
                'geneticsresequenced:oozing': 1
            }
        }
    ];

    recipes.forEach((recipe) => {
        recipe.entities.forEach((entity) => {
            event.json(`enigmatica:geneticsresequenced/entity_genes/${getID(entity)}`, {
                entity: entity,
                gene_weights: recipe.genes
            });
        });
    });
});
