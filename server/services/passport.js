// services/passport.js
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models/index");

const User = require("../models");

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  const user = db.users.find(user => user.id === id);

  done(null, user);
});

passport.use(
  new LocalStrategy(
    { usernameField: "email" },

    function(email, password, done) {
      const user = db.users.find(user => user.email === email);

      if (!user) {
        done(null, false, { message: "No such user." });
        return;
      }

      if (user.password !== password) {
        done(null, false, { message: "Wrong password." });
        return;
      }
      done(null, user);
    }
  )
);

// passport.use(
//   new LocalStrategy(
//     {
//       email: "email",
//       password: "password"
//     },

//     function(email, password, done) {
//       User.findOne({ email }, function(err, user) {
//         if (err) return done(err);
//         if (!user) return done(null, false, { message: "Incorrect username." });
//         if (!user.validPassword(password))
//           return done(null, false, { message: "Incorrect password." });
//         return done(null, user);
//       });
//     }
//   )
// );
