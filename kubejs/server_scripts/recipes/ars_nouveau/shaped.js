ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ars_nouveau/shaped/';

    const recipes = [
        {
            output: `ars_nouveau:imbuement_chamber`,
            pattern: [' A ', 'B B', 'ACA'],
            key: {
                A: '#c:ingots/gold',
                B: '#c:ingots/andesite_alloy',
                C: '#c:gems/source'
            },
            id: `${id_prefix}imbuement_chamber`
        },
        {
            output: 'ars_nouveau:source_berry_pie',
            pattern: [' A ', 'BBB', 'DCD'],
            key: {
                A: 'ars_nouveau:magebloom',
                B: 'arsdelight:source_berry_jam',
                C: 'farmersdelight:pie_crust',
                D: '#c:sugars'
            },
            id: `${id_prefix}source_berry_pie`
        },
        {
            output: 'ars_nouveau:agronomic_sourcelink',
            pattern: [' A ', 'BCB', ' D '],
            key: {
                A: '#c:storage_blocks/source',
                B: '#c:ingots/hallowed_gold',
                C: 'farmersdelight:organic_compost',
                D: 'handcrafted:golden_thick_pot'
            },
            id: `${id_prefix}agronomic_sourcelink`
        },
        {
            output: 'ars_nouveau:volcanic_sourcelink',
            pattern: [' A ', 'BCB', ' D '],
            key: {
                A: '#c:storage_blocks/source',
                B: '#c:ingots/hallowed_gold',
                C: 'theurgy:crystallized_lava',
                D: 'handcrafted:golden_thick_pot'
            },
            id: `${id_prefix}volcanic_sourcelink`
        },
        {
            output: 'ars_nouveau:alchemical_sourcelink',
            pattern: [' A ', 'BCB', ' D '],
            key: {
                A: '#c:storage_blocks/source',
                B: '#c:ingots/hallowed_gold',
                C: 'supplementaries:lumisene_bottle',
                D: 'handcrafted:golden_thick_pot'
            },
            id: `${id_prefix}alchemical_sourcelink`
        },
        {
            output: 'ars_nouveau:vitalic_sourcelink',
            pattern: [' A ', 'BCB', ' D '],
            key: {
                A: '#c:storage_blocks/source',
                B: '#c:ingots/hallowed_gold',
                C: 'aether:enchanted_berry',
                D: 'handcrafted:golden_thick_pot'
            },
            id: `${id_prefix}vitalic_sourcelink`
        },
        {
            output: 'ars_nouveau:spell_prism',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#c:ingots/hallowed_gold',
                B: 'ars_nouveau:archwood_planks',
                C: 'naturesaura:infused_stone'
            },
            id: `${id_prefix}spell_prism`
        },
        {
            output: 'ars_nouveau:basic_spell_turret',
            pattern: ['AB ', 'BCB', ' BA'],
            key: {
                A: '#c:gems/ruby',
                B: '#c:ingots/hallowed_gold',
                C: '#c:storage_blocks/source'
            },
            id: `${id_prefix}basic_spell_turret`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
