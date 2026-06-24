ServerEvents.tags('entity_type', (event) => {
    event
        .get('enigmatica:mob_spawner_blacklist')
        .add([
            /ars_nouveau/,
            /pneumaticcraft.*drone/,
            /ars_elemental:.*_familiar/,
            /ars_elemental:summon_/,
            /ars_elemental:.*_weald_walker/,
            /occultism/,

            'tiab:accelerator',
            'minecraft:armor_stand',
            'pneumaticcraft:programmable_controller',
            'justdirethings:decoy_entity'
        ])
        .remove([/ars_nouveau:wilden/]);
});
