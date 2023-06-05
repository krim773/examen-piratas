// modelacion de datos que se estaran guardando

import mongoose from "mongoose";

//objeto schema que recibe un objeto como parametro en el que se le va a pasar las propiedaddes que se quieren guardar

//trim es para sacar los epsacios de ambos lados, ejemplo "    hola   " => "hola"
const pirateSchema = new mongoose.Schema({
  // petName
  pirateName: {
    type: String,
    required: true,
    trim: true,
  },

  image: {
    type: String,
    required: true
  },
  // petType
  teasureChest: {
    type: Number,
    required: true,
    trim: true,
  },
  piratePhrases:{
    type: String,
    required: true,
    trim: true,
  },
  // petDescription
  crewPosition: {
    type: String,
    required: true,
    trim: true,
  },
  pegLeg: {
    type: Boolean,
    required: true,
  },

  eyePatch: {
    type: Boolean,
    required: true,
  },

  hookHand: {
    type: Boolean,
    required: true,
  },
});

export default mongoose.model("Pirate", pirateSchema);
