import express from "express"
import helmet from "helmet";
import cors from "cors";
import "dotenv"
import {connectToDb} from "./databaseConnection.js"
import { config } from "dotenv"
import employeeRouter from "./routes/employeeRoute.js"
import taskRouter from "./routes/tasksRoute.js"
import authRoute from "./routes/authRoute.js"
import dashboardRoute from "./routes/dashboardRoute.js";
const app = express()
config()
const db = process.env.dbURL
const PORT = process.env.PORT
connectToDb(db)
app.use(helmet());
app.use(cors());
app.use(express.json())
app.use("/auth", authRoute)
app.use("/employees", employeeRouter)
app.use('/task',taskRouter)
app.use("/dashboard", dashboardRoute);
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`)
})