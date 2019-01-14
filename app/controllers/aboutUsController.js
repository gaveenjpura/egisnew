app.controller('aboutUsController', function ($scope) {
    $scope.map = {
        options: {
            basemap: 'satellite',
            center: [80.7733, 7.0008],
            zoom: 8,
            sliderStyle: 'small'
        }
    };
    $scope.url = "https://localhost:6443/arcgis/rest/services/branch/branch/FeatureServer/0";
});