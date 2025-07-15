ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:sawing/';
    const recipes = [
        {
            input: 'c:logs/archwood',
            output: 'ars_nouveau:archwood_planks',
            output_count: 6,
            id: 'archwood_planks'
        },
        {
            input: 'arts_and_crafts:cork_logs',
            output: 'arts_and_crafts:cork_planks',
            output_count: 6,
            id: 'cork_planks'
        },
        {
            input: 'occultism:otherworld_logs',
            output: 'occultism:otherplanks',
            output_count: 6,
            id: 'otherplanks'
        },
        {
            input: 'naturesaura:ancient_logs',
            output: 'naturesaura:ancient_planks',
            output_count: 6,
            id: 'ancient_planks'
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'mekanism:sawing',
                input: { count: 1, tag: recipe.input },
                main_output: { count: recipe.output_count, id: recipe.output },
                secondary_chance: 0.25,
                secondary_output: { count: 1, id: sawdust }
            })
            .id(`${id_prefix}sawing/${recipe.id}`);
    });
});
