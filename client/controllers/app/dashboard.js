angular.module('app').controller('app_dashboard', app_dashboard);
function app_dashboard($scope, app) {
    'use strict';
    app.init($scope,function(){
        var companyCode ="2391";//need to replace static value with localstorage value.
        app.call('wavesoldering_methods.getCompanyByCode', companyCode);
        console.log('data in dashboard-->', $scope.data);
    });
  
    $scope.getDetails = function (data,companyCode) {
     
    var parameter = {'selectedItem': data, 'CompanyCode': companyCode};
    app.call('wavesoldering_methods.getDownTimeDetails', parameter);
    };
}