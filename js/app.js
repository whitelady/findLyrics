'use strict';

// Declare app level module which depends on views, and components

var app = angular.module('findLyricApp', ['ngRoute','ui.bootstrap']);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/find',
            {
                controller: 'LyricsController',
                templateUrl: '/minisites/findlyrics/partials/find/find.html'
				//templateUrl: '/app/partials/find/find.html'
            })
        //Define a route that has a route parameter in it (:customerID)
       /* .when('/detail/:lyricId/:lyricCheckSum',
            {
                controller: 'LyricsDetailController',
                //templateUrl: '/minisites/findlyrics/partials/detail/detail.html'
				templateUrl: '/app/partials/detail/detail.html'
            })*/
        .otherwise({ redirectTo: '/find' });
});
