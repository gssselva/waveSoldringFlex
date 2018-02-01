var config = require('../config');
var logger = require('powwow-server-common').logger;
var browser =  require('powwow-server-common').browser;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var internalMethods = require('./wavesoldering_methods.js');

exports.setPreferedSite = function (page,params) {

        var xmlhttp = new XMLHttpRequest();
        var url = "http://sacnte245.americas.ad.flextronics.com:9094/Preference/"+params.CompanyCode+"/"+params.adid;
        var reqResponse = [];
        
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var response = JSON.parse(this.responseText);
                if(response == true){
                    internalMethods.getCompanyByCode(page,params.CompanyCode);
                }else{
                    //if the set default site request fails
                }
            }
        };
        xmlhttp.open("POST", url, false);
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlhttp.send();
    }