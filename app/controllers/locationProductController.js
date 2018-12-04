app.controller('locationProductController', function ($scope, $location, locationProductService,sessionService) {
    $scope.category = [];
    $scope.category = $location.search().cat_array;
    $scope.category_image = $location.search().icon;
    $scope.category_name = $location.search().name;
    $scope.category_color = $location.search().color;
    $scope.category_type = $location.search().cat_type;
    $scope.category_id = $location.search().cat_id;
    $scope.gnd_id = $location.search().gnd_id;
    $scope.gnd_name = $location.search().gnd_name;
    $scope.dsd_id = $location.search().dsd_id;
    $scope.dsd_name = $location.search().dsd_name;
    $scope.district_id = $location.search().district_id;
    $scope.district_name = $location.search().district_name;
    $scope.province_id = $location.search().province_id;
    $scope.province_name = $location.search().province_name;
    $scope.products = [];

    if ($scope.category_type == 'gnd') {
        $scope.admin_boundary=$scope.gnd_name+" "+"grama niladhari division";
        var user_id=sessionService.getUser();
        locationProductService.locationGnd($scope.category_id, $scope.gnd_id,user_id).then(function (obj) {
            $scope.products=obj.data.records;
            for(var i=0;i<$scope.products.length;++i){
                $scope.products[i].image="app/backend/"+$scope.products[i].image.substr(3);
            }
        });
    }
    if ($scope.category_type == 'dsd') {
        $scope.admin_boundary=$scope.dsd_name+" "+"divisional secretariast division";
        var user_id=sessionService.getUser();
        locationProductService.locationDsd($scope.category_id, $scope.dsd_id,user_id).then(function (obj) {
            $scope.products=obj.data.records;
            for(var i=0;i<$scope.products.length;++i){
                $scope.products[i].image="app/backend/"+$scope.products[i].image.substr(3);
            }
        });
    }
    if ($scope.category_type == 'district') {
        $scope.admin_boundary=$scope.district_name+" "+"district";
        var user_id=sessionService.getUser();
        locationProductService.locationDistrict($scope.category_id, $scope.district_id,user_id).then(function (obj) {
            $scope.products=obj.data.records;
            for(var i=0;i<$scope.products.length;++i){
                $scope.products[i].image="app/backend/"+$scope.products[i].image.substr(3);
            }
        });
    }
    if ($scope.category_type == 'province') {
        $scope.admin_boundary=$scope.province_name+" "+"province";
        var user_id=sessionService.getUser();
        locationProductService.locationProvince($scope.category_id, $scope.province_id,user_id).then(function (obj) {
            $scope.products=obj.data.records;
            console.log($scope.products);
            for(var i=0;i<$scope.products.length;++i){
                $scope.products[i].image="app/backend/"+$scope.products[i].image.substr(3);
            }
        });
    }
});