app.controller('singleProductController', function ($scope, productService, $location, $rootScope, sessionService, orderService, $window) {
    $scope.show_map = false;
    $scope.distance = 0;
    $scope.total_price = orderService.getAllDetails().total_price;
    var product_id = $location.search().product_id;
    var client_coordinates = sessionService.getUserCoordinates();
    $scope.viewMap = function () {
        $scope.show_map = true;
    }
    $scope.checkout=function(){
        $location.path("/payment_gateway");
    }
    $scope.total_price = 0;
    $scope.addToCart = function () {
        if($scope.purchasing_qty<=$scope.remain_qty) {
            orderService.setDetails(product_id, $scope.purchasing_qty, $scope.price, $scope.name);
            var obj = orderService.getAllDetails();
            console.log(obj);
            $scope.no_products = obj.product_array.length;
            $scope.total_price = obj.total_price;
        }
        else{
            alert("purchasing quantity must not be lower than available quantity");
        }
    }

    function loadCart() {
        var obj = orderService.getAllDetails();
        console.log(obj.total_price);
        $scope.no_products = obj.product_array.length;
        $scope.total_price = obj.total_price;
        console.log($scope.total_price);
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
        $scope.purchased_qty = obj.data.records[0].purchased_qty;
        $scope.remain_qty=$scope.qty-$scope.purchased_qty;
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
        $scope.no_products = orderService.getAllDetails().product_array.length;
        $scope.total_price = orderService.getTotalPrice();
    });
});