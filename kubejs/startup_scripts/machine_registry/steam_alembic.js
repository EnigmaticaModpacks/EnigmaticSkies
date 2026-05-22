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

let STEAM_ALEMBIC;

MIMachineEvents.registerRecipeTypes((event) => {
    STEAM_ALEMBIC = event
        .register('steam_alembic')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs();
});

MIMachineEvents.registerMachines((event) => {
    const mbHatchTop = event.hatchOf('fluid_output');
    const mbHatchMiddle = event.hatchOf('item_output');
    const mbHatchBottom = event.hatchOf('item_input', 'fluid_input');
    const brickBaseMember = event.memberOfBlock('minecraft:polished_andesite');
    const brickWallMember = event.memberOfBlock('modern_industrialization:bronze_plated_bricks');
    const pipeMember = event.memberOfBlock('modern_industrialization:bronze_machine_casing_pipe');
    const mbShape = event
        .layeredShape('andesite_casing', [
            ['BBB', ' W ', ' W ', ' R ', '   '],
            ['BBB', 'WPW', 'WPW', 'RPR', ' T '],
            ['B#B', ' W ', ' W ', ' R ', '   ']
        ])
        .key('T', brickBaseMember, mbHatchTop)
        .key('R', brickBaseMember, mbHatchMiddle)
        .key('B', brickBaseMember, mbHatchBottom)
        .key('W', brickWallMember, event.noHatch())
        .key('P', pipeMember, event.noHatch())
        .build();

    event.simpleSteamCraftingMultiBlock(
        /* GENERAL PARAMETERS */
        // English name, internal name, recipe type, multiblock shape
        'Steam Alembic',
        'steam_alembic',
        STEAM_ALEMBIC,
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
        'andesite_casing',
        'electrolyzer',
        true,
        false,
        false
    );
});
