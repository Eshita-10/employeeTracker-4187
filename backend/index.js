import express from "express"
import "dotenv"
import {connectToDb} from "./databaseConnection.js"
import { config } from "dotenv"
import employeeRouter from "./routes/employeeRoute.js"
import taskRouter from "./routes/tasksRoute.js"
config()
const db = process.env.dbURL
const PORT = process.env.PORT
connectToDb(db)
const app = express()
app.use(express.json())
app.use("/employees", employeeRouter)
app.use('/task',taskRouter)
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`)
})