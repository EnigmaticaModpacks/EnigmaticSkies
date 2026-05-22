// https://github.com/AztechMC/Modern-Industrialization/blob/7048dbcb5279d78cf41a49d02bb45ab758e7ce6f/docs/ADDING_MACHINES.md

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

// Casings: https://github.com/AztechMC/Modern-Industrialization/blob/8574d53686c0785ce5deac3b103d2239faca2a4c/src/main/java/aztech/modern_industrialization/machines/models/MachineCasings.java

let ELECTRIC_ALEMBIC;

MIMachineEvents.registerRecipeTypes((event) => {
    ELECTRIC_ALEMBIC = event
        .register('electric_alembic')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs();
});

MIMachineEvents.registerMachines((event) => {
    const mbHatchTop = event.hatchOf('fluid_output');
    const mbHatchMiddle = event.hatchOf('item_output');
    const mbHatchBottom = event.hatchOf('item_input', 'fluid_input', 'energy_input');
    const heatproofMember = event.memberOfBlock('modern_industrialization:heatproof_machine_casing');
    const coilMember = event.memberOfBlock('modern_industrialization:conductive_coil');
    const pipeMember = event.memberOfBlock('modern_industrialization:steel_machine_casing_pipe');
    const mbShape = event
        .layeredShape('heatproof_machine_casing', [
            ['BBB', ' W ', ' W ', ' R ', '   '],
            ['BBB', 'WPW', 'WPW', 'RPR', ' T '],
            ['B#B', ' W ', ' W ', ' R ', '   ']
        ])
        .key('T', heatproofMember, mbHatchTop)
        .key('R', heatproofMember, mbHatchMiddle)
        .key('B', heatproofMember, mbHatchBottom)
        .key('W', coilMember, event.noHatch())
        .key('P', pipeMember, event.noHatch())
        .build();

    event.simpleElectricCraftingMultiBlock(
        /* GENERAL PARAMETERS */
        // English name, internal name, recipe type, multiblock shape
        'Electric Alembic',
        'electric_alembic',
        ELECTRIC_ALEMBIC,
        mbShape,
        /* RECIPE VIEWER DISPLAY CONFIGURATION */
        // Recipe Viewer progress bar
        event.progressBar(65, 33, 'extract'),
        // Recipe Viewer item inputs, item outputs, fluid inputs, fluid outputs
        (itemInputs) => itemInputs.addSlots(41, 27, 1, 2),
        (itemOutputs) => itemOutputs.addSlots(93, 27, 2, 2),
        (fluidInputs) => fluidInputs.addSlots(21, 27, 1, 2),
        (fluidOutputs) => fluidOutputs.addSlots(131, 27, 1, 2),
        /* MODEL CONFIGUATION */
        // casing of the controller, overlay folder, front overlay?, top overlay?, side overlay?
        'heatproof_machine_casing',
        'electrolyzer',
        true,
        false,
        false
    );
});
