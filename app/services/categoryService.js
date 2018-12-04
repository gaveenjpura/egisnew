app.service('categoryService', function ($http) {
    var no=1;
    this.loadCategory = function () {
        return $http({
            method: 'GET',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {'data': no},
            url: 'app/backend/category/categoryApi.php'
        });
    }
    this.loadSingleCategory=function(cat_id){
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {'cat_id':cat_id},
            url: 'app/backend/category/singleCategory/singleCategoryApi.php'
        });
    }
});