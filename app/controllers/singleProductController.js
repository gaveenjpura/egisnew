app.controller('singleProductController', function ($scope, productService, $location, $rootScope, sessionService, orderService, $window) {
    $scope.show_map = false;
    $rootScope.distance = "";
    var product_id = $location.search().product_id;
    var client_coordinates = sessionService.getUserCoordinates();
    $scope.viewMap = function () {
        $scope.show_map = true;
    }
    $scope.total_price=0;
    $scope.addToCart = function () {
        orderService.setDetails(product_id, $scope.purchasing_qty, $scope.price);
        var obj = orderService.getAllDetails();
        console.log(obj);
        $scope.no_products = obj.product_array.length;
        $scope.total_price = $scope.total_price+obj.total_price;
    }
    $scope.goBack = function () {
        $window.history.back();
    }
    productService.getSingleProduct(product_id).then(function (obj) {
        console.log(obj.data.records);
        $scope.image = "app/backend/" + obj.data.records[0].image.substr(3);
        $scope.name = obj.data.records[0].name;
        $scope.description = obj.data.records[0].description;
        $scope.price = obj.data.records[0].price;
        $scope.qty = obj.data.records[0].qty;
        $scope.blat = obj.data.records[0].branch_lat;
        $scope.blon = obj.data.records[0].branch_lon;
        $scope.ulat = obj.data.records[0].user_lat;
        $scope.ulon = obj.data.records[0].user_lon;
        $scope.obj = {
            blat: $scope.blat,
            blon: $scope.blon,
            ulat: $scope.ulat,
            ulon: $scope.ulon,
            clat: client_coordinates.lat,
            clon: client_coordinates.lon
        };
    });
});