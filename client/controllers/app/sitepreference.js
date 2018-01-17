angular.module('app').controller('app_sitepreference', app_sitepreference);
function app_sitepreference($scope, app) {
    'use strict';
    app.init($scope);
    $scope.isDescending = false;
    $scope.changeIc = true;
    $scope.changeIcon = function () {
        $scope.isDescending = !$scope.isDescending;
        $scope.changeIc = !$scope.changeIc;
    };
    $scope.searchstring = '';
    $scope.customSearch = function (item) {
        if (!$scope.searchstring) {
            return true;
        }
        var matched = true;
        $scope.searchstring.split(' ').forEach(function (token) {
            matched = matched && match(item, escapeRegExp(token));
        });
        return matched;
    };
    function escapeRegExp(token) {
        return token.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    }
    var match = function (item, val) {
        var regex = new RegExp(val, 'i');
        return item.name.toLowerCase().search(regex) >= 0;
    };
    $scope.sortFunc = function (item) {
        if ($scope.sortBy == 'price') {
            return parseFloat(item.price);
        } else {
            return item.name;
        }
    };
}