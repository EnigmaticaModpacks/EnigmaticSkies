ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:occultism/ritual/';
    const sacrifice = {
        llama: {
            display_name: 'ritual.occultism.sacrifice.llamas',
            tag: 'c:llamas'
        },
        chicken: {
            display_name: 'ritual.occultism.sacrifice.chicken',
            tag: 'c:chickens'
        },
        cow: { display_name: 'ritual.occultism.sacrifice.cows', tag: 'c:cows' },
        fish: { display_name: 'ritual.occultism.sacrifice.fish', tag: 'c:fish' },
        warden: {
            display_name: 'ritual.occultism.sacrifice.warden',
            tag: 'c:wardens'
        },
        sheep: { display_name: 'ritual.occultism.sacrifice.sheep', tag: 'c:sheep' }
    };

    const recipes = [];

    event.forEachRecipe({ type: 'occultism:ritual' }, (r) => {
        let recipe = JSON.parse(r.json);
        let recipe_id = r.getId();

        if (recipe.spirit_max_age) {
            if (recipe_id.includes('_trader')) {
                // Remove decay from Traders
                delete recipe.spirit_max_age;
                recipe.id = recipe_id;
            } else {
                // Reduce delay for all other spirits (weather/daytime rituals)
                recipe.spirit_max_age = 10;
                recipe.id = recipe_id;
            }
        }

        if (recipe_id.includes('_random_animal_')) {
            recipe.item_to_use = { item: 'minecraft:egg' };
            recipe.id = recipe_id;
        }

        switch (recipe_id) {
            case 'occultism:ritual/misc_chalk_rainbow':
                recipe.result = Item.of(`occultism:chalk_rainbow[unbreakable={}]`).toJson();
                recipe.id = recipe_id;
                break;
        }

        if (recipe.id) {
            recipes.push(recipe);
        }
    });

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:ritual';
        event.custom(recipe).id(recipe.id);
    });
});
