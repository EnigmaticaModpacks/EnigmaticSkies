//priority: 1001
const tree_registry = [];

let wood_types = {
    minecraft: ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'cherry'],
    ars_elemental: ['yellow_archwood'],
    ars_nouveau: ['blue_archwood', 'green_archwood', 'purple_archwood', 'red_archwood'],
    aether: ['skyroot'],
    arts_and_crafts: ['cork'],
    malum: ['runewood', 'soulwood'],
    occultism: ['otherworld']
};

Object.keys(wood_types).forEach((mod) => {
    wood_types[mod].forEach((type) => {
        let bark;
        switch (type) {
            case 'blue_archwood':
                bark = 'arsdelight:cascading_bark';
                break;
            case 'green_archwood':
                bark = 'arsdelight:flourishing_bark';
                break;
            case 'purple_archwood':
                bark = 'arsdelight:vexing_bark';
                break;
            case 'red_archwood':
                bark = 'arsdelight:blazing_bark';
                break;
            default:
                bark = 'farmersdelight:tree_bark';
        }

        if (mod == 'ars_elemental') {
            tree_registry.push({
                log: `${mod}:${type}_log`,
                stripped_log: `${mod}:stripped_${type}_log`,
                wood: `${mod}:${type}`,
                stripped_wood: `${mod}:stripped_${type}`,
                bark: bark,
                sapling: `${mod}:${type}_sapling`,
                leaves: `${mod}:${type}_leaves`
            });
        } else if (mod == 'malum') {
            tree_registry.push({
                log: `${mod}:${type}_log`,
                stripped_log: `${mod}:stripped_${type}_log`,
                wood: `${mod}:${type}`,
                stripped_wood: `${mod}:stripped_${type}`,
                bark: bark,
                sapling: `${mod}:${type}_sapling`,
                leaves: `${mod}:${type}_leaves`
            });
        } else {
            tree_registry.push({
                log: `${mod}:${type}_log`,
                stripped_log: `${mod}:stripped_${type}_log`,
                wood: `${mod}:${type}_wood`,
                stripped_wood: `${mod}:stripped_${type}_wood`,
                bark: bark,
                sapling: `${mod}:${type}_sapling`,
                leaves: `${mod}:${type}_leaves`
            });
        }
    });
});
