//priority: 1001

/*
    spirits: [
        { spirit: 'malum:infernal', count: 1 },
        { spirit: 'malum:earthen', count: 1 },
        { spirit: 'malum:aqueous', count: 1 },
        { spirit: 'malum:aerial', count: 1 },
        { spirit: 'malum:sacred', count: 1 },
        { spirit: 'malum:arcane', count: 1 },
        { spirit: 'malum:eldritch', count: 1 },
        { spirit: 'malum:wicked', count: 1 },
    ]
*/

const spiritData = [
    {
        registry_name: 'aether:aechor_plant',
        spirits: [
            { spirit: 'malum:arcane', count: 1 },
            { spirit: 'malum:earthen', count: 1 }
        ]
    },
    {
        registry_name: 'aether:aerbunny',
        spirits: [
            { spirit: 'malum:sacred', count: 1 },
            { spirit: 'malum:aerial', count: 2 }
        ]
    },
    {
        registry_name: 'aether:aerwhale',
        spirits: [
            { spirit: 'malum:sacred', count: 1 },
            { spirit: 'malum:aerial', count: 2 }
        ]
    },
    {
        registry_name: 'aether:blue_swet',
        spirits: [
            { spirit: 'malum:arcane', count: 1 },
            { spirit: 'malum:aqueous', count: 3 }
        ]
    },
    {
        registry_name: 'aether:cockatrice',
        spirits: [
            { spirit: 'malum:wicked', count: 1 },
            { spirit: 'malum:aerial', count: 2 }
        ]
    },
    {
        registry_name: 'aether:evil_whirlwind',
        spirits: [
            { spirit: 'malum:aerial', count: 3 },
            { spirit: 'malum:wicked', count: 1 }
        ]
    },
    {
        registry_name: 'aether:fire_minion',
        spirits: [
            { spirit: 'malum:infernal', count: 3 },
            { spirit: 'malum:wicked', count: 1 }
        ]
    },
    {
        registry_name: 'aether:flying_cow',
        spirits: [
            { spirit: 'malum:sacred', count: 1 },
            { spirit: 'malum:aerial', count: 2 }
        ]
    },
    {
        registry_name: 'aether:golden_swet',
        spirits: [
            { spirit: 'malum:arcane', count: 1 },
            { spirit: 'malum:aqueous', count: 3 }
        ]
    },
    {
        registry_name: 'aether:mimic',
        spirits: [
            { spirit: 'malum:arcane', count: 1 },
            { spirit: 'malum:wicked', count: 1 }
        ]
    },
    {
        registry_name: 'aether:moa',
        spirits: [
            { spirit: 'malum:sacred', count: 1 },
            { spirit: 'malum:aerial', count: 2 }
        ]
    },
    {
        registry_name: 'aether:phyg',
        spirits: [
            { spirit: 'malum:sacred', count: 1 },
            { spirit: 'malum:aerial', count: 2 }
        ]
    },
    {
        registry_name: 'aether:sentry',
        spirits: [
            { spirit: 'malum:arcane', count: 1 },
            { spirit: 'malum:earthen', count: 1 }
        ]
    },
    {
        registry_name: 'aether:sheepuff',
        spirits: [
            { spirit: 'malum:sacred', count: 1 },
            { spirit: 'malum:aerial', count: 2 }
        ]
    },
    // {
    //     registry_name: 'aether:slider',
    //     spirits: [
    //         { spirit: 'malum:arcane', count: 5 },
    //         { spirit: 'malum:earthen', count: 5 }
    //     ]
    // },
    // {
    //     registry_name: 'aether:sun_spirit',
    //     spirits: [
    //         { spirit: 'malum:sacred', count: 5 },
    //         { spirit: 'malum:infernal', count: 5 }
    //     ]
    // },
    // {
    //     registry_name: 'aether:valkyrie',
    //     spirits: [
    //         { spirit: 'malum:sacred', count: 3 },
    //         { spirit: 'malum:aerial', count: 2 }
    //     ]
    // },
    // {
    //     registry_name: 'aether:valkyrie_queen',
    //     spirits: [
    //         { spirit: 'malum:sacred', count: 5 },
    //         { spirit: 'malum:aerial', count: 5 }
    //     ]
    // },
    {
        registry_name: 'aether:whirlwind',
        spirits: [{ spirit: 'malum:aerial', count: 3 }]
    },
    {
        registry_name: 'aether:zephyr',
        spirits: [
            { spirit: 'malum:arcane', count: 4 },
            { spirit: 'malum:wicked', count: 4 },
            { spirit: 'malum:aerial', count: 4 }
        ]
    },
    // {
    //     registry_name: 'aquaculture:arapaima',
    //     spirits: [{ spirit: 'malum:aqueous', count: 1 }]
    // },
    // {
    //     registry_name: 'aquaculture:arrau_turtle',
    //     spirits: [
    //         { spirit: 'malum:aqueous', count: 2 },
    //         { spirit: 'malum:sacred', count: 1 }
    //     ]
    // },
    // {
    //     registry_name: 'aquaculture:atlantic_cod',
    //     spirits: [{ spirit: 'malum:aqueous', count: 1 }]
    // },
    // {
    //     registry_name: 'aquaculture:atlantic_halibut',
    //     spirits: [{ spirit: 'malum:aqueous', count: 1 }]
    // },
    // {
    //     registry_name: 'aquaculture:atlantic_herring',
    //     spirits: [
    //         { spirit: 'malum:aqueous', count: 2 },
    //         { spirit: 'malum:sacred', count: 1 }
    //     ]
    // },
    // {
    //     registry_name: 'aquaculture:bayad',
    //     spirits: [{ spirit: 'malum:aqueous', count: 1 }]
    // },
    // {
    //     registry_name: 'aquaculture:blackfish',
    //     spirits: [{ spirit: 'malum:aqueous', count: 1 }]
    // },
    // {
    //     registry_name: 'aquaculture:bluegill',
    //     spirits: [{ spirit: 'malum:aqueous', count: 1 }]
    // },
    // {
    //     registry_name: 'aquaculture:boulti',
    //     spirits: [{ spirit: 'malum:aqueous', count: 1 }]
    // },
    // {
    //     registry_name: 'aquaculture:box_turtle',
    //     spirits: [
    //         { spirit: 'malum:aqueous', count: 2 },
    //         { spirit: 'malum:sacred', count: 1 }
    //     ]
    // },
    // {
    //     registry_name: 'aquaculture:brown_shrooma',
    //     spirits: [{ spirit: 'malum:aqueous', count: 1 }]
    // },
    // {
    //     registry_name: 'aquaculture:brown_trout',
    //     spirits: [{ spirit: 'malum:aqueous', count: 1 }]
    // },
    // {
    //     registry_name: 'aquaculture:capitaine',
    //     spirits: [{ spirit: 'malum:aqueous', count: 1 }]
    // },
    // {
    //     registry_name: 'aquaculture:carp',
    //     spirits: [{ spirit: 'malum:aqueous', count: 1 }]
    // },
    // {
    //     registry_name: 'aquaculture:catfish',
    //     spirits: [{ spirit: 'malum:aqueous', count: 1 }]
    // },
    // {
    //     registry_name: 'aquaculture:gar',
    //     spirits: [{ spirit: 'malum:aqueous', count: 1 }]
    // },
    // {
    //     registry_name: 'aquaculture:jellyfish',
    //     spirits: [{ spirit: 'malum:aqueous', count: 1 }]
    // },
    // {
    //     registry_name: 'aquaculture:minnow',
    //     spirits: [{ spirit: 'malum:aqueous', count: 1 }]
    // },
    // {
    //     registry_name: 'aquaculture:muskellunge',
    //     spirits: [{ spirit: 'malum:aqueous', count: 1 }]
    // },
    // {
    //     registry_name: 'aquaculture:pacific_halibut',
    //     spirits: [{ spirit: 'malum:aqueous', count: 1 }]
    // },
    // {
    //     registry_name: 'aquaculture:perch',
    //     spirits: [{ spirit: 'malum:aqueous', count: 1 }]
    // },
    // {
    //     registry_name: 'aquaculture:pink_salmon',
    //     spirits: [{ spirit: 'malum:aqueous', count: 1 }]
    // },
    // {
    //     registry_name: 'aquaculture:piranha',
    //     spirits: [{ spirit: 'malum:aqueous', count: 1 }]
    // },
    // {
    //     registry_name: 'aquaculture:pollock',
    //     spirits: [{ spirit: 'malum:aqueous', count: 1 }]
    // },
    // {
    //     registry_name: 'aquaculture:rainbow_trout',
    //     spirits: [{ spirit: 'malum:aqueous', count: 1 }]
    // },
    // {
    //     registry_name: 'aquaculture:red_grouper',
    //     spirits: [{ spirit: 'malum:aqueous', count: 1 }]
    // },
    // {
    //     registry_name: 'aquaculture:red_shrooma',
    //     spirits: [{ spirit: 'malum:aqueous', count: 1 }]
    // },
    // {
    //     registry_name: 'aquaculture:smallmouth_bass',
    //     spirits: [{ spirit: 'malum:aqueous', count: 1 }]
    // },
    // {
    //     registry_name: 'aquaculture:starshell_turtle',
    //     spirits: [
    //         { spirit: 'malum:aqueous', count: 2 },
    //         { spirit: 'malum:sacred', count: 1 }
    //     ]
    // },
    // {
    //     registry_name: 'aquaculture:synodontis',
    //     spirits: [{ spirit: 'malum:aqueous', count: 1 }]
    // },
    // {
    //     registry_name: 'aquaculture:tambaqui',
    //     spirits: [{ spirit: 'malum:aqueous', count: 1 }]
    // },
    // {
    //     registry_name: 'aquaculture:tuna',
    //     spirits: [{ spirit: 'malum:aqueous', count: 1 }]
    // },
    {
        registry_name: 'ars_elemental:flashing_weald_walker',
        spirits: [
            { spirit: 'malum:aerial', count: 8 },
            { spirit: 'malum:arcane', count: 8 }
        ]
    },
    {
        registry_name: 'ars_nouveau:flourishing_weald_walker',
        spirits: [
            { spirit: 'malum:earthen', count: 8 },
            { spirit: 'malum:arcane', count: 8 }
        ]
    },
    {
        registry_name: 'ars_nouveau:blazing_weald_walker',
        spirits: [
            { spirit: 'malum:infernal', count: 8 },
            { spirit: 'malum:arcane', count: 8 }
        ]
    },
    {
        registry_name: 'ars_nouveau:cascading_weald_walker',
        spirits: [
            { spirit: 'malum:aqueous', count: 8 },
            { spirit: 'malum:arcane', count: 8 }
        ]
    },
    {
        registry_name: 'ars_nouveau:vexing_weald_walker',
        spirits: [
            { spirit: 'malum:eldritch', count: 8 },
            { spirit: 'malum:arcane', count: 8 }
        ]
    },
    {
        registry_name: 'ars_nouveau:wilden_boss',
        spirits: [
            { spirit: 'malum:arcane', count: 12 },
            { spirit: 'malum:wicked', count: 12 },
            { spirit: 'malum:aerial', count: 12 },
            { spirit: 'malum:aqueous', count: 12 },
            { spirit: 'malum:earthen', count: 12 }
        ]
    },
    {
        registry_name: 'ars_nouveau:wilden_guardian',
        spirits: [
            { spirit: 'malum:aqueous', count: 6 },
            { spirit: 'malum:wicked', count: 6 },
            { spirit: 'malum:arcane', count: 6 }
        ]
    },
    {
        registry_name: 'ars_nouveau:wilden_hunter',
        spirits: [
            { spirit: 'malum:earthen', count: 6 },
            { spirit: 'malum:wicked', count: 6 },
            { spirit: 'malum:arcane', count: 6 }
        ]
    },
    {
        registry_name: 'ars_nouveau:wilden_stalker',
        spirits: [
            { spirit: 'malum:aerial', count: 6 },
            { spirit: 'malum:wicked', count: 6 },
            { spirit: 'malum:arcane', count: 6 }
        ]
    },
    {
        registry_name: 'creeperoverhaul:badlands_creeper',
        spirits: [
            { spirit: 'malum:earthen', count: 1 },
            { spirit: 'malum:infernal', count: 1 },
            { spirit: 'malum:wicked', count: 1 }
        ]
    },
    {
        registry_name: 'creeperoverhaul:bamboo_creeper',
        spirits: [
            { spirit: 'malum:earthen', count: 1 },
            { spirit: 'malum:infernal', count: 1 },
            { spirit: 'malum:wicked', count: 1 }
        ]
    },
    {
        registry_name: 'creeperoverhaul:beach_creeper',
        spirits: [
            { spirit: 'malum:aqueous', count: 1 },
            { spirit: 'malum:infernal', count: 1 },
            { spirit: 'malum:wicked', count: 1 }
        ]
    },
    {
        registry_name: 'creeperoverhaul:cave_creeper',
        spirits: [
            { spirit: 'malum:earthen', count: 1 },
            { spirit: 'malum:infernal', count: 1 },
            { spirit: 'malum:wicked', count: 1 }
        ]
    },
    {
        registry_name: 'creeperoverhaul:dark_oak_creeper',
        spirits: [
            { spirit: 'malum:earthen', count: 1 },
            { spirit: 'malum:infernal', count: 1 },
            { spirit: 'malum:wicked', count: 1 }
        ]
    },
    {
        registry_name: 'creeperoverhaul:desert_creeper',
        spirits: [
            { spirit: 'malum:earthen', count: 1 },
            { spirit: 'malum:infernal', count: 1 },
            { spirit: 'malum:wicked', count: 1 }
        ]
    },
    {
        registry_name: 'creeperoverhaul:dripstone_creeper',
        spirits: [
            { spirit: 'malum:aqueous', count: 1 },
            { spirit: 'malum:infernal', count: 1 },
            { spirit: 'malum:wicked', count: 1 }
        ]
    },
    {
        registry_name: 'creeperoverhaul:hills_creeper',
        spirits: [
            { spirit: 'malum:earthen', count: 1 },
            { spirit: 'malum:infernal', count: 1 },
            { spirit: 'malum:wicked', count: 1 }
        ]
    },
    {
        registry_name: 'creeperoverhaul:jungle_creeper',
        spirits: [
            { spirit: 'malum:earthen', count: 1 },
            { spirit: 'malum:infernal', count: 1 },
            { spirit: 'malum:wicked', count: 1 }
        ]
    },
    {
        registry_name: 'creeperoverhaul:mushroom_creeper',
        spirits: [
            { spirit: 'malum:earthen', count: 1 },
            { spirit: 'malum:infernal', count: 1 },
            { spirit: 'malum:wicked', count: 1 }
        ]
    },
    {
        registry_name: 'creeperoverhaul:savannah_creeper',
        spirits: [
            { spirit: 'malum:earthen', count: 1 },
            { spirit: 'malum:infernal', count: 1 },
            { spirit: 'malum:wicked', count: 1 }
        ]
    },
    {
        registry_name: 'creeperoverhaul:snowy_creeper',
        spirits: [
            { spirit: 'malum:aqueous', count: 1 },
            { spirit: 'malum:infernal', count: 1 },
            { spirit: 'malum:wicked', count: 1 }
        ]
    },
    {
        registry_name: 'creeperoverhaul:spruce_creeper',
        spirits: [
            { spirit: 'malum:earthen', count: 1 },
            { spirit: 'malum:infernal', count: 1 },
            { spirit: 'malum:wicked', count: 1 }
        ]
    },
    {
        registry_name: 'creeperoverhaul:swamp_creeper',
        spirits: [
            { spirit: 'malum:aqueous', count: 1 },
            { spirit: 'malum:infernal', count: 1 },
            { spirit: 'malum:wicked', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:armadillo',
        spirits: [
            { spirit: 'malum:sacred', count: 1 },
            { spirit: 'malum:earthen', count: 3 }
        ]
    },
    {
        registry_name: 'minecraft:axolotl',
        spirits: [
            { spirit: 'malum:aqueous', count: 2 },
            { spirit: 'malum:sacred', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:bat',
        spirits: [
            { spirit: 'malum:aerial', count: 2 },
            { spirit: 'malum:sacred', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:bee',
        spirits: [
            { spirit: 'malum:aerial', count: 2 },
            { spirit: 'malum:sacred', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:blaze',
        spirits: [
            { spirit: 'malum:infernal', count: 3 },
            { spirit: 'malum:arcane', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:bogged',
        spirits: [
            { spirit: 'malum:arcane', count: 2 },
            { spirit: 'malum:wicked', count: 2 },
            { spirit: 'malum:earthen', count: 2 }
        ]
    },
    {
        registry_name: 'minecraft:breeze',
        spirits: [
            { spirit: 'malum:aerial', count: 3 },
            { spirit: 'malum:arcane', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:cat',
        spirits: [
            { spirit: 'malum:aerial', count: 2 },
            { spirit: 'malum:sacred', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:cave_spider',
        spirits: [
            { spirit: 'malum:aerial', count: 1 },
            { spirit: 'malum:wicked', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:chicken',
        spirits: [
            { spirit: 'malum:sacred', count: 1 },
            { spirit: 'malum:aerial', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:cod',
        spirits: [{ spirit: 'malum:aqueous', count: 1 }]
    },
    {
        registry_name: 'minecraft:cow',
        spirits: [
            { spirit: 'malum:earthen', count: 1 },
            { spirit: 'malum:sacred', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:creeper',
        spirits: [{ spirit: 'malum:infernal', count: 3 }]
    },
    {
        registry_name: 'minecraft:dolphin',
        spirits: [
            { spirit: 'malum:aqueous', count: 3 },
            { spirit: 'malum:sacred', count: 2 }
        ]
    },
    {
        registry_name: 'minecraft:donkey',
        spirits: [
            { spirit: 'malum:earthen', count: 1 },
            { spirit: 'malum:aerial', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:drowned',
        spirits: [
            { spirit: 'malum:arcane', count: 2 },
            { spirit: 'malum:aqueous', count: 2 },
            { spirit: 'malum:wicked', count: 2 }
        ]
    },
    {
        registry_name: 'minecraft:elder_guardian',
        spirits: [
            { spirit: 'malum:eldritch', count: 12 },
            { spirit: 'malum:aqueous', count: 12 }
        ]
    },
    {
        registry_name: 'minecraft:enderman',
        spirits: [
            { spirit: 'malum:eldritch', count: 4 },
            { spirit: 'malum:arcane', count: 4 }
        ]
    },
    {
        registry_name: 'minecraft:endermite',
        spirits: [{ spirit: 'malum:eldritch', count: 1 }]
    },
    {
        registry_name: 'minecraft:evoker',
        spirits: [
            { spirit: 'malum:wicked', count: 12 },
            { spirit: 'malum:aerial', count: 12 }
        ]
    },
    {
        registry_name: 'minecraft:fox',
        spirits: [
            { spirit: 'malum:earthen', count: 1 },
            { spirit: 'malum:sacred', count: 1 },
            { spirit: 'malum:aerial', count: 2 }
        ]
    },
    {
        registry_name: 'minecraft:ghast',
        spirits: [
            { spirit: 'malum:arcane', count: 1 },
            { spirit: 'malum:infernal', count: 2 },
            { spirit: 'malum:aqueous', count: 2 },
            { spirit: 'malum:aerial', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:glow_squid',
        spirits: [
            { spirit: 'malum:eldritch', count: 2 },
            { spirit: 'malum:aqueous', count: 2 }
        ]
    },
    {
        registry_name: 'minecraft:goat',
        spirits: [{ spirit: 'malum:wicked', count: 3 }]
    },
    {
        registry_name: 'minecraft:guardian',
        spirits: [
            { spirit: 'malum:aqueous', count: 3 },
            { spirit: 'malum:sacred', count: 3 }
        ]
    },
    {
        registry_name: 'minecraft:hoglin',
        spirits: [
            { spirit: 'malum:infernal', count: 2 },
            { spirit: 'malum:earthen', count: 2 }
        ]
    },
    {
        registry_name: 'minecraft:horse',
        spirits: [
            { spirit: 'malum:earthen', count: 1 },
            { spirit: 'malum:sacred', count: 1 },
            { spirit: 'malum:aerial', count: 2 }
        ]
    },
    {
        registry_name: 'minecraft:husk',
        spirits: [
            { spirit: 'malum:arcane', count: 2 },
            { spirit: 'malum:infernal', count: 2 },
            { spirit: 'malum:wicked', count: 2 }
        ]
    },
    {
        registry_name: 'minecraft:illusioner',
        spirits: [
            { spirit: 'malum:arcane', count: 2 },
            { spirit: 'malum:wicked', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:iron_golem',
        spirits: [
            { spirit: 'malum:earthen', count: 5 },
            { spirit: 'malum:sacred', count: 3 }
        ]
    },
    {
        registry_name: 'minecraft:llama',
        spirits: [
            { spirit: 'malum:earthen', count: 1 },
            { spirit: 'malum:aerial', count: 1 },
            { spirit: 'malum:wicked', count: 3 }
        ]
    },
    {
        registry_name: 'minecraft:magma_cube',
        spirits: [
            { spirit: 'malum:infernal', count: 3 },
            { spirit: 'malum:arcane', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:mooshroom',
        spirits: [
            { spirit: 'malum:arcane', count: 1 },
            { spirit: 'malum:earthen', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:mule',
        spirits: [
            { spirit: 'malum:earthen', count: 1 },
            { spirit: 'malum:aerial', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:ocelot',
        spirits: [
            { spirit: 'malum:aerial', count: 2 },
            { spirit: 'malum:sacred', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:panda',
        spirits: [
            { spirit: 'malum:sacred', count: 1 },
            { spirit: 'malum:earthen', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:parrot',
        spirits: [
            { spirit: 'malum:aerial', count: 2 },
            { spirit: 'malum:sacred', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:phantom',
        spirits: [
            { spirit: 'malum:arcane', count: 3 },
            { spirit: 'malum:wicked', count: 3 },
            { spirit: 'malum:aerial', count: 3 }
        ]
    },
    {
        registry_name: 'minecraft:pig',
        spirits: [{ spirit: 'malum:sacred', count: 1 }]
    },
    {
        registry_name: 'minecraft:piglin',
        spirits: [
            { spirit: 'malum:wicked', count: 1 },
            { spirit: 'malum:infernal', count: 2 }
        ]
    },
    {
        registry_name: 'minecraft:piglin_brute',
        spirits: [
            { spirit: 'malum:wicked', count: 2 },
            { spirit: 'malum:infernal', count: 3 }
        ]
    },
    {
        registry_name: 'minecraft:pillager',
        spirits: [
            { spirit: 'malum:wicked', count: 12 },
            { spirit: 'malum:earthen', count: 12 }
        ]
    },
    {
        registry_name: 'minecraft:polar_bear',
        spirits: [
            { spirit: 'malum:earthen', count: 1 },
            { spirit: 'malum:sacred', count: 1 },
            { spirit: 'malum:aqueous', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:pufferfish',
        spirits: [
            { spirit: 'malum:wicked', count: 1 },
            { spirit: 'malum:aqueous', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:rabbit',
        spirits: [
            { spirit: 'malum:sacred', count: 2 },
            { spirit: 'malum:aerial', count: 2 }
        ]
    },
    {
        registry_name: 'minecraft:ravager',
        spirits: [
            { spirit: 'malum:eldritch', count: 8 },
            { spirit: 'malum:wicked', count: 8 }
        ]
    },
    {
        registry_name: 'minecraft:salmon',
        spirits: [{ spirit: 'malum:aqueous', count: 1 }]
    },
    {
        registry_name: 'minecraft:sheep',
        spirits: [
            { spirit: 'malum:earthen', count: 1 },
            { spirit: 'malum:sacred', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:shulker',
        spirits: [
            { spirit: 'malum:arcane', count: 4 },
            { spirit: 'malum:eldritch', count: 4 }
        ]
    },
    {
        registry_name: 'minecraft:silverfish',
        spirits: [
            { spirit: 'malum:wicked', count: 1 },
            { spirit: 'malum:earthen', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:skeleton',
        spirits: [
            { spirit: 'malum:arcane', count: 2 },
            { spirit: 'malum:wicked', count: 2 }
        ]
    },
    {
        registry_name: 'minecraft:skeleton_horse',
        spirits: [
            { spirit: 'malum:arcane', count: 4 },
            { spirit: 'malum:aerial', count: 4 },
            { spirit: 'malum:wicked', count: 4 }
        ]
    },
    {
        registry_name: 'minecraft:slime',
        spirits: [
            { spirit: 'malum:earthen', count: 3 },
            { spirit: 'malum:arcane', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:snow_golem',
        spirits: [
            { spirit: 'malum:aqueous', count: 1 },
            { spirit: 'malum:arcane', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:spider',
        spirits: [
            { spirit: 'malum:aerial', count: 2 },
            { spirit: 'malum:wicked', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:squid',
        spirits: [
            { spirit: 'malum:eldritch', count: 2 },
            { spirit: 'malum:aqueous', count: 2 }
        ]
    },
    {
        registry_name: 'minecraft:stray',
        spirits: [
            { spirit: 'malum:arcane', count: 2 },
            { spirit: 'malum:wicked', count: 2 },
            { spirit: 'malum:aerial', count: 2 }
        ]
    },
    {
        registry_name: 'minecraft:strider',
        spirits: [
            { spirit: 'malum:infernal', count: 2 },
            { spirit: 'malum:arcane', count: 1 },
            { spirit: 'malum:sacred', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:tadpole',
        spirits: [
            { spirit: 'malum:sacred', count: 1 },
            { spirit: 'malum:aqueous', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:trader_llama',
        spirits: [
            { spirit: 'malum:earthen', count: 1 },
            { spirit: 'malum:aerial', count: 1 },
            { spirit: 'malum:wicked', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:tropical_fish',
        spirits: [
            { spirit: 'malum:aqueous', count: 1 },
            { spirit: 'malum:earthen', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:turtle',
        spirits: [{ spirit: 'malum:aqueous', count: 2 }]
    },
    {
        registry_name: 'minecraft:vex',
        spirits: [
            { spirit: 'malum:arcane', count: 1 },
            { spirit: 'malum:aerial', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:villager',
        spirits: [{ spirit: 'malum:sacred', count: 2 }]
    },
    {
        registry_name: 'minecraft:vindicator',
        spirits: [
            { spirit: 'malum:wicked', count: 12 },
            { spirit: 'malum:infernal', count: 12 }
        ]
    },
    {
        registry_name: 'minecraft:wandering_trader',
        spirits: [
            { spirit: 'malum:sacred', count: 2 },
            { spirit: 'malum:arcane', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:warden',
        spirits: [{ spirit: 'malum:eldritch', count: 6 }]
    },
    {
        registry_name: 'minecraft:witch',
        spirits: [
            { spirit: 'malum:wicked', count: 12 },
            { spirit: 'malum:aqueous', count: 12 }
        ]
    },
    {
        registry_name: 'minecraft:wither',
        spirits: [
            { spirit: 'malum:infernal', count: 6 },
            { spirit: 'malum:wicked', count: 6 },
            { spirit: 'malum:arcane', count: 6 },
            { spirit: 'malum:eldritch', count: 6 }
        ]
    },
    {
        registry_name: 'minecraft:wither_skeleton',
        spirits: [
            { spirit: 'malum:infernal', count: 1 },
            { spirit: 'malum:wicked', count: 1 },
            { spirit: 'malum:arcane', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:wolf',
        spirits: [{ spirit: 'malum:sacred', count: 2 }]
    },
    {
        registry_name: 'minecraft:zoglin',
        spirits: [
            { spirit: 'malum:wicked', count: 1 },
            { spirit: 'malum:infernal', count: 1 },
            { spirit: 'malum:earthen', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:zombie',
        spirits: [
            { spirit: 'malum:wicked', count: 1 },
            { spirit: 'malum:earthen', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:zombie_horse',
        spirits: [
            { spirit: 'malum:wicked', count: 1 },
            { spirit: 'malum:aerial', count: 2 },
            { spirit: 'malum:earthen', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:zombie_villager',
        spirits: [
            { spirit: 'malum:wicked', count: 1 },
            { spirit: 'malum:earthen', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:zombified_piglin',
        spirits: [
            { spirit: 'malum:wicked', count: 2 },
            { spirit: 'malum:infernal', count: 2 }
        ]
    },

    // {
    //     registry_name: 'sushigocrafting:shrimp',
    //     spirits: [{ spirit: 'malum:aqueous', count: 1 }]
    // },
    // {
    //     registry_name: 'sushigocrafting:tuna',
    //     spirits: [{ spirit: 'malum:aqueous', count: 1 }]
    // },
    {
        registry_name: 'the_bumblezone:bee_queen',
        spirits: [
            { spirit: 'malum:aerial', count: 6 },
            { spirit: 'malum:sacred', count: 6 }
        ]
    },
    {
        registry_name: 'the_bumblezone:beehemoth',
        spirits: [
            { spirit: 'malum:aerial', count: 4 },
            { spirit: 'malum:sacred', count: 2 }
        ]
    },
    {
        registry_name: 'the_bumblezone:honey_slime',
        spirits: [
            { spirit: 'malum:arcane', count: 1 },
            { spirit: 'malum:aqueous', count: 3 }
        ]
    },
    {
        registry_name: 'the_bumblezone:rootmin',
        spirits: [
            { spirit: 'malum:arcane', count: 1 },
            { spirit: 'malum:earthen', count: 4 }
        ]
    }
];

const spiritEntities = {
    'malum:aerial': [],
    'malum:aqueous': [],
    'malum:arcane': [],
    'malum:earthen': [],
    'malum:eldritch': [],
    'malum:infernal': [],
    'malum:sacred': [],
    'malum:wicked': []
};

spiritData.forEach((data) => {
    data.spirits.forEach((entry) => {
        spiritEntities[entry.spirit].push(data.registry_name);
    });
});
