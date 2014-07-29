var myapp = angular.module('myapp', ["ui.router","ajoslin.promise-tracker"])
myapp.config(function ($stateProvider) {
    $stateProvider
    .state('list', {
        url: "/entity/:entityname",
        templateUrl: "partials/entitydata.html",
        resolve: {
            list: function ($http, $stateParams) {
                return $http({ method: 'GET', url: '../api/entity/' + $stateParams.entityname });
            }

        },
        controller: function ($scope, list) {
            $scope.entityData = list.data;
        }
    }).state('add', {
        url: "/entity/:entityname/add",
        templateUrl: "partials/addProduct.html",
        controller: function ($scope, $http, promiseTracker, $timeout) {

            var product = {
                "ProductID": "1",
                "StandardCost": "0.00",
                "ListPrice": "2.99",
                "ProductModel": null,
                "ProductID": null,
                "Name": null,
                "ProductNumber": null,
                "MakeFlag": false,
                "FinishedGoodsFlag": false,
                "SafetyStockLevel": null,
                "ReorderPoint": null,
                "StandardCost": null,
                "ListPrice": null,
                "DaysToManufacture": null,
                "SellStartDate": null,
                "SellEndDate": null,
                "ModifiedDate": null
            }

            $scope.product = angular.copy(product);

            $scope.submitProduct = function (productForm)
            {
                // Trigger validation flag.
                $scope.submitted = true;
                // If form is invalid, return and let AngularJS show validation errors.
                if (productForm.$invalid) {
                    return;
                }
                $scope.product.ProductID = "1";
                $scope.product.StandardCost = "0.00";
                $scope.product.ListPrice = "2.99",
                $scope.product.ReorderPoint = "100",
                // Default values for the request.
                $scope.progress = promiseTracker('progress');
                var config = {
                    tracker: 'progress'
                };
                // Perform JSONP request.
                $http.post('../api/productapi', $scope.product, config)
                  .success(function (data, status, headers, config) {
                      if (status == 201) {
                          $scope.messages = 'Your form has been sent!';
                          $scope.submitted = false;
                      } else {
                          $scope.messages = 'Oops, we received your request, but there was an error processing it.';
                      }
                  })
                  .error(function (data, status, headers, config) {
                      $scope.progress = data;
                      $scope.messages = 'There was a network error. Try again later.';
                  });

                // Hide the status message which was set above after 3 seconds.
                $timeout(function () {
                    $scope.messages = null;
                }, 3000);
            }
        }
    })
})


myapp.controller('appController', ['$scope', '$http', 'promiseTracker', function ($scope, $http, promiseTracker) {

}]);
