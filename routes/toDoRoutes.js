var express = require('express');


var router = new express.Router();

router.route('/')


router.route('/api')
app.get('/api/toDos',function(req, res){
  toDos.find(function(err, data){
    if(err){
      console.log("error finding todos");
    }
    else{
      re.render('toDos', {toDos: data});
    }
  })
})
app.post('/api/toDos', function(req, res){
  var toDo = new toDo({
    name:req.body.name,
    date:req.body.date,
  })
  toDo.save(function(err, toDoData){
    if (err) {
      console.log("Error with toDo");
    }
    else{
      res.json(toDoData);
    }
  })
});
