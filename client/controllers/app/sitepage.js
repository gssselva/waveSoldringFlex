angular.module('app').controller('app_sitepage', app_sitepage);
function app_sitepage($scope, app,$ionicPopup,$localStorage) {
    'use strict';
    app.init($scope,function(data){
    //     var adid ='gssselva';//need to replace static value with localstorage value.
    // app.call('wavesoldering_methods.sitePreference', adid);
     //console.log("in site init-->"+data);
    });
    var selectedCompany;
    
    $scope.data.searchInput ='';
    //$scope.data.errorData ='';
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
        
        var confirmPopup = $ionicPopup.confirm({
             title: 'Default Site',
             template: 'Set this as default site?'
             });
                 
         confirmPopup.then(function(res) {
            if(res) {
                 console.log('yes!');
                 var adid = "gssselva";//hardcoded need to replace with localstorage value.
                 var parameters ={"adid":$localStorage.UserName,
                    "CompanyCode":selectedCompany.CompanyCode};
                     app.call('site_prefered.setPreferedSite', parameters);
                } else {
                    console.log('Not sure!');
                }
            });
            
    }
    // $scope.defaultSite = function(){
    //     //app.call('wavesoldering_methods.getCompanyByCode', selectedCompany.CompanyCode);
    //     var adid = "gssselva";//hardcoded need to replace with localstorage value.
    //     var parameters ={"adid":adid,
    //          "CompanyCode":selectedCompany.CompanyCode};
    //     app.call('wavesoldering_methods.setPreferedSite', parameters);
    // }
}