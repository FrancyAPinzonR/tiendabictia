// Modulos Node js
const express = require("express");
// router es una propiedad de express
const router = express.Router();
// Modulos Internos
const { Tendero } = require("../model/tendero");
// Ruta
router.post("/", async (req, res) => {
  let tendero = await Tendero.findOne({ correo: req.body.correo });
  // Si encuentra el correo en BD
  if (tendero)
    return res.status(400).send("El correo del tendero ya existe");
  // Si el correo no existe en BD
  tendero = new Tendero({
    nombre: req.body.nombre,
    correo: req.body.correo,
    pass: req.body.pass,
  });
  // Guarda el tendero a crear con el JWT
  const result = await tendero.save();
  const jwtToken = tendero.generateJWT();
  res.status(200).send({ jwtToken });
});
// Exports
module.exports = router;