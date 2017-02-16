var express = require('express');//imports express package
var app = express();//starts express server
var toDos = require('./models/toDos');//imports file models.todo
var mongoose = require('mongoose'); // imports mongoose package
var toDoRoutes = require('./routes/toDoRoutes'); // imports all API routes
var bodyParser = require('body-parser'); //imports body parser package

mongoose.connect("mongodb://localhost/Todos"); //connects mongoose to mongodb

app.set('view engine', 'ejs')

app.use(bodyParser.json());//needed to read req.body
app.use(bodyParser.urlencoded({extended: true}));//needed

app.use('/api/toDos', toDoRoutes);//sets up the route so '/api/toDos' is always added


app.get("/", function(req, res) {
  res.render('index', { welcome: "Hello, Please to Meet you" });
});


app.listen(3000, function () {//says webpage will run on port3000 and do function on start
  console.log('Express server is up and running on port 3000')
});
