import { Schema , model } from "mongoose";

const EsquemaAlumnos = new Schema({
    nombre:{
        type:String
    },
    apepat:{
        type:String 
    }
    })

   export const ModeloAlumnos = new model("tabla de registro de alumnos",EsquemaAlumnos)