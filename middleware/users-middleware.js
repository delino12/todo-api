var User = require("../models/users");

var validate = (req, res, next) => {
	var email    = req.body.email;
	var names    = req.body.names;
	var password = req.body.password;

	if(!email) return res.status(403).json({status: "error", message: "Email field is required!"});
	if(!names) return res.status(403).json({status: "error", message: "Names field is required!"});
	if(!password) return res.status(403).json({status: "error", message: "Password field is required!"});

	// pass
	return next();
}

var alreadyExist = async (req, res, next) => {
	var email    = req.body.email;
	var names    = req.body.names;
	var password = req.body.password;

	await User.findOne({email}).then(user => {
		if(user) return res.status(403).json({status: "error", message: "Email already registered!"});
		return next();
	}).catch(err => {
		return res.status(500).json({status: "error", message: err});
	});
}

module.exports = {
	validate: validate,
	alreadyExist: alreadyExist
}