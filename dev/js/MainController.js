app.controller("MainController", function($scope, api) {
    $scope.searched = false;
    $scope.search = function(movieName) {
        $scope.searched = true;
        
        api.movieDb(movieName).then(function(response) {
            $scope.movieTitle = response.results[0].title;
            $scope.moviePoster = "http://image.tmdb.org/t/p/w154" + response.results[0].poster_path;
        })
    }
    
})