ServerEvents.tags('item', (event) => {
    let additions = ['malum:sundering_anchor'];

    event.get('enigmatica:enchantable/capturing').add(additions);
});
