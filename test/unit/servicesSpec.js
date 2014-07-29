'use strict';

describe('entityService tests', function (){
  var service;
  var httpBackend;

   beforeEach(module('adventureWebApp'));
    beforeEach(inject(function(entityService,$httpBackend){
        service = entityService;
        httpBackend = $httpBackend;
    }));
  //executed before each "it" is run.

    var mockData = {

         data: [
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

    };
     
  //check to see if it has the expected function
  it('check functions', function () {
    expect(angular.isFunction(service.getEntitiesList)).toBe(true);
    expect(angular.isFunction(service.getEntityData)).toBe(true);
  });
  
  //check to see if it returns 3 notes initially
  it('should return 2 items initially', function (){
    httpBackend.whenGET("http://localhost/adventureweb/api/apilist").respond(mockData);
      service.getEntitiesList().then(function(d){
          expect(d.data).length.toBe(2);
      });
  });



});
