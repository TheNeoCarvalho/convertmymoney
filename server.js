//importando express
const express = require("express");
//criando app
const app = express();

//definindo porta
const port = process.env.PORT || 3000;
//refatorando rotas
const routes = require("./router");
//definindo o uso do ejs

app.set("view engine", "ejs");
//usando routes

app.use(routes);
//escutando a porta

app.listen(port, () => {
  console.log(`Server is On on port ${port}`);
});
