ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:replication/matter_value/';

    const recipes = [
        // Raw Materials

        {
            input: { item: 'naturesaura:token_sorrow' },
            matter_types: { water: 1 },
            id: `${id_prefix}token_sorrow`
        },
        {
            input: { item: 'naturesaura:token_grief' },
            matter_types: { water: 4, earth: 1 },
            id: `${id_prefix}token_grief`
        },

        {
            input: { item: 'naturesaura:token_joy' },
            matter_types: { air: 1 },
            id: `${id_prefix}token_joy`
        },
        {
            input: { item: 'naturesaura:token_euphoria' },
            matter_types: { air: 4, water: 1 },
            id: `${id_prefix}token_euphoria`
        },

        {
            input: { item: 'naturesaura:token_fear' },
            matter_types: { earth: 1 },
            id: `${id_prefix}token_fear`
        },
        {
            input: { item: 'naturesaura:token_terror' },
            matter_types: { earth: 4, fire: 1 },
            id: `${id_prefix}token_terror`
        },

        {
            input: { item: 'naturesaura:token_anger' },
            matter_types: { fire: 1 },
            id: `${id_prefix}token_anger`
        },
        {
            input: { item: 'naturesaura:token_rage' },
            matter_types: { fire: 4, air: 1 },
            id: `${id_prefix}token_rage`
        },

        // Replicatable Components
        {
            input: { item: 'ae2:logic_processor' },
            matter_types: { fire: 8, air: 4, earth: 4 },
            id: `${id_prefix}logic_processor`
        },
        {
            input: { item: 'ae2:calculation_processor' },
            matter_types: { water: 8, air: 4, earth: 4 },
            id: `${id_prefix}calculation_processor`
        },
        {
            input: { item: 'ae2:engineering_processor' },
            matter_types: { earth: 8, water: 4, fire: 4 },
            id: `${id_prefix}engineering_processor`
        },
        {
            input: { item: 'modern_industrialization:quantum_circuit' },
            matter_types: { air: 8, water: 4, fire: 4 },
            id: `${id_prefix}quantum_circuit`
        },
        {
            input: { item: 'enigmatica:elemental_matrix' },
            matter_types: { air: 4, water: 4, fire: 4, earth: 4 },
            id: `${id_prefix}elemental_matrix`
        }
    ];

    const matter_rates = {
        water: [
            { type: 'replication:precious', amount: 16.0 },
            { type: 'replication:living', amount: 8.0 }
        ],
        air: [
            { type: 'replication:ender', amount: 16.0 },
            { type: 'replication:quantum', amount: 8.0 }
        ],
        earth: [
            { type: 'replication:earth', amount: 16.0 },
            { type: 'replication:organic', amount: 8.0 }
        ],
        fire: [
            { type: 'replication:metallic', amount: 16.0 },
            { type: 'replication:nether', amount: 8.0 }
        ]
    };

    recipes.forEach((recipe) => {
        recipe.type = 'replication:matter_value';

        recipe.matter = [];
        Object.keys(recipe.matter_types).forEach((type) => {
            let multiplier = recipe.matter_types[type];
            matter_rates[type].forEach((matter) => {
                recipe.matter.push({ type: matter.type, amount: matter.amount * multiplier });
            });
        });

        event.custom(recipe).id(recipe.id);
    });
});
