import morgan from "morgan";
import dotenv from 'dotenv'
dotenv.config()

import express from "express"
import 'express-async-errors'
//Middleware
//Error MiddleWare 
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandler from "./middleware/error-handler.js";
//DB
import connectDB from "./db/connect.js"

//Router
import authRouter from "./routes/authRouter.js"
import userRouter from "./routes/userRouter.js"
import taskRouter from "./routes/taskRouter.js"
import commentRouter from "./routes/commentRouter.js"
//authentication
import { authentication } from "./middleware/authentication.js";

const app = express () ; 
app.use(express.json())

if (process.env.NODE_ENV !== "production") {
    app.use(morgan("dev"));
  }

app.use("/api/v1/auth", authRouter)
app.use("/api/v1/users", userRouter)
app.use("/api/v1/tasks" ,authentication ,taskRouter)
app.use("/api/v1/comments" ,authentication ,commentRouter)
app.get("/" , (req , res ) => {
    res.send("Welcome")
})
app.use(notFoundMiddleware)
app.use(errorHandler)


const port = process.env.PORT ||5000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port , () => {
            console.log(`Server is listening on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start() ;