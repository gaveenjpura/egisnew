app.controller('registerPageController', function ($scope, $http, $location, phoneValidationService, countryValidationService, registerService, $uibModal, sessionService, reverseGeocodeService) {
    $scope.user_types = ["select user type", "buyer", "seller", "bayer & seller"];
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
    $ctrl = this;
    $scope.open = function (size, parentSelector) {
        var parentElem = parentSelector ?
            angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
        var modalInstance = $uibModal.open({
            animation: $ctrl.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            controllerAs: '$ctrl',
            size: size,
            appendTo: parentElem,
            resolve: {
                items: function () {
                    return $ctrl.items;
                }
            }
        });
    }
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
        var error_msg = {flag: 0};
        $scope.error_msg = "";
        if (($scope.first_name.length == 0) || ($scope.last_name.length == 0) || ($scope.dob.length == 0) ||
            (!$scope.display) || ($scope.phone_number.length == 0) || ($scope.email.length == 0) || ($scope.add_line_1.length == 0) ||
            ($scope.add_line_2.length == 0) || ($scope.add_line_3.length == 0) || ($scope.username.length == 0) ||
            ($scope.password.length == 0) || ($scope.confirm_password.length == 0) || ($scope.user == $scope.user_types[0])) {
            $scope.error_msg = "fill all fields";
            error_msg.flag = 1;
        }
        else {
            var reg_ex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var email_validity = reg_ex.test($scope.email);
            if (!email_validity) {
                $scope.error_msg = "invalid email";
                error_msg.flag = 1;
            }
            else {
                phoneValidationService.validatePhone($scope.phone_number).then(function (obj) {
                    if (obj.data.valid == false) {
                        $scope.error_msg = "invalid phone number";
                        error_msg.flag = 1;
                    }
                    else {
                        var location = {lat: $scope.obj.prop1, lon: $scope.obj.prop2};
                        console.log(location);
                        countryValidationService.validateCountry(location).then(function (res) {
                            if (res.data.error) {
                                $scope.error_msg = "location is not existing in Sri Lanka";
                                error_msg.flag = 1;
                            }
                            else if (res.data.address.CountryCode != "LKA") {
                                $scope.error_msg = "location is not existing in Sri Lanka";
                                error_msg.flag = 1
                            }
                            else {
                                if ($scope.password != $scope.confirm_password) {
                                    $scope.error_msg = "password and confirm password are not matched";
                                    error_msg.flag = 1;
                                }
                                else {
                                    $scope.formSubmission();
                                }
                            }
                        });
                    }
                });
            }
        }
    }
    $scope.formSubmission = function () {
        //$location.path("/user_profile");
        reverseGeocodeService.get($scope.obj).then(function (obj) {
            var gnd_id = obj.data.features[0].attributes.objectid;
            var u_type = $scope.user_types.indexOf($scope.user);
            console.log($scope.display);
            registerService.register($scope.first_name, $scope.last_name, u_type, $scope.dob, $scope.phone_number, $scope.email, $scope.add_line_1, $scope.add_line_2, $scope.add_line_3, $scope.obj.prop1, $scope.obj.prop2, $scope.username, $scope.password, $scope.display,gnd_id).then(function (obj) {
                sessionService.setUser(obj.data.records[0].username).then(function(data){
                    $scope.open();
                    $location.path("/user_profile");
                });

            });
        });
    }
    $scope.name = "Select Files to Upload";
    $scope.images = [];
    $scope.display = $scope.images[$scope.images.length - 1];
    $scope.setImage = function (ix) {
        $scope.display = $scope.images[ix];
    }
    $scope.clearAll = function () {
        $scope.display = '';
        $scope.images = [];
    }
    $scope.upload = function (obj) {
        var elem = obj.target || obj.srcElement;
        var file = elem.files[0];
        var reader = new FileReader();

        reader.onload = function (e) {
            $scope.images[0] = e.target.result;
            $scope.display = e.target.result;
            $scope.$apply();
        }
        reader.readAsDataURL(file);
    }
});