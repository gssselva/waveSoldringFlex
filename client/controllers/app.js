angular.module('app').controller('app', app);
function app($scope, app, $localStorage,$ionicPopup) {
    'use strict';
    app.init($scope,function() {
        if (window.isPlatform && window.isPlatform.powWow() && window.isPlatform.iOS() && window.cordova && window.cordova.plugins) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
        }

       
        if (window.screen && window.screen.orientation) {
            screen.orientation.lock('portrait');
        }
    });
    
     $scope.dashboardCall = function(){
     var comp_code = $localStorage.CompanyCode;
     app.call('wavesoldering_methods.getCompanyByCode', comp_code);
 }

app.loginScreen = 'app.login';
app.loginModel = 'login';
app.loginAction = 'login';
app.loginErrorField = 'errorMessage';
app.loginIsAction = false;

/*screen.orientation.lock('portrait').then(function success() {
    console.log("Successfully locked the orientation");
}, function error(errMsg) {
    console.log("Error locking the orientation :: " + errMsg);
});*/

//  $scope.log_out = function(){
//      var confirmPopup = $ionicPopup.confirm({
//              title: 'Logout',
//              template: 'Are you sure you want to logout?'
//              });
                 
//          confirmPopup.then(function(res) {
//             if(res) {
//                  console.log('yes logout!');
//                  app.call('wavesoldering_methods.log_out');
//                 } else {
//                     console.log('no log_out!');
//                 }
//             });
//  }
}
