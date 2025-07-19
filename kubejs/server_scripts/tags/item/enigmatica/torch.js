ServerEvents.tags('item', (event) => {
    let additions = [
        '#chipped:torch',
        /mcwlights:.*_torch/,
        'mcwbridges:bridge_torch',
        'framedblocks:framed_torch',
        'actuallyadditions:tiny_torch',
        'gravitytorch:mounted_torch'
    ];
    event.get('enigmatica:torch').add(additions);
});
