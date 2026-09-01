import express from "express";
import { app } from "./src/app.js";
import dotenv from "dotenv"

dotenv.config()

app.get("/", (req,res) => {
    res.send("Hello World!")
})

app.listen(3000, () => {
    console.log("Server listening on 3000")
} )


