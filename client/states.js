angular.module('app').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('app', {
        abstract: true,
        controller: 'app',
        templateProvider: function (app) {
            return app.templateProvider('app');
        }
    }).state('app.loginscreen', {
        views: {
            app: {
                controller: 'app_loginscreen',
                templateProvider: function (app) {
                    return app.templateProvider('app.loginscreen');
                }
            }
        }
    }).state('app.menu', {
        views: {
            app: {
                controller: 'app_menu',
                templateProvider: function (app) {
                    return app.templateProvider('app.menu');
                }
            }
        }
    }).state('app.multiselect', {
        views: {
            app: {
                controller: 'app_multiselect',
                templateProvider: function (app) {
                    return app.templateProvider('app.multiselect');
                }
            }
        }
    }).state('app.login', {
        views: {
            app: {
                controller: 'app_login',
                templateProvider: function (app) {
                    return app.templateProvider('app.login');
                }
            }
        }
    }).state('app.sitepage', {
        views: {
            app: {
                controller: 'app_sitepage',
                templateProvider: function (app) {
                    return app.templateProvider('app.sitepage');
                }
            }
        }
    }).state('app.site', {
        views: {
            app: {
                controller: 'app_site',
                templateProvider: function (app) {
                    return app.templateProvider('app.site');
                }
            }
        }
    });
});