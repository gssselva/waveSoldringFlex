angular.module('app').controller('app_sitepage', app_sitepage);
function app_sitepage($scope, app) {
    'use strict';
    app.init($scope);
console.log("page-->"+JSON.stringify(app_sitepage.data));
}