import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPiratesRequests } from "../api/pirates";
import TogglePegLegButton from "./TogglePegButton";
import ToggleEyePatchButton from "./ToggleEyePatchButton";
import ToggleHookHandButton from "./ToggleHookHand";
import { HeaderCard } from "./HeaderCard";

const PirateCard = () => {
  const { id } = useParams();
  console.log(id);

  const [publicaciones, setPublicaciones] = useState([]);
  //traer las publcaciones del servidor
  const getPublicaciones = async () => {
    const res = await getPiratesRequests();
    setPublicaciones(res.data);
  };

  //ejecutandose con el useffect
  useEffect(() => {
    getPublicaciones();
  }, []);

  const buscarPorId = async (idBuscado, data) => {
    return await data.some((objeto) => objeto._id === idBuscado);
  };

  const existeID = buscarPorId(id, publicaciones);
  console.log(existeID);

  const recibirPorId = (idBuscado, data) => {
    // Utilizamos el método find() en el array data para encontrar el objeto que tenga un _id igual al idBuscado
    const objetoCapturado = data.find((objeto) => objeto._id === idBuscado);
    console.log(objetoCapturado);
    return objetoCapturado;
  };

  // refrescar los datos despues de cambiar de true a false
  const refreshData = () => {
    getPublicaciones();
  };
  
  

  useEffect(() => {
    // Actualizar los datos cuando exista un cambio en el estado 'publicaciones'
    if (existeID) {
      const pirataCapturadoPorId = recibirPorId(id, publicaciones);
      console.log(pirataCapturadoPorId);
    }
  }, [existeID, id, publicaciones]);
  


  if (existeID) {
    const pirataCapturadoPorId = recibirPorId(id, publicaciones);
    console.log(pirataCapturadoPorId);

    return (
      <>
        {pirataCapturadoPorId?.pirateName ? (
          <div className="container">
            
            <HeaderCard NombrePirata={pirataCapturadoPorId.pirateName}/>
            
            <div  className="contenedorCard">

            <div className="leftCard">
              <h2>"{pirataCapturadoPorId.piratePhrases}"</h2>
              
              <img
                src={pirataCapturadoPorId.image}
                alt="Foto de perfil del pirata"
              />

            </div>
            <div></div>
            <div>
              <div>
                <h2>About</h2>
                <div>
                  <p>
                    Position: <span>{pirataCapturadoPorId.pirateName}</span>
                  </p>
                  <p>
                    Teasures: <span>{pirataCapturadoPorId.teasureChest}</span>{" "}
                  </p>
                  <p>
                    Peg Leg:{" "}
                    <span>{pirataCapturadoPorId.pegLeg ? "YES" : "NO"}</span>
                  </p>
                  <TogglePegLegButton
                    pirateId={id}
                    initialPegLeg={pirataCapturadoPorId.pegLeg}
                    refreshData={refreshData}
                  />

                  <p>
                    Eye Patch:{" "}
                    <span>{pirataCapturadoPorId.eyePatch ? "YES" : "NO"}</span>
                  </p>
                   <ToggleEyePatchButton
                    pirateId={id}
                    initialEyePatch={pirataCapturadoPorId.eyePatch}
                    refreshData={refreshData}
                   />
                  <p>
                    Hook Hand:{" "}
                    <span>{pirataCapturadoPorId.hookHand ? "YES" : "NO"}</span>
                  </p>
                    <ToggleHookHandButton 
                      pirateId={id}
                      initialHookHand={pirataCapturadoPorId.hookHand}
                      refreshData={refreshData}
                    />
                </div>
              </div>
            </div>

            </div>
            
                      </div>
        ) : (
          <div>
            <h1>PIRATES</h1>
            <h2>
              el id
              <span style={{ color: "blue" }}> {id}</span> no ha sido encontrado
            </h2>
          </div>
        )}
      </>
    );
  }
};

export default PirateCard;
