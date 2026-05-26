ServerEvents.generateData('after_mods', (event) => {
    const id_prefix = 'malum:spirit_data/entity/';

    spiritData.forEach((entry) => {
        let mod = entry.registry_name.split(':')[0];
        let name = entry.registry_name.split(':')[1];
        let id_suffix = mod == 'minecraft' ? `${name}` : `${mod}/${name}`;

        entry.primary_type = entry.spirits[0].spirit;

        event.json(`${id_prefix}${id_suffix}`, entry);
    });
});
