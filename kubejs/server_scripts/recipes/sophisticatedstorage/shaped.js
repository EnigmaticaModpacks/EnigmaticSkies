ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:sophisticatedstorage/shaped/';

    const recipes = [
        {
            output: '4x sophisticatedstorage:upgrade_base',
            pattern: ['BAB', 'ACA', 'BAB'],
            key: {
                A: '#enigmatica:planks',
                B: 'prettypipes:blank_module',
                C: 'create:precision_mechanism'
            },
            id: `${id_prefix}upgrade_base`
        },
        {
            output: 'sophisticatedstorage:controller',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'minecraft:polished_tuff',
                B: 'enderio:skeletal_contractor',
                C: '#c:plates/andesite_alloy',
                D: 'actuallyadditions:wood_casing',
                E: '#c:gems/restonia'
            },
            id: `${id_prefix}controller`
        },
        {
            output: 'sophisticatedstorage:chest[sophisticatedstorage:wood_type="spruce"]',
            pattern: ['AAA', 'ACA', 'AAA'],
            key: {
                A: 'framedblocks:framed_cube',
                C: 'minecraft:lever'
            },
            id: `${id_prefix}spruce_chest_alt`
        },
        {
            output: 'sophisticatedstorage:barrel[sophisticatedstorage:wood_type="spruce"]',
            pattern: ['ABA', 'ACA', 'ABA'],
            key: {
                A: 'framedblocks:framed_cube',
                B: 'framedblocks:framed_slab',
                C: 'minecraft:lever'
            },
            id: `${id_prefix}spruce_barrel_alt`
        },
        {
            output: 'sophisticatedstorage:limited_barrel_1[sophisticatedstorage:wood_type="spruce"]',
            pattern: ['ABA', 'ACA', 'AAA'],
            key: {
                A: 'framedblocks:framed_cube',
                B: 'framedblocks:framed_slab',
                C: 'minecraft:lever'
            },
            id: `${id_prefix}spruce_limited_barrel_1_alt`
        },
        {
            output: 'sophisticatedstorage:limited_barrel_2[sophisticatedstorage:wood_type="spruce"]',
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'framedblocks:framed_cube',
                B: 'framedblocks:framed_slab',
                C: 'minecraft:lever'
            },
            id: `${id_prefix}spruce_limited_barrel_2_alt`
        },
        {
            output: 'sophisticatedstorage:limited_barrel_3[sophisticatedstorage:wood_type="spruce"]',
            pattern: ['ABA', 'ACA', 'BAB'],
            key: {
                A: 'framedblocks:framed_cube',
                B: 'framedblocks:framed_slab',
                C: 'minecraft:lever'
            },
            id: `${id_prefix}spruce_limited_barrel_3_alt`
        },
        {
            output: 'sophisticatedstorage:limited_barrel_4[sophisticatedstorage:wood_type="spruce"]',
            pattern: ['BAB', 'ACA', 'BAB'],
            key: {
                A: 'framedblocks:framed_cube',
                B: 'framedblocks:framed_slab',
                C: 'minecraft:lever'
            },
            id: `${id_prefix}spruce_limited_barrel_4_alt`
        },
        {
            output: '4x sophisticatedstorage:spruce_storage_connector',
            pattern: ['BAB', 'ABA', 'BAB'],
            key: {
                A: 'framedblocks:framed_cube',
                B: `#c:rods/wooden`
            },
            id: `${id_prefix}spruce_spruce_storage_connector_alt`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
