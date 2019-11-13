var express 	= require('express');
var controller 	= require('../controllers/checklists');
var router 		= express.Router();

// Routes related to event
router.post('/', 				controller.addNew);
router.get('/', 				controller.getAll);
router.get('/:checkListId', 	controller.getOne);
router.delete('/:checkListId', 	controller.deleteOne);
router.put('/:checkListId', 	controller.updateOne);

module.exports = router;