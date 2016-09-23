app.controller("api", function ($scope, $http) {
    var movieDb = function () {
        return $http({
        method: "GET",
        url: "http://api.themoviedb.org/3/search/movie",
        data: "42b3e60b6636f50062f6d3579100d83f"
    }).then(function mySucces(response) {
        $scope.myWelcome = response.data;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    }

    )};
    
    return {
        movieDb : movieDb
    };
});