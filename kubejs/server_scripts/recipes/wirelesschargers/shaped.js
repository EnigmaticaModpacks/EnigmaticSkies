ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:wirelesschargers/shaped/';

    const recipes = [
        {
            output: `wirelesschargers:basic_wireless_block_charger`,
            pattern: [' A ', 'BCB'],
            key: {
                A: 'modern_industrialization:copper_coil',
                B: '#c:plates/steel',
                C: 'actuallyadditions:energizer'
            },
            id: `${id_prefix}basic_wireless_block_charger`
        },
        {
            output: `wirelesschargers:basic_wireless_player_charger`,
            pattern: [' A ', 'BCB'],
            key: {
                A: 'modern_industrialization:conductive_coil',
                B: '#c:plates/steel',
                C: 'actuallyadditions:energizer'
            },
            id: `${id_prefix}basic_wireless_player_charger`
        },

        {
            output: `wirelesschargers:advanced_wireless_block_charger`,
            pattern: [' A ', 'BCB'],
            key: {
                A: 'wirelesschargers:basic_wireless_block_charger',
                B: '#c:plates/reinforced_carbon',
                C: 'enigmatica:pulsating_mechanism'
            },
            id: `${id_prefix}advanced_wireless_block_charger`
        },
        {
            output: `wirelesschargers:advanced_wireless_player_charger`,
            pattern: [' A ', 'BCB'],
            key: {
                A: 'wirelesschargers:basic_wireless_player_charger',
                B: '#c:plates/reinforced_carbon',
                C: 'enigmatica:pulsating_mechanism'
            },
            id: `${id_prefix}advanced_wireless_player_charger`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
