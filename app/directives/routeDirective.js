app.directive('mapRoute', function () {
    return {
        restrict: 'E',
        link: function (scope, element) {
            var mapOptions = {
                zoom: 7,
                center: new google.maps.LatLng(7.0008, 80.7733)
            };
            var map = new google.maps.Map(element[0], mapOptions);
            var marker_1 = new google.maps.Marker({
                position: new google.maps.LatLng(6.9271, 79.8612),
                animation: google.maps.Animation.BOUNCE
            });
            marker_1.setMap(map);
            var marker_2 = new google.maps.Marker({
                position: new google.maps.LatLng(7.2906, 80.6337),
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
                console.log("response-"+response.routes[0].legs[0].distance.text);
                console.log("response-"+response.routes[0].legs[0].duration.text);
            });
        }
    };
});