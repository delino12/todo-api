var index = (req, res) => {
	res.status(200).json({status: "success", message: "Welcome to todo-api"});
}

module.exports = {
	index: index
}