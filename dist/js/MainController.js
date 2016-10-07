app.controller("MainController", function($scope, api) {
    $scope.searched = false;        // hides search result area
    $scope.search = function(movieName) {
        $scope.searched = true;     // shows search result area
        
        // brings api call and stores into scope to DOM 
        api.movieDb(movieName).then(function(response) {
            $scope.movieInfo = response.results;          
            console.log(response.results);
        })
    }
    
})

// one thing I want to bring to attention is I set media query to max-width 370px for mobile. However, with chrome inspector, I noticed that the size won't change although I believe my css is correct. I wished I could have verified it before I concluded this.

// if I had more time, I want to implement $watch listener to search bar so the app searches the key word without users having to press the search button.

// also, I would add image fade in using css @keyframes and animation-delay so each child's opacity comes to 1 sequentially.

// I want to make each search results clickable so when the user clicks one poster, it would bring to the center and shows more information like synopsis, and other related info.