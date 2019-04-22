//importando express
const express = require("express");
const path = require("path");
//criando app
const app = express();

//definindo porta
const port = process.env.PORT || 3000;
//refatorando rotas
const routes = require("./router");

app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());

//definindo o uso do ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//definindo pasta publica
app.use(express.static(path.join(__dirname, "public")));

//usando routes
app.use(routes);
//escutando a porta

app.listen(port, () => {
  console.log(`Server is On on port ${port}`);
});
