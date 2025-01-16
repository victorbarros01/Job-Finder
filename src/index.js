const express = require("express");
const app = express();
const db = require("./db/connection");
const jobs = require("./routes/jobs");
const bodyParser = require("body-parser");

const port = 8080;

app.listen(port, () => {
  console.log("Sevidor ligado");
});

// body parser

app.use(bodyParser.urlencoded({ extended: false }));

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

// jobs routes
app.use("/jobs", jobs);
