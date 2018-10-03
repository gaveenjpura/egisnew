app.config(function($routeProvider,$locationProvider, $httpProvider) {

    'use strict';
    $locationProvider.html5Mode({enabled: true});
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8; multipart/form-data';

    $routeProvider
        .when('/', {
            templateUrl: 'app/views/pages/home_page.html'
        })
        .when('/map', {
            templateUrl: 'templates/map.html'
        })
        .when('/about', {
            templateUrl: 'app/views/pages/about_us.html'
        })
        .when('/contact', {
            templateUrl: 'app/views/pages/contact.html'
        })
        .when('/delivery', {
            templateUrl: 'app/views/pages/delivery.html'
        })
        .otherwise({
            redirectTo: '/'
        });
})