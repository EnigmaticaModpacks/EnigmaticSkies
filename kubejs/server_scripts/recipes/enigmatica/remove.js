ServerEvents.recipes((event) => {
    const recipes = [
        // {
        //     input: 'sample',
        //     output: 'sample',
        //     type: 'sample',
        //     mod: 'sample',
        //     id: 'sample'
        // }

        // Ars Nouveau and Addons
        { type: 'ars_nouveau:glyph' },
        { id: /ars_nouveau:(cobblestone|stone|sand)/ },

        // Aquaculture
        { id: 'aquaculture:gold_nugget_from_gold_fish' },

        // Create and Addons
        { type: 'createsifter:sifting' },
        { id: /create:mixing\/andesite_alloy/ },
        { id: /create:crafting\/materials\/andesite_alloy/ },

        // EnderIO
        { output: 'enderio:wood_gear' },

        // Theurgy
        { type: 'theurgy:digestion' },
        { type: 'theurgy:fermentation' },
        { type: 'theurgy:distillation' },
        { type: 'theurgy:calcination' },

        // Nature's Aura
        { type: 'naturesaura:animal_spawner' },

        // Utilitarian
        { mod: 'utilitarian', id: /snad/ },
        { output: /soliciting_carpet/ },
        { output: 'utilitarian:drit' },
        { output: 'utilitarian:grrass' },
        { id: 'utilitarian:utility/green_dye' },

        // Supplementaries
        { id: 'supplementaries:statue' },
        { id: 'supplementaries:ash_brick' },

        // Ore Processing Removals
        { id: /aether:(ambrosium|zanite)_\w*_from_(smelting|blasting)/ },
        { id: /create:crushing\/compat\/aether\/(ambrosium|zanite)_ore/ }
    ];

    recipes.forEach((recipe) => {
        event.remove(recipe);
    });
});
