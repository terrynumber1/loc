(function() {

    angular
        .module('app1')
        .controller('reviewformmodal', reviewformmodal);

                                        // formdata1: function() {} in locationdetail.controller.js
    function reviewformmodal($modalInstance, formdata1, service1) {
        var vm = this;

        vm.onSubmit = function () {
            //console.log('== onSubmit ==');
            console.log(formdata1.id1 + ' ----- ' + formdata1.name1);

            service1.addOneById(formdata1.id)



                // need to receive success response code
                .success(function (inputdata) {
                    console.log('success');
                })
                .error(function (inputdata) {
                    console.log('error in onSubmit reviewformmodal.controller.js');
                });
        };
    }

})();

