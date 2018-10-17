app.controller('homeController', function ($scope, categoryService, $location) {
    $scope.category = [];
    var category_name = [];
    loadCategory();
    var obj = {id: "0", name: "select a category", icon: "0", color: "0", flag: true};
    function loadCategory() {
        categoryService.loadCategory().then(function (res) {
            $scope.category = res.data.records;
            category_name = res.data.records;
            appendcat();

        });
    }

    function appendcat() {
        category_name.push(obj);
        $scope.cat=$scope.category[$scope.category.length-1];
    }

    $scope.goAllCategory = function () {
        $location.path("/all_category");
    }
    $scope.goSingleCategory = function () {
        $location.path("/single_category");
    }
    $scope.goAllProduct=function(){
        $location.path("/all_product");
    }
    $scope.goSingleProduct=function(){
        $location.path("/single_product");
    }
});