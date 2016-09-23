app.controller("MainController", function ($scope, $location) {
    $scope.search = function (movieName){
        $location.path("/" + movieName);
    };
})