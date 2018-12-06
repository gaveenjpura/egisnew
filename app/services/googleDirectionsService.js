app.service('googleDirectionsService', function ($http, $timeout, sessionService) {
    this.products = [];
    var j = 0;
    this.getDirection = function (product) {
        var products = product;
        console.log(products.name);
        console.log(products);
        var origin = products.home_lat + "," + products.home_lon;
        var destination = products.branch_lat + "," + products.branch_lon;
        var directionsService = new google.maps.DirectionsService;
        this.travel_time = "0";
        directionsService.route({
            origin: origin,
            destination: destination,
            avoidTolls: true,
            avoidHighways: false,
            travelMode: google.maps.TravelMode.DRIVING,
            provideRouteAlternatives: false
        }, function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                products.travel_time = response.routes[0].legs[0].duration.value;
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    }
    this.getDirection_2 = function (product) {
        var user_lat = sessionService.getUserCoordinates().lat;
        var user_lon = sessionService.getUserCoordinates().lon;
        var products = product;
        var origin=products.branch_lat + "," + products.branch_lon;
        var destination=user_lat+","+user_lon;
        var directionsService = new google.maps.DirectionsService;
        this.travel_time = "0";
        directionsService.route({
            origin: origin,
            destination: destination,
            avoidTolls: true,
            avoidHighways: false,
            travelMode: google.maps.TravelMode.DRIVING,
            provideRouteAlternatives: false
        }, function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                console.log(response.routes[0].legs[0].duration.value);
                console.log(products.travel_time);
                products.travel_time = products.travel_time+response.routes[0].legs[0].duration.value;
                console.log(products.travel_time);
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });

    }
});