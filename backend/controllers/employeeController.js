import Employee from "../models/employeesModel.js";
export const addEmployee = async (req, res) => {
  const { employee_id,name, email,designation,department, role,status } = req.body
  if (! employee_id,!name || !email|| !designation|| !department, !role) {
    return res.status(400).json({ success: false, error: "Name and email are required." });
  }
  try {   
    const newEmployee = await Employee.create({ employee_id,name, email,designation,department, role,status})
    res.status(201).json({ success: true, employee: newEmployee });
  }
  catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
  
}
export const getAllEmployees = async (req, res) => {
  try {
    const allEmployees = await Employee.find();
    if (allEmployees.length > 0) {
      return res.status(200).json({ success: true, employees: allEmployees });
    } else {
      return res.status(404).json({ success: false, message: "Employee list is empty." });
    }
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

export const getEmployeeById = async (req, res) => {
  try {
    const employeeId = req.params.employee_id;
    if (!employeeId) {
      return res.status(400).json({ success: false, message: "Employee ID is required." });
    }
    const employee = await Employee.findOne({ employee_id: employeeId });
    if (!employee) {
      return res.status(404).json({ success: false, message: "Employee not found." });
    }
    return res.status(200).json({ success: true, employee });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

export const updateEmployeeById = async (req, res) => {
  try {
    const employeeId = req.params.employee_id;

    if (!employeeId) {
      return res.status(400).json({ success: false, message: "Employee ID is required." });
    }
    const { name, email, designation, department, role, status } = req.body;
    if (!name && !email && !designation && !department && !role && !status) {
      return res.status(400).json({ success: false, message: "At least one field is required to update." });
    }
    const updatedEmployee = await Employee.findOneAndUpdate(
      { employee_id: employeeId },
      { $set: { name, email, designation, department, role, status } },
      { new: true } 
    );

    if (!updatedEmployee) {
      return res.status(404).json({ success: false, message: "Employee not found." });
    }

    return res.status(200).json({ success: true, updatedEmployee });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

export const deleteEmployeeById = async (req, res) => {
  try {
    const employeeId = req.params.employee_id;
    if (!employeeId) {
      return res.status(400).json({ success: false, message: "Employee ID is required." });
    }
    const deletedEmployee = await Employee.findOneAndDelete({ employee_id: employeeId });
    if (!deletedEmployee) {
      return res.status(404).json({ success: false, message: "Employee not found." });
    }
    return res.status(200).json({ success: true, deletedEmployee });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
