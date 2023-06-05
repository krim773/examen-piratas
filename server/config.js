// para centralizar todas las variables de entorno

import dotenv from 'dotenv'
dotenv.config()

//LEERA UNA VARIABLE DE ENTORNO LLAMADA MONGODB_URI 
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/testdb"

//LEERA UNA VARIABLE DE ENTORNO LLAMADA PORT 
export const PORT = process.env.PORT || 4000

