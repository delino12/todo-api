var CheckList = require("../models/checklists");

// add to checklist
var addNew = async (req, res) => {
    await CheckList.addNew(req, res);
}

// get all checklist item
var getAll = async (req, res) => {
    await CheckList.getAll(req, res);
}

// get a single checklist item 
var getOne = async (req, res) => {
    await CheckList.getOne(req, res);
}

// delete one checklist item
var deleteOne = async (req, res) => {
    await CheckList.deleteOne(req, res);
}

// update checklist item
var updateOne = async (req, res) => {
    await CheckList.updateOne(req, res);
}

module.exports = {
    addNew: addNew,
    getAll: getAll,
    getOne: getOne,
    deleteOne: deleteOne,
    updateOne: updateOne
}