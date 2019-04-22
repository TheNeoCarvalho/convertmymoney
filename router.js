//importando express
const express = require("express");
//usando modulo de rota
const routes = express.Router();
//definindo endpoints
routes.get("/", (req, res) => {
  res.send("Raiz");
});

routes.get("/opa", (req, res) => {
  res.render("home");
});

//exportando modulo routes
module.exports = routes;
