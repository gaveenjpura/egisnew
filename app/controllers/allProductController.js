app.controller("allProductController", function ($scope, categoryService, $location, $routeParams) {
    $scope.category = [];
    $scope.products = [];
    $scope.number = 10;
    $scope.cat = false;
    $scope.all = false;
    var param = $routeParams.page;
    $scope.category_id = $location.search().category_id;
    $scope.category_name = $location.search().category_name;
    $scope.category_image = $location.search().category_image;
    $scope.category_color = $location.search().category_color;
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
            categoryService.loadSingleCategory($scope.category_id).then(function (obj) {
                $scope.products=obj.data.records;
                for(var i=0;i<$scope.products.length;++i){
                    $scope.products[i].image="app/backend/"+$scope.products[i].image.substr(3);
                }
            });
        }
        else if (param == 'all') {
            $scope.all = true;
            $scope.cat = false;
        }
    }
});