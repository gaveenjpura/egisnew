app.controller("allProductController", function ($scope,categoryService) {
    $scope.category = [];
    $scope.number = 10;
    loadCategory();
    $scope.getNum = function (num) {
        return new Array(num);
    }

    function loadCategory() {
        categoryService.loadCategory().then(function (res) {
            $scope.category = res.data.records;
            category_name = res.data.records;
        });
    }
});