const express = require("express");
const app = express();
const db = require("./db/connection");

const port = 8080;

app.listen(port, () => {
  console.log("Sevidor ligado");
});

// routes
app.get("/", (req, res) => {
  res.send("Testando Servidor");
});

// db
db.authenticate()
  .then(() => {
    console.log("Banco de dados ligado ao Client");
  })
  .catch((err) => console.log("Error: " + err));
