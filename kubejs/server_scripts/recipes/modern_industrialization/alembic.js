ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/steam_alembic/';

    const recipes = [
        {
            fluid_outputs: { fluid: 'modern_industrialization:heavy_water', amount: 40 },
            item_inputs: [{ tag: 'c:gems/fluix', amount: 1 }],
            fluid_inputs: { fluid: 'minecraft:water', amount: 64000 },
            duration: 10,
            eu: 128,
            id: `${id_prefix}heavy_water`
        },
        {
            fluid_outputs: { fluid: 'extended_industrialization:blazing_essence', amount: 20 },
            item_inputs: [{ item: 'minecraft:blaze_powder', amount: 1 }],
            fluid_inputs: { fluid: 'theurgy:sal_ammoniac', amount: 5 },
            duration: 10,
            eu: 4,
            id: `${id_prefix}blazing_essence`
        },
        {
            fluid_outputs: { fluid: 'enigmatica:starbies_nitro_cold_brew', amount: 500 },
            item_inputs: [{ item: 'actuallyadditions:coffee_beans', amount: 20 }],
            fluid_inputs: { fluid: 'minecraft:water', amount: 500 },
            starbuncle: true,
            duration: 60,
            eu: 2,
            id: `${id_prefix}coffee_cup`
        },
        {
            item_outputs: [{ item: 'enderio:skeletal_contractor', amount: 4 }],
            item_inputs: [
                { item: 'enderio:skeletal_contractor', amount: 1, probability: 0 },
                { item: 'enigmatica:elemental_matrix', amount: 1 }
            ],
            fluid_inputs: { fluid: 'oritech:still_strange_matter', amount: 100 },
            starbuncle: true,
            duration: 10,
            eu: 64,
            id: `${id_prefix}skeletal_contractor`
        },
        {
            item_outputs: [{ item: 'enderio:zombie_electrode', amount: 2 }],
            item_inputs: [
                { item: 'enderio:zombie_electrode', amount: 1, probability: 0 },
                { item: 'enigmatica:elemental_matrix', amount: 1 }
            ],
            fluid_inputs: { fluid: 'oritech:still_strange_matter', amount: 100 },
            starbuncle: true,
            duration: 10,
            eu: 64,
            id: `${id_prefix}zombie_electrode`
        },
        {
            item_outputs: [
                { item: 'theurgy:crystallized_water', amount: 8 },
                { item: 'theurgy:crystallized_water', amount: 4, probability: 1 / 3 }
            ],
            item_inputs: [{ item: 'enigmatica:melon_ball', amount: 1 }],
            fluid_inputs: { fluid: 'theurgy:sal_ammoniac', amount: 50 },
            fluid_outputs: { fluid: 'enigmatica:wastewater', amount: 2000 },
            alakarkinos: true,
            duration: 5,
            eu: 2,
            id: `${id_prefix}melon_ball_processing`
        },
        {
            item_outputs: [
                { item: 'theurgy:crystallized_water', amount: 16 },
                { item: 'theurgy:crystallized_water', amount: 8, probability: 1 / 3 }
            ],
            item_inputs: [{ item: 'enigmatica:melon_ball', amount: 1 }],
            fluid_inputs: { fluid: 'oritech:still_strange_matter', amount: 25 },
            fluid_outputs: { fluid: 'enigmatica:wastewater', amount: 8000 },
            alakarkinos: true,
            duration: 5,
            eu: 64,
            id: `${id_prefix}melon_ball_processing_from_strange_matter`
        },
        {
            item_outputs: [
                { item: 'theurgy:crystallized_water', amount: 32 },
                { item: 'theurgy:crystallized_water', amount: 16, probability: 1 / 3 }
            ],
            item_inputs: [{ item: 'enigmatica:melon_ball', amount: 1, probability: 1 / 3 }],
            fluid_inputs: { fluid: 'enigmatica:vapours_of_nyx', amount: 5 },
            fluid_outputs: { fluid: 'enigmatica:wastewater', amount: 16000 },
            alakarkinos: true,
            duration: 5,
            eu: 128,
            id: `${id_prefix}melon_ball_processing_from_vapours_of_nyx`
        }
    ];

    const dorodangos = [
        {
            id: 'enigmatica:briny_dorodango',
            item_outputs: [
                { item: 'ae2:certus_quartz_crystal', amount: 3, probability: 1 / 3 },
                { item: 'aquaculture:neptunium_nugget', amount: 2, probability: 1 / 3 },
                { item: 'minecraft:lapis_lazuli', amount: 1, probability: 1 / 3 }
            ]
        },
        {
            id: 'enigmatica:silty_dorodango',
            item_outputs: [
                { item: 'minecraft:nautilus_shell', amount: 3, probability: 1 / 3 },
                { item: 'minecraft:prismarine_shard', amount: 2, probability: 1 / 3 },
                { item: 'minecraft:prismarine_crystals', amount: 1, probability: 1 / 3 }
            ]
        },
        {
            id: 'enigmatica:boggy_dorodango',
            item_outputs: [
                { item: 'aquaculture:fish_bones', amount: 3, probability: 1 / 3 },
                { item: 'actuallyadditions:black_quartz', amount: 2, probability: 1 / 3 },
                { item: 'malum:blighted_gunk', amount: 1, probability: 1 / 3 }
            ]
        },
        {
            id: 'enigmatica:reverberating_dorodango',
            item_outputs: [
                { item: 'occultism:otherworld_ashes', amount: 3, probability: 1 / 3 },
                { item: 'aether:zanite_gemstone', amount: 2, probability: 1 / 3 },
                { item: 'occultism:echo_dust', amount: 1, probability: 1 / 3 }
            ]
        },
        {
            id: 'enigmatica:volcanic_dorodango',
            item_outputs: [
                { item: 'malum:blazing_quartz', amount: 3, probability: 1 / 3 },
                { item: 'create:cinder_flour', amount: 2, probability: 1 / 3 },
                { item: 'theurgy:crystallized_lava', amount: 1, probability: 1 / 3 }
            ]
        },
        {
            id: 'enigmatica:cloudy_dorodango',
            item_outputs: [
                { item: 'malum:refined_brilliance', amount: 3, probability: 1 / 3 },
                { item: 'theurgy:sal_ammoniac_crystal', amount: 2, probability: 1 / 3 },
                { item: 'ae2:sky_dust', amount: 1, probability: 1 / 3 }
            ]
        }
    ];

    dorodangos.forEach((dorodango) => {
        let payload = {
            item_outputs: dorodango.item_outputs,
            item_inputs: [{ item: dorodango.id, amount: 1 }],
            fluid_inputs: { fluid: 'theurgy:sal_ammoniac', amount: 50 },
            fluid_outputs: { fluid: 'enigmatica:wastewater', amount: 25 },
            alakarkinos: true,
            duration: 3,
            eu: 2,
            id: `${id_prefix}${dorodango.id.split(':')[1]}_processing_from_sal_ammoniac`
        };

        recipes.push(payload);

        payload = {
            item_outputs: [],
            item_inputs: [{ item: dorodango.id, amount: 1 }],
            fluid_inputs: { fluid: 'oritech:still_strange_matter', amount: 25 },
            fluid_outputs: { fluid: 'enigmatica:wastewater', amount: 100 },
            alakarkinos: true,
            duration: 3,
            eu: 64,
            id: `${id_prefix}${dorodango.id.split(':')[1]}_processing_from_strange_matter`
        };

        dorodango.item_outputs.forEach((output) => {
            payload.item_outputs.push({
                item: output.item,
                amount: output.amount * 2,
                probability: output.probability
            });
        });

        recipes.push(payload);

        payload = {
            item_outputs: [],
            item_inputs: [{ item: dorodango.id, amount: 1, probability: 1 / 2 }],
            fluid_inputs: { fluid: 'enigmatica:vapours_of_nyx', amount: 5 },
            fluid_outputs: { fluid: 'enigmatica:wastewater', amount: 1000 },
            alakarkinos: true,
            duration: 3,
            eu: 128,
            id: `${id_prefix}${dorodango.id.split(':')[1]}_processing_from_vapours_of_nyx`
        };

        dorodango.item_outputs.forEach((output) => {
            payload.item_outputs.push({
                item: output.item,
                amount: output.amount * 4,
                probability: output.probability
            });
        });

        recipes.push(payload);
    });

    recipes.forEach((recipe) => {
        recipe.duration *= 20;

        if (recipe.alakarkinos) {
            recipe.process_conditions = [
                {
                    type: 'mi_tweaks:nearby_entity',
                    relative: 'all',
                    range: 5,
                    entity: 'ars_nouveau:alakarkinos',
                    count: 1
                }
            ];
        }

        if (recipe.starbuncle) {
            recipe.process_conditions = [
                {
                    type: 'mi_tweaks:nearby_entity',
                    relative: 'all',
                    range: 5,
                    entity: 'ars_nouveau:starbuncle',
                    count: 1
                }
            ];
        }

        if (recipe.eu <= 4) {
            recipe.type = 'modern_industrialization:steam_alembic';
            event.custom(recipe).id(`${recipe.id}/steam`);
        }

        recipe.type = 'modern_industrialization:electric_alembic';
        event.custom(recipe).id(`${recipe.id}/electric`);
    });
});
