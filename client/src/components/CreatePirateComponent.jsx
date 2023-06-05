import React, { useEffect, useState } from "react";
import { createPiratesRequest, getPiratesRequests } from "../api/pirates";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast" 


// creacion del componente para crear los piratas
const CreatePirateComponent = () => {
  const [captainExists, setCaptainExists] = useState(false);

  


  // Llamada a getPiratesRequests para obtener la lista de piratas
  useEffect(() => {
    const fetchPirates = async () => {
      const res = await getPiratesRequests();
      const pirates = res.data;
      const captainExists = pirates.some(
        (pirate) => pirate.crewPosition === "Captain"
      );
      setCaptainExists(captainExists);
    };
    fetchPirates();
  }, []);

  //llamada a createPiratesRequest y creacion de funcion para crear perfiles
  const crearPerfil = async (profile) => {
    const res = await createPiratesRequest(profile);
    console.log(res.data);
    toast('Usuario creado satisfatoriamente');
  };

  return (
    <>
      <Formik
        initialValues={{
          pirateName: "",
          teasureChest: 0,
          image: "",
          piratePhrases: "",
          crewPosition: "",
          pegLeg: false,
          eyePatch: false,
          hookHand: false,
        }}
        // validar con yup
        validationSchema={Yup.object({
          pirateName: Yup.string()
            .required("Escribe el nombre del pirata gar gar!")
            .min(3, "El nombre tiene que ser mas largo"),
          piratePhrases: Yup.string()
            .required("Escribe la frase de este pirata")
            .min(3, "La frase tiene que ser mas larga"),
          image: Yup.string()
            .url("la url no es valida")
            .required("ingrese una  url valida")
            .min(3, "la url debe ser mas larga"),
          teasureChest: Yup.number()
          .integer("Debe ser un número entero")
          .min(0, "Ingrese un número igual o mayor a cero")
          .required("Ingrese un número positivo o cero"),
          crewPosition: Yup.string().required("descripcion es necesaria!"),
          pegLeg: Yup.boolean().required("El campo pegLeg es obligatorio"),
          eyePatch: Yup.boolean().required("El campo eyePatch es obligatorio"),
          hookHand: Yup.boolean().required("El campo hookHand es obligatorio"),
        })}
        // esta funcioncapturara los datos enviados
        onSubmit={(values, actions) => {
          // validacion para ver si ya existe un capitan
          if (values.crewPosition === "Captain" && captainExists) {
            actions.setFieldError(
              "crewPosition",
              "Ya existe un capitán registrado"
            );
          } else {
            console.log(values);
            crearPerfil(values);
            

          }
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="formPirate">
            <div className="leftColumn">
              <div>
                <label htmlFor="pirateName">Pirate Name</label>
              </div>
              <Field id="pirateName" name="pirateName" placeholder="nombre.." className="cajas"/>
              <ErrorMessage
                name="pirateName"
                component="p"
                className="errorForm"
              />

              <div>
                <label htmlFor="image">Image URL</label>
              </div>
              <Field id="image"  name="image" placeholder="url.." className="cajas" />
              <ErrorMessage name="image" component="p" className="errorForm" />

              <div>
                <label htmlFor="teasureChest"># of Treasure Chests:</label>
              </div>
              <Field name="teasureChest" id="teasureChest" type="number" placeholder="tipo.." className="cajas" />
              <ErrorMessage
                name="teasureChest"
                component="p"
                className="errorForm"
              />

              <div>
                <label htmlFor="piratePhrases">Pirate catch phrase</label>
              </div>
              <Field name="piratePhrases" id="piratePhrases" type="text" placeholder="phrase..." className="cajas"/>
              <ErrorMessage
                name="piratePhrases"
                component="p"
                className="errorForm"
              />
            </div>
            <div className="rigthColumn">
              <div >
                <div className="checks">
                  <label htmlFor="crewPosition">Crew Position:</label>
                </div>
                <div>
                  <Field id="crewPosition"name="crewPosition" as="select" className="cajas">
                    <option value="">Selecciona una opción</option>
                    <option value="Captain">Captain</option>
                    <option value="Firs Mate">First Mate</option>
                    <option value="Quarter Master">Quarter Master</option>
                    <option value="Boatswain">Boatswain</option>
                    <option value="Powder Monkey">Powder Monkey</option>
                  </Field>
                  <ErrorMessage
                    name="crewPosition"
                    component="p"
                    className="errorForm"
                  />
                </div>
              </div>

              <div>
              <div className="checks">
                <label htmlFor="pegLeg">Peg Leg</label>
                <Field id="pegLeg" name="pegLeg" type="checkbox" />
                <ErrorMessage
                  name="pegLeg"
                  className="errorForm"
                  component="p"
                />
              </div>

              <div className="checks">
                <label htmlFor="eyePatch">Eye Patch</label>
                <Field id="eyePatch" name="eyePatch" type="checkbox" />
                <ErrorMessage
                  name="eyePatch"
                  className="errorForm"
                  component="p"
                />
              </div>

              <div className="checks">
                <label htmlFor="hookHand">Hook Hand</label>
                <Field name="hookHand" id="hookHand" type="checkbox" />
                <ErrorMessage
                  name="hookHand"
                  className="errorForm"
                  component="p"
                />
              </div>
              <button type="submit" className="button-link">
                Add Pirate
              </button>
              </div>

              
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CreatePirateComponent;
