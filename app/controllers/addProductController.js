app.controller('addProductController', function ($scope, categoryService, sessionService, productService, $uibModal) {
    $scope.date_today = new Date();
    $scope.category = [];
    var category_name = [];
    $scope.name = "Select Files to Upload";
    $scope.images = [];
    $scope.display = $scope.images[$scope.images.length - 1];
    $scope.error_msg = "";
    $ctrl = this;
    $scope.open = function (size, parentSelector) {
        var parentElem = parentSelector ?
            angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
        var modalInstance = $uibModal.open({
            animation: $ctrl.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'addProductModal.html',
            controller: 'ModalInstanceCtrl',
            controllerAs: '$ctrl',
            size: size,
            appendTo: parentElem,
            resolve: {
                items: function () {
                    return $ctrl.items;
                }
            }
        });
    }
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
        $scope.cat = $scope.category[$scope.category.length - 1];
    }

    $scope.setImage = function (ix) {
        $scope.display = $scope.images[ix];
    }
    $scope.clearAll = function () {
        $scope.display = '';
        $scope.images = [];
    }
    $scope.upload = function (obj) {
        var elem = obj.target || obj.srcElement;
        var file = elem.files[0];
        var reader = new FileReader();

        reader.onload = function (e) {
            $scope.images[0] = e.target.result;
            $scope.display = e.target.result;
            $scope.$apply();
        }
        reader.readAsDataURL(file);
    }

    function formSubmission() {
        var user_id = sessionService.getUser();
        productService.addProduct($scope.product_name, $scope.product_description, $scope.product_price, $scope.product_qty, $scope.cat_type, $scope.last_date, $scope.display, user_id, $scope.date_today).then(function (obj) {
            console.log(obj);
            $scope.open();
        });
    }

    $scope.formValidation = function () {
        $scope.error_msg = "";
        if (!$scope.product_name || !$scope.product_description || !$scope.product_price || !$scope.product_qty || !$scope.cat || !$scope.last_date || !$scope.display) {
            $scope.error_msg = "Please fill all fields";
        }
        else {
            var cat_type = $scope.category.indexOf($scope.cat);
            $scope.cat_type = cat_type + 1;
            if (cat_type == ($scope.category.length - 1)) {
                $scope.error_msg = "Please select a category";
            }
            else {
                if ($scope.last_date <= new Date()) {
                    $scope.error_msg = "Last day of product listing must not be today or previous day";
                }
                else {
                    formSubmission();
                    clearForm();
                }
            }
        }
    }

    function clearForm() {
        $scope.product_name = "";
        $scope.product_description = "";
        $scope.product_price = "";
        $scope.product_qty = "";
        $scope.last_date = "";
        loadCategory();
    }
});