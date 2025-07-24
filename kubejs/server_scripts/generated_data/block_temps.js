ServerEvents.generateData('before_mods', (event) => {
    // Block Requirement: https://mikul.gitbook.io/cold-sweat/datapacks/requirements/block-requirement
    // Block Config: https://mikul.gitbook.io/cold-sweat/datapacks/block-world-configs

    const block_temps = [
        {
            name: 'hot_blocks',
            block: { blocks: ['#enigmatica:temperature/hot'] },
            temperature: 50,
            max_effect: 500
        },
        {
            name: 'warm_lit_blocks',
            block: { blocks: ['#enigmatica:temperature/warm_lit'], state: { lit: true } },
            temperature: 21.5,
            max_effect: 50,
            logarithmic: true
        },
        {
            name: 'cool_lit_blocks',
            block: { blocks: ['#enigmatica:temperature/cool_lit'], state: { lit: true } },
            temperature: -12,
            max_effect: 0,
            logarithmic: true
        }

        // {
        //     // A negatable list or single block requirement
        //     block: {
        //         blocks: ['#minecraft:all_signs'],
        //         nbt: { front_text: { has_glowing_text: true } }
        //     },
        //     // The temperature of the block
        //     temperature: 5,
        //     // The maximum temperature change that this BlockTemp can cause
        //     // Multiple instances of this block can only heat/cool up to this amount
        //     max_effect: 20,
        //     // Temperature units to use. All temperature fields must be specified in these units
        //     units: 'f',
        //     // (default=true) Makes the block's effect fade with increasing distance
        //     fade: true,
        //     // The radius of the block's area-of-effect
        //             //     // (optional) This block cannot heat the local area to above this value
        //     max_temp: 100,
        //     // (optional) This block cannot cool the local area to below this value
        //     min_temp: 30,
        //     // (optional) Location requirement that must pass in order to emit temperature
        //     location: {},
        //     // (optional) Entity requirement that the nearby entity must pass to be affected
        //     entity: {},
        //     // (optional) Multiple instances of this block will apply temperature logarithmically
        //     // (diminishing returns)
        //     logarithmic: false
        // }
    ];

    block_temps.forEach((block_temp) => {
        block_temp.units = 'c';
        if (!block_temp.range) block_temp.range = 7;
        event.json(`enigmatica:cold_sweat/block/block_temp/${block_temp.name}`, block_temp);
    });
});
