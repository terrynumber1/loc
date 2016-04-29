(function() {

    angular
        .module('app1')
        .controller('locationdetail', locationdetail);


    function locationdetail($scope, $routeParams, service1, $modal) {

        var vm = this;

        $scope.id = $routeParams.id;
        console.log('sdfSDFDSFDFDFDFDFDFDFDFDF');

        // service/service1.js >> readone(inputid){}
        service1.readone($scope.id)
            .success(function(inputdata) {
                // locationdetail.view.html >> {{ data }}
                $scope.data = inputdata;
                console.log($scope.data);
            })
            .error(function(err) {
                console.log('error at service1.readone in locationdetail.controller.js');
        });

        $scope.popupform1 = function() {
            $modal.open({
                templateUrl: '/reviewformmodal/reviewformmodal.view.html', // HTML
                controller: 'reviewformmodal as vm', // functions, data
                resolve: {
                    formdata1: function() {
                        return {
                            id1: $scope.id,
                            name1: $scope.data.name
                        };
                    }
                }
            });


            console.log('===== popupform1 =====');
            console.log($scope.id);
            console.log($scope.data.name);
        };

    }
})();