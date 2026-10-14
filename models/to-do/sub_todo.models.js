import { mongoose } from mongoose

const subtodoSchema = mongoose.Schema({  
},{timestamps: true})

export const SubToDo = mongoose.model("SubToDo", subtodoSchema)