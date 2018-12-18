app.config(function ($routeProvider, $locationProvider, $httpProvider) {

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
        .when('/login', {
            templateUrl: 'app/views/pages/login.html'
        })
        .when('/register', {
            templateUrl: 'app/views/pages/register.html'
        })
        .when('/user_profile', {
            templateUrl: 'app/views/pages/user_profile.html'
        })
        .when('/all_category', {
            templateUrl: 'app/views/pages/all_category.html'
        })
        .when('/single_category', {
            templateUrl: 'app/views/pages/single_category.html'
        })
        .when('/all_product/:page', {
            templateUrl: 'app/views/pages/all_product.html'
        })
        .when('/single_product', {
            templateUrl: 'app/views/pages/single_product.html'
        })
        .when('/branch_page', {
            templateUrl: 'app/views/pages/branch_page.html'
        })
        .when('/add_product', {
            templateUrl: 'app/views/pages/add_product.html'
        })
        .when('/location_category', {
            templateUrl: 'app/views/pages/location_category.html'
        })
        .when('/location_product', {
            templateUrl: 'app/views/pages/location_product.html'
        })
        .when('/payment_gateway', {
            templateUrl: 'app/views/pages/payment_gateway.html'
        })
        .when('/category_interest', {
            templateUrl: 'app/views/pages/category_interest.html'
        })
        .otherwise({
            redirectTo: '/'
        });
})