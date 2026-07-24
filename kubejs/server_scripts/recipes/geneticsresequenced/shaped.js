ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:geneticsresequenced/shaped/';

    const recipes = [
        {
            output: 'geneticsresequenced:scraper[unbreakable={}]',
            pattern: [' BA', ' AB', 'A  '],
            key: {
                A: `naturesaura:ancient_stick`,
                B: 'malum:soul_stained_steel_plating'
            },
            id: `${id_prefix}scraper`
        },
        {
            output: `geneticsresequenced:syringe`,
            pattern: [' AA', ' BA', 'C  '],
            key: {
                A: `#c:nuggets/soularium`,
                B: 'minecraft:glass_bottle',
                C: 'enderio:infinity_rod'
            },
            id: `${id_prefix}syringe`
        },
        {
            output: `geneticsresequenced:metal_syringe`,
            pattern: [' A ', 'CBC', ' A '],
            key: {
                A: `#c:gems/empowered_void`,
                B: `geneticsresequenced:syringe`,
                C: '#c:plates/steel'
            },
            id: `${id_prefix}metal_syringe`
        },
        {
            output: `geneticsresequenced:advanced_incubator`,
            pattern: ['ABA', 'CDE', 'AFA'],
            key: {
                A: `#c:gems/empowered_void`,
                B: `malum:sympathy_drive`,
                C: 'malum:shielding_apparatus',
                D: `geneticsresequenced:incubator`,
                E: 'malum:impurity_stabilizer',
                F: 'enderio:z_logic_controller'
            },
            id: `${id_prefix}advanced_incubator`
        },
        {
            output: `geneticsresequenced:gene_checker`,
            pattern: [' A ', 'ABA', ' C '],
            key: {
                A: `#c:gems/empowered_enori`,
                B: 'enderio:skeletal_contractor',
                C: 'geneticsresequenced:syringe'
            },
            id: `${id_prefix}gene_checker`
        },
        {
            output: `4x geneticsresequenced:overclocker`,
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'geneticsresequenced:organic_matter',
                B: 'pneumaticcraft:speed_upgrade',
                C: `#c:plates/plastic`
            },
            id: `${id_prefix}overclocker`
        }
    ];

    const machines = [
        { output: 'cell_analyzer', input: 'ars_nouveau:ritual_scrying' },
        { output: 'dna_extractor', input: 'ars_nouveau:ritual_harvest' },
        { output: 'dna_decryptor', input: 'ars_nouveau:ritual_disintegration' },
        { output: 'blood_purifier', input: 'ars_nouveau:ritual_restoration' },
        { output: 'plasmid_infuser', input: 'ars_nouveau:ritual_binding' },
        { output: 'incubator', input: 'ars_nouveau:ritual_overgrowth' },
        { output: 'plasmid_injector', input: 'ars_nouveau:ritual_sanctuary' }
    ];

    machines.forEach((recipe) => {
        recipes.push({
            output: `geneticsresequenced:${recipe.output}`,
            pattern: ['ACA', 'DBD', 'EFE'],
            key: {
                A: 'modern_industrialization:robot_arm',
                B: 'enderio:ensouled_chassis',
                C: recipe.input,
                D: '#c:gears/compressed_iron',
                E: 'ars_technica:calibrated_precision_mechanism',
                F: 'oritech:flux_gate'
            },
            id: `${id_prefix}${recipe.output}`
        });
    });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
