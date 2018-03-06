angular.module('app').controller('app', app);
function app($scope, app, $localStorage) {
    'use strict';
    var comp_code = $localStorage.CompanyCode; 
     $scope.dashboardCall = function(){
     
     app.call('wavesoldering_methods.getCompanyByCode', comp_code);
 }
}
