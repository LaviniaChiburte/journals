const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

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
// app.post("/signupUser", (req, res) => {
//   const email = req.body.email;
//   const password = req.body.password;
//   models.User.findOne({ where: { email: email } }).then(user => {
//     if (user) {
//       return res.status(400).send("Email already exists");
//     } else {
//       const newUser = {
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password
//       };
//       bcrypt.genSalt(5, (err, salt) => {
//         bcrypt.hash(newUser.password, salt, (err, hash) => {
//           if (err) throw err;
//           newUser.password = hash;
//           newUser.then(user => res.json(user)).catch(err => console.log(err));
//         });
//       });

//       models.User.create(newUser)
//         .then(user => res.json({ user, msg: "account created successfully" }))
//         .catch(console.log);
//     }
//   });
// });

app.post("/signupUser", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  models.User.findOne({ where: { email: email } }).then(user => {
    if (user) {
      return res.status(400).send("Email already exists");
    } else {
      bcrypt.genSalt(5, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) throw err;
          models.User.create({
            name: req.body.name,
            email: req.body.email,
            password: hash
          })
            .then(user =>
              res.json({ user, msg: "account created successfully" })
            )
            .catch(console.log);
        });
      });
    }
  });
});

//Login
// app.post("/login", (req, res) => {
//   const email = req.body.email;
//   const password = req.body.password;
//   models.User.findOne({ where: { email: email, password: password } }).then(
//     user => {
//       if (!user) {
//         res.status(404).send("Not found");
//       } else {
//         const { id, name, email } = user;

//         const payload = { id, name, email };

//         const token = jwt.sign(payload, "change-this-secret");

//         res.send({ user: payload, token });
//       }
//     }
//   );
// });

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  models.User.findOne({ where: { email: email } }).then(user => {
    if (!user) {
      res.status(404).send("Not found");
    } else {
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          const { id, name, email } = user;

          const payload = { id, name, email };

          const token = jwt.sign(payload, "change-this-secret");

          res.send({ user: payload, token });
        } else {
          return res.status(400).json("Password incorrect");
        }
      });
    }
  });
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
