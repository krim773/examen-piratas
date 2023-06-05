import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { VscEmptyWindow } from "react-icons/vsc";
import PirateList from "../components/PirateList";
import { deletePirateRequest, getPiratesRequests } from "../api/pirates";
import  toast  from "react-hot-toast";



const Home = () => {
  const [pirates, setPirates] = useState([]);
  //traer las publcaciones del servidor
  const [deletedPirate, setDeletedPirate] = useState(null);
  //usestate para escuchar cambios por si se elimino algun pirata




  const getPirates = async () => {
    const res = await getPiratesRequests();
    setPirates(res.data);
    console.log(res.data);
  };

  //ejecutandose con eluseeffect
  useEffect(() => {
    getPirates();
  }, []);








  // -----Eliminar-----

  //   eliminar por id
  const handleDelete = (_id) => {
    toast((t) => (
      <div>
        <p>
          Estas seguro que quieres hacerlo saltar??<strong>{_id}</strong>
        </p>
        <div>
        <button className="button-delete" onClick={() => {
          deletePerfil(_id);
          toast.dismiss(t.id);
        }}>
            WAAAALK THE PLANK!!!!.
          </button>

          <button className="button-link" onClick={() => toast.dismiss(t.id)}>No, me equivoque.</button>
        </div>
      </div>
    ));
  };







  //eliminar del servidor
  const deletePerfil = async (id) => {
    const res = await deletePirateRequest(id);
    console.log(res);
        // Actualizar el estado de deletedPirate para que el useEffect se ejecute nuevamente
    setDeletedPirate(id)
  };



  useEffect(() => {
    getPirates()
  }, [deletedPirate])
  
  

  //por si aun no se agreegaron piratas
  if (pirates.length === 0)
    return (
      <div className="container">
        <Header />
        <VscEmptyWindow className="iconoEmpty" />
        <h3>Aun no hay piratas</h3>
      </div>
    );

  return (
    <div className="container">
      <Header />
      <PirateList pirates={pirates} handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
