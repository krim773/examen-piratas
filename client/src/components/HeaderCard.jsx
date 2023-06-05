import React from "react";
import { Link } from "react-router-dom";

export const HeaderCard = ({ NombrePirata }) => {
  return (
    <div className="headerPirates">
      <div className="titulo-contenedor">
        <h1>{NombrePirata}</h1>
      </div>
      <span>
        <Link className="button-link" to={`/`}>
          Volver al inicio
        </Link>
      </span>
    </div>
  );
};
