// Modulo de Node
const jwt = require("jsonwebtoken");
// Identifica el usuario logueado y todos los procesos
function auth(req, res, next) {
  let jwtToken = req.header("Authorization");
  // Split al JWT para separar el Beare que pone por defecto el header del Auth
  jwtToken = jwtToken.split(" ")[1];
  // Si el token no existe
  if (!jwtToken) return res.status(417).send("No hay token para un acceso");
  // si el token existe
  try {
    const payload = jwt.verify(jwtToken, "secretkeytendero");
    req.tendero = payload;
    next();
  } catch (error) {
    res.status(417).send("Token sin autorizacion");
  }
}
// Exports
module.exports = auth;