app.directive('mapCanvas', function () {
    return {
        restrict: 'E',
        link: function (scope, element) {
            var mapOptions = {
                zoom: 7,
                center: new google.maps.LatLng(7.0008, 80.7733)
            };
            var map = new google.maps.Map(element[0], mapOptions);
            var branch_locations = [['colombo-4', 6.8867, 79.8593], ['kurunegala', 7.4730, 80.3547], ['kandy', 7.2906, 80.6337], ['galle', 6.0535, 80.2210]];
            for (i = 0; i < branch_locations.length; i++) {
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(branch_locations[i][1], branch_locations[i][2]),
                    animation: google.maps.Animation.BOUNCE
                });
                marker.setMap(map);
            }
        }
    };
});