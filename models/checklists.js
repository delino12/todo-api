// init mongoose
const connection    = require('../database/connect');
const mongoose      = require('mongoose');
const ObjectId      = require('mongodb').ObjectId;

// todo schema
const checklistSchema = new mongoose.Schema({
    todoId: {type: connection.Schema.Types.ObjectId, required: true},
    title: {type: String, required: true},
    status: {type: Number, required: true},
    isDeleted: {type: String, required: false},
    isCompleted: {type: String, required: false}
},{
    timestamps: true,
    autoIndex: false
});

const CheckList = connection.model('CheckList', checklistSchema);
CheckList.createIndexes();

CheckList.addNew = async (req, res) => {
    var todoId      = req.body.todoId;
    var title       = req.body.title;
    var status      = 1;
    var isDeleted   = false;
    var isCompleted = false;

    var query    = {todoId, title, status, isDeleted, isCompleted}

    // create new user
    await new CheckList(query).save().then(checklist => {
        res.status(200).json({status: "success", message: "Checklist added successful!", data: checklist});
    }).catch(err => {
        res.status(500).json({status: "error", message: "Server error!",  err: err});
    });
}

CheckList.getAll = async (req, res) => {
    // code...
    var todoId = req.body.todoId;
    var query = {todoId: todoId}
    await CheckList.find(query).sort({createdAt: -1}).then(checklists => {
        res.status(200).json({status: "success", message: "Checklist added successful!", data: checklists});
    }).catch(err => {
        res.status(500).json({status: "error", message: "Server error!",  err: err});
    });
}

CheckList.getOne = async (req, res) => {
    // code...
}

CheckList.deleteOne = async (req, res) => {
    // code...
}

CheckList.updateOne = async (req, res) => {
    // code...
}

module.exports = CheckList;