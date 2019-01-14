app.controller('goodTrackingController', function ($scope, $rootScope) {
    $scope.blat = '6.8867';
    $scope.blon = '79.8593';
    $scope.ulat = '7.086337343325419';
    $scope.ulon = '80.76599393025754';
    $scope.obj = {
        blat: $scope.ulat,
        blon: $scope.ulon,
        ulat: $scope.blat,
        ulon: $scope.blon
    };
});