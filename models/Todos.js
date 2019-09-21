const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  body: {
    type: String,
    trim: true,
    required: 'Please enter a task!',
    validate: [
      function(input) {
        return input.length >= 4;
      },
      "Task length should be longer than four characters long!"
    ]
  },
  isComplete: { type: Boolean, required: true, default: "false" },
  date: { type: Date, default: Date.now },
  //Associate the _id from the User model to the task
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true }
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
