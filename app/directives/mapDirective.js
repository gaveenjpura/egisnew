app.directive('mapCanvas', function () {
    return {
        restrict: 'E',
        link: function (scope, element) {
            var mapOptions = {
                zoom: 7,
                center: new google.maps.LatLng(7.0008, 80.7733)
            };
            var map = new google.maps.Map(element[0], mapOptions);
            var marker = new google.maps.Marker({
                position: mapOptions.center,
                animation: google.maps.Animation.BOUNCE
            });
            marker.setMap(map);

        }
    };
});