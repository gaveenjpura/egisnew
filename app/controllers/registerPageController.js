app.controller('registerPageController', function ($scope, $http) {
    $scope.show_map = false;
    $scope.obj = {
        prop1:"",
        prop2:""
    };
    $http.post("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDbMnH8NLQ-689cNuQyVqrLHLhzAYzu0g4")
        .then(function (response) {
            $scope.myWelcome = response.data;
            $scope.obj.prop1 = $scope.myWelcome.location.lat;
            $scope.obj.prop2 = $scope.myWelcome.location.lng;
        });
    $scope.editMapClick = function () {
        if ($scope.obj.prop1 != null && $scope.obj.prop2) {
            $scope.show_map = true;
        }
    }
});