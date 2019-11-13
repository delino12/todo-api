var express       = require('express');
var logger        = require('morgan');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');

var index         = require('./routes/index');
var users         = require('./routes/users');
var todos         = require('./routes/todos');
var checklists    = require('./routes/checklists');

var app = express();

app.use(function (req, res, next) {
  	res.setHeader('Access-Control-Allow-Origin', '*')
  	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  	next()
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', index);
app.use('/users', users);
app.use('/todos', todos);
app.use('/checklists', checklists);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	if(err.status == 404){
    	res.status(200).json({status: "info", message: "Endpoint not found!"});
 	}else if(err.status == 500){
		res.status(500).json({status: "error", message: "Internal server error!"});
	}else{
    	next(err);
  	}
});

module.exports = app;