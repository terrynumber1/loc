(function() {
    angular
        .module('app1')
        .directive('footerGeneric', footerGeneric);

    function footerGeneric() {
        return {
            restrict: 'EA',
            templateUrl: '/directive/footerGeneric/footerGeneric.view.html'
        };
    }
})();