app.service('locationGraphService',function($http){
    this.graphGndAll=function(gnd_id){
        return $http({
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=UTF-8'},
            data: {'gnd_id':gnd_id},
            url: 'app/backend/category/location/graph/all_count/gnd.php'
        });
    }
    this.graphGndCategory=function(gnd_id,category_id){
        return $http({
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=UTF-8'},
            data: {'gnd_id':gnd_id,'cat_id':category_id},
            url: 'app/backend/category/location/graph/related_category_count/gnd.php'
        });
    }
    this.graphDsdAll=function(dsd_id){
        return $http({
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=UTF-8'},
            data: {'dsd_id':dsd_id},
            url: 'app/backend/category/location/graph/all_count/dsd.php'
        });
    }

    this.graphDsdCategory=function(dsd_id,category_id){
        return $http({
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=UTF-8'},
            data: {'dsd_id':dsd_id,'cat_id':category_id},
            url: 'app/backend/category/location/graph/related_category_count/dsd.php'
        });
    }
    this.graphDistrictAll=function(district_id){
        return $http({
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=UTF-8'},
            data: {'district_id':district_id},
            url: 'app/backend/category/location/graph/all_count/district.php'
        });
    }
    this.graphDistrictCategory=function(district_id,category_id){
        return $http({
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=UTF-8'},
            data: {'district_id':district_id,'cat_id':category_id},
            url: 'app/backend/category/location/graph/related_category_count/district.php'
        });
    }
    this.graphProvinceAll=function(province_id){
        return $http({
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=UTF-8'},
            data: {'province_id':province_id},
            url: 'app/backend/category/location/graph/all_count/province.php'
        });
    }
    this.graphProvinceCategory=function(province_id,category_id){
        return $http({
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=UTF-8'},
            data: {'province_id':province_id,'cat_id':category_id},
            url: 'app/backend/category/location/graph/related_category_count/province.php'
        });
    }

});