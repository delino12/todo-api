var express 	= require('express');
var controller 	= require('../controllers/users');
var router 		= express.Router();

// Routes related to event
router.post('/', controller.signup);

module.exports = router;