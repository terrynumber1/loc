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

        var readall = function () {
            // $http, asynchronus, promise object
            return $http.get('http://localhost:3000/api/readall');
        };

        var readone = function (inputid) {
            return $http.get('http://localhost:3000/api/readone/' + inputid);
        };

        return {
            f1: f1,
            readall: readall,
            readone: readone
        };
    }
})();

console.log("I'm at the end of app1service.js");