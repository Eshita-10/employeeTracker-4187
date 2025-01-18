import { Router } from "express";
import {addEmployee,getAllEmployees,getEmployeeById,updateEmployeeById,deleteEmployeeById} from "../controllers/employeeController.js";
const employeeRouter = Router()
employeeRouter.post('/add', addEmployee)
employeeRouter.get('/',getAllEmployees)
employeeRouter.get('/:employee_id',getEmployeeById)
employeeRouter.put('/:employee_id',updateEmployeeById)
employeeRouter.delete('/:employee_id',deleteEmployeeById)

export default employeeRouter