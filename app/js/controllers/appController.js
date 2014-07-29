/**
 * Created by sachet on 7/27/14.
 */
(
    function(angular){
        angular.module('adventureWebApp.controllers').controller('appController',['$scope','entityService',function($scope,entityService)
        {
            debugger;
            $scope.entities = entityService.getEntitiesList();
        }
        ]);


})(angular);