app.controller('locationCategoryController', function ($scope, sessionService, locationCategoryService, adminBoundaryService,$location) {
    var admin_array=[];
    $scope.gnd_cat=[];
    $scope.dsd_cat=[];
    $scope.district_cat=[];
    $scope.province_cat=[];
    $scope.gnd_name="";
    $scope.dsd_name="";
    initialize();
    function initialize() {
        var user_id = sessionService.getUser();
        adminBoundaryService.getAdminBoundary(user_id).then(function(obj){
            admin_array=obj.data.records;
            console.log(admin_array);
            $scope.gnd_name=admin_array[0].gnd_name;
            $scope.gnd_id=admin_array[0].gnd_id;
            $scope.dsd_name=admin_array[0].dsd_name;
            $scope.dsd_id=admin_array[0].dsd_id;
            $scope.district_name=admin_array[0].district_name;
            $scope.district_id=admin_array[0].district_id;
            $scope.province_name=admin_array[0].province_name;
            $scope.province_id=admin_array[0].province_id;
            locationCategoryService.getGndCategories($scope.gnd_id).then(function(obj){
                $scope.gnd_cat=obj.data.records;
                locationCategoryService.getDsdCategories($scope.dsd_id).then(function (obj){
                    $scope.dsd_cat=obj.data.records;
                    locationCategoryService.getDistrictCategories($scope.district_id).then(function (obj){
                        $scope.district_cat=obj.data.records;
                        locationCategoryService.getProvinceCategories($scope.province_id).then(function(obj){
                            $scope.province_cat=obj.data.records;
                        });
                    });
                });
            });
        });
    }
    $scope.goLocationProduct=function(name,icon,color,cat_array,id,type){
        $location.path("/location_product").search({name:name,icon:icon,color:color,cat_array:cat_array,cat_id:id,cat_type:type,gnd_name:$scope.gnd_name,gnd_id:$scope.gnd_id,dsd_name:$scope.dsd_name,dsd_id:$scope.dsd_id,district_name:$scope.district_name,district_id:$scope.district_id,province_name:$scope.province_name,province_id:$scope.province_id});
    }
});