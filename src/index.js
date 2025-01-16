const express = require("express");
const { engine } = require("express-handlebars");
const app = express();
const path = require("path");
const db = require("./db/connection");
const jobs = require("./routes/jobs");
const bodyParser = require("body-parser");

const port = 8080;

app.listen(port, () => {
  console.log("Sevidor ligado");
});

// body parser

app.use(bodyParser.urlencoded({ extended: false }));

// handlebars

app.set("views", path.join(__dirname, "views"));
app.engine(".hbs", engine({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", ".hbs");

// static files

app.use(express.static(path.join(__dirname, "public")));

// routes
app.get("/", (req, res) => {
  res.render("index");
});

// db
db.authenticate()
  .then(() => {
    console.log("Banco de dados ligado ao Client");
  })
  .catch((err) => console.log("Error: " + err));

// jobs routes
app.use("/jobs", jobs);
