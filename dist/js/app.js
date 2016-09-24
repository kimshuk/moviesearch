var app = angular.module("app", ["ngRoute"] );

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "viewer/index.html",
            controller: "MainController"
        })
        .when("/query/:movieName", {
            templateUrl: "viewer/movie.html",
            controller: "ApiController"
        })
        .otherwise({
            redirectTo:"/"
        });
});