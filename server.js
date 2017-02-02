var express = require('express');
var app = express();
var toDos = require('./models/toDos');
var mongoose = require('mongoose');
var toDoRoutes = require('./routes/toDoRoutes');
var bodyParser = require('body-parser');

mongoose.connect("mongodb://localhost/Todos");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', toDoRoutes);





app.listen(3000, function () {
  console.log('Express server is up and running on port 3000')
});
