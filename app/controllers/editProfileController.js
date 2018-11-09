app.controller("editProfileController", function ($scope, sessionService, userDetailsService) {

    getUserDetails();

    function getUserDetails() {
        var user_id = sessionService.getUser();
        userDetailsService.getUser(user_id).then(function (obj) {
            $scope.first_name = obj.data.records[0].fname;
            $scope.last_name = obj.data.records[0].lname;
            if (obj.data.records[0].user_type == 1) {
                $scope.type = "Buyer";
            }
            if (obj.data.records[0].user_type == 2) {
                $scope.type = "Seller";
            }
            if (obj.data.records[0].user_type == 3) {
                $scope.type = "Buyer & Seller";
            }
            $scope.dob = obj.data.records[0].dob;
            $scope.phone_number = obj.data.records[0].phone_num;
            $scope.email = obj.data.records[0].email;
            $scope.add1 = obj.data.records[0].add_1;
            $scope.add2 = obj.data.records[0].add_2;
            $scope.add3 = obj.data.records[0].add_3;
            $scope.img_path="app/backend/"+obj.data.records[0].photo.substr(3);
        });
    }
});