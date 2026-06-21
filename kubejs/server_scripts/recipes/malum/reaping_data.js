ServerEvents.generateData('after_mods', (event) => {
    const id_prefix = 'malum:reaping_data/';

    reapingData.forEach((entry) => {
        let mod = entry.registry_name.split(':')[0];
        let name = entry.registry_name.split(':')[1];
        let id_suffix = mod == 'minecraft' ? `${name}` : `${mod}/${name}`;

        event.json(`${id_prefix}${id_suffix}`, entry);
    });
});
