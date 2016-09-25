app.controller("MainController", function($scope, api) {
    $scope.searched = false;
    $scope.search = function(movieName) {
        $scope.searched = true;
        
        api.movieDb(movieName).then(function(response) {
            $scope.movieInfo = response.results;          
            console.log(response.results);
        })
    }
    
})