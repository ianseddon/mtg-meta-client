(function () {
    'using strict';

    angular
        .module('app.components')
        .controller('DeckController', DeckController);

    DeckController.$inject = ['$scope', '$routeParams', 'Deck', 'Event', 'FormatService'];

    function DeckController($scope, $routeParams, Deck, Event, FormatService) {
        // Load the deck info
        $scope.deck = Deck.get({ id: $routeParams.deckId }, function () {
            // Load the event info
            $scope.event = Event.get({ id: $scope.deck.event_id });
        });
        // Load the decklist
        $scope.cards = Deck.cards({ id: $routeParams.deckId });

        // Alias formatPlace
        $scope.formatPlace = FormatService.place;
    }
})();