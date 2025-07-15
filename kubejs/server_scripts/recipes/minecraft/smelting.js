ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:minecraft/smelting/';
    const recipes = [
        {
            input: `#c:storage_blocks/raw_replica`,
            output: 'replication:replica_block',
            xp: 6.3,
            duration: 90,
            id: `${id_prefix}replica_block_from_raw_block`
        }
    ];

    recipes.forEach((recipe) => {
        event.smelting(recipe.output, recipe.input, recipe.xp, recipe.duration * 20).id(recipe.id);
    });
});
