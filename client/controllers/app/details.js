angular.module('app').controller('app_details', app_details);
function app_details($scope, app) {
    'use strict';
    app.init($scope);
    $scope.commentsDisplay = function(item){
        console.log("comments clicked...->"+JSON.stringify(item));
    }
    $scope.goBack = function(){
        var companyCode ="2391";//need to replace static value with localstorage value.
        app.call('wavesoldering_methods.getCompanyByCode', companyCode);
    }
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