angular.module('app').controller('app_dashboard', app_dashboard);
function app_dashboard($scope, app, $ionicPopup, $localStorage) {
    'use strict';
    app.init($scope,function(){
        
        console.log('data in dashboard-->', $scope.data);
    });
    $scope.sitePreference=function(){
      var adid ='gssselva';//need to replace static value with localstorage value.
      app.call('wavesoldering_methods.sitePreference', $localStorage.username);
    };
    $scope.getDetails = function (data,companyCode) {
     $localStorage.CompanyCode = companyCode;
     var parameter = {'selectedItem': data, 'CompanyCode': companyCode};
     if(data.IsStopped === true){
        var alertPopup = $ionicPopup.alert({
         title: 'Warning',
         template: 'No Event Found.'
      });

      alertPopup.then(function(res) {
         // Custom functionality....
      });
      
     }else{
        app.call('wavesoldering_methods.getDownTimeDetails', parameter);   
      }
    };
}