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
                templateUrl: '/mtg-meta-client/app/components/home/home.tpl.html',
                controller: 'HomeController'
                //title: 'MTG Meta'
            })
            .when('/event/:eventId', {
                templateUrl: '/mtg-meta-client/app/components/event/event.tpl.html',
                controller: 'EventController'
                //title: 'Event'
            })
            .when('/deck/:deckId', {
                templateUrl: '/mtg-meta-client/app/components/deck/deck.tpl.html',
                controller: 'DeckController'
            });

        $locationProvider.html5Mode(true);
    }
})();