var express = require('express');
var router = express.Router();

var routesController = require('./routesController.js');

router.get('/readone/:inputid', routesController.readone);
router.get('/readall', routesController.readall);

//router.post('/addOneById/:inputid', routesController.addOneById);
router.post('/addone', routesController.addone);

module.exports = router;