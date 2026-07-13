// // https://docs.almostreliable.com/lootjs/

LootJS.lootTables((event) => {
    event.create(`enigmatica:entity/bovine`).createPool((pool) => {
        pool.addEntry(
            LootEntry.of(`minecraft:beef`).setCount([0, 2]).applyEnchantmentBonus([0, 1]).jsonFunction(smeltWhenBurning)
        );
    });
});

LootJS.lootTables((event) => {
    event.create(`enigmatica:entity/galline`).createPool((pool) => {
        pool.addEntry(
            LootEntry.of(`minecraft:chicken`)
                .setCount([0, 2])
                .applyEnchantmentBonus([0, 1])
                .jsonFunction(smeltWhenBurning)
        );
    });
});

LootJS.lootTables((event) => {
    event.create(`enigmatica:entity/lapine`).createPool((pool) => {
        pool.addEntry(
            LootEntry.of(`minecraft:rabbit`)
                .setCount([0, 2])
                .applyEnchantmentBonus([0, 1])
                .jsonFunction(smeltWhenBurning)
        );
    });
});

LootJS.lootTables((event) => {
    event.create(`enigmatica:entity/ovine`).createPool((pool) => {
        pool.addEntry(
            LootEntry.of(`minecraft:mutton`)
                .setCount([0, 2])
                .applyEnchantmentBonus([0, 1])
                .jsonFunction(smeltWhenBurning)
        );
    });
});

LootJS.lootTables((event) => {
    event.create(`enigmatica:entity/porcine`).createPool((pool) => {
        pool.addEntry(
            LootEntry.of(`minecraft:porkchop`)
                .setCount([0, 2])
                .applyEnchantmentBonus([0, 1])
                .jsonFunction(smeltWhenBurning)
        );
    });
});

LootJS.lootTables((event) => {
    event.create(`enigmatica:entity/tallow`).createPool((pool) => {
        pool.addEntry(
            LootEntry.of('occultism:tallow')
                .matchMainHand('#occultism:tools/knife')
                .setCount([0, 1])
                .applyEnchantmentBonus([0, 1])
        );
    });
});

LootJS.lootTables((event) => {
    event.create(`enigmatica:entity/saevine`).createPool((pool) => {
        pool.addEntry(
            LootEntry.of(`arsdelight:wilden_meat`)
                .setCount([0, 2])
                .applyEnchantmentBonus([0, 1])
                .jsonFunction(smeltWhenBurning)
        );
    });
});

LootJS.lootTables((event) => {
    event.create(`enigmatica:entity/chimeric`).createPool((pool) => {
        pool.addEntry(
            LootEntry.of(`arsdelight:chimera_meat`)
                .setCount([0, 2])
                .applyEnchantmentBonus([0, 1])
                .jsonFunction(smeltWhenBurning)
        );
    });
});

LootJS.lootTables((event) => {
    event.create(`enigmatica:entity/burgeoning`).createPool((pool) => {
        pool.rolls([1, 3]);

        pool.addEntry(LootEntry.of('minecraft:dandelion').setCount([0, 1]).applyEnchantmentBonus([0, 1]));
        pool.addEntry(LootEntry.of('minecraft:poppy').setCount([0, 1]).applyEnchantmentBonus([0, 1]));
        pool.addEntry(LootEntry.of('minecraft:blue_orchid').setCount([0, 1]).applyEnchantmentBonus([0, 1]));
        pool.addEntry(LootEntry.of('minecraft:allium').setCount([0, 1]).applyEnchantmentBonus([0, 1]));
        pool.addEntry(LootEntry.of('minecraft:azure_bluet').setCount([0, 1]).applyEnchantmentBonus([0, 1]));
        pool.addEntry(LootEntry.of('minecraft:red_tulip').setCount([0, 1]).applyEnchantmentBonus([0, 1]));
        pool.addEntry(LootEntry.of('minecraft:orange_tulip').setCount([0, 1]).applyEnchantmentBonus([0, 1]));
        pool.addEntry(LootEntry.of('minecraft:white_tulip').setCount([0, 1]).applyEnchantmentBonus([0, 1]));
        pool.addEntry(LootEntry.of('minecraft:pink_tulip').setCount([0, 1]).applyEnchantmentBonus([0, 1]));
        pool.addEntry(LootEntry.of('minecraft:oxeye_daisy').setCount([0, 1]).applyEnchantmentBonus([0, 1]));
        pool.addEntry(LootEntry.of('minecraft:cornflower').setCount([0, 1]).applyEnchantmentBonus([0, 1]));
        pool.addEntry(LootEntry.of('minecraft:lily_of_the_valley').setCount([0, 1]).applyEnchantmentBonus([0, 1]));
        pool.addEntry(LootEntry.of('minecraft:torchflower').setCount([0, 1]).applyEnchantmentBonus([0, 1]));
        pool.addEntry(LootEntry.of('minecraft:sunflower').setCount([0, 1]).applyEnchantmentBonus([0, 1]));
        pool.addEntry(LootEntry.of('minecraft:lilac').setCount([0, 1]).applyEnchantmentBonus([0, 1]));
        pool.addEntry(LootEntry.of('minecraft:rose_bush').setCount([0, 1]).applyEnchantmentBonus([0, 1]));
        pool.addEntry(LootEntry.of('minecraft:peony').setCount([0, 1]).applyEnchantmentBonus([0, 1]));
        pool.addEntry(LootEntry.of('minecraft:pitcher_plant').setCount([0, 1]).applyEnchantmentBonus([0, 1]));
        pool.addEntry(LootEntry.of('minecraft:fern').setCount([0, 1]).applyEnchantmentBonus([0, 1]));

        pool.addEntry(LootEntry.of('ribbits:swamp_daisy').setCount([0, 1]).applyEnchantmentBonus([0, 1]));
        pool.addEntry(LootEntry.of('aether:purple_flower').setCount([0, 1]).applyEnchantmentBonus([0, 1]));
        pool.addEntry(LootEntry.of('aether:white_flower').setCount([0, 1]).applyEnchantmentBonus([0, 1]));
    });
});

// Loot Context: https://docs.almostreliable.com/lootjs/api/loot-context.html
// Genetics: https://moddedmc.wiki/en/project/geneticsresequenced/latest/docs/devs/kubejs
LootJS.modifiers((event) => {
    event.addTableModifier(LootType.ENTITY).customAction((context, loot) => {
        const { entity } = context;

        const genes = ['bovine', 'ovine', 'porcine', 'galline', 'lapine', 'saevine', 'burgeoning'];

        genes.forEach((gene) => {
            if (GeneticsJS.hasGene(entity, `geneticsresequenced:${gene}`)) {
                loot.addEntry(LootEntry.reference(`enigmatica:entity/${gene}`));
            }
        });

        if (
            GeneticsJS.hasGene(entity, `geneticsresequenced:bovine`) ||
            GeneticsJS.hasGene(entity, `geneticsresequenced:ovine`) ||
            GeneticsJS.hasGene(entity, `geneticsresequenced:porcine`)
        ) {
            loot.addEntry(LootEntry.reference(`enigmatica:entity/tallow`));
        }
    });
});
