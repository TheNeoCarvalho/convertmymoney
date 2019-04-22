//importando express
const express = require("express");
//usando modulo de rota
const routes = express.Router();
//definindo endpoints
routes.get("/", (req, res) => {
  res.render("home");
});

routes.post("/", (req, res) => {
  const { cotacao, valor } = req.body;
  res.render("result", { cotacao, valor });
});

//exportando modulo routes
module.exports = routes;
