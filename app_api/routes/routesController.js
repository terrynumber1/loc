var mongoose = require('mongoose');
//var model1 = mongoose.model('schema1');
var model1 = mongoose.model('locations');

module.exports.sayhi = function (req, res) {
    res.send('jjjjjjjjjjjj');
};

module.exports.readone = function (req, res) {

    console.log(req.params);
    console.log(req.params.id);
    console.log('Am I here yet?');

    model1
        .findById(req.params.id)
        .exec(function (err, input) {
            if (err) {
                console.log('There was an error querying the database.');
            } else if (!err) {
                res.json(input);
            } else {
                console.log('did not find anything');
                console.log('I am under input');
            }
        });
};

module.exports.readall = function (req, res) {

    model1
        .find({},
        function (err, input) {
            if (!err) {
                res.json(input);
            } else {
                console.log(err);
            }
        });
};