var logger = require('powwow-server-common').logger;
var config = require('../config');
var browser =  require('powwow-server-common').browser;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// exports.loginBasic = function (page, params) {
//     var loadFailed = false;
//     page.onResourceLoad(config.loginURL).then(function (response) {
//         if (response.contentType == null && response.status == null && response.headers.length == 0) {
//             loadFailed = true;
//         }
//     });
	
// 	//onLoadfailure accepts regular Expression to detect error
//     page.onLoadFailure(/about:corlogin/)
//         .data(function (data) {
//             if (loadFailed) {
//                 data.error = "Unable to access " + config.loginURL;
//             } else {
//                 data.error = "Login failed.  Please check your username and password and try again.";
//             }
//             data.username = params.username;
//         })
//         .screen('login');

//     browser.getMainPage().set('settings.userName', params.username, function () {
//         browser.getMainPage().set('settings.password', params.password, function () {
//             browser.getMainPage().open(config.loginURL);
//         });
//     });

// }



exports.login = function (page,params) {
    var xmlhttp = new XMLHttpRequest();
    var url = "http://sacnte245.americas.ad.flextronics.com:9094/api/Authentication/Authentication";
    var reqResponse = [];
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            // for (var i = 0; i < response.length; i++) {
            //     reqResponse[i] = {'name': response[i].name,'email':response[i].email,'phone':response[i].phone,'username':response[i].username,'website':response[i].website};
            // }
        }
    };
    xmlhttp.open("POST", url, false);
    xmlhttp.send(params);

    //Is the below method is used to pass the response to the next page?
    // page.data(function(data) {
    //     data.list = list;
    // })
    //     .screen("result");
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