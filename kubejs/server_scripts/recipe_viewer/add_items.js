RecipeViewerEvents.addEntries('item', (event) => {
    emi.items.added.forEach((stack) => {
        event.add(stack);
    });
});
