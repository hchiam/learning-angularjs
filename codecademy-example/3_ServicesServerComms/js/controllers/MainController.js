app.controller('MainController', ['$scope', 'forecast', function($scope, forecast) {
    forecast.success(function(data) {
        $scope.forecastFiveDay = data;
    });
}]);