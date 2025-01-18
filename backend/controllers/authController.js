import Employee from "../models/employeesModel.js"; 
import { generateToken } from "../utils/jwt.js"; 

export const signup = async (req, res) => {
  const { name, email, password, designation, department } = req.body;

  try {
    const existingEmployee = await Employee.findOne({ email });
    if (existingEmployee) {
      return res.status(400).json({ message: "Employee already exists" });
    }
    const newEmployee = new Employee({name,email,password,designation,department,
    });

    await newEmployee.save();
    const token = generateToken(newEmployee.employee_id);
    res.status(201).json({ message: "Employee registered successfully", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const employee = await Employee.findOne({ email });
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    const isMatch = await employee.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = generateToken(employee.employee_id);
    res.json({ message: "Login successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
