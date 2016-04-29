var mongoose = require('mongoose');
//var model1 = mongoose.model('schema1');
var model1 = mongoose.model('locations');

module.exports.sayhi = function (req, res) {
    res.send('jjjjjjjjjjjj');
};

module.exports.readone = function (req, res) {

    console.log(req.params);
    console.log(req.params.inputid);

    model1
        .findById(req.params.inputid)
        .exec(function (err, input) {
            if (err) {
                console.log('There was an error querying the database.');
            } else if (!err) {
                console.log('Found something, sending response JSON to web-browser');
                res.json(input);
            } else {
                console.log('did not find anything');
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

module.exports.addOneById = function (req, res) {
    console.log('addOneById');
    console.log(req.params.inputid);

};
