app.directive('mapRoute', function ($rootScope) {
    return {
        restrict: 'E',
        scope:{
            location: "="
        },
        link: function (scope, element,attrs) {
            var mapOptions = {
                zoom: 7,
                center: new google.maps.LatLng(7.0008, 80.7733)
            };
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
            var directionsService = new google.maps.DirectionsService;
            var directionsDisplay = new google.maps.DirectionsRenderer({
                map: map
            });
            directionsService.route({
                origin: marker_1.position,
                destination: marker_2.position,
                avoidTolls: true,
                avoidHighways: false,
                travelMode: google.maps.TravelMode.DRIVING
            }, function (response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
                console.log("response-" + response.routes[0].legs[0].distance.text);
                console.log("response-" + response.routes[0].legs[0].duration.text);
                $rootScope.setDistanceTime(response.routes[0].legs[0].distance.text, response.routes[0].legs[0].duration.text);
            });
        }
    };
});