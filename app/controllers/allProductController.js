app.controller("allProductController", function ($scope, categoryService, $location, $routeParams) {
    $scope.category = [];
    $scope.number = 10;
    $scope.cat = false;
    $scope.all = false;
    var param = $routeParams.page;
    detectPage(param);
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

    function detectPage(param) {
        if (param == 'cat') {
            $scope.cat = true;
            $scope.all = false;
        }
        else if (param == 'all') {
            $scope.all = true;
            $scope.cat = false;
        }
    }
});