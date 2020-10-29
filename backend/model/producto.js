// Modulos internos
const mogoose = require("mongoose");
// Esquema
const esquemaProducto = new mogoose.Schema({
  nombre: String,
  tipo: String,
  precio: Number,
  idTendero: String,
  fecha: {
    type: Date,
    default: Date.now,
  },
});

// Crean los exports
const Producto = mogoose.model("producto", esquemaProducto);
module.exports = Producto;
