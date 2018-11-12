app.controller('horizontalMenuController', function ($scope, $rootScope, $location, sessionService) {
    $scope.login_text = true;
    $scope.profile_photo = false;
    $scope.show_logout = false;
    $scope.image__url = "";
    $rootScope.setProfilePhoto = function (url) {
        $scope.image__url = url;
        $scope.login_text = false;
        $scope.profile_photo = true;
        $scope.show_logout = false;
    }
    $scope.goHomePage = function () {
        $scope.profile_photo = false;
        $scope.show_logout = false;
        $scope.login_text = true;
        sessionService.clearUser();
        $location.path("/");
    }
    $scope.clickPhoto = function () {
        if ($scope.show_logout == false) {
            $scope.show_logout = true;
        }
        else {
            $scope.show_logout = false;
        }
    }
});