ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:minecraft/smelting/';
    const recipes = [
        {
            input: '#c:raw_materials/mithril',
            output: 'irons_spellbooks:mithril_scrap',
            xp: 40,
            duration: 20,
            id: `${id_prefix}mithril_scrap`
        },
        {
            input: `#c:storage_blocks/raw_replica`,
            output: 'replication:replica_block',
            xp: 6.3,
            duration: 90,
            id: `${id_prefix}replica_block_from_raw_block`
        },
        {
            input: `#c:storage_blocks/raw_antimony`,
            output: 'modern_industrialization:antimony_block',
            xp: 6.3,
            duration: 90,
            id: `${id_prefix}antimony_block_from_raw_block`
        }
    ];

    let materials = ['osmium', 'iesnium', 'iridium', 'lead', 'nickel', 'platinum', 'silver', 'tin', 'uranium'];
    materials.forEach((material) => {
        recipes.push({
            input: `#c:storage_blocks/raw_${material}`,
            output: AlmostUnified.getTagTargetItem(`c:storage_blocks/${material}`).getId(),
            xp: 6.3,
            duration: 90,
            id: `${id_prefix}${material}_block_from_raw_block`
        });
    });

    recipes.forEach((recipe) => {
        event.smelting(recipe.output, recipe.input, recipe.xp, recipe.duration * 20).id(recipe.id);
    });
});
