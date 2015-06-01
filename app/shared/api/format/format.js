(function () {
    'use strict';

    angular
        .module('app.shared.api')
        .factory('Format', Format);

    Format.$inject = ['$resource'];

    function Format($resource) {
        return $resource('https://rocky-mountain-5979.herokuapp.com/api/formats/:id');
    }
})();