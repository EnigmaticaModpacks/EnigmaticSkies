ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:minecraft/shapeless/';

    const recipes = [
        {
            output: '2x minecraft:brown_dye',
            inputs: ['#c:dyes/green', '#c:dyes/red'],
            id: `${id_prefix}brown_dye_from_green_red`
        },
        {
            output: '2x minecraft:brown_dye',
            inputs: ['#c:dyes/blue', '#c:dyes/red', '#c:dyes/yellow'],
            id: `${id_prefix}brown_dye_from_blue_red_yellow`
        },
        {
            output: '2x minecraft:green_dye',
            inputs: ['#c:dyes/blue', '#c:dyes/yellow'],
            id: `${id_prefix}green_dye_from_blue_yellow`
        },
        {
            output: 'minecraft:green_dye',
            inputs: [
                'minecraft:short_grass',
                'minecraft:short_grass',
                'minecraft:short_grass',
                'minecraft:short_grass'
            ],
            id: `${id_prefix}green_dye_from_short_grass`
        },
        {
            output: 'minecraft:yellow_dye',
            inputs: ['minecraft:glow_berries'],
            id: `${id_prefix}yellow_dye_from_glow_berries`
        },
        {
            output: 'minecraft:dead_bush',
            inputs: ['#minecraft:saplings', 'minecraft:shears'],
            damage: { item: 'minecraft:shears', amount: 1 },
            id: `${id_prefix}dead_bush`
        },
        {
            output: 'minecraft:paper',
            inputs: [
                Ingredient.of(['theurgy:crystallized_water', '#c:buckets/water']),
                'minecraft:sugar_cane',
                'minecraft:sugar_cane',
                'minecraft:sugar_cane'
            ],
            id: `${id_prefix}paper_from_sugar_cane`
        },
        {
            output: 'minecraft:paper',
            inputs: [
                Ingredient.of(['theurgy:crystallized_water', '#c:buckets/water']),
                '#farmersdelight:barks',
                '#farmersdelight:barks',
                '#farmersdelight:barks'
            ],
            id: `${id_prefix}paper_from_barks`
        },
        {
            output: '3x minecraft:paper',
            inputs: [
                Ingredient.of(['theurgy:crystallized_water', '#c:buckets/water']),
                'modern_industrialization:wood_pulp',
                'modern_industrialization:wood_pulp',
                'modern_industrialization:wood_pulp'
            ],
            id: `${id_prefix}paper_from_wood_pulp`
        },
        {
            output: '9x minecraft:paper',
            inputs: [
                Ingredient.of(['theurgy:crystallized_water', '#c:buckets/water']),
                '#c:doughs/rice',
                '#c:doughs/rice',
                '#c:doughs/rice'
            ],
            id: `${id_prefix}paper_from_rice`
        },
        {
            output: '2x minecraft:moss_block',
            inputs: ['minecraft:moss_carpet', 'minecraft:moss_carpet', 'minecraft:moss_carpet'],
            id: `${id_prefix}moss_block_from_moss_carpet`
        }
    ];

    const materials = ['copper', 'gold', 'iron'];

    materials.forEach((material) => {
        recipes.push(
            {
                output: AlmostUnified.getTagTargetItem(`c:raw_materials/${material}`).getId(),
                inputs: [
                    `oritech:small_${material}_clump`,
                    `oritech:small_${material}_clump`,
                    `oritech:small_${material}_clump`,
                    `oritech:small_${material}_clump`
                ],
                id: `${id_prefix}raw_${material}_piece`
            },
            {
                output: `3x ${AlmostUnified.getTagTargetItem(`c:raw_materials/${material}`).getId()}`,
                inputs: [
                    `oritech:small_${material}_clump`,
                    `oritech:small_${material}_clump`,
                    `oritech:small_${material}_clump`,
                    `oritech:small_${material}_clump`,
                    `malum:${material}_node`
                ],
                id: `${id_prefix}raw_${material}_piece_with_node`
            }
        );
    });

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);
    });
});
