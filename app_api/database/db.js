var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/Loc8r';
mongoose.connect(dbURI);

// Mongoose Schema and Model ===============================

var reviewSchema = new mongoose.Schema({
    author: {type: String, required: true},
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    reviewText: {type: String, required: true},
    createdOn: {
        type: Date,
        "default": Date.now
    }
});

var openingTimeSchema = new mongoose.Schema({
    days: {
        type: String,
        required: true
    },
    opening: String,
    closing: String,
    closed: {
        type: Boolean,
        required: true
    }
});

var locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: String,
    rating: {
        type: Number,
        "default": 0,
        min: 0,
        max: 5
    },
    facilities: [String],
    // Always store coordinates longitude, latitude order.
    coords: {
        type: [Number],
        index: '2dsphere'
    },
    openingTimes: [openingTimeSchema],
    reviews: [reviewSchema]
});

//mongoose("this name must match the collection's name in the database", schema)
;mongoose.model('locations', locationSchema);

// Mongoose Schema and Model ===============================




mongoose.connection.on('connected', function () {
    console.log('web-browser is connected to the database');
});

mongoose.connection.on('disconnected', function () {
    console.log('web-browser is disconnected from the database');
});

mongoose.connection.on('error', function () {
    console.log('There is an error connecting to the database');
});

console.log('I am at the end of db.js. \nYou will see this line before the web-browser is connected to the database. Amazing!!');


// For nodemon restart
// I don't really know what this function is for.
process.once('SIGUSR2', function(){
    gracefulShutdown('app termination', function () {
        process.exit(0);
    });
});