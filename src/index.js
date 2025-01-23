const express = require("express");
const { engine } = require("express-handlebars");
const app = express();
const path = require("path");
const db = require("./db/connection");
const jobs = require("./routes/jobs");
const bodyParser = require("body-parser");
const Job = require("./models/Job");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const port = 3000;

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
  let search = req.query.job;
  let query = `%${search}%`;

  if (!search) {
    Job.findAll({ order: [["createdAt", "DESC"]] })
      .then((jobs) => {
        res.render("index", { jobs });
      })
      .catch((err) => console.log(err));
  } else {
    Job.findAll({
      where: { title: { [Op.like]: query } },
      order: [["createdAt", "DESC"]],
    })
      .then((jobs) => {
        res.render("index", { jobs, search });
      })
      .catch((err) => console.log(err));
  }
});

// db connect
db.authenticate()
  .then(() => {
    console.log("Banco de dados ligado ao Client");
  })
  .catch((err) => console.log("Error: " + err));

// jobs routes
app.use("/jobs", jobs);

export default (req, res) => {
  return app(req, res);
};
