ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:laserio/shaped/';

    const recipes = [
        {
            output: `laserio:laser_connector`,
            pattern: [' A ', 'BCB'],
            key: {
                A: 'actuallyadditions:laser_relay_item_advanced',
                B: '#c:gems/empowered_enori',
                C: `enderio:ensouled_chassis`
            },
            id: `${id_prefix}laser_connector`
        },
        {
            output: `laserio:laser_node`,
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#c:gems/empowered_enori',
                B: 'minecraft:glass_pane',
                C: `laserio:laser_connector`
            },
            id: `${id_prefix}laser_node`
        },
        {
            output: `laserio:laser_connector_advanced`,
            pattern: [' A ', 'BCB', ' D '],
            key: {
                A: '#c:gems/empowered_enori',
                B: 'modern_industrialization:energetic_coil',
                C: `laserio:laser_connector`,
                D: 'actuallyadditions:ender_casing'
            },
            id: `${id_prefix}laser_connector_advanced`
        },
        {
            output: `laserio:card_item`,
            pattern: ['AAA', 'BCB', 'DDD'],
            key: {
                A: '#c:gems/empowered_emeradic',
                B: '#c:gems/charged_certus',
                C: `modularrouters:blank_module`,
                D: '#c:nuggets/energetic_alloy'
            },
            id: `${id_prefix}card_item`
        },
        {
            output: `laserio:card_fluid`,
            pattern: ['AAA', 'BCB', 'DDD'],
            key: {
                A: '#c:gems/empowered_palis',
                B: '#c:gems/charged_certus',
                C: `modularrouters:blank_module`,
                D: '#c:nuggets/energetic_alloy'
            },
            id: `${id_prefix}card_fluid`
        },
        {
            output: `laserio:card_redstone`,
            pattern: ['AAA', 'BCB', 'DDD'],
            key: {
                A: '#c:gems/empowered_restonia',
                B: '#c:gems/charged_certus',
                C: `modularrouters:blank_module`,
                D: '#c:nuggets/energetic_alloy'
            },
            id: `${id_prefix}card_redstone`
        },
        {
            output: `laserio:card_energy`,
            pattern: ['AAA', 'BCB', 'DDD'],
            key: {
                A: '#c:essences/auric_embers',
                B: '#c:gems/charged_certus',
                C: `modularrouters:blank_module`,
                D: '#c:nuggets/energetic_alloy'
            },
            id: `${id_prefix}card_energy`
        },
        {
            output: `4x laserio:overclocker_card`,
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'malum:blazing_diode',
                B: 'pneumaticcraft:speed_upgrade',
                C: `modularrouters:augment_core`
            },
            id: `${id_prefix}overclocker_card`
        },
        {
            output: `4x laserio:overclocker_node`,
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'malum:accelerating_inlay',
                B: 'pneumaticcraft:speed_upgrade',
                C: `modularrouters:augment_core`
            },
            id: `${id_prefix}overclocker_node`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
