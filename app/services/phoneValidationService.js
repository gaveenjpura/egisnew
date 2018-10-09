app.service('phoneValidationService', function ($http) {
    this.validatePhone = function (num) {
        return $http.get("http://apilayer.net/api/validate?access_key=e20e85963d2bb366482638152740f326&number="+num+"&country_code=LK&format=1");
    }
});