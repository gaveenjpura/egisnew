app.controller('collapseDemoCtrl', function ($scope,$location) {
    $scope.isCollapsedUserProfile = false;
    $scope.isCollapsedMod2 = true;
    $scope.isCollapsedMod3 = true;
    $scope.isCollapsedMod4 = true;
    $scope.isCollapsedMod5 = true;
    $scope.isCollapsedMod6 = true;
    $scope.isCollapsedMod7 = true;
    $scope.isCollapsedMod8 = true;
    $scope.viewUpdateProfile = true;

    $scope.goBranchPage=function(){
        $location.path("/branch_page");
    }
    $scope.goAddProductPage=function(){
        $location.path("/add_product");
    }
});