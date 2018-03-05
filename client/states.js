angular.module('app').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('app', {
        abstract: true,
        controller: 'app',
        templateProvider: function (app) {
            return app.templateProvider('app');
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
    }).state('app.dashboard', {
        views: {
            app: {
                controller: 'app_dashboard',
                templateProvider: function (app) {
                    return app.templateProvider('app.dashboard');
                }
            }
        }
    }).state('app.details', {
        views: {
            app: {
                controller: 'app_details',
                templateProvider: function (app) {
                    return app.templateProvider('app.details');
                }
            }
        }
    }).state('app.comments', {
        views: {
            app: {
                controller: 'app_comments',
                templateProvider: function (app) {
                    return app.templateProvider('app.comments');
                }
            }
        }
    });
});