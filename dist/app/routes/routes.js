(function() {
    'use strict'

    angular
        .module('leagueoflegends')
        .config(config);

    function champData(lolApi) {
        return lolApi.query();
    }

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/',{
                template:`<champ-resume id="1"></champ-resume>`
            })
    }


})();