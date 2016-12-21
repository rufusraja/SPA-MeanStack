var express = require('express');
var path = require('path');
var bodyParser = require('body-parser'); //to get info

var index = require('./routes/index'); //homepage
var tasks = require('./routes/tasks'); //API to create

var port = 3000; // set anything you want

var app = express(); // variable and set to express

app.set('views',path.join(__dirname, 'views')); //to know wat folder tells
app.set('view engine', 'ejs'); //tell engine that we will use ejs
app.engine('html', require('ejs').renderFile); //engine will check

//set static folder
app.use(express.static(path.join(__dirname, 'client'))); //static folder where we currently are.

//body parser middleware
app.use(bodyParser.json()); //mw- see the bodyparser documentation
app.use(bodyParser.urlencoded({extended: false})); //object: giving it false

//route
app.use('/', index); //homepage to link with
app.use('/api',tasks); //to see the api

app.listen(port, function(){ //node.js
	console.log('Server started on port '+port); //callback function
});
