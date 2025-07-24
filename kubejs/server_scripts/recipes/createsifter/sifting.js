ServerEvents.recipes((event) => {
    // https://wiki.mechanicalmods.net/mods/create-sifter/
    // New recipes require a restart to show in EMI but work fine after /reload

    const id_prefix = 'enigmatica:createsifter/sifting/';

    const recipes = [
        {
            input: { item: 'aether:cold_aercloud' },
            results: [
                { id: 'theurgy:crystallized_water', chance: 0.25 },
                { id: 'aether:blue_berry', chance: 0.2 },
                { id: 'minecraft:wheat_seeds', chance: 0.1 },
                { id: 'minecraft:pumpkin_seeds', chance: 0.1 },
                { id: 'minecraft:melon_seeds', chance: 0.1 },
                { id: 'minecraft:beetroot_seeds', chance: 0.1 },
                { id: 'farmersdelight:cabbage_seeds', chance: 0.1 },
                { id: 'farmersdelight:tomato_seeds', chance: 0.1 },
                { id: 'actuallyadditions:canola_seeds', chance: 0.1 },
                { id: 'supplementaries:flax_seeds', chance: 0.1 },
                { id: 'ae2:sky_dust', chance: 0.05 }
            ],
            mesh: { id: 'createsifter:string_mesh', count: 1 },
            processingTime: 25,
            waterlogged: false,
            id: `${id_prefix}cloud_sifting_canvas`
        },
        {
            input: { item: 'aether:cold_aercloud' },
            results: [
                { id: 'theurgy:crystallized_water', chance: 0.25 },
                { id: 'ae2:sky_dust', chance: 0.15 }
            ],
            mesh: { id: 'createsifter:andesite_mesh', count: 1 },
            processingTime: 20,
            waterlogged: false,
            id: `${id_prefix}cloud_sifting_andesite`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'createsifter:sifting';
        recipe.processingTime = recipe.processingTime * 20;
        event.custom(recipe).id(recipe.id);
    });
});
