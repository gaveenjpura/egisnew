app.directive('trackingDirective', function ($rootScope) {
    return {
        restrict: 'E',
        scope: {
            location: "="
        },
        link: function (scope, element, attrs) {
            var mapOptions = {
                zoom: 7,
                center: new google.maps.LatLng(7.0008, 80.7733)
            };
            $rootScope.duration = 0;
            var map = new google.maps.Map(element[0], mapOptions);
            var marker_1 = new google.maps.Marker({
                position: new google.maps.LatLng(scope.location.ulat, scope.location.ulon),

            });
            marker_1.setMap(map);
            var marker_2 = new google.maps.Marker({
                position: new google.maps.LatLng(scope.location.blat, scope.location.blon),
            });
            marker_2.setMap(map);
            var directionsService = new google.maps.DirectionsService;
            var directionsDisplay = new google.maps.DirectionsRenderer({
                map: map,
                polylineOptions: {
                    strokeColor: "blue"
                }
            });
            directionsService.route({
                origin: marker_1.position,
                destination: marker_2.position,
                avoidTolls: true,
                avoidHighways: false,
                travelMode: google.maps.TravelMode.DRIVING,
                provideRouteAlternatives: false
            }, function (response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    console.log(response.routes.length);
                    directionsDisplay.setDirections(response);
                    directionsDisplay.setRouteIndex(0);
                    directionsDisplay.setOptions({suppressMarkers: true});
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
            });
        }
    };
});