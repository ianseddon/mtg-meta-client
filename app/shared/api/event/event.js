(function () {
    'use strict';

    angular
        .module('app.shared.api')
        .factory('Event', Event);

    Event.$inject = ['$resource'];

    function Event($resource) {
        return $resource('https://rocky-mountain-5979.herokuapp.com/api/events/:id', {}, {
            decks: {
                method: 'GET',
                url: 'https://rocky-mountain-5979.herokuapp.com/api/events/:id/decks',
                isArray: true
            }
        });
    }
})();