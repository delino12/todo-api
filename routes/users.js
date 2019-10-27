var express 	= require('express');
var controller 	= require('../controllers/users');
var middleware 	= require('../middleware/users-middleware');
var router 		= express.Router();

// Routes related to event
router.post('/', middleware.validate, middleware.alreadyExist, controller.signup);

module.exports = router;