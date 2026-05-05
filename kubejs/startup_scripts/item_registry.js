//priority: 900
StartupEvents.registry('item', (event) => {
    const simple_items = [
        { id: 'cookie_dough' },
        { id: 'sweet_berry_cookie_dough' },
        { id: 'honey_cookie_dough' },
        { id: 'source_berry_cookie_dough' },
        { id: 'source_berry_roll_dough' },

        { id: 'antikythera_mechanism', rarity: 'uncommon' },
        { id: 'pulsating_mechanism', rarity: 'rare' },
        { id: 'tempestuous_mechanism', rarity: 'epic' },

        { id: 'fire_clay_ball' },
        { id: 'pelagite' },
        { id: 'kerogen' },
        { id: 'ruby' },

        { id: 'magic_lamp', rarity: 'rare' },

        { id: 'elemental_matrix', rarity: 'uncommon' },

        { id: 'dormant_wildroot', rarity: 'rare' },
        { id: 'primordial_mud', rarity: 'rare' },
        { id: 'suffused_wildroot', rarity: 'rare' },

        { id: 'desert_essentia', rarity: 'rare' },
        { id: 'savanna_essentia', rarity: 'rare' },
        { id: 'taiga_essentia', rarity: 'rare' },
        { id: 'swamp_essentia', rarity: 'rare' },
        { id: 'plains_essentia', rarity: 'rare' },
        { id: 'tundra_essentia', rarity: 'rare' },
        { id: 'ocean_essentia', rarity: 'rare' },
        { id: 'forest_essentia', rarity: 'rare' },

        { id: 'unfired_vessel' },
        { id: 'stoneware_vessel' },
        { id: 'warded_vessel', rarity: 'rare' },
        { id: 'qulliq_vessel', rarity: 'epic' },

        { id: 'northern_anemo', rarity: 'rare' },
        { id: 'eastern_anemo', rarity: 'rare' },
        { id: 'southern_anemo', rarity: 'rare' },
        { id: 'western_anemo', rarity: 'rare' },
        { id: 'welkin_decanter', rarity: 'rare' },
        { id: 'flask_of_four_winds', rarity: 'epic' },

        { id: 'borrowed_flame', rarity: 'epic' },

        { id: 'world_seed', rarity: 'epic' }
    ];

    simple_items.forEach((item) => {
        let e = event.create(`enigmatica:${item.id}`).texture(`enigmatica:item/${item.id}`);
        if (item.rarity) {
            e.rarity(item.rarity);
        }
    });

    const delivery_bags = [
        { name: `Braising Cain` },
        { name: `Bun-Believable Burger` },
        { name: `Cozy Cauldron`, magic: true },
        { name: `Dumpling Drop`, magic: true },
        { name: `Flappin' Jack's Trove` },
        { name: `Flyin' Fox` },
        { name: `Glazed and Confused`, magic: true },
        { name: `Great Eggspectations` },
        { name: `Jax's Snax`, magic: true },
        { name: `La Drygmese Poutine`, magic: true },
        { name: `Sheep-Eatin' Green` },
        { name: `Sun's Out, Buns Out` },
        { name: `The Bun Also Rises`, magic: true }
    ];

    delivery_bags.forEach((delivery_bag) => {
        let id = getID(delivery_bag.name);
        event
            .create(`enigmatica:${id}`)
            .texture('layer0', `enigmatica:item/${id}`)
            .displayName(`§6CloudDash: ${delivery_bag.magic ? '§d' : '§r'}${delivery_bag.name}`)
            .tag('enigmatica:deliveries');
    });

    const meat_bags = [`Chicken Chunks`, `Beef Bits`, `Pork Pieces`, `Mutton Morsels`];

    meat_bags.forEach((meat_bag) => {
        let id = getID(meat_bag);
        event
            .create(`enigmatica:${id}`)
            .texture('layer0', `enigmatica:item/${id}`)
            .displayName(`§aMeatFresh: §7${meat_bag}`)
            .tag('enigmatica:deliveries');
    });

    const iou_slips = [
        { name: 'Flying Cow', entity: 'entity.aether.flying_cow' },
        { name: 'Phyg', entity: 'entity.aether.phyg' },
        { name: 'Sheepuff', entity: 'entity.aether.sheepuff' },
        { name: 'Aerbunny', entity: 'entity.aether.aerbunny' },
        { name: 'Goat', entity: 'entity.minecraft.goat' },
        { name: 'Moa', entity: 'entity.aether.moa' },
        { name: 'Chicken', entity: 'entity.minecraft.chicken' }
    ];

    iou_slips.forEach((item) => {
        let id = getID(item.name);
        let entityName = Text.translate(`${item.entity}`);
        event
            .create(`enigmatica:${id}_iou`)
            .displayName(`§6IOU:§r 1x ${item.name}`)
            .texture('layer0', `enigmatica:item/${id}_iou`)
            .tooltip(Text.translate('tooltip.enigmatica.iou_exchange', getArticle(item.name), entityName));
    });

    const essentia = ['Source Ink', 'Luminiferous Aether Bottle', 'Vapours of Nyx Bottle'];

    essentia.forEach((essence) => {
        let id = getID(essence);
        let item = event
            .create(`enigmatica:${id}`)
            .displayName(essence)
            .texture('layer0', `enigmatica:item/${id}`)
            .containerItem('minecraft:glass_bottle');
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
