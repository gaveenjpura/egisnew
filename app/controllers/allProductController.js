app.controller("allProductController", function ($scope, categoryService, $location, $routeParams,productBrowseService,sessionService) {
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
    $scope.viewProduct=function(product_id){
        var user_id=sessionService.getUser();
        if(sessionService.getType()=='buyer_and_seller' || sessionService.getType()=='buyer') {
            if (sessionService.getType() == 'buyer_and_seller') {
                productBrowseService.addBrowseDetails(user_id, product_id).then(function (obj) {
                    console.log(obj);
                });
            }
            if (sessionService.getType() == 'buyer') {
                productBrowseService.addBrowseDetails_2(user_id, product_id).then(function (obj) {
                    console.log(obj);
                });
            }
            $location.search({});
            $location.path("/single_product").search({product_id:product_id});
        }
        else{
            alert("please log as a buyer or a buyer & seler");
        }
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
                    $scope.products[i].remain_qty=$scope.products[i].qty-$scope.products[i].purchased_qty;
                }
            });
        }
        else if (param == 'all') {
            $scope.all = true;
            $scope.cat = false;
        }
    }
    $scope.goAllProductCategory = function (cat_id,cat_name,cat_image,cat_color) {
        $location.path("/all_product/cat").search({category_id:cat_id,category_name:cat_name,category_image:cat_image,category_color:cat_color});
    }
});