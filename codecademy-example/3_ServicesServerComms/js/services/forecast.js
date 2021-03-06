app.factory('forecast', ['$http', function($http) {
    // call a url ("https://...") to get data (".json")
    return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json')
        .success(function(data) {
            return data; // if success
        })
        .error(function(err) {
            return err; // if error
        });
}]);