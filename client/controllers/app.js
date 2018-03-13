angular.module('app').controller('app', app);
function app($scope, app, $localStorage,$ionicPopup) {
    'use strict';
    
     $scope.dashboardCall = function(){
     var comp_code = $localStorage.CompanyCode;
     app.call('wavesoldering_methods.getCompanyByCode', comp_code);
 }
 $scope.log_out = function(){
     var confirmPopup = $ionicPopup.confirm({
             title: 'Logout',
             template: 'Are you sure you want to logout?'
             });
                 
         confirmPopup.then(function(res) {
            if(res) {
                 console.log('yes logout!');
                 app.call('wavesoldering_methods.log_out');
                } else {
                    console.log('no log_out!');
                }
            });
 }
}
