ServerEvents.recipes((event) => {
    const recipes = [
        // {
        //     input: 'sample',
        //     output: 'sample',
        //     type: 'sample',
        //     mod: 'sample',
        //     id: 'sample'
        // }

        { type: 'createsifter:sifting' },
        { output: 'enderio:wood_gear' },
        { id: /create:mixing\/andesite_alloy/ },
        { id: /create:crafting\/materials\/andesite_alloy/ },
        { id: /ars_nouveau:(cobblestone|stone)/ }
    ];

    recipes.forEach((recipe) => {
        event.remove(recipe);
    });
});
