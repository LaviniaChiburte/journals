const express = require("express");

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
    .then(res.redirect("/login"))
    .catch(console.log);
});

// Login
// app.post(
//   "/login",
//   passport.authenticate("local"),

//   function(req, res) {
//     console.log(req.user);

//     res.redirect("/");
//   }
// );

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  models.User.findOne({ where: { email: email, password: password } }).then(
    user => {
      if (!user) {
        res.status(404).send("Not found");
      } else {
        console.log(user);
      }
    }
  );
});

// Route for logging user out
app.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

// Routes for journals
app.get("/journals", (req, res) => {
  models.Journal.findAll({ where: { id_user: 0 } }).then(journals =>
    res.json(journals)
  );
});

app.post("/add", (req, res) => {
  console.log(req.body);
  models.Journal.create({
    title: req.body.title,
    createAt: req.body.createdAt,
    content: req.body.content
  }).then(journal => res.json(journal));
});

app.delete("/journals/:id", (req, res) => {
  const idJournal = req.params.id;
  console.log(idJournal);
  models.Journal.destroy({
    where: {
      id: idJournal
    }
  }).then(journal => res.json(journal));
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
