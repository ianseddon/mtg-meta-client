(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('EventController', EventController);

    EventController.$inject = ['$scope', '$routeParams', 'Deck', 'Event', 'FormatService'];

    function EventController($scope, $routeParams, Deck, Event, FormatService) {
        // Load the event info
        $scope.event = Event.get({ id: $routeParams.eventId })
        // Load the decks
        $scope.decks = Event.decks({ id: $routeParams.eventId });

        // Alias formatPlace
        $scope.formatPlace = FormatService.place;
    }
})();