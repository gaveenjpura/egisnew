app.service('loginService', function ($http) {
    this.checkLogin = function (username,password) {
        return $http({
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=UTF-8'},
                data: {'username':username,'password':password},
                url: 'app/backend/login/loginApi.php'
        });
    }
});