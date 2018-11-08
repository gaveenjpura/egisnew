app.service('registerService', function ($http) {
    this.register = function (first_name,last_name,user_type,dob,phone_num,email,add_1,add_2,add_3,lat,lon,username,password,image) {
        return $http({
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=UTF-8'},
            data:{'fname':first_name,'lname':last_name,'type':user_type,'dob':dob,'phone_num':phone_num,'email':email,'add1':add_1,'add2':add_2,'add3':add_3,'lat':lat,'lon':lon,'username':username,'password':password,'image':image},
            url: 'app/backend/user/userRegisterApi.php'
        });
    }
});