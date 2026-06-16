ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:naturesaura/animal_spawner/';

    const recipes = [
        {
            entity: 'aether:flying_cow',
            ingredients: [{ item: 'enigmatica:flying_cow_iou' }],
            aura: 30000,
            time: 60,
            id: `${id_prefix}flying_cow`
        },
        {
            entity: 'aether:phyg',
            ingredients: [{ item: 'enigmatica:phyg_iou' }],
            aura: 30000,
            time: 60,
            id: `${id_prefix}phyg`
        },
        {
            entity: 'aether:sheepuff',
            ingredients: [{ item: 'enigmatica:sheepuff_iou' }],
            aura: 30000,
            time: 60,
            id: `${id_prefix}sheepuff`
        },
        {
            entity: 'minecraft:goat',
            ingredients: [{ item: 'enigmatica:goat_iou' }],
            aura: 30000,
            time: 60,
            id: `${id_prefix}goat`
        },
        {
            entity: 'aether:moa',
            ingredients: [{ item: 'enigmatica:moa_iou' }],
            aura: 30000,
            time: 60,
            id: `${id_prefix}moa`
        },
        {
            entity: 'aether:aerbunny',
            ingredients: [{ item: 'enigmatica:aerbunny_iou' }],
            aura: 30000,
            time: 60,
            id: `${id_prefix}aerbunny`
        },
        {
            entity: 'minecraft:chicken',
            ingredients: [{ item: 'enigmatica:chicken_iou' }],
            aura: 30000,
            time: 60,
            id: `${id_prefix}chicken`
        },
        {
            entity: 'minecraft:allay',
            ingredients: [{ item: 'enigmatica:magic_lamp' }],
            aura: 2000000,
            time: 60,
            id: `${id_prefix}allay`
        },
        {
            entity: 'minecraft:wolf',
            ingredients: [{ item: 'naturesaura:birth_spirit' }, { item: 'farmersdelight:dog_food' }],
            aura: 30000,
            time: 60,
            id: `${id_prefix}wolf`
        },
        {
            entity: 'minecraft:cat',
            ingredients: [{ item: 'naturesaura:birth_spirit' }, { item: 'aquaculture:fish_fillet_raw' }],
            aura: 30000,
            time: 60,
            id: `${id_prefix}cat`
        },
        {
            entity: 'minecraft:armadillo',
            ingredients: [{ item: 'naturesaura:birth_spirit' }, { item: 'minecraft:spider_eye' }],
            aura: 30000,
            time: 60,
            id: `${id_prefix}armadillo`
        },
        {
            entity: 'minecraft:camel',
            ingredients: [{ item: 'naturesaura:birth_spirit' }, { item: 'minecraft:cactus' }],
            aura: 30000,
            time: 60,
            id: `${id_prefix}camel`
        },
        {
            entity: 'minecraft:panda',
            ingredients: [{ item: 'naturesaura:birth_spirit' }, { item: 'minecraft:bamboo' }],
            aura: 30000,
            time: 60,
            id: `${id_prefix}panda`
        },
        {
            entity: 'minecraft:llama',
            ingredients: [{ item: 'naturesaura:birth_spirit' }, { item: 'minecraft:hay_block' }],
            aura: 30000,
            time: 60,
            id: `${id_prefix}llama`
        },
        {
            entity: 'minecraft:polar_bear',
            ingredients: [{ item: 'naturesaura:birth_spirit' }, { item: 'minecraft:cod' }],
            aura: 30000,
            time: 60,
            id: `${id_prefix}polar_bear`
        },
        {
            entity: 'minecraft:bat',
            ingredients: [{ item: 'naturesaura:birth_spirit' }, { item: 'oritech:banana' }],
            aura: 30000,
            time: 60,
            id: `${id_prefix}bat`
        },
        {
            entity: 'minecraft:bee',
            ingredients: [{ item: 'naturesaura:birth_spirit' }, { item: 'the_bumblezone:pollen_puff' }],
            aura: 30000,
            time: 60,
            id: `${id_prefix}bee`
        },
        {
            entity: 'minecraft:fox',
            ingredients: [{ item: 'naturesaura:birth_spirit' }, { item: 'minecraft:sweet_berries' }],
            aura: 30000,
            time: 60,
            id: `${id_prefix}fox`
        },
        {
            entity: 'minecraft:frog',
            ingredients: [{ item: 'naturesaura:birth_spirit' }, { item: 'minecraft:slime_ball' }],
            aura: 30000,
            time: 60,
            id: `${id_prefix}frog`
        },

        {
            entity: 'cold_sweat:chameleon',
            ingredients: [{ item: 'naturesaura:birth_spirit' }, { item: 'actuallyadditions:worm' }],
            aura: 30000,
            time: 60,
            id: `${id_prefix}chameleon`
        },
        {
            entity: 'minecraft:sniffer',
            ingredients: [{ item: 'naturesaura:birth_spirit' }, { item: 'minecraft:torchflower' }],
            aura: 30000,
            time: 60,
            id: `${id_prefix}sniffer`
        },
        {
            entity: 'minecraft:spider',
            ingredients: [
                { item: 'naturesaura:birth_spirit' },
                { item: 'minecraft:cobweb' },
                { tag: 'c:foods/raw_meat' }
            ],
            aura: 30000,
            time: 60,
            id: `${id_prefix}spider`
        },
        {
            entity: 'minecraft:cave_spider',
            ingredients: [
                { item: 'naturesaura:birth_spirit' },
                { item: 'minecraft:cobweb' },
                { item: 'minecraft:rotten_flesh' }
            ],
            aura: 30000,
            time: 60,
            id: `${id_prefix}cave_spider`
        },
        {
            entity: 'aquaculture:arrau_turtle',
            ingredients: [
                { item: 'naturesaura:birth_spirit' },
                { item: 'minecraft:turtle_egg' },
                { item: 'minecraft:glow_berries' }
            ],
            aura: 30000,
            time: 60,
            id: `${id_prefix}arrau_turtle`
        },
        {
            entity: 'aquaculture:starshell_turtle',
            ingredients: [
                { item: 'naturesaura:birth_spirit' },
                { item: 'minecraft:turtle_egg' },
                { item: 'aether:blue_berry' }
            ],
            aura: 30000,
            time: 60,
            id: `${id_prefix}starshell_turtle`
        },
        {
            entity: 'aquaculture:box_turtle',
            ingredients: [
                { item: 'naturesaura:birth_spirit' },
                { item: 'minecraft:turtle_egg' },
                { item: 'oritech:banana' }
            ],
            aura: 30000,
            time: 60,
            id: `${id_prefix}box_turtle`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:animal_spawner';
        recipe.time *= 20;
        event.custom(recipe).id(recipe.id);
    });
});
