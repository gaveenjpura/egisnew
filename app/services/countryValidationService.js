app.service('countryValidationService', function ($http) {
    this.validateCountry = function (location) {
        console.log(location.lat);
        return $http.get("http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=pjson&featureTypes=&location="+location.lon+","+location.lat);
    }
});