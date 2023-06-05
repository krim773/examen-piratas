import React from "react";
import { Link } from "react-router-dom";

const PirateList = ({ pirates, handleDelete }) => {
  return (
    <div className="contenedorPiratas">
      {pirates &&
        pirates.map((pirate) => (
          <div key={pirate._id} className="listaPiratas">
            <div>
              <img className="miniaturaPirata" src={pirate.image} alt={pirate.pirateName} />
            </div>
            <div className="contenedorNombrePirata">
              <div>
                <h2>{pirate.pirateName}</h2>
              </div>
              <div className="contenedorBotones">
                <span>
                <Link className="button-link" to={`/profile/${pirate._id}`}>View Pirate</Link>

                </span>
                <button className="button-delete" onClick={() => handleDelete(pirate._id)}>
                  Walk the Plank
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PirateList;
