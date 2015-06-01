(function () {
    'use strict';

    angular
        .module('app.shared.services')
        .factory('FormatService', FormatService);

    function FormatService() {
        return {
            place: function (place) {
                if(place == 1)
                    return '1st';
                else if(place == 2)
                    return '2nd';
                else if(place < 5)
                    return '3rd - 4th';
                else if(place < 9)
                    return '5th - 8th';
                else if(place < 17)
                    return '9th - 16th';
                else if(place < 33)
                    return '17th - 32nd';
                else if(place < 65)
                    return '33rd - 64th';
                else return '';
            }
        }
    }
})();