ServerEvents.tags('item', (event) => {
    event
        .get('the_bumblezone:bee_queen/dedicated_trade_tags/modded/utilitarian_trapped_soliciting_carpets')
        .removeAll();
    event.get('the_bumblezone:bee_queen/dedicated_trade_tags/modded/utilitarian_soliciting_carpets').removeAll();
});
