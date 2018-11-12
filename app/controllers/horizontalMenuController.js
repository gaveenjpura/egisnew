app.controller('horizontalMenuController', function ($scope, $rootScope) {
    $scope.login_text = true;
    $scope.profile_photo = false;
    $scope.image__url = "";
    $rootScope.setProfilePhoto = function (url) {
        $scope.image__url = url;
        $scope.login_text = false;
        $scope.profile_photo = true;
    }

});