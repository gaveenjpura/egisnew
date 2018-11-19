app.service('reverseGeocodeService', function ($http) {
    this.get = function (location) {
        var lon=String(location.prop2);
        var lat=String(location.prop1);
        var comma=",";
        lon=lon.concat(comma);
        lon=lon.concat(lat);
        console.log(lon);
        return $http.get("https://localhost:6443/arcgis/rest/services/egisnew/egisnew/FeatureServer/0/query?where=&objectIds=&time=&geometry="+lon+"&geometryType=esriGeometryPoint&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=objectid&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&gdbVersion=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&multipatchOption=&resultOffset=&resultRecordCount=&f=pjson");
    }
});