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

    $rootScope.setDistanceTime_3 = function (distance, time,distance_alt_1,time_alt_1,distance_alt_2,time_alt_2) {
        $rootScope.distance = distance;
        $rootScope.time = time;

        $rootScope.distance_alt_1 = distance_alt_1;
        $rootScope.time_alt_1 = time_alt_1;

        $rootScope.distance_alt_2 = distance_alt_2;
        $rootScope.time_alt_2 = time_alt_2;
    }

    $rootScope.setDistanceTime_2 = function (distance, time,distance_alt_1,time_alt_1) {
        $rootScope.distance = distance;
        $rootScope.time = time;

        $rootScope.distance_alt_1 = distance_alt_1;
        $rootScope.time_alt_1 = time_alt_1;

        $rootScope.distance_alt_2 ="";
        $rootScope.time_alt_2 = "";
    }
    $rootScope.setDistanceTime_1 = function (distance, time) {
        $rootScope.distance = distance;
        $rootScope.time = time;

        $rootScope.distance_alt_1 = "";
        $rootScope.time_alt_1 ="";

        $rootScope.distance_alt_2 ="";
        $rootScope.time_alt_2 = "";
    }
    $scope.click = function () {
        $scope.show_dis = true;
        $scope.distance = $rootScope.distance;
        $scope.time = $rootScope.time;

        $scope.distance_alt_1 = $rootScope.distance_alt_1;
        $scope.time_alt_1 = $rootScope.time_alt_1;

        $scope.distance_alt_2 = $rootScope.distance_alt_2;
        $scope.time_alt_2 = $rootScope.time_alt_2;
    }
});