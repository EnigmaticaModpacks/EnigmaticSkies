ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:malum/spirit_repair/';

    const recipes = [
        {
            inputs: [],
            itemIdRegex: `osmium_.+`,
            repairMaterial: { item: AlmostUnified.getTagTargetItem(`c:ingots/osmium`).getId(), count: 2 },
            spirits: [{ type: 'earthen', count: 8 }],
            id: `${id_prefix}osmium`
        },
        {
            inputs: [],
            itemIdRegex: `bronze_.+`,
            repairMaterial: { item: AlmostUnified.getTagTargetItem(`c:ingots/bronze`).getId(), count: 2 },
            spirits: [{ type: 'earthen', count: 8 }],
            id: `${id_prefix}bronze`
        },
        {
            inputs: [],
            itemIdRegex: `lapis_.+`,
            repairMaterial: { tag: `c:gems/lapis`, count: 2 },
            spirits: [
                { type: 'earthen', count: 8 },
                { type: 'arcane', count: 8 }
            ],
            id: `${id_prefix}lapis`
        },
        {
            inputs: [],
            itemIdRegex: `refined_glowstone_.+`,
            repairMaterial: { tag: `c:ingots/refined_glowstone`, count: 2 },
            spirits: [{ type: 'earthen', count: 8 }],
            id: `${id_prefix}refined_glowstone`
        },
        {
            inputs: [],
            itemIdRegex: `refined_obsidian_.+`,
            repairMaterial: { tag: `c:ingots/refined_obsidian`, count: 2 },
            spirits: [{ type: 'earthen', count: 8 }],
            id: `${id_prefix}refined_obsidian`
        },
        {
            inputs: [],
            itemIdRegex: `compressed_iron_.+`,
            repairMaterial: { tag: `c:ingots/compressed_iron`, count: 2 },
            spirits: [{ type: 'earthen', count: 8 }],
            id: `${id_prefix}compressed_iron`
        },
        {
            inputs: [
                'immersiveengineering:pickaxe_steel',
                'immersiveengineering:shovel_steel',
                'immersiveengineering:axe_steel',
                'immersiveengineering:hoe_steel',
                'immersiveengineering:sword_steel',
                'immersiveengineering:armor_steel_helmet',
                'immersiveengineering:armor_steel_chestplate',
                'immersiveengineering:armor_steel_leggings',
                'immersiveengineering:armor_steel_boots'
            ],
            itemIdRegex: `steel_.+`,
            repairMaterial: { item: AlmostUnified.getTagTargetItem(`c:ingots/steel`).getId(), count: 2 },
            spirits: [{ type: 'earthen', count: 8 }],
            id: `${id_prefix}steel`
        },
        {
            inputs: [],
            itemIdRegex: `zanite_.+`,
            repairMaterial: { tag: `aether:gems/zanite`, count: 2 },
            spirits: [
                { type: 'earthen', count: 8 },
                { type: 'arcane', count: 8 }
            ],
            id: `${id_prefix}zanite`
        },
        {
            inputs: [],
            itemIdRegex: `neptune_.+`,
            repairMaterial: { tag: `c:ingots/iron`, count: 2 },
            spirits: [
                { type: 'aqueous', count: 8 },
                { type: 'arcane', count: 8 }
            ],
            id: `${id_prefix}neptune`
        },
        {
            inputs: [],
            itemIdRegex: `neptunium_.+`,
            repairMaterial: { tag: `c:ingots/neptunium`, count: 1 },
            spirits: [
                { type: 'aqueous', count: 8 },
                { type: 'arcane', count: 8 }
            ],
            id: `${id_prefix}neptunium`
        },
        {
            inputs: [],
            itemIdRegex: `gravitite_.+`,
            repairMaterial: { tag: 'aether:gravitite_repairing', count: 1 },
            spirits: [
                { type: 'aerial', count: 8 },
                { type: 'arcane', count: 8 }
            ],
            id: `${id_prefix}gravitite`
        },
        {
            inputs: [],
            itemIdRegex: `phoenix_.+`,
            repairMaterial: { tag: `c:ingots/iron`, count: 2 },
            spirits: [
                { type: 'infernal', count: 8 },
                { type: 'arcane', count: 8 }
            ],
            id: `${id_prefix}phoenix`
        },
        {
            inputs: [],
            itemIdRegex: `valkyrie_.+`,
            repairMaterial: { tag: `c:ingots/iron`, count: 2 },
            spirits: [
                { type: 'sacred', count: 8 },
                { type: 'arcane', count: 8 }
            ],
            id: `${id_prefix}valkyrie`
        },
        {
            inputs: [],
            itemIdRegex: `obsidian_.+`,
            repairMaterial: { tag: `c:obsidians/normal`, count: 1 },
            spirits: [
                { type: 'infernal', count: 8 },
                { type: 'arcane', count: 8 }
            ],
            id: `${id_prefix}obsidian`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'malum:spirit_repair';
        event.custom(recipe).id(recipe.id);
    });
});
