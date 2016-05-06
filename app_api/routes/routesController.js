var mongoose = require('mongoose');
//var model1 = mongoose.model('schema1');
var model1 = mongoose.model('locations');
var model2 = mongoose.model('locations2');

var sendJSONresponse = function (res, status, content) {
    res.status(status);
    res.json(content);
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
        function (err, result_input) {
            if (!err) {
                res.json(result_input);
            } else {
                console.log(err);
            }
        });
};

module.exports.addone = function (req, res) {

    // req.params.inputid, POST /addOneById/:inputid

    model2.create({
            name: req.body.name,
            review: req.body.review
        }, function (err) {

            console.log(req.body.name);
            console.log(req.body.review);

            if (err) {
                console.log(err);
                sendJSONresponse(res, 400, err);
            } else {
                console.log('model2.create');
                sendJSONresponse(res, 201, 'empty');
            }
        }
    );

};
