import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv"
import {  test  }  from "./backend/controllers/alumno.controller.js"
dotenv.config()

mongoose.connect(process.env.urlbase)
.then(()=>
console.log("la base de datos esta funcionando bien")
)

.catch((err)=>{
    console.log("no jala la base de datos",err)
})
 
const app = express();
app.use(cors())

app.listen(4000, ()=>{
    console.log("Se escucha sabroso")
})

test()