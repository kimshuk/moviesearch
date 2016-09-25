// api asynchronous call and returns promise
// stores function to "api"
app.factory("api", function ($http) {
    var movieDb = function (movieName) {
        return $http({
            method: "GET",
            url: "http://api.themoviedb.org/3/search/movie",
            params: {
                api_key: "42b3e60b6636f50062f6d3579100d83f",
                query: movieName
            }
        }).then(function (response) {   // when call was successful, brings json into "response"
            return response.data;   //return promise
        });
    };

    return {
        movieDb: movieDb
    };
});