angular.module('app').controller('app', app);
function app($scope, app, $localStorage) {
    'use strict';
    $scope.menuItem = function(item){
        if (item == "dashboard") {
            var comp_code = $localStorage.CompanyCode
           app.call('wavesoldering_methods.getCompanyByCode', comp_code);
        } else {
            
        }
     
 }
}
