app.service('productBrowseService', function ($http) {
    this.addBrowseDetails = function (user_id, product_id) {
        var today=new Date();
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {'user_id': user_id,'product_id':product_id,'browse_date':today},
            url: 'app/backend/product/productBrowseApi.php'
        });
    }
    this.addBrowseDetails_2 = function (user_id, product_id) {
        var today=new Date();
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {'user_id': user_id,'product_id':product_id,'browse_date':today},
            url: 'app/backend/product/productBrowseApi2.php'
        });
    }
});