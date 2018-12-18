app.controller('interestMapController', function ($scope) {
    $scope.map = {
        options: {
            basemap: 'topo',
            center: [80.7733, 7.0008],
            zoom: 7,
            sliderStyle: 'small'
        }
    };
});