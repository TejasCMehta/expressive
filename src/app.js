/*
 * App module
 */
(function(window, angular, undefined) {
    'use strict';

    angular.module('App', [
        "ngRoute",
        "ngResource",
        "ngCookies",
        "ngMaterial",
        "ngMessages",
        "md.data.table",
        "Expressive",
        "exvTodo",
        "Service",
        "Controller"
    ])

    // Route
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                title: 'Expressive : Introduction',
                templateUrl: '/templates/introduction.html',
                controller: 'IntroductionCtrl'
            })
            .when('/signin', {
                title: 'Expressive : Sign in',
                templateUrl: "/templates/signin.html",
                controller: "SignInCtrl"
            })
            .when('/signup', {
                title: 'Expressive : Sign Up',
                templateUrl: "/templates/signup.html",
                controller: "SignUpCtrl"
            })
            .when('/dashboard', {
                title: 'Expressive : Dashboard',
                templateUrl: '/templates/dashboard.html',
                controller: 'DashboardCtrl'
            })
            .when('/sandbox', {
                title: 'Expressive : Sandbox',
                templateUrl: '/templates/sandbox.html',
                controller: 'SandboxCtrl'
            })
            .when('/chat', {
                title: 'Expressive : Chat',
                templateUrl: '/templates/chat-share.html',
                controller: 'ChatCtrl',
                controllerAs: 'main'
            })
            .when('/to-do', {
                title: 'Expressive : To-Do',
                templateUrl: '/templates/to-do.html',
                controller: 'ToDoCtrl'
            })
            .when('/users', {
                title: 'Expressive : Users',
                templateUrl: '/templates/users.html',
                controller: 'UsersCtrl'
            })
            .when('/groups', {
                title: 'Expressive : Groups',
                templateUrl: '/templates/groups.html',
                controller: 'GroupsCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    })

    // Material Design
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default').primaryPalette('blue').accentPalette('pink');
    });
})(window, angular);
