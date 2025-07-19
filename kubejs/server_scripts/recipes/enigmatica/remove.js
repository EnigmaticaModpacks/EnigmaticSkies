ServerEvents.recipes((event) => {
    const recipes = [
        // {
        //     input: 'sample',
        //     output: 'sample',
        //     type: 'sample',
        //     mod: 'sample',
        //     id: 'sample'
        // }

        { mod: 'belts' },
        { type: 'createsifter:sifting' },
        { output: 'enderio:wood_gear' },
        { id: /create:mixing\/andesite_alloy/ },
        { id: /create:crafting\/materials\/andesite_alloy/ },
        { id: /ars_nouveau:(cobblestone|stone)/ },

        // Theurgy
        { type: 'theurgy:digestion' },
        { type: 'theurgy:fermentation' },

        // Ore Processing Removals

        { id: /aether:ambrosium_shard_from_(smelting|blasting)/ },
        { id: 'create:crushing/compat/aether/ambrosium_ore' }
    ];

    recipes.forEach((recipe) => {
        event.remove(recipe);
    });
});
