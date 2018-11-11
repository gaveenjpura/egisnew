app.service('userDetailsService', function ($http) {
    this.getUser = function (user_id) {
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {'user_id': user_id},
            url: 'app/backend/user/getUserDetailsApi.php'
        });
    }
    this.updateUser = function (user_id, add1, add2, add3, lat, lon) {
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {'user_id': user_id, 'add1': add1, 'add2': add2, 'add3': add3, 'lat': lat, 'lon': lon},
            url: 'app/backend/user/updateUserApi.php'
        });
    }
});