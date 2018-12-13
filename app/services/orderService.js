app.service('orderService', function () {
    this.product_array = [];
    this.total_price = 0;
    this.setDetails = function (product_id, qty, unit_price, name) {
        this.product_array.push({
            product_id: product_id,
            qty: qty,
            unit_price: unit_price,
            name: name,
            total_price: qty * unit_price
        });
        this.total_price = this.total_price + (parseInt(qty) * parseFloat(unit_price));
    }
    this.getTotalPrice = function () {
        return this.total_price;
    }
    this.clearOrder = function () {
        this.product_array = [];
        this.total_price = 0;
    }
    this.getAllDetails = function () {
        return {
            product_array: this.product_array,
            total_price: this.total_price
        };
    }
});