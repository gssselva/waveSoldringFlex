angular.module('app').controller('app_details', app_details);
function app_details($scope, app, $localStorage, $ionicPopup) {
    'use strict';
    app.init($scope,function(data){
        console.log("data in details-->"+data.details_list);
        if (!$scope.data) {
            $scope.data = {};
        }
    });
    $scope.displayComments=false;// to display comments data
    $scope.hideDetailsList=false;// to hide all details list
    
    $scope.commentsDisplay = function(item){
        $scope.displayComments = true;
        $scope.hideDetailsList = true;
        
        $scope.data.reason_code = item.ReasonCode;
        $scope.data.comments_data = item.Comments;
    //     var alertPopup = $ionicPopup.alert({
    //      title: 'ReasonCode :'+item.ReasonCode,
    //      template: item.Comments
    //   });

    //   alertPopup.then(function(res) {
    //      // Custom functionality....
    //      var parameter = {'selectedItem': data, 'CompanyCode': companyCode};
    //      app.call('wavesoldering_methods.getDownTimeDetails', parameter);   
    //   });
    };
    
    $scope.closeComments = function(){
        $scope.displayComments = false;
        $scope.hideDetailsList = false;
    };
    
    $scope.goBack = function(){
        var companyCode ="2391";//need to replace static value with localstorage value.
        app.call('wavesoldering_methods.getCompanyByCode', $localStorage.CompanyCode);
    };
    
    $scope.data.searchDeatils ='';
    $scope.customDetailsSearch = function (item) {
        if (!$scope.data.searchDeatils) {
            return true;
        }
        var matched = true;
        $scope.data.searchDeatils.split(' ').forEach(function (token) {
            matched = matched && match(item, escapeRegExp(token));
        });
        return matched;
    };
    
    function escapeRegExp(token) {
        return token.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    }
    
    var match = function (item, val) {
        var regex = new RegExp(val, 'i');
        return item.ReasonDescription.toLowerCase().search(regex) >= 0;//search is made based on ReasonDescription
    };
}