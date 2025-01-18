import mongoose from "mongoose";
import { hashPassword, verifyPassword } from "../utils/hashPassword.js"; // Import hashPassword utility
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
  password: {
    type: String,
    required: true,
    minlength: 6,
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
  EmployeeSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    try {
      this.password = await hashPassword(this.password);
      next();
    } catch (error) {
      next(error);
    }
  });
  
  EmployeeSchema.methods.comparePassword = async function (password) {
    try {
      return await verifyPassword(this.password, password);
    } catch (error) {
      throw new Error("Error comparing password");
    }
  };
  
const Employee = mongoose.model("Employee", EmployeeSchema);

export default Employee;
