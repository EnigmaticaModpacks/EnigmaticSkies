ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:basic_ore_crushing/';
    const recipes = [
        {
            input: { tag: 'c:raw_materials/gold' },
            outputs: [
                { id: AlmostUnified.getTagTargetItem(`c:clumps/gold`).getId(), count: 2, chance: 1.0 },
                { id: AlmostUnified.getTagTargetItem(`c:clumps/gold`).getId(), count: 1, chance: 0.3 },
                { id: AlmostUnified.getTagTargetItem(`c:clumps/gold`).getId(), count: 1, chance: 0.15 },
                { id: 'malum:raw_brilliance', count: 1, chance: 0.05 }
            ],
            tier: 1,
            id_suffix: 'gold_raw_to_clump'
        },
        {
            input: { tag: 'c:raw_materials/copper' },
            outputs: [
                { id: AlmostUnified.getTagTargetItem(`c:clumps/copper`).getId(), count: 2, chance: 1.0 },
                { id: AlmostUnified.getTagTargetItem(`c:clumps/copper`).getId(), count: 1, chance: 0.3 },
                { id: AlmostUnified.getTagTargetItem(`c:clumps/copper`).getId(), count: 1, chance: 0.15 },
                { id: 'malum:raw_brilliance', count: 1, chance: 0.05 }
            ],
            tier: 1,
            id_suffix: 'copper_raw_to_clump'
        },
        {
            input: { tag: 'c:raw_materials/iron' },
            outputs: [
                { id: AlmostUnified.getTagTargetItem(`c:clumps/iron`).getId(), count: 2, chance: 1.0 },
                { id: AlmostUnified.getTagTargetItem(`c:clumps/iron`).getId(), count: 1, chance: 0.3 },
                { id: AlmostUnified.getTagTargetItem(`c:clumps/iron`).getId(), count: 1, chance: 0.15 },
                { id: 'malum:raw_brilliance', count: 1, chance: 0.05 }
            ],
            tier: 2,
            id_suffix: 'iron_raw_to_clump'
        }
    ];

    recipes.forEach((recipe) => {
        let r;
        let r_id;

        // Ars Nouveau
        r = {
            type: 'ars_nouveau:crush',
            input: recipe.input,
            output: []
        };
        recipe.outputs.forEach((output) => {
            r.output.push({ stack: output, chance: output.chance, maxRange: 1 });
        });
        event.custom(r).id(`${id_prefix}${getID(r.type)}/${recipe.id_suffix}`);

        // Create Crushing
        r = {
            type: 'create:crushing',
            ingredients: [recipe.input],
            results: recipe.outputs,
            processing_time: recipe.tier * 5 * 20
        };
        event.custom(r).id(`${id_prefix}${getID(r.type)}/${recipe.id_suffix}`);

        // Enderio SAG Milling
        r = {
            type: 'enderio:sag_milling',
            input: [recipe.input],
            outputs: [],
            energy: 9600
        };
        recipe.outputs.forEach((output) => {
            r.outputs.push({ item: { id: output.id, count: output.count }, chance: output.chance });
        });
        event.custom(r).id(`${id_prefix}${getID(r.type)}/${recipe.id_suffix}`);

        // Modern Industrialization Macerator
        recipe.input.amount = recipe.input.count;
        r = {
            type: 'modern_industrialization:macerator',
            item_inputs: recipe.input,
            item_outputs: [],
            eu: 2,
            duration: recipe.tier * 5 * 20
        };
        recipe.outputs.forEach((output) => {
            r.item_outputs.push({ item: output.id, amount: output.count, probability: output.chance });
        });
        event.custom(r).id(`${id_prefix}${getID(r.type)}/${recipe.id_suffix}`);
    });
});
