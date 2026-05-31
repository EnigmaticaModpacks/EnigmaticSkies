ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:pneumaticcraft/shapeless/';

    const recipes = [
        {
            output: 'pneumaticcraft:assembly_program_drill_laser',
            inputs: ['pneumaticcraft:assembly_program_laser'],
            id: `${id_prefix}assembly_program_drill_laser`
        },
        {
            output: 'pneumaticcraft:assembly_program_laser',
            inputs: ['pneumaticcraft:assembly_program_drill'],
            id: `${id_prefix}assembly_program_laser`
        },
        {
            output: 'pneumaticcraft:assembly_program_drill',
            inputs: ['pneumaticcraft:assembly_program_drill_laser'],
            id: `${id_prefix}assembly_program_drill`
        }
    ];

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);
    });
});
