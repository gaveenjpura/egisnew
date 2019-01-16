app.controller('homeController', function ($scope, categoryService, $location, $uibModal, $rootScope, sessionService, $location) {
    $scope.items = ['item1', 'item2', 'item3'];
    $scope.animationsEnabled = true;
    var $ctrl = this;
    $scope.open = function () {
        $location.path("/purchasing_analysis");
    }
    $scope.category = [];
    var category_name = [];
    loadCategory();
    /*slider**/
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;
    $scope.addSlide = function () {
        var newWidth = 600 + slides.length + 1;
        slides.push({
            image: '//unsplash.it/' + newWidth + '/300',
            text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][slides.length % 4],
            id: currIndex++
        });
    };

    $scope.randomize = function () {
        var indexes = generateIndexesArray();
        assignNewIndexesToSlides(indexes);
    };

    for (var i = 0; i < 4; i++) {
        $scope.addSlide();
    }

    // Randomize logic below

    function assignNewIndexesToSlides(indexes) {
        for (var i = 0, l = slides.length; i < l; i++) {
            slides[i].id = indexes.pop();
        }
    }

    function generateIndexesArray() {
        var indexes = [];
        for (var i = 0; i < currIndex; ++i) {
            indexes[i] = i;
        }
        return shuffle(indexes);
    }

    // http://stackoverflow.com/questions/962802#962890
    function shuffle(array) {
        var tmp, current, top = array.length;

        if (top) {
            while (--top) {
                current = Math.floor(Math.random() * (top + 1));
                tmp = array[current];
                array[current] = array[top];
                array[top] = tmp;
            }
        }

        return array;
    }

    /* end slider */
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

    $scope.goAllCategory = function () {
        $location.path("/all_category");
    }
    $scope.goSingleCategory = function () {
        $location.path("/single_category");
    }
    $scope.goAllProductCategory = function (cat_id, cat_name, cat_image, cat_color) {
        $location.path("/all_product/cat").search({
            category_id: cat_id,
            category_name: cat_name,
            category_image: cat_image,
            category_color: cat_color
        });
    }
    $scope.goAllProduct = function () {
        $location.path("/all_product/all");
    }
    $scope.goSingleProduct = function () {
        $location.path("/single_product");
    }
    $scope.goLocationCategory = function () {
        var user_id = sessionService.getUser();
        if (!user_id) {
            alert("Please first login to system");
        }
        else {
            if (sessionService.getType() == 'buyer' || sessionService.getType() == 'buyer_and_seller') {
                $location.path("/location_category");
            }
            else {
                alert("sellers are not permitted to access");
            }
        }

    }
});