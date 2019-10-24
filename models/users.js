// init mongoose
const connection  	= require('../database/connect');
const mongoose    	= require('mongoose');
const ObjectId    	= require('mongodb').ObjectId;
const bcrypt      	= require('bcryptjs');
const jwt         	= require('jsonwebtoken');

// user schema
const userSchema = new mongoose.Schema({
    email: {type: String, required: true},
    names: {type: String, required: true},
    password: {type: String, required: true},
    avatar: {type: String, required: false}
},{
    timestamps: true,
    autoIndex: false
});

const User = connection.model('User', userSchema);
User.createIndexes();

User.signupUser = async (req, res) => {
    var email    = req.body.email;
    var names    = req.body.names;
    var password = bcrypt.hashSync(req.body.password, 10);
    var query    = {email, names, password}

    // create new user
    await new User(query).save().then(user => {
        res.status(200).json({status: "success", message: "Registration successful!", data: user});
    }).catch(err => {
        res.status(500).json({status: "error", message: "Server error!",  err: err});
    });
}

module.exports = User;