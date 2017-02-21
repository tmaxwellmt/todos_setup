var express = require('express');//imports express package
var app = express();//starts express server
var ToDo = require('./models/toDos');//imports file models.todo
var mongoose = require('mongoose'); // imports mongoose package
var toDoRoutes = require('./routes/toDoRoutes'); // imports all API routes
var bodyParser = require('body-parser'); //imports body parser package

mongoose.connect("mongodb://localhost/Todos"); //connects mongoose to mongodb

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.json());//needed to read req.body
app.use(bodyParser.urlencoded({extended: true}));//needed

app.use('/api/toDos', toDoRoutes);//sets up the route so '/api/toDos' is always added


app.get('/example', function(req, res) {
  ToDo.find(function (err, toDos) {
    if (err){
      console.log(err);
    }else {
      res.render('index', {welcome: "Hello World", todos: toDos })//gives back ejs page
    }
  });
});

// app.get('/loop', function (req, res) {
//   res.render('loop', { welcome: "Hello, Please to Meet you", num:50 });
// });

app.get('/toDoRoutes',function (req, res) {
  ToDos.find(function (err, toDoRoutes) {
    if (err) {
      console.log("You Can't Code");
    } else {
      res.render('toDoRoutes', {welcome: "List of Bears", todos: toDoRoutes});
    }
  });
});

app.delete('/api/toDos/:todos_id', function(req, res) {
  var todos_id = req.params.todos_id;
  ToDos.remove({_id: todos_id}, function(err, bear) {
    if(err){
      console.log(err, "Could Not Delete Todo");
    } else {
      res.json({message: "Todo is Deleted", data: bear});
    }
  });
});


app.listen(3000, function () {//says webpage will run on port3000 and do function on start
  console.log('Express server is up and running on port 3000')
});
