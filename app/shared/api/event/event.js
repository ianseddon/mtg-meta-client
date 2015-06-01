(function () {
    'use strict';

    angular
        .module('app.shared.api')
        .factory('Event', Event);

    Event.$inject = ['$resource'];

    function Event($resource) {
        return $resource('http://localhost:9000/api/events/:id', {}, {
            decks: {
                method: 'GET',
                url: 'http://localhost:9000/api/events/:id/decks',
                isArray: true
            }
        });
    }
})();