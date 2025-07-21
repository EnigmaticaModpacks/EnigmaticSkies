ServerEvents.generateData('before_mods', (event) => {
    // Block Requirement: https://mikul.gitbook.io/cold-sweat/datapacks/requirements/block-requirement
    // Block Config: https://mikul.gitbook.io/cold-sweat/datapacks/block-world-configs

    const block_temps = [
        {
            name: 'pyromantic_brazier',
            block: {
                blocks: ['theurgy:pyromantic_brazier'],
                state: { lit: true }
            },
            temperature: 0.27,
            range: 7,
            units: 'mc',
            max_effect: 0.9,
            max_temp: 4
        }
    ];

    block_temps.forEach((block_temp) => {
        event.json(`enigmatica:cold_sweat/block/block_temp/${block_temp.name}`, block_temp);
    });
});
