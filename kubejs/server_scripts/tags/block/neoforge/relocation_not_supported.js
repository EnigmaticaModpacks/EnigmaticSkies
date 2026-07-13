ServerEvents.tags('block', (event) => {
    let additions = [
        'arsdelight:bastion_jelly',
        'arsdelight:bastion_pie',
        'arsdelight:bombegrante_jelly',
        'arsdelight:bombegrante_pie',
        'arsdelight:flashpine_pie',
        'arsdelight:frostaya_jelly',
        'arsdelight:frostaya_pie',
        'arsdelight:honey_glazed_chimera',
        'arsdelight:mendosteen_jelly',
        'arsdelight:mendosteen_pie',
        'arsdelight:source_berry_jelly',
        'arsdelight:wilden_salad',
        'farmersdelight:apple_pie',
        'farmersdelight:chocolate_pie',
        'farmersdelight:gleaming_salad_block',
        'farmersdelight:honey_glazed_ham_block',
        'farmersdelight:rice_roll_medley_block',
        'farmersdelight:roast_chicken_block',
        'farmersdelight:shepherds_pie_block',
        'farmersdelight:stuffed_pumpkin_block',
        'farmersdelight:sweet_berry_cheescake',
        'minecraft:cake',
        'supplementaries:pancake'
    ];

    event.get('c:relocation_not_supported').add(additions);
});
