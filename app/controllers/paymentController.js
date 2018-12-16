app.controller('paymentController', function ($scope, orderService, paymentService, sessionService) {
    $scope.product_array = [];
    loadProducts();

    function loadProducts() {
        $scope.product_array = orderService.getAllDetails().product_array;
        $scope.total_price = orderService.getAllDetails().total_price;
    }

    $scope.addPayment = function () {
        var user_id = sessionService.getUser();
        var user_type = sessionService.getType();
        paymentService.addPayment($scope.total_price,user_id,user_type,$scope.product_array).then(function(obj){
            console.log(obj.data.records[0].order_id);
            var order_id=obj.data.records[0].order_id;
            for(var i=0;i<$scope.product_array.length;++i){
                paymentService.addOrderDetails(order_id,$scope.product_array[i].product_id,$scope.product_array[i].qty,$scope.product_array[i].total_price).then(function(obj){
                    console.log(obj);
                    alert("order placed successfully");
                });
            }
        });
    }
});