 import { Router } from "express";
 import { homePirate, newPirate, updating, getProfileID, deleteProfile } from "../controllers/pirate.controller.js";

 const router = Router();

 //para tener la lista de perfiles
 router.get('/home', homePirate )
//  para crear 
router.post('/new', newPirate  )
// para actualizar / editar un perfil de una mascota y que traiga un id
router.put('/edit/:id', updating )
// para recibir solo un perfil
router.get('/perfil/:id', getProfileID )
// para eliminar un perfil
router.delete('/perfil/:id', deleteProfile )


export default router