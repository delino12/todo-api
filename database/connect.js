require("dotenv").config();
var mongoose = require('mongoose');

// database connection
mongoose.connect('mongodb://localhost:27017/todo_db', { useNewUrlParser: true, useUnifiedTopology: true }).then(conn => console.log(`Database connected to todo_db`));

// init promise
mongoose.Promise = global.Promise;

// export database configuration
module.exports = mongoose;