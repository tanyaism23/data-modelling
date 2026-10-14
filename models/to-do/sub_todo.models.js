import mongoose from "mongoose";

const subtodoSchema = new mongoose.Schema({  
},{timestamps: true});

export const SubToDo = mongoose.model("SubToDo", subtodoSchema);