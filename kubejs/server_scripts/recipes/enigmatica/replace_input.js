ServerEvents.recipes((event) => {
    // {
    //     input: 'sample',
    //     output: 'sample',
    //     type: 'sample',
    //     mod: 'sample',
    //     id: 'sample'
    // }

    const recipes = [
        {
            filter: [{ mod: 'waystones' }, { output: 'minecraft:writable_book' }],
            to_replace: 'minecraft:ink_sac',
            replace_with: '#c:dyes/black'
        },
        {
            filter: [{ mod: 'prettypipes' }, { mod: 'ppfluids' }],
            to_replace: '#c:ingots/iron',
            replace_with: '#c:ingots/andesite_alloy'
        },
        {
            filter: [{ mod: 'prettypipes' }, { mod: 'ppfluids' }],
            to_replace: '#c:storage_blocks/iron',
            replace_with: '#c:storage_blocks/andesite_alloy'
        },
        {
            filter: [{ mod: 'prettypipes' }, { mod: 'ppfluids' }],
            to_replace: 'minecraft:iron_bars',
            replace_with: 'create:andesite_bars'
        },
        {
            filter: [{ mod: 'prettypipes' }, { mod: 'ppfluids' }],
            to_replace: '#c:ingots/gold',
            replace_with: '#c:ingots/copper'
        },
        {
            filter: [{ mod: 'prettypipes' }, { mod: 'ppfluids' }],
            to_replace: '#c:gems/lapis',
            replace_with: '#c:gems/palis'
        },

        {
            filter: [{ mod: 'handcrafted' }, { mod: 'aquaculture' }],
            to_replace: '#c:chests',
            replace_with: 'framedblocks:framed_chest'
        },
        {
            filter: {},
            to_replace: 'minecraft:feather',
            replace_with: '#c:feathers'
        },
        {
            filter: [{ output: 'minecraft:sticky_piston' }, { output: 'minecraft:lead' }, { mod: 'appflux' }],
            to_replace: 'minecraft:slime_ball',
            replace_with: '#c:slimeballs'
        },
        {
            filter: [{ mod: 'appflux' }],
            to_replace: 'minecraft:cactus',
            replace_with: '#c:dyes/green'
        },
        {
            filter: [{ output: `minecraft:comparator` }, { mod: 'prettypipes' }, { mod: 'ppfluids' }],
            to_replace: 'minecraft:quartz',
            replace_with: Ingredient.of(['#c:gems/quartz', 'ae2:certus_quartz_crystal', '#c:gems/black_quartz'])
        },

        {
            filter: [{ id: /actuallyadditions:black_quartz_(wall|stair|slab)/ }],
            to_replace: 'actuallyadditions:black_quartz_pillar_block',
            replace_with: 'actuallyadditions:black_quartz_block'
        },
        {
            filter: [{ mod: 'oritech' }],
            to_replace: '#c:ingots/steel',
            replace_with: '#c:ingots/steel'
        },
        {
            filter: [
                { output: 'farmersdelight:stove' },
                { output: `minecraft:hopper` },
                { output: `utilitarian:fluid_hopper` },
                { output: `minecraft:smithing_table` }
            ],
            to_replace: '#c:ingots/iron',
            replace_with: '#c:ingots/andesite_alloy'
        },
        {
            filter: [{ mod: `transfer_labels` }],
            to_replace: '#c:ingots/copper',
            replace_with: '#c:ingots/andesite_alloy'
        },
        {
            filter: [{ mod: `trashcans` }],
            to_replace: 'minecraft:cobblestone',
            replace_with: '#c:ingots/andesite_alloy'
        },
        {
            filter: [{ mod: 'farmersdelight' }],
            to_replace: 'minecraft:wooden_shovel',
            replace_with: Ingredient.of(['aether:skyroot_shovel', 'minecraft:wooden_shovel'])
        },
        {
            filter: [{ output: 'farmersdelight:cooking_pot' }],
            to_replace: '#c:ingots/iron',
            replace_with: '#c:ingots/andesite_alloy'
        },
        {
            filter: [
                { mod: 'functionalstorage' },
                { mod: 'actuallyadditions' },
                { mod: `transfer_labels` },
                { output: `utilitarian:fluid_hopper` }
            ],
            to_replace: 'minecraft:bucket',
            replace_with: '#c:buckets/empty'
        },
        {
            filter: [{ id: `ars_nouveau:sourcestone` }],
            to_replace: '#c:stones',
            replace_with: 'ae2:sky_stone_block'
        },
        {
            filter: [{ mod: `elevatorid` }],
            to_replace: 'minecraft:ender_pearl',
            replace_with: 'aether:blue_aercloud'
        },
        {
            filter: [
                { mod: `redstonepen` },
                { output: `minecraft:piston` },
                { output: `minecraft:observer` },
                { output: `minecraft:dispenser` },
                { output: `minecraft:dropper` },
                { output: `minecraft:lever` },
                { output: `supplementaries:turn_table` },
                { output: `supplementaries:relayer` },
                { output: `naturesaura:placer` },
                { output: `naturesaura:pickup_stopper` },
                { output: `create:redstone_contact` }
            ],
            to_replace: 'minecraft:cobblestone',
            replace_with: 'minecraft:andesite'
        },
        {
            filter: [{ output: `supplementaries:bomb_spiky` }],
            to_replace: '#c:ingots/lead',
            replace_with: '#c:ingots/iron'
        },
        {
            filter: [{ output: `minecraft:repeater` }, { output: `minecraft:comparator` }],
            to_replace: 'minecraft:stone',
            replace_with: 'minecraft:andesite'
        },
        {
            filter: [{ output: `minecraft:dispenser` }],
            to_replace: 'minecraft:bow',
            replace_with: '#c:strings'
        },
        {
            filter: [
                { output: /minecraft:.*copper_bulb/ },
                { output: /thesilverage:.*silver_bulb/ },
                { output: 'ars_nouveau:source_lamp' },
                { output: 'modularrouters:speed_upgrade' }
            ],
            to_replace: 'minecraft:blaze_rod',
            replace_with: 'supplementaries:lumisene_bottle'
        },
        {
            filter: {},
            to_replace: 'minecraft:egg',
            replace_with: '#c:eggs'
        },
        {
            filter: [{ mod: 'actuallyadditions' }],
            to_replace: '#c:cobblestones',
            replace_with: 'minecraft:tuff'
        },
        {
            filter: {},
            to_replace: 'create:dough',
            replace_with: '#c:doughs/wheat'
        },
        {
            filter: { output: 'create:purple_seat' },
            to_replace: 'minecraft:purple_wool',
            replace_with: Ingredient.of(['minecraft:purple_wool', 'ars_nouveau:magebloom_block'])
        },
        {
            filter: [{ output: /modern_industrialization:(item|fluid)_pipe/ }],
            to_replace: 'minecraft:water_bucket',
            replace_with: '#ae2:can_remove_color'
        },
        {
            filter: {},
            to_replace: `extended_industrialization:silver_curved_plate`,
            replace_with: `#c:ingots/silver`
        },
        {
            filter: [{ input: `industrialforegoing:machine_frame_pity` }],
            to_replace: '#c:plates/plastic',
            replace_with: 'actuallyadditions:enori_crystal'
        },
        {
            filter: [{ mod: 'industrialforegoing' }],
            to_replace: `minecraft:iron_axe`,
            replace_with: 'aether:holystone_axe'
        },
        {
            filter: [{ mod: 'industrialforegoing' }],
            to_replace: `minecraft:iron_shovel`,
            replace_with: 'aether:holystone_shovel'
        },
        {
            filter: [{ mod: 'industrialforegoing' }],
            to_replace: `minecraft:iron_hoe`,
            replace_with: 'aether:holystone_hoe'
        },
        {
            filter: [{ mod: 'industrialforegoing' }],
            to_replace: `minecraft:iron_sword`,
            replace_with: 'aether:holystone_sword'
        },
        {
            filter: [{ mod: 'industrialforegoing' }],
            to_replace: `minecraft:iron_pickaxe`,
            replace_with: 'aether:holystone_pickaxe'
        },
        {
            filter: [{ mod: 'oritech' }],
            to_replace: `oritech:pulverizer_block`,
            replace_with: 'oritech:flux_gate'
        },

        {
            filter: {},
            to_replace: `modern_industrialization:tin_cable`,
            replace_with: `modern_industrialization:copper_cable`
        },
        {
            filter: {},
            to_replace: `modern_industrialization:electrum_cable`,
            replace_with: `modern_industrialization:conductive_cable`
        },
        {
            filter: {},
            to_replace: `modern_industrialization:aluminum_cable`,
            replace_with: `modern_industrialization:energetic_cable`
        },
        {
            filter: {},
            to_replace: `modern_industrialization:annealed_copper_cable`,
            replace_with: `modern_industrialization:vibrant_cable`
        },
        {
            filter: [{ mod: 'extended_industrialization' }],
            to_replace: `modern_industrialization:basic_machine_hull`,
            replace_with: `modern_industrialization:bronze_machine_casing`
        },
        {
            filter: [
                { output: /modern_industrialization:(bronze|steel|advanced|turbo|highly_advanced)_fluid_.*_hatch/ }
            ],
            to_replace: /modern_industrialization:.*_tank/,
            replace_with: `utilitarian:fluid_hopper`
        },
        {
            filter: [{ output: 'extended_industrialization:universal_transformer' }],
            to_replace: 'modern_industrialization:basic_machine_hull',
            replace_with: `modern_industrialization:bronze_machine_casing`
        },
        {
            filter: {},
            to_replace: `oritech:motor`,
            replace_with: `modern_industrialization:motor`
        },
        {
            filter: [{ id: 'justdirethings:portalgun' }],
            to_replace: `minecraft:ender_eye`,
            replace_with: '#c:gems/pulsating_crystal'
        },
        {
            filter: [
                { id: 'ars_nouveau:relay' },
                { id: 'ars_nouveau:redstone_relay' },
                { id: 'ars_nouveau:basic_spell_turret' }
            ],
            to_replace: `#c:ingots/gold`,
            replace_with: `#c:ingots/hallowed_gold`
        },
        {
            filter: [{ mod: 'naturesaura' }],
            to_replace: `#c:ingots/tainted_gold`,
            replace_with: `#c:ingots/hallowed_gold`
        },
        {
            filter: [{ mod: 'naturesaura' }],
            to_replace: `#c:storage_blocks/tainted_gold`,
            replace_with: `#c:storage_blocks/hallowed_gold`
        },
        {
            filter: [{ mod: 'naturesaura' }],
            to_replace: `naturesaura:token_fear`,
            replace_with: `#c:essences/earth`
        },
        {
            filter: [{ mod: 'naturesaura' }],
            to_replace: `naturesaura:token_joy`,
            replace_with: `#c:essences/air`
        },
        {
            filter: [{ mod: 'naturesaura' }],
            to_replace: `naturesaura:token_sorrow`,
            replace_with: `#c:essences/water`
        },
        {
            filter: [{ mod: 'naturesaura' }],
            to_replace: `naturesaura:token_anger`,
            replace_with: `#c:essences/fire`
        },
        {
            filter: [{ mod: 'naturesaura' }],
            to_replace: `minecraft:peony`,
            replace_with: `#minecraft:flowers`
        },
        {
            filter: [{ mod: 'naturesaura' }],
            to_replace: `naturesaura:token_euphoria`,
            replace_with: `naturesaura:token_joy`
        },
        {
            filter: [{ mod: 'naturesaura' }],
            to_replace: `naturesaura:token_terror`,
            replace_with: `naturesaura:token_fear`
        },
        {
            filter: [{ mod: 'naturesaura' }],
            to_replace: `naturesaura:token_rage`,
            replace_with: `naturesaura:token_anger`
        },
        {
            filter: [{ mod: 'naturesaura' }],
            to_replace: `naturesaura:token_grief`,
            replace_with: `naturesaura:token_sorrow`
        },
        {
            filter: [
                { id: 'farmersdelight:cutting_board' },
                { id: /functionalstorage:fluid/ },
                { id: 'create:crafting/kinetics/cogwheel' },
                { id: 'create:crafting/kinetics/large_cogwheel_from_little' },
                { id: 'create:crafting/kinetics/water_wheel' },
                { id: 'create:crafting/kinetics/large_water_wheel' },
                { id: 'cold_sweat:sewing_table' },
                { mod: 'framedblocks' }
            ],
            to_replace: `#minecraft:planks`,
            replace_with: `#enigmatica:planks`
        },
        {
            filter: [
                { id: 'farmersdelight:cutting_board' },
                { mod: 'crafting_on_a_stick' },
                { mod: 'framedblocks' },
                { mod: 'handcrafted' },
                { mod: 'arts_and_crafts' },
                { id: /^mcw.*:/ }
            ],
            to_replace: `minecraft:stick`,
            replace_with: `#c:rods/wooden`
        },
        {
            filter: [{ id: /^mcw.*:/ }, { mod: 'betterblockz' }],
            to_replace: `minecraft:glass`,
            replace_with: `#c:glass_blocks/colorless`
        },
        {
            filter: [{ mod: 'pneumaticcraft' }],
            to_replace: `pneumaticcraft:upgrade_matrix`,
            replace_with: 'pneumaticcraft:upgrade_matrix'
        },
        {
            filter: [{ mod: 'ae2' }, { mod: 'ae2importexportcard' }, { mod: 'merequester' }, { mod: 'ae2netanalyser' }],
            to_replace: `#c:ingots/iron`,
            replace_with: `#c:ingots/compressed_iron`
        },
        {
            filter: [{ mod: 'ae2' }, { mod: 'ae2importexportcard' }, { mod: 'merequester' }, { mod: 'ae2netanalyser' }],
            to_replace: `#c:gems/certus_quartz`,
            replace_with: `ae2:charged_certus_quartz_crystal`
        },
        {
            filter: [{ mod: 'ae2' }, { mod: 'ae2importexportcard' }, { mod: 'merequester' }, { mod: 'ae2netanalyser' }],
            to_replace: `#c:gems/diamond`,
            replace_with: `#c:ingots/pulsating_alloy`
        },
        {
            filter: [{ mod: 'ae2' }],
            to_replace: `minecraft:piston`,
            replace_with: `modern_industrialization:piston`
        },
        {
            filter: [
                { output: 'ae2:terminal' },
                { output: 'merequester:requester_terminal' },
                { output: 'ae2:network_tool' },
                { output: 'ae2:storage_monitor' },
                { output: 'ae2:pattern_access_terminal' }
            ],
            to_replace: `#ae2:illuminated_panel`,
            replace_with: `ae2:semi_dark_monitor`
        },
        {
            filter: [{ output: 'ae2:pattern_provider' }],
            to_replace: `minecraft:crafting_table`,
            replace_with: `modern_industrialization:robot_arm`
        },
        {
            filter: [{ output: /ae2:cell_component/ }],
            to_replace: `#c:dusts/redstone`,
            replace_with: `#c:gems/mnemonic_fragment`
        },
        {
            filter: [{ output: /ae2:cell_component/ }, { output: /ae2:spatial_cell_component/ }],
            to_replace: `#c:dusts/glowstone`,
            replace_with: `#c:gems/pulsating_crystal`
        },
        {
            filter: [{ output: /ae2:cell_component/ }],
            to_replace: `#c:dusts/sky_stone`,
            replace_with: `#c:gems/prescient_crystal`
        },
        {
            filter: [{ output: 'ae2:energy_acceptor' }],
            to_replace: `#c:ingots/copper`,
            replace_with: `oritech:flux_gate`
        },
        {
            filter: [{ output: 'extended_industrialization:tin_can' }],
            to_replace: 'modern_industrialization:tin_curved_plate',
            replace_with: `#c:plates/steel`
        },
        {
            filter: [{ output: 'extended_industrialization:steel_combine' }],
            to_replace: 'modern_industrialization:steel_curved_plate',
            replace_with: `#c:plates/steel`
        },
        {
            filter: {},
            to_replace: 'modern_industrialization:iridium_curved_plate',
            replace_with: `#c:plates/iridium`
        },
        {
            filter: [{ output: /modern_industrialization:.*me_wire/ }],
            to_replace: 'modern_industrialization:bronze_curved_plate',
            replace_with: `#c:ingots/conductive_alloy`
        },
        {
            filter: [{ mod: 'actuallyadditions' }],
            to_replace: `actuallyadditions:single_battery`,
            replace_with: `oritech:basic_battery`
        },
        {
            filter: [{ mod: 'actuallyadditions' }],
            to_replace: `actuallyadditions:double_battery`,
            replace_with: `oritech:basic_battery`
        },
        {
            filter: [{ mod: 'actuallyadditions' }],
            to_replace: `actuallyadditions:triple_battery`,
            replace_with: `oritech:basic_battery`
        },
        {
            filter: [
                { output: 'actuallyadditions:drill_core' },
                { output: 'actuallyadditions:drill_upgrade_three_by_three' },
                { output: 'actuallyadditions:drill_upgrade_block_placing' }
            ],
            to_replace: `actuallyadditions:basic_coil`,
            replace_with: 'create:precision_mechanism'
        },
        {
            filter: [
                { output: 'actuallyadditions:drill_light_blue' },
                { output: 'actuallyadditions:drill_upgrade_five_by_five' },
                { output: 'actuallyadditions:drill_upgrade_silk_touch' },
                { output: 'actuallyadditions:phantom_itemface' }
            ],
            to_replace: `actuallyadditions:advanced_coil`,
            replace_with: 'ars_technica:calibrated_precision_mechanism'
        },
        {
            filter: [{ mod: 'oritech' }],
            to_replace: `oritech:fluid_pipe`,
            replace_with: `ppfluids:fluid_pipe`
        },
        {
            filter: [{ mod: 'oritech' }],
            to_replace: `oritech:machine_plating_block`,
            replace_with: `oritech:machine_plating_block`
        },
        {
            filter: [{ mod: 'oritech' }],
            to_replace: `#c:ingots/nickel`,
            replace_with: '#c:ingots/conductive_alloy'
        },
        {
            filter: [{ mod: 'oritech' }],
            to_replace: `#c:ingots/adamant`,
            replace_with: '#c:gems/celestigem'
        },
        {
            filter: [{ output: /aquaculture:neptunium_/ }],
            to_replace: `#c:rods/wooden`,
            replace_with: 'naturesaura:ancient_stick'
        },
        {
            filter: [{ output: /aquaculture:neptunium_/ }],
            to_replace: `minecraft:string`,
            replace_with: 'ars_nouveau:magebloom_fiber'
        },
        {
            filter: [{ not: { output: 'farmersdelight:milk_bottle' } }],
            to_replace: `minecraft:milk_bucket`,
            replace_with: Ingredient.of(['#c:buckets/milk', '#c:drinks/milk'])
        },
        {
            filter: [{ output: 'farmersdelight:milk_bottle' }],
            to_replace: `minecraft:milk_bucket`,
            replace_with: '#c:buckets/milk'
        },
        {
            filter: [{ id: 'ars_nouveau:ritual_harvest' }],
            to_replace: `minecraft:iron_hoe`,
            replace_with: 'naturesaura:infused_iron_hoe'
        },
        {
            filter: [{ id: 'ars_nouveau:ritual_harvest' }],
            to_replace: `#c:storage_blocks/iron`,
            replace_with: `#c:storage_blocks/enori`
        },
        {
            filter: [{ id: 'pneumaticcraft:dispenser_upgrade' }],
            to_replace: `minecraft:dispenser`,
            replace_with: 'pneumaticcraft:cannon_barrel'
        },
        {
            filter: [
                { id: 'naturesaura:placer' },
                { id: 'prettypipes:random_sorting_modifier' },
                { id: 'modularrouters:activator_module' }
            ],
            to_replace: `minecraft:dispenser`,
            replace_with: '#c:essences/manipulation'
        },
        {
            filter: [{ id: 'modularrouters:player_module' }],
            to_replace: `minecraft:wither_skeleton_skull`,
            replace_with: 'actuallyadditions:player_interface'
        },
        {
            filter: [{ id: 'modularrouters:placer_module' }],
            to_replace: `minecraft:dispenser`,
            replace_with: 'actuallyadditions:placer'
        },
        {
            filter: [{ id: 'modularrouters:placer_module' }],
            to_replace: `minecraft:dirt`,
            replace_with: 'aether:holystone'
        },
        {
            filter: [{ id: 'justdirethings:playeraccessor' }],
            to_replace: `minecraft:dispenser`,
            replace_with: 'actuallyadditions:ender_casing'
        },
        {
            filter: [{ id: 'glassential:glass_ethereal' }, { id: 'glassential:glass_dark_ethereal' }],
            to_replace: `minecraft:ender_eye`,
            replace_with: '#c:essences/air'
        },
        {
            filter: [
                { id: 'functionalstorage:void_upgrade' },
                { id: 'sophisticatedstorage:void_upgrade' },
                { id: 'sophisticatedbackpacks:void_upgrade' }
            ],
            to_replace: `minecraft:obsidian`,
            replace_with: '#c:gems/void'
        },
        {
            filter: [{ mod: 'functionalstorage' }],
            to_replace: `minecraft:oak_planks`,
            replace_with: Ingredient.of([
                'aether:skyroot_planks',
                'ars_nouveau:archwood_planks',
                'arts_and_crafts:cork_planks',
                'malum:runewood_planks',
                'malum:soulwood_planks',
                'minecraft:bamboo_planks',
                'minecraft:cherry_planks',
                'minecraft:crimson_planks',
                'minecraft:oak_planks',
                'minecraft:warped_planks',
                'naturesaura:ancient_planks',
                'occultism:otherplanks'
            ])
        },
        {
            filter: [{ output: 'sophisticatedstorage:storage_link' }],
            to_replace: `minecraft:ender_pearl`,
            replace_with: 'create:transmitter'
        },
        {
            filter: [{ mod: 'enderio' }],
            to_replace: '#c:gears/iron',
            replace_with: '#c:gears/compressed_iron'
        },
        {
            filter: [{ mod: 'enderio' }],
            to_replace: 'enderio:suspicious_seed',
            replace_with: '#c:gems/brilliance'
        },
        {
            filter: [{ mod: 'pneumaticcraft' }],
            to_replace: `pneumaticcraft:printed_circuit_board`,
            replace_with: `enderio:z_logic_controller`
        },
        {
            filter: [{ mod: 'pneumaticcraft' }],
            to_replace: `pneumaticcraft:capacitor`,
            replace_with: `enderio:basic_capacitor`
        },
        {
            filter: [{ mod: 'laserio' }],
            to_replace: `laserio:logic_chip`,
            replace_with: `enderio:z_logic_controller`
        },
        {
            filter: [{ mod: 'laserio' }],
            to_replace: `#c:ingots/iron`,
            replace_with: '#c:gems/empowered_enori'
        },
        {
            filter: [{ mod: 'laserio' }],
            to_replace: `#c:dusts/redstone`,
            replace_with: '#c:gems/empowered_restonia'
        },
        {
            filter: [{ mod: 'laserio' }],
            to_replace: `#c:gems/lapis`,
            replace_with: '#c:gems/empowered_palis'
        },
        {
            filter: [{ mod: 'laserio' }],
            to_replace: `#c:ender_pearls`,
            replace_with: '#c:gems/pulsating_crystal'
        },
        {
            filter: [{}],
            to_replace: `the_bumblezone:honey_bucket`,
            replace_with: `#c:buckets/honey`
        },
        {
            filter: [{ mod: 'create_connected' }],
            to_replace: `create_connected:control_chip`,
            replace_with: `ars_technica:calibrated_precision_mechanism`
        },
        {
            filter: [{ id: 'malum:runic_twisted_rock_bricks_wall' }],
            to_replace: `malum:twisted_rock_bricks`,
            replace_with: `malum:runic_twisted_rock_bricks`
        },
        {
            filter: [{ id: 'malum:runic_small_twisted_rock_bricks_wall' }],
            to_replace: `malum:small_twisted_rock_bricks`,
            replace_with: `malum:runic_small_twisted_rock_bricks`
        },
        {
            filter: [{ id: 'malum:runic_tainted_rock_bricks_wall' }],
            to_replace: `malum:tainted_rock_bricks`,
            replace_with: `malum:runic_tainted_rock_bricks`
        },
        {
            filter: [{ id: 'malum:runic_small_tainted_rock_bricks_wall' }],
            to_replace: `malum:small_tainted_rock_bricks`,
            replace_with: `malum:runic_small_tainted_rock_bricks`
        },
        {
            filter: [{ id: 'malum:runic_twisted_rock_tiles_wall' }],
            to_replace: `malum:twisted_rock_tiles`,
            replace_with: `malum:runic_twisted_rock_tiles`
        },
        {
            filter: [{ id: 'malum:runic_tainted_rock_tiles_wall' }],
            to_replace: `malum:tainted_rock_tiles`,
            replace_with: `malum:runic_tainted_rock_tiles`
        },
        {
            filter: [{ id: 'mcwwindows:bamboo_shutter' }],
            to_replace: `minecraft:bamboo`,
            replace_with: `minecraft:bamboo_trapdoor`
        },
        {
            filter: [
                { id: 'sophisticatedstorage:stack_upgrade_tier_1' },
                { id: 'sophisticatedstorage:stack_downgrade_tier_1' },
                { id: 'sophisticatedstorage:stack_downgrade_tier_2' },
                { id: 'sophisticatedstorage:stack_downgrade_tier_3' },
                { id: 'sophisticatedstorage:compacting_upgrade' },
                { id: 'sophisticatedstorage:void_upgrade' },
                { id: 'sophisticatedstorage:hopper_upgrade' },
                { id: 'sophisticatedstorage:compression_upgrade' }
            ],
            to_replace: `sophisticatedstorage:upgrade_base`,
            replace_with: `prettypipes:blank_module`
        }
    ];

    const bolts = [
        'aluminum',
        'bronze',
        'copper',
        'gold',
        'invar',
        'iron',
        'stainless_steel',
        'steel',
        'tin',
        'titanium'
    ];

    bolts.forEach((material) => {
        recipes.push({
            filter: {},
            to_replace: `modern_industrialization:${material}_bolt`,
            replace_with: Ingredient.of([`#c:nuggets/${material}`])
        });
    });

    recipes.forEach((recipe) => {
        event.replaceInput(recipe.filter, recipe.to_replace, recipe.replace_with);
    });
});
