const express = require("express");
const models = require("../models");
const app = express();
const port = 3000;

app.get("/hey", (req, res) => res.send("hello!"));

app.get("/home", (req, res) => {
  models.Journals.findAll().then(journals => res.json(journals));
});

app.post("/add", (req, res) => {
  models.Journals.create({
    title: req.body.title,
    content: req.body.content,
    createdAt: req.body.createdAt
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
