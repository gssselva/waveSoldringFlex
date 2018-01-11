angular.module('app').controller('app_details', app_details);
function app_details($scope, app) {
    'use strict';
    app.init($scope);
    var commentsDisplay = function(){
        console.log("comments clicked...");
    }
}