import React from 'react'
import toast from "react-hot-toast";



    //   eliminar por id
export const handleDelete = (_id) => {
    toast((t) => (
        <div>
            <p>Estas seguro que que adoptaste a esta mascota??<strong>{_id}</strong></p>
            <div>
                <button className="handleDel" onClick={() => deletePerfil(_id)}>
                    Si, lo adopte.
                </button>

                <button onClick={() => toast.dismiss(t.id)}>
                    No, me equivoque.
                </button>
                
            </div>
        </div>
    ))
}



//eliminar del servidor
export const deletePerfil = async (id) =>{
    const res = await deleteProfileRequest(id)
    console.log(res);
}


