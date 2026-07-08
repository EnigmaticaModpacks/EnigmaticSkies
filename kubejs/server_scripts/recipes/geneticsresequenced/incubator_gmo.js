ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:geneticsresequenced/incubator/gmo/';

    const recipes = [
        {
            ideal_gene: 'geneticsresequenced:speed_2',
            ingredient: { item: 'justdirethings:celestigem_boots' },
            entity_type: 'ars_nouveau:wilden_stalker',
            gene_chance: 0.5,
            needs_mutation_potion: true,
            id: `${id_prefix}speed_2_from_wilden_stalker`
        },
        {
            ideal_gene: 'geneticsresequenced:efficiency_4',
            ingredient: { item: 'justdirethings:eclipsealloy_pickaxe' },
            entity_type: 'aether:sentry',
            gene_chance: 0.25,
            needs_mutation_potion: true,
            id: `${id_prefix}efficiency_4_from_sentry`
        },
        {
            ideal_gene: 'geneticsresequenced:regeneration_4',
            ingredient: { item: 'aether:healing_stone' },
            entity_type: 'ars_nouveau:wilden_boss',
            gene_chance: 0.35,
            needs_mutation_potion: true,
            id: `${id_prefix}regeneration_4_from_wilden_boss`
        },
        {
            ideal_gene: 'geneticsresequenced:speed_4',
            ingredient: { item: 'justdirethings:eclipsealloy_boots' },
            entity_type: 'ars_nouveau:wilden_stalker',
            gene_chance: 0.5,
            needs_mutation_potion: true,
            id: `${id_prefix}speed_4_from_wilden_stalker`
        },
        {
            ideal_gene: 'geneticsresequenced:claws_2',
            ingredient: { item: 'justdirethings:celestigem_sword' },
            entity_type: 'aether:cockatrice',
            gene_chance: 0.75,
            needs_mutation_potion: true,
            id: `${id_prefix}speed_4_from_cockatrice`
        },
        {
            ideal_gene: 'geneticsresequenced:strength_2',
            ingredient: { item: 'justdirethings:eclipsealloy_sword' },
            entity_type: 'ars_nouveau:wilden_guardian',
            gene_chance: 0.5,
            needs_mutation_potion: true,
            id: `${id_prefix}strength_2_from_wilden_guardian`
        },
        {
            ideal_gene: 'geneticsresequenced:more_hearts',
            ingredient: { item: 'aether:life_shard' },
            entity_type: 'ars_nouveau:wilden_guardian',
            gene_chance: 0.2,
            id: `${id_prefix}more_hearts_from_wilden_guardian`
        },
        {
            ideal_gene: 'geneticsresequenced:more_hearts_2',
            ingredient: { item: 'aether:life_shard' },
            entity_type: 'ars_nouveau:wilden_guardian',
            gene_chance: 0.25,
            needs_mutation_potion: true,
            id: `${id_prefix}more_hearts_2_from_wilden_guardian`
        },
        {
            ideal_gene: 'geneticsresequenced:resistance_2',
            ingredient: { item: 'justdirethings:eclipsealloy_chestplate' },
            entity_type: 'ars_nouveau:wilden_guardian',
            gene_chance: 0.5,
            needs_mutation_potion: true,
            id: `${id_prefix}resistance_2_from_wilden_guardian`
        },
        {
            ideal_gene: 'geneticsresequenced:regeneration',
            ingredient: { item: 'aether:healing_stone' },
            entity_type: 'ars_nouveau:wilden_guardian',
            gene_chance: 0.3,
            id: `${id_prefix}regeneration_from_wilden_guardian`
        },
        {
            ideal_gene: 'geneticsresequenced:wilden_4',
            ingredient: { item: 'arsdelight:horn_roll' },
            entity_type: 'ars_nouveau:wilden_boss',
            gene_chance: 0.5,
            needs_mutation_potion: true,
            id: `${id_prefix}wilden_4_from_wilden_boss`
        },
        {
            ideal_gene: 'geneticsresequenced:speed',
            ingredient: { item: 'minecraft:golden_boots' },
            entity_type: 'aether:aerbunny',
            gene_chance: 0.65,
            id: `${id_prefix}speed_from_aerbunny`
        },
        {
            ideal_gene: 'geneticsresequenced:haste_2',
            ingredient: { item: 'minecraft:netherite_pickaxe' },
            entity_type: 'aether:aerbunny',
            gene_chance: 0.35,
            needs_mutation_potion: true,
            id: `${id_prefix}haste_2_from_aerbunny`
        },
        {
            ideal_gene: 'geneticsresequenced:meaty',
            ingredient: { item: 'minecraft:porkchop' },
            entity_type: 'aether:phyg',
            id: `${id_prefix}meaty_from_phyg`
        },
        {
            ideal_gene: 'geneticsresequenced:meaty_2',
            ingredient: { item: 'minecraft:blaze_powder' },
            entity_type: 'aether:phyg',
            gene_chance: 0.75,
            needs_mutation_potion: true,
            id: `${id_prefix}meaty_2_from_phyg`
        },
        {
            ideal_gene: 'geneticsresequenced:bovine',
            ingredient: { item: 'malum:imitation_flesh' },
            entity_type: 'aether:flying_cow',
            gene_chance: 0.75,
            id: `${id_prefix}bovine_from_flying_cow`
        },
        {
            ideal_gene: 'geneticsresequenced:ovine',
            ingredient: { item: 'malum:imitation_flesh' },
            entity_type: 'aether:sheepuff',
            gene_chance: 0.75,
            id: `${id_prefix}ovine_from_sheepuff`
        },
        {
            ideal_gene: 'geneticsresequenced:porcine',
            ingredient: { item: 'malum:imitation_flesh' },
            entity_type: 'aether:phyg',
            gene_chance: 0.75,
            id: `${id_prefix}porcine_from_phyg`
        },
        {
            ideal_gene: 'geneticsresequenced:galline',
            ingredient: { item: 'malum:imitation_flesh' },
            entity_type: 'minecraft:chicken',
            gene_chance: 0.75,
            id: `${id_prefix}galline_from_chicken`
        },
        {
            ideal_gene: 'geneticsresequenced:lapine',
            ingredient: { item: 'malum:imitation_flesh' },
            entity_type: 'aether:aerbunny',
            gene_chance: 0.75,
            id: `${id_prefix}lapine_from_aerbunny`
        },
        {
            ideal_gene: 'geneticsresequenced:saevine',
            ingredient: { item: 'malum:imitation_flesh' },
            entity_type: 'ars_nouveau:wilden_hunter',
            gene_chance: 0.75,
            needs_mutation_potion: true,
            id: `${id_prefix}saevine_from_wilden_hunter`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'geneticsresequenced:incubator/gmo';
        event.custom(recipe).id(recipe.id);
    });
});
