angular.module('app').controller('app_dashboard', app_dashboard);
function app_dashboard($scope, app) {
    'use strict';
    app.init($scope);
    $scope.getDetails = function (data,companyCode) {
     
    var parameter = {'selectedItem': data, 'companyCode': companyCode};
    app.call('wavesoldering_methods.getDownTimeDetails', parameter);
    };
}