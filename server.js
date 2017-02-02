var express = require('express');//requires express package
var app = express();//starts express server
var toDos = require('./models/toDos');//requires file models.todo
var mongoose = require('mongoose'); // requires models for mongoose
var toDoRoutes = require('./routes/toDoRoutes'); // require Api route
var bodyParser = require('body-parser');

mongoose.connect("mongodb://localhost/Todos");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/toDos', toDoRoutes);





app.listen(3000, function () {
  console.log('Express server is up and running on port 3000')
});
