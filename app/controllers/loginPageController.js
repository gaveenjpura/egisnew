app.controller('loginPageController', function ($scope) {
    $scope.email = "";
    $scope.password = "";
    $scope.loginValidator = function () {
        if ($scope.email.length != 0 && $scope.password.length != 0) {
            alert("filled");
            var email_char_pos = $scope.email.search("@");
            if (email_char_pos <= 0) {
                if (email_char_pos == 0) {
                    alert("not a valid username");
                }
                else {
                    alert("username");
                }
            }
            else {
                var reg_ex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                var email_validity = reg_ex.test($scope.email);
                alert(email_validity);
            }
        }
        else {
            alert("not filled");
        }
    }
});