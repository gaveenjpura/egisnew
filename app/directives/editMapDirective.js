app.directive('mapDir', function () {
    return {
        restrict: 'E',
        scope:{
            location:"="
        },
        link: function (scope, element,attr) {
            console.log(scope.location);
            var mapOptions = {
                zoom: 7,
                center: new google.maps.LatLng(7.0008, 80.7733)
            };
            var map = new google.maps.Map(element[0], mapOptions);
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(scope.location.location.lat, scope.location.location.lng),
                    animation: google.maps.Animation.BOUNCE
                });
                marker.setMap(map);
        }
    };
});