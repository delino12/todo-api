// init mongoose
const connection  	= require('../database/connect');
const mongoose    	= require('mongoose');
const ObjectId    	= require('mongodb').ObjectId;

// todo schema
const todoSchema = new mongoose.Schema({
    userId: {type: connection.Schema.Types.ObjectId, required: true},
    title: {type: String, required: true},
    status: {type: Number, required: true},
    isDeleted: {type: String, required: false},
    isCompleted: {type: String, required: false}
},{
    timestamps: true,
    autoIndex: false
});

const Todo = connection.model('Todo', todoSchema);
Todo.createIndexes();

Todo.addNew = async (req, res) => {
    var userId      = req.body.userId;
    var title       = req.body.title;
    var status      = 1;
    var isDeleted   = false;
    var isCompleted = false;

    var query    = {userId, title, status, isDeleted, isCompleted}

    await new Todo(query).save().then(todos => {
        res.status(200).json({status: "success", message: "Todo added successfully!", data: todos});
    }).catch(err => {
        res.status(500).json({status: "error", message: "Server error!",  err: err});
    });
}

Todo.getAll = async (req, res) => {
    var userId  = req.body.userId;
    var query   = {userId: userId}

    Todo.aggregate([{
        $sort: {createdAt: -1}
    },{
        $match: {userId: ObjectId(userId)}
    },{
        $lookup: {
            from: "checklists",
            localField: "_id",
            foreignField: "todoId",
            as: "checklists"
        }
    }]).then(todos => {
        res.status(200).json({status: "success", message: "Todos retrieved successfully!", data: todos});
    }).catch(err => {
        res.status(500).json({status: "error", message: "Server error!",  err: err});
    });
}

Todo.getOne = async (req, res) => {
    // code...
}

Todo.deleteOne = async (req, res) => {
    // code...
}

Todo.updateOne = async (req, res) => {
    // code...
}

module.exports = Todo;