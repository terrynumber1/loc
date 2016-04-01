(function() {

    var app1 = angular.module('app1', ['ngRoute', 'ui.bootstrap']);

    app1.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/home/home.view.html',
                controller: 'control1'
                //controllerAs: 'cas'
            })
            .otherwise({redirectTo: '/'});
    });

    console.log("I'm at the end of angularapp.js");
})();

