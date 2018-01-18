angular.module('app').controller('app_sitepage', app_sitepage);
function app_sitepage($scope, app) {
    'use strict';
    app.init($scope,function(data){
        //app.call('wavesoldering_methods.getCompanyByCode', parameter);
     //console.log("in site init-->"+data);
    });
    var selectedCompany;
    
    $scope.data.searchInput ='';
    $scope.customSearch = function (item) {
        if (!$scope.data.searchInput) {
            return true;
        }
        var matched = true;
        $scope.data.searchInput.split(' ').forEach(function (token) {
            matched = matched && match(item, escapeRegExp(token));
        });
        return matched;
    };
    function escapeRegExp(token) {
        return token.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    }
    var match = function (item, val) {
        var regex = new RegExp(val, 'i');
        return item.Company.toLowerCase().search(regex) >= 0;
    };
    
    $scope.preferedSite = function(item){
        //app.call('wavesoldering_methods.getCompanyByCode', item.CompanyCode);
        selectedCompany = item;
    }
    $scope.defaultSite = function(){
        app.call('wavesoldering_methods.getCompanyByCode', selectedCompany.CompanyCode);
        
    }
}