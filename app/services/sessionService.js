app.service("sessionService", function ($timeout) {
    this.user_id = "";
    this.user_type = "";
    this.setUser = function (id, user_types) {
        this.user_id = id;
        this.user_type = user_types;
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
});