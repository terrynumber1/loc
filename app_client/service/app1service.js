// Angular Service is a function that only does ONE THING
// such as retrieving data.

(function() {

    angular
        .module('app1')
        .service('service1', service1);

    // .$inject to protect something againist minification of file
    service1.$inject = ['$http'];
    function service1($http) {

        var f1 = function () {
            return 'from f1 service';
        };

        var f2 = function () {
            return $http.get('http://localhost:3000/api/readall');
        };

        return {
            f1: f1,
            f2: f2
        };
    }
})();

console.log("I'm at the end of app1service.js");