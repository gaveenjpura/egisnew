app.controller("featureSliderController", function ($scope) {
    /*slider**/
    $scope.myInterval = 12000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;
    var image_index = 0;
    var images = [{image:"assets/images/products/p4.gif",title:"Phm Oils",qty:"12"}, {image:"assets/images/products/p7.jpg",title:"BVC Snacks",qty:"20"}, {image:"assets/images/products/p8.jpg",title:"DELL Laptop",qty:"100"}, {image:"assets/images/products/p4.gif",title:"XZA Oils",qty:"45"},{image:"assets/images/products/p7.jpg",title:"KLZ Biscuits",qty:"60"},{image:"assets/images/products/p8.jpg",title:"HP Laptop",qty:"54"},{image:"assets/images/products/p4.gif",title:"K Oils",qty:"67"},{image:"assets/images/products/p7.jpg",title:"MM Biscuit",qty:"50"}];
    $scope.addSlide = function () {
        slides.push({
            image: images[image_index].image,
            text: images[image_index].title,
            qty:images[image_index].qty,
            id: currIndex++
        });
        image_index = image_index + 1;
    };

    $scope.randomize = function () {
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