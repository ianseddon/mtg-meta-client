(function () {
    'use strict';

    angular
        .module('app.shared.api')
        .factory('Deck', Deck);

    Deck.$inject = ['$resource'];

    function Deck($resource) {
        return $resource('http://localhost:9000/api/decks/:id', {}, {
            cards: {
                method: 'GET',
                url: 'http://localhost:9000/api/decks/:id/cards',
                isArray: true
            }
        });
    }
})();