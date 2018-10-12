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
});