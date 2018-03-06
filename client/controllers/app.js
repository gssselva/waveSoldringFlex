angular.module('app').controller('app', app);
function app($scope, app) {
    'use strict';
     $scope.dashboardCall = function(){
     var comp_code = $localStorage.CompanyCode
     app.call('wavesoldering_methods.getCompanyByCode', comp_code);
 }
}
