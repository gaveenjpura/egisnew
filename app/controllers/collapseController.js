app.controller('collapseDemoCtrl', function ($scope,$location,sessionService) {
    $scope.isCollapsedUserProfile = false;
    $scope.isCollapsedMod2 = true;
    $scope.isCollapsedMod3 = true;
    $scope.isCollapsedMod4 = true;
    $scope.isCollapsedMod5 = true;
    $scope.isCollapsedMod6 = true;
    $scope.isCollapsedMod7 = true;
    $scope.isCollapsedMod8 = true;
    $scope.viewUpdateProfile = true;
    $scope.is_buyer=false;
    $scope.is_seller=false;
    $scope.is_buyer_and_seller=false;
    if(sessionService.getType()=='buyer'){
        $scope.is_buyer=true;
        $scope.is_seller=false;
        $scope.is_buyer_and_seller=false;
    }
    if(sessionService.getType()=='seller'){
        $scope.is_buyer=false;
        $scope.is_seller=true;
        $scope.is_buyer_and_seller=false;
    }
    if(sessionService.getType()=='buyer_and_seller'){
        $scope.is_buyer=false;
        $scope.is_seller=false;
        $scope.is_buyer_and_seller=true;
    }
    $scope.goBranchPage=function(){
        $location.path("/branch_page");
    }
    $scope.goAddProductPage=function(){
        $location.path("/add_product");
    }
});