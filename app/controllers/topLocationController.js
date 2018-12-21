app.controller('topLocationController',function($scope){
    $scope.map = {
        options: {
            basemap: 'satellite',
            center: [80.7733, 7.0008],
            zoom: 8,
            sliderStyle: 'small'
        },
        DefExpression: 'objectid=269'
    };
    $scope.url = "https://localhost:6443/arcgis/rest/services/dsd/dsd_service/FeatureServer/0";
});