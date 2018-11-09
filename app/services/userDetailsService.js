app.service('userDetailsService', function ($http) {
    this.getUser = function (user_id) {
        return $http({
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=UTF-8'},
            data: {'user_id':user_id},
            url: 'app/backend/user/getUserDetailsApi.php'
        });
    }
});