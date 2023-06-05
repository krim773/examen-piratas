import { v2 as cloudinary } from "cloudinary";

//donde se subiran los archivos
cloudinary.config({
    cloud_name: "djzafeqf7",
    api_key: "845877487243167",
    api_secret: "2VsteOSXugAY1qVuBw7VAULgBJk" 
})

export const uploadImage = async filePath => {
  //propiedad  v2 es la version del modulo
  //permire llamar el metodo upload que permite subir los archivos a cloudinary
  return await cloudinary.uploader.upload(filePath, {
    folder: 'piratas'
  });
};


//funcion para borrar la imagen alojada enclouddinary
export const deleteImage = async id => {
    return await cloudinary.uploader.destroy(id)
}