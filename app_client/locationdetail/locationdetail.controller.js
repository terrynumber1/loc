(function() {

    angular
        .module('app1')
        .controller('locationdetail', locationdetail);


    function locationdetail($scope, $routeParams, service1) {

        $scope.id = $routeParams.id;

        // service/app1service.js >> readone(inputid){}
        service1.readone($scope.id)
            .success(function(inputdata) {
                // locationdetail.view.html >> {{ data }}
                $scope.data = inputdata;
                console.log($scope.data);
            })
            .error(function(err) {
                console.log('error at service1.readone in locationdetail.controller.js');
            })

    }
})();