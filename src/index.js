
import connectDB from "./db/index.js";
// require('dotenv').config()
import dotenv from "dotenv";
dotenv.config({
    path:'./env'
})


connectDB()















/*
import express from "express";

const app = express();


(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on("error",()=>{
console.log("error:", error);
throw error;
        })
        app.listen(process.env.PORT,()=>{
            console.log(`app is running on port ${process.env.PORT}`)
        })
    }catch(error){
        console.log(error);
        throw err
        
    }
})
*/