ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:minecraft/blasting/';
    const recipes = [
        {
            input: `#c:storage_blocks/raw_replica`,
            output: 'replication:replica_block',
            xp: 6.3,
            duration: 45,
            id: `${id_prefix}replica_block_from_raw_block`
        }
    ];

    recipes.forEach((recipe) => {
        event.blasting(recipe.output, recipe.input, recipe.xp, recipe.duration * 20).id(recipe.id);
    });
});
