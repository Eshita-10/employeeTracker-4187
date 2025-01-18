import mongoose from "mongoose";
const EmployeeSchema = new mongoose.Schema({
  employee_id: {type:String,required:true,unique:true},
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
  },
  designation: {
    type: String,
    required: true,
    trim: true,
  },
  department: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,enum:['Employee',"Admin","Manager"] ,default:"Employee"
  },
  status: {
    type: String,
    enum: ['Active', 'Inactive'],
    default: 'Active',
  },

},
{
  timestamps: true, 
});
const Employee = mongoose.model("Employee", EmployeeSchema);

export default Employee;
