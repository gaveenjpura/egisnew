app.directive('mapDir', function () {
    return {
        restrict: 'E',
        scope: {
            location: "="
        },
        link: function (scope, element, attrs) {
            scope.changeValue = function (txt) {
                scope.obj.prop = txt;
                alert(scope.obj.prop);
            }
            var mapOptions = {
                zoom: 7,
                center: new google.maps.LatLng(7.0008, 80.7733)
            };
            var map = new google.maps.Map(element[0], mapOptions);
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(scope.location.prop1, scope.location.prop2),
                animation: google.maps.Animation.BOUNCE
            });
            marker.setMap(map);
            google.maps.event.addListener(map, 'click', function (event) {
                //alert(event.latLng.lat());
                marker.setMap(null);
                scope.location.prop1 = event.latLng.lat();
                scope.location.prop2 = event.latLng.lng();
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(scope.location.prop1, scope.location.prop2),
                    animation: google.maps.Animation.BOUNCE
                });
                marker.setMap(map);
            });

        }
    };
});