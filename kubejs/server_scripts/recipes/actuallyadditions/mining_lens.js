ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:actuallyadditions/mining_lens/';

    const recipes = [
        {
            ingredient: { tag: 'actuallyadditions:stone_ore_replaceables' },
            result: { id: 'occultism:silver_ore', count: 1 },
            weight: 500,
            id: `${id_prefix}silver_ore`
        },
        {
            ingredient: { tag: 'actuallyadditions:deepslate_ore_replaceables' },
            result: { id: 'occultism:silver_ore_deepslate', count: 1 },
            weight: 500,
            id: `${id_prefix}silver_ore_deepslate`
        },

        {
            ingredient: { tag: 'actuallyadditions:deepslate_ore_replaceables' },
            result: { id: 'mekanism:deepslate_fluorite_ore', count: 1 },
            weight: 1000,
            id: `${id_prefix}deepslate_fluorite_ore`
        },
        {
            ingredient: { tag: 'actuallyadditions:deepslate_ore_replaceables' },
            result: { id: 'mekanism:deepslate_osmium_ore', count: 1 },
            weight: 3000,
            id: `${id_prefix}deepslate_osmium_ore`
        },

        {
            ingredient: { tag: 'actuallyadditions:deepslate_ore_replaceables' },
            result: { id: 'replication:deepslate_replica_ore', count: 1 },
            weight: 10,
            id: `${id_prefix}deepslate_replica_ore`
        },

        {
            ingredient: { tag: 'actuallyadditions:deepslate_ore_replaceables' },
            result: { id: 'kubejs:deepslate_quartz_ore', count: 1 },
            weight: 1000,
            id: `${id_prefix}deepslate_quartz_ore`
        },

        {
            ingredient: { tag: 'actuallyadditions:stone_ore_replaceables' },
            result: { id: 'rftoolsbase:dimensionalshard_overworld', count: 1 },
            weight: 10,
            id: `${id_prefix}dimensionalshard_overworld`
        },
        {
            ingredient: { tag: 'c:ore_bearing_ground/netherrack' },
            result: { id: 'rftoolsbase:dimensionalshard_nether', count: 1 },
            weight: 10,
            id: `${id_prefix}dimensionalshard_nether`
        },
        {
            ingredient: { tag: 'c:end_stones' },
            result: { id: 'rftoolsbase:dimensionalshard_end', count: 1 },
            weight: 10,
            id: `${id_prefix}dimensionalshard_end`
        },

        {
            ingredient: { tag: 'actuallyadditions:deepslate_ore_replaceables' },
            result: { id: 'oritech:deepslate_platinum_ore', count: 1 },
            weight: 200,
            id: `${id_prefix}deepslate_platinum_ore`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'actuallyadditions:mining_lens';
        // event.custom(recipe).id(recipe.id);
    });
});
