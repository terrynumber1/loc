(function() {

    angular
        .module('app1')
        .controller('reviewformmodal', reviewformmodal);

                                        // formdata1: function() {} in locationdetail.controller.js
    function reviewformmodal($modalInstance, formdata1, service1) {
        var vm = this;

        vm.onSubmit = function () {
            console.log(formdata1.id1 + ' ----- ' + formdata1.name1);

            // vm.formData is data in reviewformmodal.html
            console.log("reviewformmodal.controller.js 15 >> formData.name: " + vm.formData.name);

            service1.addone({
                name: vm.formData.name, // vm.formData.name is in reviewformmodal.view.html
                review: vm.formData.review // vm.formData.review is in reviewformodal.view.html
                //name: formdata1.name1,
                //review: formdata1.review1
            })
                // need to receive success response code
                .success(function (inputdata) {
                    console.log('reviewformmodal.controller.js >> service1.addone');
                    console.log(inputdata);
                })
                .error(function (inputdata) {
                    console.log('error in onSubmit reviewformmodal.controller.js 27');
                });


        };
    }

})();

