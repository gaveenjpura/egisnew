app.directive('imageResize', function () {
    return {
        restrict: 'A',
        scope: {
            imageHeight: '@',
            imageWidth: '@',
        },
        link: function (scope, element, attrs) {
            element.bind('load', function () {
                var imageElement = element[0];
                console.log("Image Height:" + imageElement.height);
                console.log("Image Width:" + imageElement.width);
                var imageSizeCSSClass = {};
                imageSizeCSSClass["max-width"] = scope.imageWidth;
                imageSizeCSSClass["max-height"] = scope.imageHeight;
                $(imageElement).css(imageSizeCSSClass);
            });
        }
    };
});