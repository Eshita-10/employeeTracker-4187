import mongoose from "mongoose";
const TaskSchema = new mongoose.Schema({
  task_id:{ type:String,required:true,unique:true},
  title: {type: String,required: true,},
  description: {type: String,required: true,},
  priority: {type: String,enum: ['Low', 'Medium', 'High'],default: 'Medium',},
  assignedBy: {type: String,required: true,},
  category: {type: String,enum: ['BAU', 'Ad Hoc', 'Project-Based'],required: true,},
  completed: {type: Boolean,default: false,},
  assignedTo: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }],
  createdAt: {type: Date,default: Date.now,},
  updatedAt: {type: Date,default: Date.now,
  },
});
const Task = mongoose.model("Task", TaskSchema)
export default Task