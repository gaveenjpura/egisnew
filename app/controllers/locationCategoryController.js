app.controller('locationCategoryController', function ($scope, sessionService, locationCategoryService, adminBoundaryService) {
    var admin_array=[];
    $scope.gnd_name="";
    $scope.dsd_name="";
    initialize();
    function initialize() {
        var user_id = sessionService.getUser();
        adminBoundaryService.getAdminBoundary(user_id).then(function(obj){
            admin_array=obj.data.records;
            console.log(admin_array);
            $scope.gnd_name=admin_array[0].gnd_name;
            $scope.dsd_name=admin_array[0].dsd_name;
            $scope.district_name=admin_array[0].district_name;
            $scope.province_name=admin_array[0].province_name;
        });
    }
});