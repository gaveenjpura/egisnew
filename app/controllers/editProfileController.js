app.controller("editProfileController", function ($scope, sessionService, userDetailsService, countryValidationService, $uibModal, $rootScope) {
    $scope.show_map = false;
    $ctrl = this;
    getUserDetails();

    $scope.editMapClick = function () {
        if ($scope.obj.prop1 != null && $scope.obj.prop2) {
            $scope.show_map = true;
        }
    }

    function getUserDetails() {
        var user_id = sessionService.getUser();
        userDetailsService.getUser(user_id).then(function (obj) {
            $scope.first_name = obj.data.records[0].fname;
            $scope.last_name = obj.data.records[0].lname;
            if (obj.data.records[0].user_type == 1) {
                $scope.type = "Buyer";
            }
            if (obj.data.records[0].user_type == 2) {
                $scope.type = "Seller";
            }
            if (obj.data.records[0].user_type == 3) {
                $scope.type = "Buyer & Seller";
            }
            $scope.dob = obj.data.records[0].dob;
            $scope.phone_number = obj.data.records[0].phone_num;
            $scope.email = obj.data.records[0].email;
            $scope.add1 = obj.data.records[0].add_1;
            $scope.add2 = obj.data.records[0].add_2;
            $scope.add3 = obj.data.records[0].add_3;
            $scope.lat = obj.data.records[0].lat;
            $scope.lon = obj.data.records[0].lon;
            $scope.img_path = "app/backend/" + obj.data.records[0].photo.substr(3);
            $scope.obj = {
                prop1: $scope.lat,
                prop2: $scope.lon
            };
            $rootScope.setProfilePhoto($scope.img_path);
        });
    }

    $scope.open = function (size, parentSelector) {
        var parentElem = parentSelector ?
            angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
        var modalInstance = $uibModal.open({
            animation: $ctrl.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'successModal.html',
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

    function formValidation() {
        var flag = 0;
        $scope.error_msg = "";
        if (!$scope.add1 || !$scope.add2 || !$scope.add3 || !$scope.obj.prop1 || !$scope.obj.prop2) {
            $scope.error_msg = "Any Updatable field must not be empty";
            flag = 1;
        }
        else {
            var location = {lat: $scope.obj.prop1, lon: $scope.obj.prop2};
            countryValidationService.validateCountry(location).then(function (res) {
                if (res.data.error) {
                    $scope.error_msg = "location is not existing in Sri Lanka";
                    flag = 1;
                }
                else if (res.data.address.CountryCode != "LKA") {
                    $scope.error_msg = "location is not existing in Sri Lanka";
                    flag = 1;
                }
                else {
                    var user_id = sessionService.getUser();
                    console.log(user_id);
                    userDetailsService.updateUser(user_id, $scope.add1, $scope.add2, $scope.add3, $scope.obj.prop1, $scope.obj.prop2).then(function (obj) {
                        console.log(obj.data.records[0].response);
                        if (obj.data.records[0].response == 'success') {
                            $scope.open();
                        }
                    });
                }
            });

        }
    }

    $scope.submit = function () {
        formValidation();
    }
});