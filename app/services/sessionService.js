app.service("sessionService", function ($timeout) {
    this.user_id = "";
    this.user_type = "";
    this.lat = "";
    this.lon = "";
    this.setUser = function (id, user_types, lat, lon) {
        this.user_id = id;
        if (user_types == 0) {
            this.user_type = 'buyer';
        }
        else if (user_types == 1) {
            this.user_type = 'seller';
        }
        else if (user_types == 2) {
            this.user_type = 'buyer_and_seller';
        }
        else {
            this.user_type = user_types;
        }
        this.lat = lat;
        this.lon = lon;
        return $timeout(function () {
            return {
                property: this.user_id
            };
        }, 1000);
    }
    this.getUser = function () {
        return this.user_id;
    }
    this.getType = function () {
        return this.user_type;
    }
    this.clearUser = function () {
        this.user_id = "";
    }
    this.getUserCoordinates = function () {
        return {
            lat: this.lat,
            lon: this.lon
        };
    }
});