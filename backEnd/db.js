const mongoose = require("mongoose");
//url handy
const url =
   "mongodb+srv://tilak001:tilak001@cluster0.1dhtbga.mongodb.net/todos";

mongoose.connect(url);
const todoSchema = mongoose.Schema({
   title: String,
   description: String,
   completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
   todo,
};
