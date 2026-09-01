import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"


const connectDB = async() => {

    try {
        
        const conn = await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`)
        console.log(`MongoDB Connected: ${conn.connection.host}`)

    } catch (error) {
        console.log("Failed to connect DB: ", error.message)
        process.exit(1)
    }
}



export default connectDB