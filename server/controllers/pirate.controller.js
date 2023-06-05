import Pirate from "../models/Pirate.js";
import { uploadImage, deleteImage } from "../libs/cloudinary.js";
// utilizare este modulo porque utiliza promesas fs-extra
import fs from "fs-extra";

//todos los controller tendran un try and catch para evitar comportamientos inesperados en el cliente.
// como por ejemplo que no termine de cargr nunca la parte del ciente cuando haya un error...
//lista de perfiles // obtener publicaciones
export const homePirate = async (req, res) => {
  try {
    //post por publicaciones...
    const posts = await Pirate.find();
    res.send(posts);
  } catch (error) {
    console.log(error.message);
    //envio elmensajeal ciente para que lo pueda ver
    return res.status(500).json({ message: error.message });
  }
};

// para crear
export const newPirate = async (req, res) => {
  try {
    const { pirateName, teasureChest, piratePhrases, crewPosition, pegLeg, eyePatch, hookHand, image } =
      req.body;

              // //inicializar un let image
              // //si existe añadir a la cariable unos datos...
              // let image;

              // //validar si la propiedad image existe...
              // if (req.files?.image) {
              //   //como upload image es una promesa se ultiliza elawait
              //   //tambien se sacara el archivo de req.files.image.tempFilePath
              //   const result = await uploadImage(req.files.image.tempFilePath);
              //   //una vez llenado la variable image, borrar el archivo en alojado temporalmente de manerta local.
              //   await fs.remove(req.files.image.tempFilePath);

              //   image = {
              //     url: result.secure_url,
              //     public_id: result.public_id,
              //   };

              //   console.log(result);
              // }

    const newProfile = new Pirate({
      pirateName, 
      teasureChest, 
      piratePhrases,
      crewPosition, 
      pegLeg, 
      eyePatch, 
      hookHand,
      image
    });
    //guardar en la base de datos
    await newProfile.save();
    return res.json(newProfile);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// para actualizar / editar un perfil de mascota
export const updating = async (req, res) => {
  try {
    // req params es es el parametro tipeado en las rutas en este caso ":id"
    //"findByIdAndUpdate" este metodo busca un id y lo actualiza
    //consulta a trave del modelo Pirate
    // new true es para que muestr los datos actualizados
    const perfilActualizado = await Pirate.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    return res.send(perfilActualizado);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// para recibir un solo perfil
export const getProfileID = async (req, res) => {
  try {
    //parecido al delete > tras consultar a trvez del modelo Pirate se buscara el perfil por id...
    const perfilUsuario = await Pirate.findById(req.params.id);
    if (!perfilUsuario) return res.sendStatus(404);
    return res.json(perfilUsuario);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// para eliminar un perfil
export const deleteProfile = async (req, res) => {
  try {
    //consulta a travez del modelo Pirate
    //el id va a venir desde req.params.id
    const profileRemove = await Pirate.findByIdAndDelete(req.params.id);

    // validacion si no retorna la publicacion es porque no se encontro nada
    // enviara un codigo de status 404
    if (!profileRemove) return res.sendStatus(404);

    //cuando se elimina un perfiltambiense tiene que elimina la imagen alojada en cloudinary
    //si el post fue eliminado continuar aqui
    //primero validar si existe imagen en el perfil
    if (profileRemove.image.public_id){
      await deleteImage(profileRemove.image.public_id) 
    }

    //evita que envia un string, de esa forma el usuario sabe si elimino le
    //retorna un codigo "204" y si no se encontro ese id retorna "404"
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
