ServerEvents.tags('geneticsresequenced:gene', (event) => {
    let additions = ['geneticsresequenced:wilden_4', 'geneticsresequenced:saevine', 'geneticsresequenced:chimeric'];

    event.get('geneticsresequenced:mutation').add(additions);
});
