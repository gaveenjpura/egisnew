app.service("sessionService", function () {
    this.user_id = "";
    this.setUser = function (id) {
        user_id = id;
    }
    this.getUser = function () {
        return user_id;
    }
    this.clearUser = function () {
        user_id = "";
    }
});