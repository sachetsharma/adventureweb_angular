/**
 * Created by sachet on 7/27/14.
 */
(
    function(angular)
    {
        angular.module('adventureWebApp.services').
            service('entityService',['$http',function($http)
            {
                return  {
                    getEntitiesList : function()
                    {
                        return $http({ method: 'GET', url: 'http://localhost/adventureweb/api/apilist' }).then(function(d){return d.data});
                    },
                    getEntityData: function(pEntity)
                    {
                        return $http({ method: 'GET', url: 'http://localhost/adventureweb/api/entity/' + pEntity }).then(function(d){return d.data});
                    }
                };

                /* require(['services/entityService'],function(entityService){
                 $injector.invoke(entityService,this);
                 //return entityService;
                 });*/
            }]);

    }

    )(angular);