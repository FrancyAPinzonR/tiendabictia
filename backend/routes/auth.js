// Modulos de Node
const express = require("express");
const router = express.Router();
// Modulos Internos
const { Tendero } = require("../model/tendero");
// Ruta
router.post("/", async (req, res) => {
  // Valida que el correo exista
  const tendero = await Tendero.findOne({ correo: req.body.correo });
  // Si el correo no existe- ingreso incorrecto
  if (!tendero) return res.status(400).send("Correo o contrasena invalido");
  // Si el pass no existe
  if (tendero.pass !== req.body.pass)
    return res.status(400).send("Correo o contrasena invalido");
  // Generamos un JWT
  const jwtToken = tendero.generateJWT();
  res.status(200).send({ jwtToken });
});
module.exports = router;