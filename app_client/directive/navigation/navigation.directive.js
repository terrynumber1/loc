(function() {
    angular
        .module('app1')
        .directive('navigation', navigation);

    function navigation() {
        return {
            restrict: 'EA',
            templateUrl: '/directive/navigation/navigation.view.html'
        };
    }

})();