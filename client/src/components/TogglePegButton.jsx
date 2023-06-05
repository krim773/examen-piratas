import React, { useState } from "react";
import axios from "axios"; // Importa Axios

const TogglePegLegButton = ({ pirateId, initialPegLeg, refreshData}) => {
  const [pegLeg, setPegLeg] = useState(initialPegLeg);

  // Función para manejar el cambio de estado del peg leg
  const togglePegLeg = async () => {
    try {
      // Cambia el valor del peg leg localmente
      setPegLeg(!pegLeg);

      // Actualiza el valor del peg leg en el backend utilizando Axios
      await axios.put(`/edit/${pirateId}`, { pegLeg: !pegLeg });
      console.log("Peg leg actualizado correctamente");
      refreshData();
    } catch (error) {
      console.error("Error al actualizar el peg leg:", error);
      // Vuelve a establecer el valor original del peg leg en caso de error
      setPegLeg(initialPegLeg);
      // Actualizar los datos en el componente padre llamando a la función refreshData
      refreshData();
    }
  };

  return (
    <button onClick={togglePegLeg} className="button-link ">
      {pegLeg ? "Remove Peg Leg" : "Add Peg Leg"}
    </button>
  );
};

export default TogglePegLegButton;