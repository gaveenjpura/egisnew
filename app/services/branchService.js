app.service('branchService',function($http){
    this.getBranchDetails=function(user_id){
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {'user_id': user_id},
            url: 'app/backend/user/branchDetailsApi.php'
        });
    }
});