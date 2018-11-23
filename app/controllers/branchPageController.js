app.controller('branchPageController', function ($scope, $rootScope, branchService, sessionService) {
    $scope.show_dis = false;
    $scope.show_map = false;
    $scope.obj = {
        ulat: "",
        ulon: "",
        blat: "",
        blon: ""
    };
    var user_id = sessionService.getUser();

    branchService.getBranchDetails(user_id).then(function (obj) {
        console.log(obj.data);
        $scope.obj.ulat = obj.data.records[0].ulat;
        $scope.obj.ulon = obj.data.records[0].ulon;
        $scope.obj.blat = obj.data.records[0].blat;
        $scope.obj.blon = obj.data.records[0].blon;
        $scope.show_map = true;
    });

    $rootScope.setDistanceTime = function (distance, time) {
        $rootScope.distance = distance;
        $rootScope.time = time;
    }
    $scope.click = function () {
        $scope.show_dis = true;
        $scope.distance = $rootScope.distance;
        $scope.time = $rootScope.time;
    }
});