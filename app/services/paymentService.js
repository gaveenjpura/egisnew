app.service('paymentService', function ($http) {
    this.addPayment = function (total_price, user_id, status, cart_array) {
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {
                'total_price': total_price,
                'user_id': user_id,
                'status': status,
                'cart_array[]': cart_array,
                'date': new Date()
            },
            url: 'app/backend/order/addOrderApi.php'
        });
    }
    this.addOrderDetails = function (order_id, product_id, qty, total_price) {
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {
                'order_id': order_id,
                'product_id': product_id,
                'qty': qty,
                'total_price': total_price
            },
            url: 'app/backend/order/addOrderDetailsApi.php'
        });
    }
});