import React, { useState } from "react";
import axios from "axios"; // Importa Axios

const ToggleEyePatchButton = ({ pirateId, initialEyePatch, refreshData}) => {
  const [eyePatch, setEyePatch] = useState(initialEyePatch);

  // Función para manejar el cambio de estado del Eye Patch
  const toggleEyePatch = async () => {
    try {
      // Cambia el valor del Eye Patch localmente
      setEyePatch(!eyePatch);

      // Actualiza el valor del Eye Patch en el backend utilizando Axios
      await axios.put(`/edit/${pirateId}`, { eyePatch: !eyePatch });
      console.log("Eye Patch actualizado correctamente");
      refreshData();
    } catch (error) {
      console.error("Error al actualizar el Eye Patch:", error);
      // Vuelve a establecer el valor original del Eye Patch en caso de error
      setEyePatch(initialEyePatch);
      // Actualizar los datos en el componente padre llamando a la función refreshData
      refreshData();
    }
  };

  return (
    <button onClick={toggleEyePatch} className="button-link ">
      {eyePatch ? "Remove Eye Patch" : "Add Eye Patch"}
    </button>
  );
};

export default ToggleEyePatchButton;