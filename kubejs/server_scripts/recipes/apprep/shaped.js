ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:apprep/shaped/';

    const recipes = [
        {
            output: `apprep:replication_connector`,
            pattern: ['ABA', 'ACA', 'ADA'],
            key: {
                A: '#c:ingots/replica',
                B: 'ae2:pattern_provider',
                C: 'replication:matter_tank',
                D: 'ae2:interface'
            },
            id: `${id_prefix}replication_connector`
        },
        {
            output: `apprep:matter_cell_housing`,
            pattern: ['ABA', 'DCD', 'ABA'],
            key: {
                A: '#c:ingots/replica',
                B: '#c:gems/empowered_void',
                C: 'ae2:item_cell_housing',
                D: '#c:gems/empowered_emeradic'
            },
            id: `${id_prefix}matter_cell_housing`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
