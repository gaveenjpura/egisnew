app.controller('registerPageController', function ($scope, $http) {
    $scope.show_map = false;
    $scope.test="test";
    $http.post("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDbMnH8NLQ-689cNuQyVqrLHLhzAYzu0g4")
        .then(function (response) {
            $scope.myWelcome = response.data;
            $scope.lat = $scope.myWelcome.location.lat;
            $scope.lon = $scope.myWelcome.location.lng;
            $scope.show_map = true;

        });

});