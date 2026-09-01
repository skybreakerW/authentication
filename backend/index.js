import express from "express";
import { app } from "./src/app.js";
import dotenv from "dotenv"
import connectDB from "./src/db/db.js"

dotenv.config()



const port = process.env.PORT || 8080


app.listen(port, () => {
    connectDB()
    console.log(`Listening on port: ${port}`)
})


