app.controller('registerPageController', function ($scope, $http, phoneValidationService) {
    $scope.user_types = ["select user type", "buyer", "seller"];
    $scope.user = $scope.user_types[0];
    $scope.show_map = false;
    $scope.obj = {
        prop1: "",
        prop2: ""
    };
    $scope.first_name = "";
    $scope.last_name = "";
    $scope.dob = "";
    $scope.phone_number = "";
    $scope.email = "";
    $scope.add_line_1 = "";
    $scope.add_line_2 = "";
    $scope.add_line_3 = "";
    $scope.username = "";
    $scope.password = "";
    $scope.confirm_password = "";

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
    $scope.formValidation = function () {
        if (($scope.first_name.length == 0) || ($scope.last_name.length == 0) || ($scope.dob.length == 0) ||
            ($scope.phone_number.length == 0) || ($scope.email.length == 0) || ($scope.add_line_1.length == 0) ||
            ($scope.add_line_2.length == 0) || ($scope.add_line_3.length == 0) || ($scope.username.length == 0) ||
            ($scope.password.length == 0) || ($scope.confirm_password.length == 0) || ($scope.user == $scope.user_types[0])) {
            alert("fill all fields");
        }
        else {
            var reg_ex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var email_validity = reg_ex.test($scope.email);
            if (!email_validity) {
                alert("invalid email");
            }
            phoneValidationService.validatePhone($scope.phone_number).then(function (obj) {
                console.log(obj);
            });
        }
    }
});