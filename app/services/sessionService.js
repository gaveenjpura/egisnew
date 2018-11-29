app.service("sessionService", function ($timeout) {
    this.user_id = "";
    this.user_type = "";
    this.setUser = function (id, user_types) {
        user_id = id;
        user_type = user_types;
        return $timeout(function () {
            return {
                property: user_id
            };
        }, 1000);
    }
    this.getUser = function () {
        return user_id;
    }
    this.getType = function () {
        return user_type;
    }
    this.clearUser = function () {
        user_id = "";
    }
});