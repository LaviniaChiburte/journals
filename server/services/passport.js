// services/passport.js
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");

//from
const testUser = {
  email: "user@user.com",
  password: "0000"
};

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use(
  new LocalStrategy({ usernameField: "email" }, (email, password, next) => {
    User.findByEmailAndPassword(email, password, (err, user, fields) => {
      if (err) return next(err);

      if (!user) return next(null, false);

      return next(null, user);
    });
  })
);

//finish

passport.use(
  new LocalStrategy({ usernameField: "email" }, (email, password, next) => {
    User.findByEmailAndPassword(email, password, (err, user) => {
      if (email === testUser.email && password === testUser.password) {
        return done(null, { username: email });
      }
      if (err) {
        done(null, false, { message: "wrong" });
      }
      if (!user) done(null, false);
      done(null, user);
    });
  })
);
