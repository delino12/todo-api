var User = require("../models/users");

// create new user
var signup = async (req, res) => {
    await User.signupUser(req, res);
}

module.exports = {
    signup: signup
}