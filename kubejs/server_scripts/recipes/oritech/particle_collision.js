/*
    | Signal Strength | Particle Speed | Min Distance From Last Turn | Max Distance Between Guides |
    |:---------------:|:--------------:|:---------------------------:|:---------------------------:|
    |        1        |      0         |              0              |              2              |
    |        2        |      10        |              2              |              3              |
    |        3        |      50        |              3              |              7              |
    |        4        |      75        |              3              |              8              |
    |        5        |      100       |              4              |              10             |
    |        6        |      150       |              5              |              10             |
    |        7        |      250       |              6              |              10             |
    |        8        |      500       |              8              |              10             |
    |        9        |      750       |              10             |              10             |
    |        10       |      1000      |              11             |              10             |
    |        11       |      2500      |              17             |              10             |
    |        12       |      5000      |              24             |              10             |
    |        13       |      7500      |              29             |              10             |
    |        14       |      10000     |              34             |              10             |
    |        15       |      15000     |              41             |              10             |
*/

ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/particle_collision/';
    const recipes = [
        {
            results: [{ id: 'minecraft:crying_obsidian', count: 1 }],
            ingredients: [{ tag: 'c:nuggets/neptunium' }, { item: 'minecraft:obsidian' }],
            time: 100,
            id: `${id_prefix}crying_obsidian`
        },
        {
            results: [{ id: 'minecraft:chorus_fruit', count: 4 }],
            ingredients: [{ tag: 'c:dusts/echo' }, { item: 'aether:aechor_petal' }],
            time: 100,
            id: `${id_prefix}chorus_fruit`
        },
        {
            results: [{ id: 'minecraft:heart_of_the_sea', count: 2 }],
            ingredients: [{ tag: 'c:storage_blocks/empowered_diamatine' }, { tag: 'c:storage_blocks/neptunium' }],
            time: 100,
            id: `${id_prefix}heart_of_the_sea`
        },
        {
            results: [{ id: 'minecraft:diamond', count: 1 }],
            ingredients: [{ tag: 'c:dusts/carbon' }, { tag: 'c:dusts/carbon' }],
            time: 100,
            id: `${id_prefix}diamond`
        },
        {
            results: [{ id: 'minecraft:wither_skeleton_skull', count: 1 }],
            ingredients: [{ item: 'minecraft:skeleton_skull' }, { item: 'minecraft:wither_rose' }],
            time: 1000,
            id: `${id_prefix}wither_skeleton_skull`
        },
        {
            results: [{ id: 'oritech:overcharged_crystal', count: 1 }],
            ingredients: [{ tag: 'c:gems/weather_crystal' }, { tag: 'c:gems/vibrant_crystal' }],
            time: 10000,
            id: `${id_prefix}overcharged_crystal`
        },
        {
            results: [{ id: 'oritech:enderic_compound', count: 16 }],
            ingredients: [{ tag: 'c:gems/ender_crystal' }, { tag: 'c:ingots/dark_steel' }],
            time: 100,
            id: `${id_prefix}enderic_compound`
        },
        {
            results: [{ id: 'minecraft:heavy_core', count: 1 }],
            ingredients: [{ tag: 'c:ingots/neptunium' }, { tag: 'c:ingots/compressed_iron' }],
            time: 500,
            id: `${id_prefix}heavy_core`
        },
        {
            results: [{ id: 'minecraft:echo_shard', count: 2 }],
            ingredients: [{ tag: 'c:dusts/echo' }, { item: 'the_bumblezone:honey_crystal_shards' }],
            time: 100,
            id: `${id_prefix}echo_shard`
        },
        {
            results: [{ id: 'justdirethings:gooblock_tier4', count: 1 }],
            ingredients: [{ item: 'justdirethings:gooblock_tier3' }, { item: 'apothic_enchanting:warden_tendril' }],
            time: 1000,
            id: `${id_prefix}gooblock_tier4`
        },
        {
            results: [{ id: 'malum:umbral_spirit', count: 1 }],
            ingredients: [{ item: 'malum:null_slate' }, { item: 'ae2:singularity' }],
            time: 15000,
            id: `${id_prefix}umbral_spirit`
        },

        {
            results: [{ id: 'the_bumblezone:essence_calming', count: 1 }],
            ingredients: [{ item: 'enigmatica:vapours_of_nyx_bottle' }, { tag: 'c:tokens/greater_water' }],
            time: 15000,
            id: `${id_prefix}essence_calming`
        },
        {
            results: [{ id: 'the_bumblezone:essence_life', count: 1 }],
            ingredients: [{ item: 'enigmatica:suffused_wildroot' }, { tag: 'c:tokens/greater_earth' }],
            time: 15000,
            id: `${id_prefix}essence_life`
        },
        {
            results: [{ id: 'the_bumblezone:essence_radiance', count: 1 }],
            ingredients: [{ item: 'enigmatica:flask_of_four_winds' }, { tag: 'c:tokens/greater_air' }],
            time: 15000,
            id: `${id_prefix}essence_radiance`
        },
        {
            results: [{ id: 'the_bumblezone:essence_raging', count: 1 }],
            ingredients: [{ item: 'enigmatica:qulliq_vessel' }, { tag: 'c:tokens/greater_fire' }],
            time: 15000,
            id: `${id_prefix}essence_raging`
        },
        {
            results: [{ id: 'the_bumblezone:essence_knowing', count: 1 }],
            ingredients: [{ tag: 'c:ingots/prometheum' }, { item: 'enderio:frank_n_zombie' }],
            time: 15000,
            id: `${id_prefix}essence_knowing`
        },
        {
            results: [{ id: 'the_bumblezone:essence_continuity', count: 1 }],
            ingredients: [{ tag: 'c:ingots/prometheum' }, { item: 'enderio:sentient_ender' }],
            time: 15000,
            id: `${id_prefix}essence_continuity`
        },
        {
            results: [
                {
                    id: 'gateways:gate_pearl',
                    components: { 'gateways:gateway': 'gateways:catching_fire' },
                    count: 1
                }
            ],
            ingredients: [{ tag: 'c:essences/greater_air' }, { item: 'malum:totemic_staff' }],
            time: 15000,
            id: `${id_prefix}gate_pearl_catching_fire`
        },

        {
            results: [
                {
                    id: 'gateways:gate_pearl',
                    components: { 'gateways:gateway': 'apotheosis:tiered/frontier' },
                    count: 1
                }
            ],
            ingredients: [{ tag: 'c:essences/conjuration' }, { item: 'enigmatica:jaxs_snax' }],
            time: 500,
            id: `${id_prefix}gate_pearl_frontier`
        },
        {
            results: [
                {
                    id: 'gateways:gate_pearl',
                    components: { 'gateways:gateway': 'apotheosis:tiered/ascent' },
                    count: 1
                }
            ],
            ingredients: [{ item: 'naturesaura:calling_spirit' }, { item: 'enigmatica:la_drygmese_poutine' }],
            time: 1000,
            id: `${id_prefix}gate_pearl_ascent`
        },
        {
            results: [
                {
                    id: 'gateways:gate_pearl',
                    components: { 'gateways:gateway': 'apotheosis:tiered/summit' },
                    count: 1
                }
            ],
            ingredients: [{ item: 'naturesaura:calling_spirit' }, { item: 'enigmatica:glazed_and_confused' }],
            time: 5000,
            id: `${id_prefix}gate_pearl_summit`
        },
        {
            results: [
                {
                    id: 'gateways:gate_pearl',
                    components: { 'gateways:gateway': 'apotheosis:tiered/pinnacle' },
                    count: 1
                }
            ],
            ingredients: [{ item: 'ars_nouveau:summon_focus' }, { item: 'enigmatica:glazed_and_confused' }],
            time: 10000,
            id: `${id_prefix}gate_pearl_pinnacle`
        },
        {
            results: [
                {
                    id: 'gateways:gate_pearl',
                    components: { 'gateways:gateway': 'apotheosis:endless_invader' },
                    count: 1
                }
            ],
            ingredients: [{ item: 'ars_elemental:necrotic_focus' }, { item: 'enigmatica:glazed_and_confused' }],
            time: 15000,
            id: `${id_prefix}gate_pearl_endless_invader`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:particle_collision';
        event.custom(recipe).id(recipe.id);
    });
});
