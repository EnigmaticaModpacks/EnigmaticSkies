LevelEvents.tick((event) => {
    const { level } = event;
    // console.log(level.tickCount);

    level.level.entities.forEach((entity) => {
        if (!entity.isLiving() || entity.isPlayer()) {
            return;
        }
        let max_senescence = 10 * 72000;

        let age = entity.nbt.Age;
        let pData = entity.persistentData;

        // let type = String(entity.entityType).split('.').slice(1).join(':');

        // Check if it matches our tag
        let isSenescent = entity
            .getEntityType()
            .getTags()
            .anyMatch((tag) => tag.location() == 'enigmatica:senescence');

        // Mark the mob for death
        if (isSenescent && age == 0 && !pData.getInt('senescence')) {
            // console.log(`${type} has an age of ${age}. Let it Die.`);
            pData.putInt('senescence', 1);
        }

        if (pData.getInt('senescence')) {
            if (pData.getInt('senescence') > max_senescence) {
                entity.remove('discarded');
            } else {
                pData.putInt('senescence', pData.getInt('senescence') + 1);
            }
        }
    });
});
