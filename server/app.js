const express = require("express");
const cors = require("cors");

const models = require("./models");
const journalsRouter = require("./routers/journals-router");

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

// app.use("/journals", journalsRouter);

app.get("/hey", (req, res) => res.send("hello!"));

app.get("/journals", (req, res) => {
  models.Journal.findAll({ where: { id_user: 0 } }).then(journals => res.json(journals));
});

app.post("/add", (req, res) => {
  console.log(req.body);
  models.Journal.create({
    title: req.body.title,
    createAt: req.body.createdAt,
    content: req.body.content
  }).then(journal => res.json(journal));
});

app.post("/signupUser", (req, res) => {
  console.log(req.body);
  models.User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }).then(user => res.json(user))
  .catch(console.log);
});

app.get("/journals");
app.get("/journals/:id");
app.post("/journals");
app.delete("/journals/:id");
app.put("/journals/:id");

app.delete("/journals/:id", (req, res) => {
  const idJournal = req.params.id;
  console.log(idJournal);
  models.Journal.destroy({
    where: {
      id: idJournal
    }
  }).then(journal => res.json(journal));
});

models.sequelize.sync().then(() =>
  app.listen(port, err => {
    if (err) {
      throw new Error("Something is not working...");
    }

    console.log(`all set on ${port}`);
  })
);
