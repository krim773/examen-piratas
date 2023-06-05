import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerPirates">
      <div className="titulo-contenedor">
        <h1>Pirate Crew</h1>
      </div>
      <span>
        <Link className="button-link" to={`/create`}>
          Agregar Pirata
        </Link>
      </span>
    </div>
  );
};

export default Header;
