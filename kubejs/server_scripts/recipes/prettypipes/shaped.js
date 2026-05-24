ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:prettypipes/shaped/';

    const recipes = [
        {
            output: 'prettypipes:tag_filter_modifier',
            pattern: [' H ', 'RMR', ' R '],
            key: {
                R: '#c:dusts/redstone',
                H: 'create:cardboard',
                M: 'prettypipes:blank_module'
            },
            id: `${id_prefix}tag_filter_modifier`
        },

        {
            output: 'prettypipes:low_speed_module',
            pattern: [' A ', 'BCA', ' A '],
            key: {
                A: '#c:ingots/andesite_alloy',
                B: 'supplementaries:soap',
                C: 'prettypipes:blank_module'
            },
            id: `${id_prefix}low_speed_module`
        },
        {
            output: 'prettypipes:medium_speed_module',
            pattern: ['BA ', ' CA', 'BA '],
            key: {
                A: '#c:ingots/conductive_alloy',
                B: 'supplementaries:soap',
                C: 'prettypipes:low_speed_module'
            },
            id: `${id_prefix}medium_speed_module`
        },
        {
            output: 'prettypipes:high_speed_module',
            pattern: ['BA ', 'BCA', 'BA '],
            key: {
                A: '#c:ingots/hallowed_gold',
                B: 'supplementaries:soap',
                C: 'prettypipes:medium_speed_module'
            },
            id: `${id_prefix}high_speed_module`
        },

        {
            output: 'prettypipes:low_retrieval_module',
            pattern: [' A ', 'ABA', 'CDC'],
            key: {
                A: '#c:gems/emeradic',
                B: 'prettypipes:blank_module',
                C: '#c:gems/enori',
                D: '#c:gems/void'
            },
            id: `${id_prefix}low_retrieval_module`
        },
        {
            output: 'prettypipes:medium_retrieval_module',
            pattern: [' A ', 'ABA', 'CDC'],
            key: {
                A: '#c:gems/empowered_emeradic',
                B: 'prettypipes:low_retrieval_module',
                C: '#c:gems/empowered_enori',
                D: '#c:gems/empowered_void'
            },
            id: `${id_prefix}medium_retrieval_module`
        },
        {
            output: 'prettypipes:high_retrieval_module',
            pattern: [' A ', 'ABA', 'CDC'],
            key: {
                A: '#c:storage_blocks/empowered_emeradic',
                B: 'prettypipes:medium_retrieval_module',
                C: '#c:storage_blocks/empowered_enori',
                D: '#c:storage_blocks/empowered_void'
            },
            id: `${id_prefix}high_retrieval_module`
        },

        {
            output: 'prettypipes:low_extraction_module',
            pattern: ['CDC', 'ABA', ' A '],
            key: {
                A: '#c:gems/emeradic',
                B: 'prettypipes:blank_module',
                C: '#c:gems/enori',
                D: '#c:gems/restonia'
            },
            id: `${id_prefix}low_extraction_module`
        },
        {
            output: 'prettypipes:medium_extraction_module',
            pattern: ['CDC', 'ABA', ' A '],
            key: {
                A: '#c:gems/empowered_emeradic',
                B: 'prettypipes:low_extraction_module',
                C: '#c:gems/empowered_enori',
                D: '#c:gems/empowered_restonia'
            },
            id: `${id_prefix}medium_extraction_module`
        },
        {
            output: 'prettypipes:high_extraction_module',
            pattern: ['CDC', 'ABA', ' A '],
            key: {
                A: '#c:storage_blocks/empowered_emeradic',
                B: 'prettypipes:medium_extraction_module',
                C: '#c:storage_blocks/empowered_enori',
                D: '#c:storage_blocks/empowered_restonia'
            },
            id: `${id_prefix}high_extraction_module`
        },

        {
            output: 'prettypipes:low_filter_module',
            pattern: [' A ', 'BCB', ' B '],
            key: {
                A: 'minecraft:hopper',
                B: '#c:gems/emeradic',
                C: 'prettypipes:blank_module'
            },
            id: `${id_prefix}low_filter_module`
        },

        {
            output: 'prettypipes:pressurizer',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#c:ingots/andesite_alloy',
                B: 'prettypipes:high_speed_module',
                C: 'create:electron_tube'
            },
            id: `${id_prefix}pressurizer`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
