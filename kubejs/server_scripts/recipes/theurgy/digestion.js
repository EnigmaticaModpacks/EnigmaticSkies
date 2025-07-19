// ServerEvents.recipes((event) => {
//     const id_prefix = 'enigmatica:theurgy/fermentation/';

//     const recipes = [
//         {
//             result: {
//                 id: 'minecraft:clay_ball',
//                 count: 2
//             },
//             ingredients: [{ ingredient: { item: 'aether:aether_dirt' }, count: 1 }],
//             fluid_input: {
//                 id: 'minecraft:water',
//                 amount: 100
//             },

//             time: 100,
//             id: `${id_prefix}clay_ball`
//         },
//         {
//             result: {
//                 id: 'minecraft:clay_ball',
//                 count: 4
//             },
//             ingredients: [
//                 { ingredient: { item: 'aether:aether_dirt' }, count: 1 },
//                 { ingredient: { item: 'theurgy:fermentation_starter' }, count: 1 }
//             ],
//             fluid_input: {
//                 id: 'minecraft:water',
//                 amount: 100
//             },

//             time: 100,
//             id: `${id_prefix}clay_ball_with_fermentation_starter`
//         },
//         {
//             type: 'theurgy:fermentation',
//             category: 'misc',
//             fluid: { amount: 125, ingredient: { fluid: 'minecraft:water' } },
//             ingredients: [{ tag: 'theurgy:alchemical_sulfurs/animals/abundant' }, { tag: 'c:crops' }],
//             result: {
//                 type: 'theurgy:item',
//                 count: 1,
//                 id: 'theurgy:alchemical_niter_animals_abundant'
//             },
//             time: 200
//         }
//     ];

//     recipes.forEach((recipe) => {
//         recipe.type = 'theurgy:fermentation';
//         recipe.category = 'misc';
//         recipe.result.type = 'theurgy:item';
//         recipe.fluid = {
//             ingredient: { fluid: recipe.fluid_input.id },
//             amount: recipe.fluid_input.amount
//         };
//         event.custom(recipe).id(recipe.id);
//     });
// });
