angular.module('app').controller('app_menu', app_menu);
function app_menu($scope, app, $localStorage) {
    'use strict';
    app.init($scope);
    
 $scope.dashboardCall = function(){
     var comp_code = $localStorage.CompanyCode
     app.call('wavesoldering_methods.getCompanyByCode', comp_code);
 }
}
