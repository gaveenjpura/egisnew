app.controller('loginPageController', function ($scope, $location, loginService,sessionService) {
    $scope.email = "";
    $scope.password = "";
    var error_flag = 0;
    $scope.loginValidator = function () {
        error_flag = 0;
        $scope.error_msg = "";
        if ($scope.email.length != 0 && $scope.password.length != 0) {
            //alert("filled");
            var email_char_pos = $scope.email.search("@");
            if (email_char_pos <= 0) {
                if (email_char_pos == 0) {
                    //alert("not a valid username");
                    $scope.error_msg = "Invalid username";
                    error_flag = 1;
                }
            }
            else {
                var reg_ex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                var email_validity = reg_ex.test($scope.email);
                if (!email_validity) {
                    $scope.error_msg = "Invalid email address";
                    error_flag = 1;
                }
            }
        }
        else {
            $scope.error_msg = "Please fill all fields";
            error_flag = 1;
        }
        if (error_flag == 0) {
            //$location.path("/user_profile");
            loginService.checkLogin($scope.email,$scope.password).then(function (obj) {
                if(obj.data.records.length>0){
                    console.log(obj.data.records[0]);
                    sessionService.setUser(obj.data.records[0].user_id,obj.data.records[0].type,obj.data.records[0].lat,obj.data.records[0].lon);
                    $location.path("/user_profile");
                }
                else{
                    $scope.error_msg = "Incorrect username or password";
                }
            });
        }
    }
});