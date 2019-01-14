app.controller('topLocationController', function ($scope) {
    $scope.map = {
        options: {
            basemap: 'satellite',
            center: [80.7733, 7.0008],
            zoom: 8,
            sliderStyle: 'small'
        },
        DefExpression: 'objectid=269'
    };
    $scope.url_dis = "https://localhost:6443/arcgis/rest/services/district_feature/district_feature/FeatureServer/0";
    $scope.url_pro = "https://localhost:6443/arcgis/rest/services/province_feature/province_feature/FeatureServer/0";
});