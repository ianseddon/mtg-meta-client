(function () {
    'use strict';

    angular
        .module('app.shared.api')
        .factory('Format', Format);

    Format.$inject = ['$resource'];

    function Format($resource) {
        return $resource('http://localhost:9000/api/formats/:id');
    }
})();