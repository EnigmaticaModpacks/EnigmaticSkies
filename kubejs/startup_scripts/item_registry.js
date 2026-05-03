//priority: 900
StartupEvents.registry('item', (event) => {
    const simple_items = [
        'ruby',
        'source_berry_roll_dough',

        'antikythera_mechanism',
        'pulsating_mechanism',
        'tempestuous_mechanism',

        'fire_clay_ball',
        'cookie_dough',
        'sweet_berry_cookie_dough',
        'honey_cookie_dough',
        'source_berry_cookie_dough',
        'pelagite',
        'kerogen',

        'magic_lamp',

        'elemental_matrix',

        'dormant_wildroot',
        'primordial_mud',
        'suffused_wildroot',

        'northern_anemo',
        'eastern_anemo',
        'southern_anemo',
        'western_anemo',
        'welkin_decanter',
        'flask_of_four_winds',

        'borrowed_flame',

        'world_seed'
    ];

    simple_items.forEach((item) => {
        event.create(`enigmatica:${item}`).texture(`enigmatica:item/${item}`);
    });

    const delivery_bags = [
        { name: `Dumpling Drop`, color: '#a832a8', magic: true },
        { name: `Great Eggspectations`, color: '#e35e0b' },
        { name: `Flappin' Jack's Trove`, color: '#0be3d1' },
        { name: `Cozy Cauldron`, color: '#22e610', magic: true },
        { name: `La Drygmese Poutine`, color: '#ed094a', magic: true },
        { name: `Bun-Believable Burger`, color: '#02610d' },
        { name: `Sheep-Eatin' Green`, color: '#3ff254' },
        { name: `Flyin' Fox`, color: '#f2920c' },
        { name: `Sun's Out, Buns Out`, color: '#f7f300' },
        { name: `The Bun Also Rises`, color: '#139df2', magic: true },
        { name: `Glazed and Confused`, color: '#070ff7', magic: true },
        { name: `Braising Cain`, color: '#f578f1' },
        { name: `Jax's Snax`, color: '#9851e9', magic: true }
    ];

    delivery_bags.forEach((delivery_bag) => {
        let id = getID(delivery_bag.name);
        event
            .create(`enigmatica:${id}`)
            .texture('layer0', `enigmatica:item/delivery_bags/delivery_bag`)
            .texture('layer1', `enigmatica:item/delivery_bags/label`)
            .texture('layer2', `enigmatica:item/delivery_bags/sticker`)
            .color(1, delivery_bag.magic ? '#e0abfa' : '#ddc8b1')
            .color(2, delivery_bag.color)
            .displayName(`§6CloudDash: ${delivery_bag.magic ? '§d' : '§r'}${delivery_bag.name}`)
            .tag('enigmatica:deliveries');
    });

    const meat_bags = [
        { name: `Chicken Chunks`, color: '#f7f307' },
        { name: `Beef Bits`, color: '#145ee6' },
        { name: `Pork Pieces`, color: '#e70bb8' },
        { name: `Mutton Morsels`, color: '#1cf339' }
    ];

    meat_bags.forEach((meat_bag) => {
        let id = getID(meat_bag.name);
        event
            .create(`enigmatica:${id}`)
            .texture('layer0', `enigmatica:item/delivery_bags/delivery_bag`)
            .texture('layer1', `enigmatica:item/delivery_bags/label`)
            .texture('layer2', `enigmatica:item/delivery_bags/sticker`)
            .color(1, '#c9c9c9')
            .color(2, meat_bag.color)
            .displayName(`§aMeatFresh: §7${meat_bag.name}`)
            .tag('enigmatica:deliveries');
    });

    const iou_slips = [
        { name: 'Flying Cow', entity: 'entity.aether.flying_cow', layer: 'beef' },
        { name: 'Phyg', entity: 'entity.aether.phyg', layer: 'porkchop' },
        { name: 'Sheepuff', entity: 'entity.aether.sheepuff', layer: 'mutton' },
        { name: 'Aerbunny', entity: 'entity.aether.aerbunny', layer: 'rabbit' },
        { name: 'Goat', entity: 'entity.minecraft.goat', layer: 'goat_fur' },
        { name: 'Moa', entity: 'entity.aether.moa', layer: 'feather' },
        { name: 'Chicken', entity: 'entity.minecraft.chicken', layer: 'egg' }
    ];

    iou_slips.forEach((item) => {
        let id = getID(item.name);
        let entityName = Text.translate(`${item.entity}`);
        event
            .create(`enigmatica:${id}_iou`)
            .displayName(`§6IOU:§r 1x ${item.name}`)
            .texture('layer0', 'minecraft:item/paper')
            .texture('layer1', `enigmatica:item/${item.layer}`)
            .color(0, '#f2e1a5')
            // .color(1, '#00FFF0')
            .tooltip(Text.translate('tooltip.enigmatica.iou_exchange', getArticle(item.name), entityName));
    });

    const bottles = [
        {
            name: 'Source Ink',
            colors: ['#7d20ab', '', ''],
            layers: ['alchemy_bottle_normal_contents_swirling', 'alchemy_bottle', 'alchemy_bottle_label_black']
        },
        {
            name: 'Desert Essentia',
            colors: ['#c0b985', ''],
            layers: ['alchemy_bottle_warded_contents_pulsing', 'alchemy_bottle_warded']
        },
        {
            name: 'Savanna Essentia',
            colors: ['#a4b641', ''],
            layers: ['alchemy_bottle_warded_contents_bubbling', 'alchemy_bottle_warded']
        },
        {
            name: 'Taiga Essentia',
            colors: ['#86B783', ''],
            layers: ['alchemy_bottle_warded_contents_swirling', 'alchemy_bottle_warded']
        },
        {
            name: 'Swamp Essentia',
            colors: ['#4C763C', ''],
            layers: ['alchemy_bottle_warded_contents_roiling', 'alchemy_bottle_warded']
        },
        {
            name: 'Plains Essentia',
            colors: ['#05dcf8', ''],
            layers: ['alchemy_bottle_warded_contents_still', 'alchemy_bottle_warded']
        },
        {
            name: 'Tundra Essentia',
            colors: ['#bae6f0', ''],
            layers: ['alchemy_bottle_warded_contents_gyre', 'alchemy_bottle_warded']
        },
        {
            name: 'Ocean Essentia',
            colors: ['#1463A5', ''],
            layers: ['alchemy_bottle_warded_contents_gyre', 'alchemy_bottle_warded']
        },
        {
            name: 'Forest Essentia',
            colors: ['#59AE30', ''],
            layers: ['alchemy_bottle_warded_contents_vortex', 'alchemy_bottle_warded']
        },
        {
            name: 'Luminiferous Aether Bottle',
            colors: ['', ''],
            layers: ['alchemy_bottle_reinforced_contents_luminiferous_aether', 'alchemy_bottle_reinforced']
        },
        {
            name: 'Vapours of Nyx Bottle',
            colors: ['', ''],
            layers: ['alchemy_bottle_reinforced_contents_vapours_of_nyx', 'alchemy_bottle_reinforced']
        }
    ];

    bottles.forEach((bottle) => {
        let id = getID(bottle.name);
        let item = event.create(`enigmatica:${id}`).displayName(bottle.name);
        item.containerItem('minecraft:glass_bottle');

        bottle.layers.forEach((layer, index) => {
            item.texture(`layer${index}`, `enigmatica:item/alchemy_bottles/${layer}`);
        });

        bottle.colors.forEach((color, index) => {
            if (color != '') item.color(index, color);
        });
    });

    const alchemy_pots = [
        {
            name: 'Unfired Vessel',
            colors: [''],
            layers: ['alchemy_pot_unfired']
        },
        {
            name: 'Stoneware Vessel',
            colors: [''],
            layers: ['alchemy_pot_ceramic']
        },
        {
            name: 'Warded Vessel',
            colors: [''],
            layers: ['alchemy_pot_stone']
        },
        {
            name: 'Qulliq Vessel',
            colors: ['', '#ff9100'],
            layers: ['alchemy_pot_stone', 'alchemy_pot_contents_glossy']
        }
    ];

    alchemy_pots.forEach((pot) => {
        let id = getID(pot.name);
        let item = event.create(`enigmatica:${id}`).displayName(pot.name);

        pot.layers.forEach((layer, index) => {
            item.texture(`layer${index}`, `enigmatica:item/alchemy_pots/${layer}`);
        });

        pot.colors.forEach((color, index) => {
            if (color != '') item.color(index, color);
        });
    });

    const simple_foods = [
        {
            name: 'Poutine',
            layer: 'poutine',
            nutrition: 4,
            saturation: 7.5
        },
        {
            name: `Lily's Lilac Cotton Candy`,
            layer: 'cotton_candy',
            nutrition: 0.5,
            saturation: 0.5,
            effect: { id: 'minecraft:speed', duration: 60, amplifier: 0 },
            fastToEat: true,
            alwaysEdible: true
        },
        {
            name: 'Mimic Meat',
            layer: 'mimic_meat',
            nutrition: 3.0,
            saturation: 1.5,
            effect: { id: 'minecraft:hunger', duration: 60, amplifier: 9 },
            fastToEat: true,
            alwaysEdible: true
        }
    ];

    simple_foods.forEach((simple_food) => {
        let id = getID(simple_food.name);
        let realNutrition = simple_food.nutrition * 2;
        let realSaturation = simple_food.saturation / realNutrition;
        event
            .create(`enigmatica:${id}`)
            .texture(`enigmatica:item/${simple_food.layer}`)
            .displayName(simple_food.name)
            .maxStackSize(64)
            .useAnimation('eat')
            .food((food) => {
                food.nutrition(realNutrition).saturation(realSaturation);
                if (simple_food.effect) {
                    food.effect(
                        simple_food.effect.id,
                        simple_food.effect.duration * 20,
                        simple_food.effect.amplifier,
                        1
                    );
                }

                if (simple_food.alwaysEdible) food.alwaysEdible();
                if (simple_food.fastToEat) food.fastToEat();
            });
    });

    const dorodangos = ['melon_ball', 'boggy', 'briny', 'silty', 'volcanic', 'cloudy', 'reverberating'];

    dorodangos.forEach((dorodango) => {
        let item = `${dorodango}_dorodango`;

        if (dorodango == 'melon_ball') {
            item = dorodango;
        }

        event
            .create(`enigmatica:${item}`)
            .texture(`enigmatica:item/${item}`)
            .tag('c:dorodangos')
            .tag(`c:dorodangos/${dorodango}`);
    });

    const pebbles = ['andesite', 'basalt', 'calcite', 'deepslate', 'diorite', 'granite', 'stone', 'tuff'];

    pebbles.forEach((pebble) => {
        event
            .create(`enigmatica:${pebble}_pebble`)
            .texture(`enigmatica:item/${pebble}_pebble`)
            .tag('c:pebbles')
            .tag(`c:pebbles/${pebble}`);
    });

    const ritual_dummies = [
        // Rifts
        // { id: 'catching_fire', type: 'misc' },

        // Animated Creatures
        { id: 'animate_blue_swet', type: 'possess' },
        { id: 'animate_golden_swet', type: 'possess' },
        { id: 'animate_slime', type: 'possess' },
        { id: 'animate_magma_cube', type: 'possess' },
        { id: 'animate_zephyr', type: 'possess' },
        { id: 'animate_sentry', type: 'possess' },
        { id: 'animate_rootmin', type: 'possess' },
        { id: 'animate_guardian', type: 'possess' },
        { id: 'animate_honey_slime', type: 'possess' },
        { id: 'animate_shulker', type: 'possess' },
        { id: 'animate_mimic', type: 'possess' },
        { id: 'animate_flourishing_weald_walker', type: 'possess' },
        { id: 'animate_blazing_weald_walker', type: 'possess' },
        { id: 'animate_cascading_weald_walker', type: 'possess' },
        { id: 'animate_vexing_weald_walker', type: 'possess' },
        { id: 'animate_flashing_weald_walker', type: 'possess' },
        { id: 'animate_aechor_plant', type: 'possess' },
        { id: 'animate_skeleton', type: 'possess' },
        { id: 'animate_stray', type: 'possess' },
        { id: 'animate_bogged', type: 'possess' },
        { id: 'animate_phantom', type: 'possess' },

        { id: 'animate_creeper', type: 'possess' },
        { id: 'animate_badlands_creeper', type: 'possess' },
        { id: 'animate_bamboo_creeper', type: 'possess' },
        { id: 'animate_beach_creeper', type: 'possess' },
        { id: 'animate_birch_creeper', type: 'possess' },
        { id: 'animate_cave_creeper', type: 'possess' },
        { id: 'animate_dark_oak_creeper', type: 'possess' },
        { id: 'animate_desert_creeper', type: 'possess' },
        { id: 'animate_dripstone_creeper', type: 'possess' },
        { id: 'animate_hills_creeper', type: 'possess' },
        { id: 'animate_jungle_creeper', type: 'possess' },
        { id: 'animate_mushroom_creeper', type: 'possess' },
        { id: 'animate_ocean_creeper', type: 'possess' },
        { id: 'animate_savannah_creeper', type: 'possess' },
        { id: 'animate_snowy_creeper', type: 'possess' },
        { id: 'animate_spruce_creeper', type: 'possess' },
        { id: 'animate_swamp_creeper', type: 'possess' },

        // Transmuted Creatures
        { id: 'transmute_wilden_stalker', type: 'summon' },
        { id: 'transmute_wilden_hunter', type: 'summon' },
        { id: 'transmute_wilden_guardian', type: 'summon' },
        { id: 'transmute_wilden_boss', type: 'summon' },
        { id: 'transmute_mooshroom', type: 'summon' },
        { id: 'transmute_cockatrice', type: 'summon' },
        { id: 'transmute_whirlisprig', type: 'summon' },
        { id: 'transmute_drygmy', type: 'summon' },
        { id: 'transmute_ravager', type: 'summon' }
    ];

    ritual_dummies.forEach((ritual_dummy) => {
        let display_name = Text.translate(`item.occultism.ritual_dummy.${ritual_dummy.id}`);
        let tooltip = Text.translate(`item.occultism.ritual_dummy.${ritual_dummy.id}.tooltip`);

        event
            .create(`occultism:ritual_dummy/${ritual_dummy.id}`, 'occultism:ritual_dummy')
            .pentacleType(ritual_dummy.type)
            .displayName(display_name)
            .ritualTooltip(tooltip);
    });
});
