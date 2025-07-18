ServerEvents.recipes((event) => {
    const recipes = [
        // {
        //     input: 'sample',
        //     output: 'sample',
        //     type: 'sample',
        //     mod: 'sample',
        //     id: 'sample'
        // }

        { output: 'enderio:wood_gear' }
    ];

    recipes.forEach((recipe) => {
        event.remove(recipe);
    });
});
