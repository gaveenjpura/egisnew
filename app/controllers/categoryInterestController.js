app.controller('categoryInterestController', function ($scope, locationGraphService, $location) {
    $scope.category_id = $location.search().category_id;
    $scope.category_name = $location.search().category_name;
    $scope.gnd_id = $location.search().gnd_id;
    $scope.gnd_name = $location.search().gnd_name;
    $scope.dsd_id = $location.search().dsd_id;
    $scope.dsd_name = $location.search().dsd_name;
    $scope.district_id = $location.search().district_id;
    $scope.district_name = $location.search().district_name;
    $scope.province_id = $location.search().province_id;
    $scope.province_name = $location.search().province_name;
    $scope.province_show = true;
    $scope.district_show = true;
    $scope.dsd_show = true;
    $scope.gnd_show = true;
    $scope.goMapView = function () {
        $location.search({});
        $location.path('/interest_map_view');
    }
    loadGraphs();

    function loadGraphs() {
        locationGraphService.graphProvinceAll($scope.province_id).then(function (obj) {
            $scope.province_all = obj.data.records[0].all_count;
            locationGraphService.graphProvinceCategory($scope.province_id, $scope.category_id).then(function (obj) {
                $scope.province_cat = obj.data.records[0].all_count;
                if ($scope.province_all == 0) {
                    $scope.province_show = false;
                }
                $scope.myJson_province = {
                    type: 'pie',
                    "legend": {},
                    plot: {
                        tooltip: {
                            text: '%t:%v'
                        }
                    },
                    animation: {
                        delay: "10",
                        effect: "2",
                        speed: "2",
                        method: "5",
                        sequence: "1"
                    },
                    series: [
                        {values: [parseInt($scope.province_cat)], text: $scope.category_name},
                        {values: [parseInt($scope.province_all) - parseInt($scope.province_cat)], text: 'others'}
                    ]
                };

                locationGraphService.graphDistrictAll($scope.district_id).then(function (obj) {
                    $scope.district_all = obj.data.records[0].all_count;
                    locationGraphService.graphDistrictCategory($scope.district_id, $scope.category_id).then(function (obj) {
                        $scope.district_cat = obj.data.records[0].all_count;
                        if ($scope.district_all == 0) {
                            $scope.district_show = false;
                        }
                        $scope.myJson_district = {
                            type: 'pie',
                            "legend": {},
                            plot: {
                                tooltip: {
                                    text: '%t:%v'
                                }
                            },
                            animation: {
                                delay: "10",
                                effect: "2",
                                speed: "2",
                                method: "5",
                                sequence: "1"
                            },
                            series: [
                                {values: [parseInt($scope.district_cat)], text: $scope.category_name},
                                {
                                    values: [parseInt($scope.district_all) - parseInt($scope.district_cat)],
                                    text: 'others'
                                }
                            ]
                        };
                        locationGraphService.graphDsdAll($scope.dsd_id).then(function (obj) {
                            $scope.dsd_all = obj.data.records[0].all_count;
                            locationGraphService.graphDsdCategory($scope.dsd_id, $scope.category_id).then(function (obj) {
                                $scope.dsd_cat = obj.data.records[0].all_count;
                                console.log($scope.dsd_all);
                                console.log($scope.dsd_cat);
                                if ($scope.dsd_all == 0) {
                                    $scope.dsd_show = false;
                                }
                                $scope.myJson_dsd = {
                                    type: 'pie',
                                    "legend": {},
                                    plot: {
                                        tooltip: {
                                            text: '%t:%v'
                                        }
                                    },
                                    animation: {
                                        delay: "10",
                                        effect: "2",
                                        speed: "2",
                                        method: "5",
                                        sequence: "1"
                                    },
                                    series: [
                                        {values: [parseInt($scope.dsd_cat)], text: $scope.category_name},
                                        {values: [parseInt($scope.dsd_all) - parseInt($scope.dsd_cat)], text: 'others'}
                                    ]
                                };
                                locationGraphService.graphGndAll($scope.gnd_id).then(function (obj) {
                                    $scope.gnd_all = obj.data.records[0].all_count;
                                    locationGraphService.graphGndCategory($scope.gnd_id, $scope.category_id).then(function (obj) {
                                        $scope.gnd_cat = obj.data.records[0].all_count;
                                        console.log($scope.gnd_all);
                                        console.log($scope.gnd_cat);
                                        if ($scope.gnd_all == 0) {
                                            $scope.gnd_show = false;
                                        }
                                        $scope.myJson_gnd = {
                                            type: 'pie',
                                            "legend": {},
                                            plot: {
                                                tooltip: {
                                                    text: '%t:%v'
                                                }
                                            },
                                            animation: {
                                                delay: "10",
                                                effect: "2",
                                                speed: "2",
                                                method: "5",
                                                sequence: "1"
                                            },
                                            series: [
                                                {values: [parseInt($scope.gnd_cat)], text: $scope.category_name},
                                                {
                                                    values: [parseInt($scope.gnd_all) - parseInt($scope.dsd_cat)],
                                                    text: 'others'
                                                }
                                            ]
                                        };
                                    });
                                });
                            });
                        });
                    });
                });
            });

        });
    }

});