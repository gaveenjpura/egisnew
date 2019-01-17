app.controller('marketingController',function($scope){
    $scope.map = {
        options: {
            center: [80.7733, 7.0008],
            zoom: 8,
            sliderStyle: 'small'
        }
    };
    $scope.url_dis = "https://localhost:6443/arcgis/rest/services/district_feature/district_feature/FeatureServer/0";
    $scope.url_pro = "https://localhost:6443/arcgis/rest/services/marketing/marketing/FeatureServer/0";
});