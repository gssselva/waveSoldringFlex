angular.module('app').controller('app_sitepage', app_sitepage);
function app_sitepage($scope, app) {
    'use strict';
    app.init($scope);
    $scope.preferedSite = function(item){
        app.call('wavesoldering_methods.getCompanyByCode', item.CompanyCode);
    }
}