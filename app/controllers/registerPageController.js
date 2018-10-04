app.controller('registerPageController', function ($scope,$http){
    $scope.lat="23";
    $http.post("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDbMnH8NLQ-689cNuQyVqrLHLhzAYzu0g4")
        .then(function(response) {
            $scope.myWelcome = response.data;
            $scope.lat=$scope.myWelcome.location.lat;
            $scope.lon=$scope.myWelcome.location.lng;
        });
});