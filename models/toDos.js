var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ToDoSchema = new Schema({
  name: String,
  date: String,
  status: String,
});

module.exports = mongoose.model("Todos", ToDoSchema);
