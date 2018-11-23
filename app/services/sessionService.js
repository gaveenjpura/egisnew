app.service("sessionService", function ($timeout) {
    this.user_id = "";
    this.setUser = function (id) {
        user_id = id;
        return $timeout(function() {
            return {
                property:user_id
            };
        }, 1000);
    }
    this.getUser = function () {
        return user_id;
    }
    this.clearUser = function () {
        user_id = "";
    }
});