app.directive('orderDirective', function ($rootScope) {
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
                animation: google.maps.Animation.BOUNCE
            });
            marker_1.setMap(map);
            var marker_2 = new google.maps.Marker({
                position: new google.maps.LatLng(scope.location.blat, scope.location.blon),
                animation: google.maps.Animation.BOUNCE
            });
            marker_2.setMap(map);
            var marker_3 = new google.maps.Marker({
                position: new google.maps.LatLng(scope.location.clat, scope.location.clon),
                animation: google.maps.Animation.BOUNCE
            });
            marker_3.setMap(map);
            var directionsService = new google.maps.DirectionsService;
            var directionsService2 = new google.maps.DirectionsService;
            var directionsDisplay = new google.maps.DirectionsRenderer({
                map: map,
                polylineOptions: {
                    strokeColor: "blue"
                }
            });
            var directionsDisplay2 = new google.maps.DirectionsRenderer({
                map: map,
                polylineOptions: {
                    strokeColor: "red"
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
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
                if (response.routes.length == 1) {
                    $rootScope.duration = response.routes[0].legs[0].duration.value;
                    $rootScope.$apply();
                    //$rootScope.setDistanceTime_1(response.routes[0].legs[0].distance.text, response.routes[0].legs[0].duration.text);
                }
            });

            directionsService2.route({
                origin: marker_2.position,
                destination: marker_3.position,
                avoidTolls: true,
                avoidHighways: false,
                travelMode: google.maps.TravelMode.DRIVING,
                provideRouteAlternatives: false
            }, function (response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    console.log(response.routes.length);
                    directionsDisplay2.setDirections(response);
                    directionsDisplay2.setRouteIndex(0);
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
                if (response.routes.length == 1) {
                    $rootScope.duration = $rootScope.duration + response.routes[0].legs[0].duration.value;
                    $rootScope.duration = ($rootScope.duration / 3600).toFixed(2);
                    $rootScope.$apply();
                    //$rootScope.setDistanceTime_1(response.routes[0].legs[0].distance.text, response.routes[0].legs[0].duration.text);
                }
            });
        }
    };
});