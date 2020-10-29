// Modulos de Node
const express = require("express");
const router = express.Router();
// Modulos internos
const Producto = require("../model/producto");
const { Tendero } = require("../model/tendero");
const auth = require("../middleware/auth");
// Ruta
router.post("/", auth, async (req, res) => {
  // Obtenemos el id del usuario autenticado
  // cambia findOne por findById
  const tendero = await Tendero.findById(req.tendero._id);
  // Si el usuario no existe
  if (!tendero) return res.status(400).send("El usuario no existe");
  // Si el usuario existe creamos una actividad para este usuario
  const producto = new Producto({
    nombre: req.body.nombre,
    tipo: req.body.tipo,
    precio: req.body.precio,
    idTendero: tendero._id,
  });
  // Envia el resultado
  const result = await producto.save();
  res.status(200).send(result);
});
module.exports = router;
