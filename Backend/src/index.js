//habilitar express
const express = require("express");
const res = require("express/lib/response");
require("dotenv").config();
require("./database");
const app = express();
const port = 9000;

app.use(express.json());

//Rutas
app.use("/",require("./routers/rtrUsuarios"));

app.listen(port, (req, res) => {
  console.log("Hola, soy el puerto de OmegaPetShop");
});
