ServerEvents.tags('item', (event) => {
    let additions = [
        '#chipped:iron_bars',
        'minecraft:lightning_rod',
        'framedblocks:framed_lightning_rod',
        /chipped:.*copper/,
        /minecraft:.*copper/,
        /create:.*copper/
    ];
    let exclusions = [
        /_ore$/,
        /raw_copper/,
        /_door/,
        /_trapdoor/,
        /_barrel/,
        /create:.*_valve_handle/,
        /create:.*_casing/,
        /create:.*_diving/,
        /create:.copper_backtank/
    ];
    event.get('pneumaticcraft:electrostatic_grid').add(additions).remove(exclusions);
});
