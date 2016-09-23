app.controller("ApiController", function ($scope, $routeParams, api) {
    $scope.title = $routeParams.movieName;
    
    api.movieDb($routeParams.movieName).then(function (response) {
        $scope.movieInfo = response;
    })
});