var myapp = angular.module('myapp', ["ui.router"])
myapp.config(function ($stateProvider) {
    $stateProvider
    .state('list', {
        url: "/list",
        templateUrl: "partials/entitydata.html",
        resolve: {
            list: function ($http, $stateParams) {
                return $http({ method: 'GET', url: '../api/employees' });
            }

        },
        controller: function ($scope, list) {

            $scope.employee =
                {
                    nationalidnumber: null,
                    loginid: null,
                    organizationNode: null,
                    organizationLevel: null,
                    jobTitle: null,
                    birthdate: null,
                    maritalStatus: null,
                    gender: null,
                    hireDate: null,
                    salariedFlag: null,
                    vacationHours: null,
                    sickLeaveHours: null,
                    currentFlag: null,
                    rowguid: null,

                }

            $scope.entityData = list.data;
        }
    })
})

myapp.controller('appController', ['$scope', '$http', function ($scope, $http) {
    $scope.entities = [];
    $http({ method: 'GET', url: '../api/apilist' }).
    success(function (data, status, headers, config) {
        $scope.entities = data;
    }).
    error(function (data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });

}]);