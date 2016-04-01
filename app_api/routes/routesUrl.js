var express = require('express');
var router = express.Router();

var routesController = require('./routesController.js');

router.get('/hi', routesController.sayhi );
router.get('/readone/:id', routesController.readone);
router.get('/readall', routesController.readall);

module.exports = router;