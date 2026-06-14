ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:pneumaticcraft/crafting_shaped_pressurizable/';

    const recipes = [
        {
            result: { id: 'pneumaticcraft:pneumatic_helmet', count: 1 },
            pattern: ['CPC', 'CAC', 'I I'],
            key: {
                A: { item: 'pneumaticcraft:compressed_iron_helmet' },
                C: { item: 'pneumaticcraft:air_canister' },
                I: { tag: 'c:ingots/compressed_iron' },
                P: { item: 'enderio:z_logic_controller' }
            },

            id: `${id_prefix}pneumatic_helmet`
        },
        {
            result: { id: 'pneumaticcraft:pneumatic_chestplate', count: 1 },
            pattern: ['CPC', 'CAC', 'I I'],
            key: {
                A: { item: 'pneumaticcraft:compressed_iron_chestplate' },
                C: { item: 'pneumaticcraft:air_canister' },
                I: { tag: 'c:ingots/compressed_iron' },
                P: { item: 'enderio:z_logic_controller' }
            },

            id: `${id_prefix}pneumatic_chestplate`
        },
        {
            result: { id: 'pneumaticcraft:pneumatic_leggings', count: 1 },
            pattern: ['CPC', 'CAC', 'I I'],
            key: {
                A: { item: 'pneumaticcraft:compressed_iron_leggings' },
                C: { item: 'pneumaticcraft:air_canister' },
                I: { tag: 'c:ingots/compressed_iron' },
                P: { item: 'enderio:z_logic_controller' }
            },

            id: `${id_prefix}pneumatic_leggings`
        },
        {
            result: { id: 'pneumaticcraft:pneumatic_boots', count: 1 },
            pattern: ['CPC', 'CAC', 'I I'],
            key: {
                A: { item: 'pneumaticcraft:compressed_iron_boots' },
                C: { item: 'pneumaticcraft:air_canister' },
                I: { tag: 'c:ingots/compressed_iron' },
                P: { item: 'enderio:z_logic_controller' }
            },

            id: `${id_prefix}pneumatic_boots`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = `pneumaticcraft:crafting_shaped_pressurizable`;
        recipe.category = 'misc';
        event.custom(recipe).id(recipe.id);
    });
});
