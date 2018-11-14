app.controller('branchPageController', function ($scope, $rootScope) {
    $scope.show_dis=false;
    $rootScope.setDistanceTime = function (distance, time) {
        $rootScope.distance = distance;
        $rootScope.time = time;
    }
    $scope.click=function(){
        $scope.show_dis=true;
        $scope.distance=$rootScope.distance;
        $scope.time=$rootScope.time;
    }
});