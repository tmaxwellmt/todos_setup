var express = require('express');// imports express package, express is for routing
var router = new express.Router();//creates a new router
var ToDo = require('../models/toDos');//gives access to toDos Schema (blueprint for ToDo) files in models directory

//creates new route at /api/toDos "/"
router.route('/')
  .get(function(req, res){
    ToDo.find(function(err, data) { // finds all todos
      if (err) {
      console.log("error finding todos");//logs erros to console
      } else{
        res.json(data); //returns json data returns Todo collection data in json format
      }
    })
  })
  .post(function (req, res){ // creates new todo
    var toDo = new ToDo({ // states how we are making todos
      name: req.body.name, //body object
      date: req.body.date,
      status: req.body.status,
  })

  toDo.save(function (err, toDoData) {//saves todo to database
    if (err) {
      console.log("error finding todos");
      } else{
        res.json(toDoData);
      }
    })
  });
//creates a new route at /api/toDos/23423423445 specific todo id
  router.route('/:todo_id')
    .get(function(req, res){// finds 1 todos with id
      ToDo.findById(req.params.todo_id, function (err, toDoData) { //finds todo's id
        if (err) {
          console.log("error finding todo");
        } else {
          res.json(toDoData);
        }
      })
    })

  .put(function (req, res) { // updates an existing todo
    ToDo.findById(req.params.todo_id, function(err, toDoData){ // finds a todo's id
        if (err) {
          console.log("error finding a specific todo");
        } else {
        toDoData.name = req.body.name ? req.body.name : toDoData.name; //type new name if new name is old name  keep old name if not update it to the new name
        toDoData.date = req.body.date ? req.body.date : toDoData.date;// same above with date, like if else statement
        toDoData.status = req.body.status ? req.body.status : toDoData.status; //wholething is a turnarry
        toDoData.save(function (err, updatedToDo) { //saves new updated todo to database
          if (err) {
              console.log("error with updated todo");
          } else {
              res.json(updatedToDo);
          }
        });
      }
    });
  })
  .delete(function (req, res) { // deletes a specific todo
    ToDo.remove({_id: req.params.todo_id}, function(err, todo) { // have to have id as object because thats what json expects this data to be
      if (err) {
        console.log(err, "could not delete todo!!!!");
      } else {
        res.json({message: "ToDo deleted"})
      }
    });
  });

module.exports = router; //exports all of these routes (router)
