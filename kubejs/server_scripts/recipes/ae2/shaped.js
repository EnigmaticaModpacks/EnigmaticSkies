ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ae2/shaped/';

    const recipes = [
        {
            output: `ae2:interface`,
            pattern: ['ABA', 'CDE', 'ABA'],
            key: {
                A: '#c:ingots/compressed_iron',
                B: 'minecraft:glass',
                C: 'ae2:annihilation_core',
                D: 'modern_industrialization:configurable_chest',
                E: 'ae2:formation_core'
            },
            id: `${id_prefix}interface`
        },
        {
            output: `ae2:quantum_ring`,
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: '#c:ingots/compressed_iron',
                B: 'modern_industrialization:quantum_circuit',
                C: '#ae2:smart_dense_cable',
                D: 'ae2:energy_cell'
            },
            id: `${id_prefix}quantum_ring`
        },
        {
            output: `ae2:cell_component_1k`,
            pattern: ['ABA', 'CDC', 'ACA'],
            key: {
                A: '#c:gems/mnemonic_fragment',
                B: 'ae2:logic_processor',
                C: '#c:gems/charged_certus',
                D: 'ae2:fluix_pearl'
            },
            id: `${id_prefix}cell_component_1k`
        },
        {
            output: `ae2:cell_component_4k`,
            pattern: ['ABA', 'CDC', 'ACA'],
            key: {
                A: '#c:gems/pulsating_crystal',
                B: 'ae2:calculation_processor',
                C: `ae2:cell_component_1k`,
                D: 'ae2:fluix_pearl'
            },
            id: `${id_prefix}cell_component_4k`
        },
        {
            output: `ae2:cell_component_16k`,
            pattern: ['ABA', 'CDC', 'ACA'],
            key: {
                A: '#c:gems/pulsating_crystal',
                B: 'ae2:calculation_processor',
                C: `ae2:cell_component_4k`,
                D: 'ae2:fluix_pearl'
            },
            id: `${id_prefix}cell_component_16k`
        },
        {
            output: `ae2:cell_component_64k`,
            pattern: ['ABA', 'CDC', 'ACA'],
            key: {
                A: '#c:gems/prescient_crystal',
                B: 'ae2:calculation_processor',
                C: `ae2:cell_component_16k`,
                D: 'ae2:fluix_pearl'
            },
            id: `${id_prefix}cell_component_64k`
        },
        {
            output: `ae2:cell_component_256k`,
            pattern: ['ABA', 'CDC', 'ACA'],
            key: {
                A: '#c:gems/prescient_crystal',
                B: 'modern_industrialization:quantum_circuit',
                C: `ae2:cell_component_64k`,
                D: 'ae2:fluix_pearl'
            },
            id: `${id_prefix}cell_component_256k`
        },
        {
            output: `ae2:molecular_assembler`,
            pattern: ['ABA', 'CDE', 'ABA'],
            key: {
                A: '#c:ingots/compressed_iron',
                B: 'ae2:quartz_glass',
                C: `ae2:annihilation_core`,
                D: 'ars_nouveau:wixie_charm',
                E: 'ae2:formation_core'
            },
            id: `${id_prefix}molecular_assembler`
        },
        {
            output: `ae2:quartz_block`,
            pattern: ['AA', 'AA'],
            key: {
                A: '#c:gems/certus_quartz'
            },
            id: `${id_prefix}quartz_block`
        },
        {
            output: `ae2:level_emitter`,
            pattern: ['A', 'B'],
            key: {
                A: 'create:electron_tube',
                B: '#c:ingots/compressed_iron'
            },
            id: `${id_prefix}level_emitter`
        },
        {
            output: `ae2:energy_level_emitter`,
            pattern: ['A', 'B', 'C'],
            key: {
                A: 'create:electron_tube',
                B: '#c:gems/charged_certus',
                C: '#c:ingots/compressed_iron'
            },
            id: `${id_prefix}energy_level_emitter`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
