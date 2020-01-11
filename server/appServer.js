const express = require("express");
const models = require("../models");
const app = express();

app.get("/hey", (req, res) => res.send("ho!"));

models.sequelize
  .sync()
  .then(() =>
    app.listen(8080, () => console.log(`App listening on port 8080`))
  );
