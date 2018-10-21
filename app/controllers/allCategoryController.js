app.controller("allCategoryController", function ($scope, categoryService) {
    $scope.category = [];
    loadCategory();

    function loadCategory() {
        categoryService.loadCategory().then(function (res) {
            $scope.category = res.data.records;
            category_name = res.data.records;
        });
    }
});