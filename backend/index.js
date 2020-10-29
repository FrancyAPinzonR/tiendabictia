// Modulos Node
const express = require("express");
const mongoose = require("mongoose");
// Modulos internos
const tendero = require("./routes/tendero");
const auth = require("./routes/auth");
const producto = require("./routes/producto");
// App
const app = express();
app.use(express.json());
app.use("/api/tendero/", tendero);
app.use("/api/auth/", auth);
app.use("/api/producto/", producto);
// Puerto para ejecutar el servidor
const port = process.env.PORT || 3000;
app.listen(3000, () => console.log("Ejecutando en el puerto: " + port));
// Conexion con MongoDB
mongoose
  .connect("mongodb://localhost/tiendabictia", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })

  .then(() => console.log("Conexion exitosa a Mongo DB: Online"))
  .catch((error) => console.log("Conexion fallida a MongoDB: Offline"));