import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  complete : {
    type: Boolean,
    default: false
  },
  createdBy : {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  subToDos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubToDo"
    }
  ] //Array of Sub To-Dos
}, { timestamps: true });

export const Todo = mongoose.model('Todo', tododSchema);
