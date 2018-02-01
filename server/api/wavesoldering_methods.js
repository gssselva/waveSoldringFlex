var logger = require('powwow-server-common').logger;
var config = require('../config');
var browser =  require('powwow-server-common').browser;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

exports.getCompanyByCode = function (page,params) {

    var xmlhttp = new XMLHttpRequest();
    //var url = "http://sacnte245.americas.ad.flextronics.com:9094/DashboardByCompanyCode/"+params.CompanyCode;
    var url = "http://sacnte245.americas.ad.flextronics.com:9094/DashboardByCompanyCode/"+params;
    var reqResponse = [];
    
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);

            // for (var i = 0; i < response.length; i++) {
            //     reqResponse[i] = {'CompanyCode': response[i].CompanyCode,'Company':response[i].CompanyNameName,'SiteId':response[i].SiteId,'IsDefaultCompany':response[i].IsDefaultCompany};
            // }
            page.data(function(data) {
                data.dashboard_list = response;
            })
                .screen("dashboard");
        }
    };
    xmlhttp.open("GET", url, false);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send();
}

exports.getDownTimeDetails = function (page,params) {
    
        var xmlhttp = new XMLHttpRequest();
        var url = "http://sacnte245.americas.ad.flextronics.com:9094/DownTimeDetailsByPou/"+params.CompanyCode+"/"+params.selectedItem.ServiceCode;
        var reqResponse = [];
        
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var response = JSON.parse(this.responseText);
    
                // for (var i = 0; i < response.length; i++) {
                //     reqResponse[i] = {'CompanyCode': response[i].CompanyCode,'Company':response[i].CompanyNameName,'SiteId':response[i].SiteId,'IsDefaultCompany':response[i].IsDefaultCompany};
                // }
                page.data(function(data) {
                    data.details_list = response;
                })
                    .screen("details");
            }
        };
        xmlhttp.open("GET", url, false);
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlhttp.send();
    }

    exports.sitePreference = function(page,adid){
        //hardcode adid , need to replace it with local storage later.
        
        var list=[];
        var xmlhttp = new XMLHttpRequest();
        var url = "http://sacnte245.americas.ad.flextronics.com:9094/CompanyByuser/"+adid;
        
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var response = JSON.parse(this.responseText);
                for (var i = 0; i < response.length; i++) {
                    list[i] = {'CompanyCode': response[i].CompanyCode,'Company':response[i].CompanyNameName,'SiteId':response[i].SiteId,'IsDefaultCompany':response[i].IsDefaultCompany};
                }
                page.data(function(data) {
                    data.sitelist = list;
                })
                    .screen("sitepage");
            }
        };
        xmlhttp.open("GET", url, false);
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlhttp.send();      
    } 