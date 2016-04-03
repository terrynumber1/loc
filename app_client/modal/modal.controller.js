(function() {

    angular
        .module('app1')
        .controller('modalcontrol1', modalcontrol1);

    modalcontrol1.$inject = ['$modalInstance', 'service1'];
    function modalcontrol1() {

        return;
    }

})();