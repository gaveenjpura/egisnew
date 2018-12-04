app.controller("recentSliderController",function($scope,productService){
    /*slider**/
    $scope.myInterval = 12000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;
    var image_index = 0;
    var images = [];
    productService.recentProduct().then(function(obj){
        images=obj.data.records;
        for(var i=0;i<images.length;++i){
            images[i].image="app/backend/"+images[i].image.substr(3);
        }
        console.log(images);
        for (var k = 0; k < images.length; k++) {
            $scope.addSlide();
        }
    });
    $scope.addSlide = function () {
        slides.push({
            image: images[image_index].image,
            text: images[image_index].title,
            qty:images[image_index].qty,
            id: currIndex++
        });
        image_index = image_index + 1;
    };

    $scope.randomize = function() {
        var indexes = generateIndexesArray();
        assignNewIndexesToSlides(indexes);
    };



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