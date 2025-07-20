PlayerEvents.tick((event) => {
    const player = event.player;
    const pData = player.persistentData;

    if (player.isFake() || !player.isPlayer()) return;
    if (player.tickCount % 20 != 0) return;

    let effects = player.potionEffects.getActive();

    effects.forEach((effect) => {
        // console.log(effect.getDescriptionId());
        // console.log(effect.getAmplifier());
        if (effect.getDescriptionId() == 'effect.cold_sweat.warmth' && effect.getAmplifier() >= 9) {
            player.potionEffects.add('ars_nouveau:mana_regen', 3 * 20, 0, false, false);
        }
    });
});
