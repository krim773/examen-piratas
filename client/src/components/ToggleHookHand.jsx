import React, { useState } from "react";
import axios from "axios"; // Importa Axios



const ToggleHookHandButton = ({ pirateId, initialHookHand, refreshData}) => {
  const [hookHand, setHookHand] = useState(initialHookHand);

  // Función para manejar el cambio de estado del hook hand
  const toggleHookHand = async () => {
    try {
      // Cambia el valor del hook hand localmente
      setHookHand(!hookHand);

      // Actualiza el valor del hook hand en el backend utilizando Axios
      await axios.put(`/edit/${pirateId}`, { hookHand: !hookHand });
      console.log("Peg leg actualizado correctamente");
      refreshData();
    } catch (error) {
      console.error("Error al actualizar el hook hand:", error);
      // Vuelve a establecer el valor original del hook hand en caso de error
      setHookHand(initialHookHand);
      // Actualizar los datos en el componente padre llamando a la función refreshData
      refreshData();
    }
  };

  return (
    <button onClick={toggleHookHand} className="button-link ">
      {hookHand ? "Remove hook hand" : "Add hook hand"}
    </button>
  );
};

export default ToggleHookHandButton;