import { Router } from "express";
import { createTask,getByTaskId,updateTask,deleteTask,completedTask } from "../controllers/tasksController.js";
const taskRouter = Router()
taskRouter.post('/create', createTask)
taskRouter.get('/completed',completedTask)
taskRouter.get('/:task_id', getByTaskId)
taskRouter.put('/:task_id', updateTask)
taskRouter.delete('/:task_id', deleteTask)

export default taskRouter