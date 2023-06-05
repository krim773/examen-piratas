import React from 'react'
import { Link } from 'react-router-dom'

const HeaderDeCreate = () => {
	return (
			<div className="headerPirates">
      <div className="titulo-contenedor">
        <h1>Add Pirate</h1>
      </div>
      <span>
        <Link className="button-link" to={`/`}>
          Volver a Inicio
        </Link>
      </span>
    </div>
	)
}

export default HeaderDeCreate
