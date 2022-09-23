const app=require("./app")

const dotenv = require("dotenv")

const dbhelper = require('./config/database')

dotenv.config({path: 'config/config.env'})

// Handling Uncought Exception
process.on("uncaughtException", err=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down server due to unhandled Promise Rejection`);
    process.exit(1)
})

// connect DB

dbhelper.connectDB()


const server= app.listen(process.env.PORT, ()=>{
    console.log(`Server started on Port ${process.env.PORT}`)
})


process.on("unhandledRejection" , err=>{
    console.log(`Error : ${err.message}`);
    console.log(`Shutting down server due to unhandled Promise Rejection`);
    server.close(()=>{
        process.exit(1)
    })
})