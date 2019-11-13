var Todo = require("../models/todos");

// create new todo
var addNew = async (req, res) => {
    await Todo.addNew(req, res);
}

// get all todo item
var getAll = async (req, res) => {
    await Todo.getAll(req, res);
}

// get a single todo item 
var getOne = async (req, res) => {
    await Todo.getOne(req, res);
}

// delete one todo item
var deleteOne = async (req, res) => {
    await Todo.deleteOne(req, res);
}

// update todo item
var updateOne = async (req, res) => {
    await Todo.updateOne(req, res);
}

module.exports = {
    addNew: addNew,
    getAll: getAll,
    getOne: getOne,
    deleteOne: deleteOne,
    updateOne: updateOne
}