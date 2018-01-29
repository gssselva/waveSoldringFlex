angular.module('app').controller('app_sitepage', app_sitepage);
function app_sitepage($scope, app,$ionicPopup) {
    'use strict';
    app.init($scope,function(data){
    //     var adid ='gssselva';//need to replace static value with localstorage value.
    // app.call('wavesoldering_methods.sitePreference', adid);
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
        $scope.$ionicPopup.show("sample--");
    }
    $scope.defaultSite = function(){
        //app.call('wavesoldering_methods.getCompanyByCode', selectedCompany.CompanyCode);
        var adid = "gssselva";//hardcoded need to replace with localstorage value.
        var parameters ={"adid":adid,
             "CompanyCode":selectedCompany.CompanyCode};
        app.call('wavesoldering_methods.setPreferedSite', parameters);
    }
}