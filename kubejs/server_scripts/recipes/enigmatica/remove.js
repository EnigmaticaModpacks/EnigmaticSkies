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
        { mod: 'utilitarian', id: /snad/ },
        { output: /soliciting_carpet/ },
        { id: 'utilitarian:utility/green_dye' },
        { id: /create:mixing\/andesite_alloy/ },
        { id: /create:crafting\/materials\/andesite_alloy/ },
        { id: /ars_nouveau:(cobblestone|stone|sand)/ },
        { id: 'supplementaries:statue' },
        { id: /cold_sweat:compat\/thirst/ },

        // Theurgy
        { type: 'theurgy:digestion' },
        { type: 'theurgy:fermentation' },
        { type: 'theurgy:distillation' },
        { type: 'theurgy:calcination' },

        // Nature's Aura
        { type: 'naturesaura:animal_spawner' },

        // Ore Processing Removals

        { id: /aether:(ambrosium|zanite)_\w*_from_(smelting|blasting)/ },
        { id: /create:crushing\/compat\/aether\/(ambrosium|zanite)_ore/ }
    ];

    recipes.forEach((recipe) => {
        event.remove(recipe);
    });
});
