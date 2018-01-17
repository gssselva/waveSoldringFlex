angular.module('app').controller('app_dashboard', app_dashboard);
function app_dashboard($scope, app) {
    'use strict';
    app.init($scope,function(){
        //app.call('wavesoldering_methods.getCompanyByCode', parameter);
        console.log('data in login-->', $scope.data);
     console.log("in dash init");
    });
  
    $scope.getDetails = function (data,companyCode) {
     
    var parameter = {'selectedItem': data, 'CompanyCode': companyCode};
    app.call('wavesoldering_methods.getDownTimeDetails', parameter);
    };
}