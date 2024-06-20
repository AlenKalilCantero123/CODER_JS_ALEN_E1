

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const { router } = require("../back/src/routes/index.js");

const app = express();


app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(router); // Cambiado a '/api' para manejar rutas

module.exports = {
  app
};
