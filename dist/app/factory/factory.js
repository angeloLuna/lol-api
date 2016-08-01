(function() {
    'use strict'

    angular
        .module('leagueoflegends')
        .factory('lolApi', lolApi);

        function lolApi($resource) {
            return $resource('https://global.api.pvp.net/api/lol/static-data/lan/v1.2/champion/:id?champData=all&api_key=fea91b02-4fe8-4cf7-917f-dc0152ba80ae')
        }
})();