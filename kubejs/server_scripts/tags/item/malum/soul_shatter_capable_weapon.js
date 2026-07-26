ServerEvents.tags('item', (event) => {
    let additions = [
        'ars_nouveau:enchanters_sword',
        'ars_nouveau:enchanters_gauntlet',
        'arsdelight:enchanters_knife',
        /naturesaura:(sky|depth)_(sword|axe)/,
        /justdirethings:(eclipsealloy|celestigem)_(sword|axe|paxel)/,
        /aquaculture:neptunium_(sword|axe|fillet_knife)/
    ];

    event.get('malum:soul_shatter_capable_weapon').add(additions);
    event.get('malum:enchantable/spirit_plunder').add(additions);
    event.get('malum:enchantable/animated').add(additions);
    event.get('malum:enchantable/haunted').add(additions);
});
