import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async()=>{
    try{
const connectionInstances = await mongoose.connect (`${process.env.MONGODB_URI}/${DB_NAME}`)
console.log(`\n MongoDB conncted !! DB HOST : $ {connectionInstances.connection.host}`) ;
console.log(connectionInstances)  ;
}
    catch(error){
console.log("MongoDB connection Error", error);
process.exit(1)
    }
   
}
export default connectDB; 