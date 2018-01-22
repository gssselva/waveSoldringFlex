angular.module('app').controller('app_dashboard', app_dashboard);
function app_dashboard($scope, app) {
    'use strict';
    app.init($scope,function(){
        
        console.log('data in dashboard-->', $scope.data);
    });
  
    $scope.getDetails = function (data,companyCode) {
     
    var parameter = {'selectedItem': data, 'CompanyCode': companyCode};
    app.call('wavesoldering_methods.getDownTimeDetails', parameter);
    };
}