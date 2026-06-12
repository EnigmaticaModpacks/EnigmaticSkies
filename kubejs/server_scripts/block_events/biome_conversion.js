BlockEvents.rightClicked((event) => {
    const { block, item } = event;

    if (item.id == 'ars_nouveau:abjuration_essence' && block.id == 'malum:tainted_rock') {
        convertToBiome(event, 'minecraft:mushroom_fields', 'occultism:spirit_fire_flame', 10);
    }

    if (item.id == 'ars_nouveau:earth_essence' && block.id == 'minecraft:tuff') {
        convertToBiome(event, 'minecraft:mangrove_swamp', 'supplementaries:green_flame', 10);
    }

    if (item.id == 'ars_nouveau:water_essence' && block.id == 'minecraft:clay') {
        convertToBiome(event, 'minecraft:warm_ocean', 'minecraft:soul_fire_flame', 10);
    }

    if (item.id == 'ars_nouveau:fire_essence' && block.id == 'minecraft:blackstone') {
        convertToBiome(event, 'ars_nouveau:archwood_forest', 'minecraft:flame', 10);
    }

    if (item.id == 'ars_nouveau:air_essence' && block.id == 'minecraft:sculk') {
        convertToBiome(event, 'minecraft:deep_dark', 'minecraft:sculk_soul', 10);
    }

    if (item.id == 'ars_nouveau:conjuration_essence' && block.id == 'aether:holystone') {
        convertToBiome(event, 'minecraft:the_void', 'minecraft:soul_fire_flame', 10);
    }

    if (item.id == 'ars_nouveau:conjuration_essence' && block.id == 'minecraft:diamond_block') {
        convertToBiome(event, 'ars_nouveau:jar', 'minecraft:soul_fire_flame', 10);
    }

    if (item.id == 'enigmatica:forest_essentia' && block.id == 'naturesaura:sky_ingot_block') {
        convertToBiome(event, 'minecraft:dark_forest', 'supplementaries:green_flame', 64);
    }

    if (item.id == 'enigmatica:desert_essentia' && block.id == 'naturesaura:sky_ingot_block') {
        convertToBiome(event, 'minecraft:desert', 'supplementaries:green_flame', 64);
    }

    if (item.id == 'enigmatica:taiga_essentia' && block.id == 'naturesaura:sky_ingot_block') {
        convertToBiome(event, 'minecraft:taiga', 'supplementaries:green_flame', 64);
    }

    if (item.id == 'enigmatica:tundra_essentia' && block.id == 'naturesaura:sky_ingot_block') {
        convertToBiome(event, 'minecraft:snowy_plains', 'supplementaries:green_flame', 64);
    }

    if (item.id == 'enigmatica:savanna_essentia' && block.id == 'naturesaura:sky_ingot_block') {
        convertToBiome(event, 'minecraft:savanna', 'supplementaries:green_flame', 64);
    }

    if (item.id == 'enigmatica:plains_essentia' && block.id == 'naturesaura:sky_ingot_block') {
        convertToBiome(event, 'minecraft:plains', 'supplementaries:green_flame', 64);
    }

    if (item.id == 'enigmatica:swamp_essentia' && block.id == 'naturesaura:sky_ingot_block') {
        convertToBiome(event, 'minecraft:swamp', 'supplementaries:green_flame', 64);
    }
});
