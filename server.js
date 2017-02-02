var express = require('express');
var app = express();
var toDos = require('./models/toDos');
var mongoose = require('mongoose');








app.listen(3000, function () {
  console.log('Express server is up and running on port 3000')
});
