app.service('locationCategoryService',function($http){
this.getGndCategories=function(gnd_id){
    return $http({
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF-8'},
        data: {'gnd_id':gnd_id},
        url: 'app/backend/category/location/gndCategoryApi.php'
    });
}
this.getDsdCategories=function(dsd_id){
    return $http({
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF-8'},
        data: {'dsd_id':dsd_id},
        url: 'app/backend/category/location/dsdCategoryApi.php'
    });
}
this.getDistrictCategories=function(district_id){
    return $http({
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF-8'},
        data: {'district_id':district_id},
        url: 'app/backend/category/location/districtCategoryApi.php'
    });
}
this.getProvinceCategories=function(province_id){
    return $http({
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF-8'},
        data: {'province_id':province_id},
        url: 'app/backend/category/location/provinceCategoryApi.php'
    });
}
});