app.controller('homeController', function ($scope, categoryService) {
    categoryService.loadCategory().then(function (res) {
        console.log(res);
    });
});