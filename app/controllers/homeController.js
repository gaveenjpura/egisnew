app.controller('homeController', function ($scope, categoryService) {
    $scope.category = [];
    loadCategory();

    function loadCategory() {
        categoryService.loadCategory().then(function (res) {
            console.log(res.data.records);
            $scope.category = res.data.records;
        });
    }
});