import axios from 'axios';


//cuando se haga elbuild generara una carptea y direactamente en express se realizara todo
//para no poner localhost,, en el json se agregara una propiedad solo para desarrollo
//getPiratesRequests función asíncrona que utiliza Axios para realizar una solicitud HTTP GET a la ruta "/home"...

export const getPiratesRequests = async () => await axios.get("/home");

// esta funcion es para crear piratas
export const createPiratesRequest = async (profile) => await axios.post("/new", profile);

//ruta del back donde se elimina los perfiles
export const deletePirateRequest = async id => await axios.delete("/perfil/" + id );

//ruta del back donde se recibe un id
export const getPirateProfileRequest = async id => await axios.get("/perfil/" + id )