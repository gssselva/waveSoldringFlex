var logger = require('powwow-server-common').logger;
var config = require('../config');
var browser =  require('powwow-server-common').browser;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

exports.login = function (page,params) {
    var xmlhttp = new XMLHttpRequest();
    var url = "http://sacnte245.americas.ad.flextronics.com:9094/api/Authentication/Authentication";
    var reqResponse = [];
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            console.log("response-->"+response.IsSuccess);
            console.log("IsDefaultCompany-->"+response.IsDefaultCompany);
            if (response.IsSuccess == 'true' && +response.IsDefaultCompany == 'true'){
                //valid user with default site preference
                defaultSitePreference(response.CompanyCode);
            }else if(response.IsSuccess == 'true' && +response.IsDefaultCompany == 'false'){
                //valid user without default site preference
                sitePreference();
            }else if(response.IsSuccess == 'false' && +response.IsDefaultCompany == 'false'){
                //invlaid user
                invalidUser();
            }
            // for (var i = 0; i < response.length; i++) {
            //     reqResponse[i] = {'name': response[i].name,'email':response[i].email,'phone':response[i].phone,'username':response[i].username,'website':response[i].website};
            // }
        }
    };
    xmlhttp.open("POST", url, false);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify(params));

    //Is the below method is used to pass the response to the next page?
    // page.data(function(data) {
    //     data.list = list;
    // })
    //     .screen("result");
}
exports.defaultSitePreference = function(CompanyCode){

}
exports.SitePreference = function(){
    
    }
// exports.resultdetails = function(page, param) {
//     // the details rest call will go here
//     page.data(function(data) {
//         data.sitedetails = 'Name  : ' + param.name;
//         data.username = 'Username : ' + param.username;
//         data.email = 'Email : ' + param.email;
//         data.phone = 'Phone : ' + param.phone;
//         data.website = 'Website :' + param.website;
//     })
//         .screen('details');
// }