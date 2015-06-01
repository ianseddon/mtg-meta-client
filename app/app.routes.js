(function () {
    'use strict';

    angular
        .module('app')
        .config(routeConfig);

    routeConfig.$inject = ['$routeProvider', '$locationProvider'];

    // Route configuration closure
    function routeConfig($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/app/components/home/home.tpl.html',
                controller: 'HomeController'
                //title: 'MTG Meta'
            })
            .when('/event/:eventId', {
                templateUrl: '/app/components/event/event.tpl.html',
                controller: 'EventController'
                //title: 'Event'
            })
            .when('/deck/:deckId', {
                templateUrl: '/app/components/deck/deck.tpl.html',
                controller: 'DeckController'
            });

        $locationProvider.html5Mode(true);
    }
})();