ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ars_elemental/shapeless/';

    const recipes = [
        {
            output: `ars_elemental:water_caster_tome[custom_name='{"color":"dark_purple","italic":true,"translate":"item.enigmatica.caster_tome.waterspout"}',sauce:school_tome_caster=${JSON.stringify(
                spell_tomes.wash
            )}]`,
            inputs: ['minecraft:book', 'create:propeller', '#c:essences/air', '#c:essences/water', '#c:essences/water'],
            id: `${id_prefix}caster_tome_wash`
        },
        {
            output: `ars_elemental:air_caster_tome[custom_name='{"color":"dark_purple","italic":true,"translate":"item.enigmatica.caster_tome.smokenado"}',sauce:school_tome_caster=${JSON.stringify(
                spell_tomes.smoke
            )}]`,
            inputs: ['minecraft:book', 'create:propeller', '#c:essences/air', '#c:essences/air', '#c:essences/fire'],
            id: `${id_prefix}caster_tome_smoke`
        },
        {
            output: `ars_elemental:fire_caster_tome[custom_name='{"color":"dark_purple","italic":true,"translate":"item.enigmatica.caster_tome.firenado"}',sauce:school_tome_caster=${JSON.stringify(
                spell_tomes.blast
            )}]`,
            inputs: ['minecraft:book', 'create:propeller', '#c:essences/air', '#c:essences/fire', '#c:essences/fire'],
            id: `${id_prefix}caster_tome_blast`
        },
        {
            output: `ars_elemental:anima_caster_tome[custom_name='{"color":"dark_purple","italic":true,"translate":"item.enigmatica.caster_tome.ghostnado"}',sauce:school_tome_caster=${JSON.stringify(
                spell_tomes.haunt
            )}]`,
            inputs: ['minecraft:book', 'create:propeller', '#c:essences/air', '#c:essences/anima', '#c:essences/anima'],
            id: `${id_prefix}caster_tome_haunt`
        }
    ];

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);
    });
});
