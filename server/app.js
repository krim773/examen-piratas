// configura express | app configurada para utilizarse en el index
import express from 'express'
import pirateRoutes from './routes/pirate.routes.js'
import fileUpload from 'express-fileupload';

const app = express();


// es importante que el midleware este antes de las rutas
//middleware
app.use(express.json())

app.use(fileUpload({
    //para que que cuando se suba una imagen no lo mantengay empiece a guardar en una carpeta
    useTempFiles: true,
    //en donde sera guardado 
    tempFileDir: "./upload"
    //con eso comprendera la subida de archivos 
}))


//rutas
app.use(pirateRoutes)


export default app 