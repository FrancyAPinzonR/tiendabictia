// Modulos internos
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
// Esquema, construye la coleccion
const esquemaTendero = new mongoose.Schema({
  nombre: String,
  correo: String,
  pass: String,
  fecha: {
    type: Date,
    default: Date.now,
  },
});
// Genera el JWT
esquemaTendero.methods.generateJWT = function () {
  return jwt.sign({
    _id: this._id,
    nombre: this.nombre,
    correo: this.correo,
  },
  "secretkeytendero"
  );
};
// Crean los exports
const Tendero = mongoose.model("tendero", esquemaTendero);
module.exports.Tendero = Tendero;
// En caso de que se necesite
module.exports.esquemaTendero = esquemaTendero;