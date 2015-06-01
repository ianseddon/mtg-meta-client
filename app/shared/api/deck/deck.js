(function () {
    'use strict';

    angular
        .module('app.shared.api')
        .factory('Deck', Deck);

    Deck.$inject = ['$resource'];

    function Deck($resource) {
        return $resource('https://rocky-mountain-5979.herokuapp.com/api/decks/:id', {}, {
            cards: {
                method: 'GET',
                url: 'https://rocky-mountain-5979.herokuapp.com/api/decks/:id/cards',
                isArray: true
            }
        });
    }
})();