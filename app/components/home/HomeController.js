(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'Format', 'Event'];

    function HomeController($scope, Format, Event) {
        // Load the formats
        $scope.formats = Format.query({}, function (data) {
            // Calculate size of full-width columns
            $scope.formatColSize = 'col-sm-' + Math.floor(12 / ($scope.formats.length + 1));
        });
        // Load the events
        $scope.events = Event.query();

        // The initial search parameters: all events, all formats
        $scope.searchParams = {
            format_id: -1
        };

        // TODO: move to another file
        // Handle filtering of events
        $scope.searchFilter = function (value) {
            // Loop through each key in searchParams
            for(var k in $scope.searchParams) {
                // If it's a property, continue
                if($scope.searchParams.hasOwnProperty(k)) {
                    // If it exists on the filtered object, continue
                    if(value.hasOwnProperty(k)) {
                        // Return comparison or negative value overrides to true
                        return ($scope.searchParams[k] < 0
                        // If we match, return true
                                || $scope.searchParams[k] == value[k])
                    }
                }
            }
            return false;
        };

        // Handle changing the selected format
        $scope.changeFormat = function (id) {
            $scope.searchParams.format_id = id;
        };

        // Get format names from the objects
        $scope.getFormatName = function (id) {
            for(var k in $scope.formats) {
                if($scope.formats.hasOwnProperty(k)) {
                    if($scope.formats[k].id == id) return $scope.formats[k].name;
                }
            }
        };
    }
})();