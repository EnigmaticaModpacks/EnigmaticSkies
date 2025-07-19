ServerEvents.tags('item', (event) => {
    let additions = ['#c:tools/knife'];
    event.get('farmersdelight:straw_harvesters').add(additions);
});
