

const express = require("express");
const { router } = require("../back/src/routes/index.js");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use(router); // Cambiado a '/api' para manejar rutas

module.exports = {
  app
};
