var logger = require('powwow-server-common').logger;
var config = require('../config');
var browser =  require('powwow-server-common').browser;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var btoa = require('btoa');
var internalMethods = require('./wavesoldering_methods.js');

exports.login = function (page,params) {
    var xmlhttp = new XMLHttpRequest();
    var url = "http://sacnte245.americas.ad.flextronics.com:9094/Authentication";
    var reqResponse = [];
    var enCredential ={'username':btoa(params.username),'password':btoa(params.password)}
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            // console.log("response-->"+response.IsSuccess);
            // console.log("IsDefaultCompany-->"+response.IsDefaultCompany);
            if (response.IsSuccess == true && +response.IsDefaultCompany == true){
                //valid user with default site preference
            
                internalMethods.getCompanyByCode(page,response.CompanyCode);
            }else if(response.IsSuccess == true && +response.IsDefaultCompany == false){
                //valid user without default site preference
                reqResponse = sitePreference(params.username);
                
                page.data(function(data) {
                    data.sitelist = reqResponse;
                })
                    .screen("sitepage");
                    
            }else if(response.IsSuccess == false && +response.IsDefaultCompany == false){
                //invlaid user
                invalidUser(page,response);
            }
            
            // page.data(function(data) {
            //     data.sitelist = reqResponse;
            // })
            //     .screen("sitepage");
        }
    };
    xmlhttp.open("POST", url, false);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify(enCredential));

}

var sitePreference = function(adid){
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
        }
    };
    xmlhttp.open("GET", url, false);
    // xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send();
    return list;
      }

var invalidUser = function(page,response){
    //logger.error("Invalid User.Please use valid credentials."); 
    //Need to handel invalid user error.now we are using inline text to display error msg.
    page.data(function(data) {
                data.errorMessage = "Invalid User.Try agian...";
            })
                .screen("login");
}

