app.controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', function($scope, $uibModalInstance,items) {
    var $ctrl = this;
    $ctrl.items = items;

    $ctrl.modalOk = function () {
        $uibModalInstance.close();
    };

    $ctrl.modalCancel = function () {
        $uibModalInstance.close();
    };
}
]);