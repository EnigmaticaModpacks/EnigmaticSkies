RecipeViewerEvents.addEntries('item', (event) => {
    const additions = [];

    additions.forEach((addition) => {
        event.add(addition.id);
    });
});
