var express 	= require('express');
var controller 	= require('../controllers/index');
var router 		= express.Router();

// Routes related to event
router.get('/', controller.index);

module.exports = router;