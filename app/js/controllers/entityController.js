/**
 * Created by sachet on 7/27/14.
 */
(
    function(angular){
        angular.module('adventureWebApp.controllers').controller('entityController',['$scope','entityService','$stateParams',function($scope,entityService,$stateParams)
        {
            $scope.entityData = entityService.getEntityData($stateParams.entityname);
        }
        ]);


})(angular);