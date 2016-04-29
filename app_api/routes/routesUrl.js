var express = require('express');
var router = express.Router();

var routesController = require('./routesController.js');

router.get('/hi', routesController.sayhi );
router.get('/readone/:inputid', routesController.readone);
router.get('/readall', routesController.readall);

router.post('/addOneById/:inputid', routesController.addOneById);

module.exports = router;