(function() {
    angular
        .module('app1')
        .controller('control1', control1);

    // angularapp.js
    // controllerAs: 'cas'

    control1.$inject = ['$modal', '$http', '$scope', 'service1'];
    function control1($modal, $http, $scope, service1) {

        $scope.jim = 'jim';

        $scope.aa = function () {
            console.log('aa');
        };

        $scope.popupReviewForm = function (input) {
            // a pop-up form
            // angular.module('app1', ['ui.bootstrap'])
            // .$inject=['$modal']
            // src='ui-bootstrap-custom-0.12.0.min.js
            // src='ui-bootstrap-custom-tpls-0.12.0.min.js

            var modalInstance = $modal.open({
                templateUrl: '/reviewformmodal/reviewformmodal.view.html', // HTML
                controller: 'reviewformmodal' // Data
            });
        };

        $scope.readAll1 = function () {
            $http({
                method: 'GET',
                url: 'http://localhost:3000/api/readall'
            })
                .then(function (responseObject) {
                    // responseObject has many properties. You use to .data property to get the data.
                    $scope.koko = responseObject.data;
                    console.log(responseObject.data);

                    $scope.koko2 = responseObject;
                    console.log($scope.koko2);

                });
        };

        $scope.readAll2 = function () {
            $http.get('http://localhost:3000/api/readall')
                .success(function (responseObject) {
                    $scope.koko6 = responseObject;
                    console.log($scope.koko6);
                })
                .error(function (err) {
                    console.log('ERRRRRRRRRRRRRRRRRRRRRRRR');
                });
        };

        console.log(service1.f1());

        service1.f2()
            .success(function(responseObject){
                console.log(responseObject);
                $scope.aa1 = responseObject;
            })
            .error(function(err){
                console.log('ERRRRRRRRRRRRRRRRRRRRRRRR');
            });

        console.log("I'm at the end of home.controller.js");
    } //
})();
