// https://github.com/AztechMC/Modern-Industrialization/blob/5c9162258f967db0c18d5de3b05065d80b8ea10e/docs/ADDING_HATCHES.md#L4

/*
    Notes: When adding new machines, allow MI to generate the necessary resources
    by enabling `datagenOnStartup = true` in `modern_industrialization-startup.toml`.
    This will generate them in the `modern_industrialization` at the instance root.

    Once generated, the following resources should be copied to `kubejs\assets\modern_industrialization` and `kubejs\data\modern_industrialization`
    Assets
    - blockstates
    - lang (only the specific entries for the new machines)
    - models
    Data
    - loot_table

    Similarly, be sure to update the `minecraft/needs_tool` and `minecraft/mineable` block tags.
*/

MIMachineEvents.registerHatches((event) => {
    event.item(
        // English name for the hatch tier. " Item Input/Output Hatch" will be added by MI.
        'Fire Clay Brick',
        // Internal name for the tier.
        // In this cases, the block IDs of the hatches will be huge_item_input_hatch and huge_item_output_hatch.
        'fire_clay_brick',
        // Machine casing for the model of the hatch.
        'firebricks',
        // Number of slot rows and columns for the hatch slots:
        1,
        1,
        // Starting position of the slot grid:
        80,
        40
    );

    event.fluid(
        // English name for the hatch tier. " Fluid Input/Output Hatch" will be added by MI.
        'Fire Clay Brick',
        // Internal name for the tier.
        // In this cases, the block IDs of the hatches will be huge_fluid_input_hatch and huge_fluid_output_hatch.
        'fire_clay_brick',
        // Machine casing for the model of the hatch.
        'firebricks',
        // Number of buckets that the hatch can hold.
        2
    );
});
