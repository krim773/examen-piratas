import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";


export async function connectDB() {
    try{
        const db = await mongoose.connect(MONGODB_URI)
        //para ver la base de dato a la cual esta conectadas
        console.log('conectado a ', db.connection.name);
    } catch (error) {
        console.error(error);
    }
}