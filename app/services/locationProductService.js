app.service('locationProductService', function ($http) {
    this.locationGnd = function (cat_id,gnd_id,user_id) {
        return $http({
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=UTF-8'},
            data: {'cat_id':cat_id,'gnd_id':gnd_id,'user_id':user_id},
            url: 'app/backend/product/gndProductApi.php'
        });
    }
    this.locationDsd = function (cat_id,dsd_id,user_id) {
        return $http({
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=UTF-8'},
            data: {'cat_id':cat_id,'dsd_id':dsd_id,'user_id':user_id},
            url: 'app/backend/product/dsdProductApi.php'
        });
    }
    this.locationDistrict = function (cat_id,district_id,user_id) {
        return $http({
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=UTF-8'},
            data: {'cat_id':cat_id,'district_id':district_id,'user_id':user_id},
            url: 'app/backend/product/districtProductApi.php'
        });
    }
    this.locationProvince = function (cat_id,province_id,user_id) {
        return $http({
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=UTF-8'},
            data: {'cat_id':cat_id,'province_id':province_id,'user_id':user_id},
            url: 'app/backend/product/provinceProductApi.php'
        });
    }
});