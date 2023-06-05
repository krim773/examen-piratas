

import { connectDB } from '../db.js';
import { PORT } from '../config.js';
import app from '../app.js';


connectDB()


app.listen(PORT)
console.log('Servidor corriendo en el puerto', PORT);


// el index solamante ejecuta el codigo y todo esta en sus diferentes archivos de configuracion
