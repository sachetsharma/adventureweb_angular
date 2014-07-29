/**
 * Created by sachet on 7/27/14.
 */
(
    function(angular){
angular.module('adventureWebApp').config(function ($stateProvider) {
       $stateProvider
        .state('listentity', {
            url: "/entity/:entityname",
            templateUrl: "partials/entitydata.html",
            controller: 'entityController'
        })
});
    }
    )(angular);