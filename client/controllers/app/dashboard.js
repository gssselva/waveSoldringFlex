angular.module('app').controller('app_dashboard', app_dashboard);
function app_dashboard($scope, app) {
    'use strict';
    app.init($scope);
    $scope.getDetails = function (data,companyCode) {
     console.log("selected item-->"+data);
    //var parameter = {'username': $scope.data.username, 'password': $scope.data.password};
    app.call('wavesoldering_methods.getDownTimeDetails', parameter);
    };
}