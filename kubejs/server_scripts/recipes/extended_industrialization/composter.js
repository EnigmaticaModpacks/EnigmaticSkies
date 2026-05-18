ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:extended_industrialization/composter/';

    const recipes = [
        {
            fluid_outputs: [{ fluid: `extended_industrialization:composted_manure`, amount: 1000 }],
            item_inputs: [
                { item: 'minecraft:bone_meal', amount: 4 },
                { item: 'extended_industrialization:mulch', amount: 4 }
            ],
            fluid_inputs: [{ fluid: 'extended_industrialization:manure', amount: 1000 }],
            duration: 1,
            eu: 4,
            id: `${id_prefix}composted_manure`
        },
        {
            fluid_outputs: [{ fluid: `actuallyadditions:refined_canola_oil`, amount: 2000 }],
            item_inputs: [{ item: 'theurgy:fermentation_starter', amount: 1 }],
            fluid_inputs: [{ fluid: 'actuallyadditions:canola_oil', amount: 1000 }],
            duration: 1,
            eu: 2,
            id: `${id_prefix}refined_canola_oil`
        },
        {
            item_outputs: [{ item: 'minecraft:redstone', amount: 4 }],
            item_inputs: [
                { tag: 'c:clay', amount: 4 },
                { item: 'theurgy:alchemical_salt_mineral', amount: 1 }
            ],
            fluid_inputs: [{ fluid: 'theurgy:sal_ammoniac', amount: 15 }],
            duration: 4,
            eu: 2,
            id: `${id_prefix}redstone`
        },
        {
            item_outputs: [{ item: 'ars_nouveau:source_gem', amount: 4 }],
            item_inputs: [
                { item: 'aether:ambrosium_shard', amount: 4 },
                { item: 'theurgy:alchemical_salt_mineral', amount: 1 }
            ],
            fluid_inputs: [{ fluid: 'sauce:source_fluid', amount: 1000 }],
            duration: 4,
            eu: 2,
            id: `${id_prefix}source_gem_from_ambrosium_shard`
        },
        {
            item_outputs: [{ item: 'oritech:small_gold_clump', amount: 2 }],
            item_inputs: [
                { item: 'aquaculture:goldfish', amount: 4 },
                { item: 'theurgy:alchemical_salt_mineral', amount: 1 }
            ],
            fluid_inputs: [{ fluid: 'theurgy:sal_ammoniac', amount: 15 }],
            duration: 4,
            eu: 2,
            id: `${id_prefix}small_gold_clump_from_goldfish`
        },
        {
            item_outputs: [{ item: 'oritech:small_iron_clump', amount: 2 }],
            item_inputs: [
                { tag: 'c:foods/raw_meat', amount: 6 },
                { item: 'theurgy:alchemical_salt_mineral', amount: 1 }
            ],
            fluid_inputs: [{ fluid: 'theurgy:sal_ammoniac', amount: 15 }],
            duration: 4,
            eu: 2,
            id: `${id_prefix}small_iron_clump_from_raw_meats`
        },
        {
            item_outputs: [{ item: 'minecraft:gunpowder', amount: 3 }],
            item_inputs: [
                { item: 'ars_nouveau:bombegranate_pod', amount: 1 },
                { item: 'theurgy:alchemical_salt_mineral', amount: 1 }
            ],
            fluid_inputs: [{ fluid: 'theurgy:sal_ammoniac', amount: 15 }],
            duration: 4,
            eu: 2,
            id: `${id_prefix}gunpowder_from_bombegranate_pod`
        },
        {
            item_outputs: [{ item: 'modern_industrialization:ruby_dust', amount: 3 }],
            item_inputs: [
                { item: 'ars_nouveau:mendosteen_pod', amount: 1 },
                { item: 'theurgy:alchemical_salt_mineral', amount: 1 }
            ],
            fluid_inputs: [{ fluid: 'theurgy:sal_ammoniac', amount: 15 }],
            duration: 4,
            eu: 2,
            id: `${id_prefix}ruby_dust_from_mendosteen_pod`
        },
        {
            item_outputs: [{ item: 'minecraft:glowstone_dust', amount: 3 }],
            item_inputs: [
                { item: 'minecraft:glow_berries', amount: 1 },
                { item: 'theurgy:alchemical_salt_mineral', amount: 1 }
            ],
            fluid_inputs: [{ fluid: 'theurgy:sal_ammoniac', amount: 15 }],
            duration: 4,
            eu: 2,
            id: `${id_prefix}glowstone_dust_from_glow_berries`
        },
        {
            item_outputs: [{ item: 'enderio:grains_of_infinity', amount: 3 }],
            item_inputs: [
                { item: 'ars_nouveau:bastion_pod', amount: 1 },
                { item: 'theurgy:alchemical_salt_mineral', amount: 1 }
            ],
            fluid_inputs: [{ fluid: 'theurgy:sal_ammoniac', amount: 15 }],
            duration: 4,
            eu: 2,
            id: `${id_prefix}grains_of_infinity_from_bastion_pod`
        },
        {
            item_outputs: [{ item: 'enderio:ender_crystal_powder', amount: 3 }],
            item_inputs: [
                { item: 'ars_elemental:flashpine_pod', amount: 1 },
                { item: 'theurgy:alchemical_salt_mineral', amount: 1 }
            ],
            fluid_inputs: [{ fluid: 'theurgy:sal_ammoniac', amount: 15 }],
            duration: 4,
            eu: 2,
            id: `${id_prefix}ender_crystal_powder_from_flashpine_pod`
        },
        {
            item_outputs: [{ item: 'modern_industrialization:emerald_dust', amount: 3 }],
            item_inputs: [
                { item: 'minecraft:sea_lantern', amount: 1 },
                { item: 'theurgy:alchemical_salt_mineral', amount: 1 }
            ],
            fluid_inputs: [{ fluid: 'theurgy:sal_ammoniac', amount: 15 }],
            duration: 4,
            eu: 2,
            id: `${id_prefix}emerald_dust_from_sea_lantern`
        },
        {
            item_outputs: [{ item: 'theurgy:fermentation_starter', amount: 32 }],
            item_inputs: [
                { tag: 'c:mushrooms', amount: 1 },
                { tag: 'c:sugars', amount: 1 }
            ],
            fluid_inputs: [{ fluid: 'theurgy:sal_ammoniac', amount: 15 }],
            duration: 4,
            eu: 2,
            id: `${id_prefix}fermentation_starter`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'extended_industrialization:composter';
        recipe.duration *= 20;
        event.custom(recipe).id(recipe.id);
    });
});
