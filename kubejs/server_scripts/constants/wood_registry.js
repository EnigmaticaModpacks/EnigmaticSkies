//priority: 1001
const wood_registry = [];

let wood_types = {
    // ars_elemental: ['yellow_archwood'],
    // ars_nouveau: ['blue_archwood', 'green_archwood', 'purple_archwood', 'red_archwood'],
    aether: ['skyroot'],
    arts_and_crafts: ['cork'],
    occultism: ['otherworld']
};

Object.keys(wood_types).forEach((mod) => {
    wood_types[mod].forEach((type) => {
        if (mod == 'ars_elemental') {
            wood_registry.push({
                log: `${mod}:${type}_log`,
                stripped_log: `${mod}:stripped_${type}_log`,
                wood: `${mod}:${type}`,
                stripped_wood: `${mod}:stripped_${type}`
            });
        } else {
            wood_registry.push({
                log: `${mod}:${type}_log`,
                stripped_log: `${mod}:stripped_${type}_log`,
                wood: `${mod}:${type}_wood`,
                stripped_wood: `${mod}:stripped_${type}_wood`
            });
        }
    });
});
