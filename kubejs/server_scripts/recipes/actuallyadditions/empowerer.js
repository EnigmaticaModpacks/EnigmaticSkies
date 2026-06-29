ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:actuallyadditions/empowering/';

    const recipes = [
        {
            result: { id: 'actuallyadditions:empowered_canola_seed', count: 5 },
            base: { item: 'actuallyadditions:crystallized_canola_seed' },
            modifiers: [
                { item: 'actuallyadditions:canola_seeds' },
                { item: 'actuallyadditions:canola_seeds' },
                { item: 'actuallyadditions:canola_seeds' },
                { item: 'actuallyadditions:canola_seeds' }
            ],
            color: '#FF5B4C',
            energy: 5000,
            time: 0.5,
            id: `${id_prefix}empowered_canola_seed`
        },
        {
            result: { id: 'malum:fused_consciousness', count: 1 },
            base: { item: 'malum:complete_design' },
            modifiers: [
                { tag: 'c:tokens/greater_air' },
                { tag: 'c:tokens/greater_earth' },
                { tag: 'c:tokens/greater_fire' },
                { tag: 'c:tokens/greater_water' }
            ],
            color: '#0f5f23',
            energy: 50000,
            time: 1,
            id: `${id_prefix}fused_consciousness`
        },
        {
            result: { id: 'justdirethings:gooblock_tier3', count: 1 },
            base: { item: 'justdirethings:gooblock_tier2' },
            modifiers: [
                { tag: 'c:gems/empowered_void' },
                { item: 'minecraft:dragon_breath' },
                { tag: 'c:gems/empowered_void' },
                { item: 'minecraft:dragon_breath' }
            ],
            color: '#520f5f',
            energy: 50000,
            time: 10,
            id: `${id_prefix}gooblock_tier3`
        },
        {
            result: { id: 'occultism:netherite_scrap_dust', count: 4 },
            base: { tag: 'c:essences/null_slate' },
            modifiers: [
                { tag: 'c:dusts/carbon' },
                { tag: 'c:dusts/quartz' },
                { tag: 'c:dusts/carbon' },
                { item: 'create:cinder_flour' }
            ],
            color: '#61061a',
            energy: 50000,
            time: 2,
            id: `${id_prefix}netherite_scrap_dust`
        },
        {
            result: { id: 'enigmatica:flask_of_four_winds', count: 1 },
            base: { item: 'enigmatica:welkin_decanter' },
            modifiers: [
                { item: 'enigmatica:western_anemo' },
                { item: 'enigmatica:northern_anemo' },
                { item: 'enigmatica:eastern_anemo' },
                { item: 'enigmatica:southern_anemo' }
            ],
            color: '#c1fffc',
            energy: 50000,
            time: 2,
            id: `${id_prefix}flask_of_four_winds`
        },
        {
            result: { id: 'minecraft:trident', count: 1 },
            base: { item: 'apothic_enchanting:inert_trident' },
            modifiers: [
                { tag: 'c:dusts/prismarine' },
                { tag: 'c:gems/prismarine' },
                { tag: 'c:dusts/prismarine' },
                { tag: 'c:gems/prismarine' }
            ],
            color: '#2e8cf7',
            energy: 5000,
            time: 1,
            id: `${id_prefix}trident`
        },
        {
            result: { id: 'ars_technica:calibrated_precision_mechanism', count: 1 },
            base: { item: 'create:precision_mechanism' },
            modifiers: [
                { tag: 'c:gems/amethyst' },
                { tag: 'c:gems/source' },
                { tag: 'c:gems/amethyst' },
                { tag: 'c:gems/source' }
            ],
            color: '#d156f7',
            energy: 1000,
            time: 1,
            id: `${id_prefix}calibrated_precision_mechanism`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'actuallyadditions:empowering';
        recipe.time *= 20;
        recipe.color = hexToRgb(recipe.color);
        event.custom(recipe).id(recipe.id);
    });
});
