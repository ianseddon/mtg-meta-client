/*
 * The angular app module
 */
(function () {
    'use strict';

    angular
        .module('app', [
            // Angular libraries
            'ngRoute',
            'ngResource',

            'app.components',

            'app.shared.api'
        ]);
})();