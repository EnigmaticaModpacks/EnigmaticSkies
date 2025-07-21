PlayerEvents.tick((event) => {
    const player = event.player;
    // const pData = player.persistentData;

    if (player.tickCount % 20 != 0 || player.isFake() || !player.isPlayer()) return;

    let effects = player.potionEffects.getActive();

    effects.forEach((effect) => {
        if (effect.getDescriptionId() == 'effect.cold_sweat.warmth' && effect.getAmplifier() >= 9) {
            player.potionEffects.add('ars_nouveau:mana_regen', 4 * 20, 0, false, false);
        }
    });
});
