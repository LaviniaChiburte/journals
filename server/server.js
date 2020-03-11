const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const port = 8080;

const bodyParser = require("body-parser");
const cors = require("cors");
const models = require("./models");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");

app.use(bodyParser.urlencoded({ extended: false })); //For body parser
app.use(bodyParser.json());

app.use(express.json());
app.use(cors());

app.use(cookieParser());

//Passport
app.use(
  session({
    secret: "something",
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());
require("./services/passport");

//Get all users
app.get("/users", function(req, res) {
  models.User.findAll().then(user => res.json(user));
});

//Sign up
app.post("/signupUser", (req, res) => {
  // console.log(req.body);
  models.User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })
    .then(user => res.json({ user, msg: "account created successfully" }))
    .catch(console.log);
});

//Login
app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  models.User.findOne({ where: { email: email, password: password } }).then(
    user => {
      if (!user) {
        res.status(404).send("Not found");
      } else {
        const { id, name, email } = user;

        const payload = { id, name, email };

        const token = jwt.sign(payload, "change-this-secret");

        res.send({ user: payload, token });
      }
    }
  );
});

// Routes for journals
app.get("/journals", passport.authenticate("jwt"), (req, res) => {
  console.clear();
  console.log(req.user.id);
  models.Journal.findAll({ where: { id_user: req.user.id } }).then(journals =>
    res.json(journals)
  );
});

app.post("/journals", passport.authenticate("jwt"), (req, res) => {
  req.user;
  req.user.id;
  console.log(req.body);
  models.Journal.create({
    title: req.body.title,
    createAt: req.body.createdAt,
    content: req.body.content,
    id_user: req.user.id
  }).then(journal => res.json(journal));
});

app.delete("/journals/:id", passport.authenticate("jwt"), (req, res) => {
  const idJournal = req.params.id;
  models.Journal.findByPk(req.param.id).then(journal => {
    if (journal.id_user === req.user.id) {
      models.Journal.destroy({
        where: {
          id: idJournal
        }
      }).then(journal => res.json(journal));
    }
  });
});

//Sync database
models.sequelize.sync().then(() =>
  app.listen(port, err => {
    if (err) {
      throw new Error("Something is not working...");
    }

    console.log(`all set on ${port}`);
  })
);
