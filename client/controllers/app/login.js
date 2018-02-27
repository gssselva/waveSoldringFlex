angular.module('app').controller('app_login', app_login);
function app_login($scope, app, $q, $localStorage) {
    'use strict';
    
    app.init($scope,function(data){
    //console.log('data objects in login -->', $scope.data);    
        if (!$scope.data) {
            $scope.data = {};
            
        }
    });
    
    $scope.login = function () {
    var credentials = {"username":$scope.data.username,
             "password":$scope.data.password};
            $localStorage.username = $scope.data.username;
        app.call('login.login', credentials);
    };

 }
