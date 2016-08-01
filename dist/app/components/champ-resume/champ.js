(function () {
    'use strict'

    var champResume = {
        bindings:{
            category: "=",
            id: "="
        },
        controller: champCtrl,
        templateUrl: 'app/components/champ-resume/champ.html'
    }

    
    function champCtrl(lolApi) {
        var champ = this;

        champ.characters =lolApi.get({
            category:champ.category,
            id:champ.id
        })
        console.log(champ.characters)
    }

    angular
        .module('leagueoflegends')
        .component('champResume', champResume)

})();