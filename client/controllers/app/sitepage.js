angular.module('app').controller('app_sitepage', app_sitepage);
function app_sitepage($scope, app) {
    'use strict';
    var selectedCompany;
    app.init($scope);
    $scope.preferedSite = function(item){
        //app.call('wavesoldering_methods.getCompanyByCode', item.CompanyCode);
        selectedCompany = item;
    }
    $scope.defaultSite = function(){
        //app.call('wavesoldering_methods.getCompanyByCode', selectedCompany.CompanyCode);
        
    }
}