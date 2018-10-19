app.controller("recentSliderController",function($scope){
    /*slider**/
    $scope.myInterval = 12000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;
    var image_index = 0;
    var images = ["assets/images/products/p4.gif", "assets/images/products/p7.jpg", "assets/images/products/p8.jpg", "assets/images/products/p4.gif","assets/images/products/p7.jpg","assets/images/products/p8.jpg","assets/images/products/p4.gif","assets/images/products/p7.jpg"];
    $scope.addSlide = function() {
        var newWidth = 600 + slides.length + 1;
        slides.push({
            image: images[image_index],
            text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
            id: currIndex++
        });
        image_index = image_index + 1;
    };

    $scope.randomize = function() {
        var indexes = generateIndexesArray();
        assignNewIndexesToSlides(indexes);
    };

    for (var i = 0; i < 8; i++) {
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
});