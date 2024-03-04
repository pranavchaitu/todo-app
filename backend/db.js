const mongoose = require("mongoose");
const MONGO_URL = require("./config");

mongoose.connect(
  MONGO_URL
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
