'use strict';

describe('appController Test', function() {
    beforeEach(module('adventureWebApp'));

	
	var mockService = {

       d: { data: [
            {
                "group": null,
                "name": "AWBuildVersion",
                "location": "/adventureweb/api/AWBuildVersion"
            },
            {
                "group": null,
                "name": "DatabaseLog",
                "location": "/adventureweb/api/DatabaseLog"
            }]
       },
        getEntitiesList: function (){
			return this.d.data;
		}
	}


    it('should return notes array with 2 elements initially',
          inject(function($rootScope, $controller,entityService) {
              var scope = $rootScope.$new();
              var ctrl = $controller("appController", {$scope: scope,entityService:mockService });
              expect(scope.entities.length).toBe(2);
    }));
});


describe('entityController Test', function() {
    beforeEach(module('adventureWebApp'));


    var mockService = {

        d: { data: [
            {
                "group": null,
                "name": "AWBuildVersion",
                "location": "/adventureweb/api/AWBuildVersion"
            },
            {
                "group": null,
                "name": "DatabaseLog",
                "location": "/adventureweb/api/DatabaseLog"
            }]
        },
        getEntityData: function (pEntity){
            this.entity = pEntity;
            return this.d.data;
        }
    }

    var routeParams = {
        entityname : "Employee"
    };


    it('should return notes array with 2 elements initially',
        inject(function($rootScope, $controller,entityService) {
            var scope = $rootScope.$new();
            var ctrl = $controller("entityController", {$scope: scope,entityService:mockService, $stateParams: routeParams });
            expect(scope.entityData.length).toBe(2);
            expect(mockService.entity).toBe("Employee");

        }));
});