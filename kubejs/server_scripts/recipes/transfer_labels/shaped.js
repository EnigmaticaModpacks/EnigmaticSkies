ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:transfer_labels/shaped/';

    const recipes = [];

    let types = ['item', 'fluid'];
    let modes = ['insert', 'extract'];
    let substrates = ['paper', 'cardboard'];
    let tiers = ['base', 'empowered'];

    types.forEach((type) => {
        modes.forEach((mode) => {
            substrates.forEach((substrate) => {
                tiers.forEach((tier) => {
                    let multiplier = tier == 'base' ? 1 : 4;
                    recipes.push({
                        output: `${substrate == 'paper' ? 2 * multiplier : 4 * multiplier}x transfer_labels:${type}stack_${mode}_transfer_label`,
                        pattern: mode == 'insert' ? ['C', 'B', 'A'] : ['A', 'B', 'C'],
                        key: {
                            A: `#c:gems/${tier == 'base' ? '' : 'empowered_'}${type == 'item' ? 'restonia' : 'palis'}`,
                            B: substrate == 'paper' ? 'minecraft:paper' : 'create:cardboard',
                            C: 'theurgy:mercury_shard'
                        },
                        id: `${id_prefix}${tier}_${type}stack_${mode}_transfer_label_from_${substrate}`
                    });
                });
            });
        });
    });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
