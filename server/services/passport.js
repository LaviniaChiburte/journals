// services/passport.js
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const db = require("../models");

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  db.User.findOne({ id }).then(function(user) {
    done(null, user);
  });
});

passport.use(
  new LocalStrategy(
    { usernameField: "email" },

    function(email, password, done) {
      const user = db.User.findOne(user => user.email === email);

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

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: "change-this-secret"
    },

    function(jwtPayload, done) {
      const user = db.User.findByPk(jwtPayload.id)
        .then(function(user) {
          if (!user) {
            done(null, false, { message: "No such user." });
            return;
          }

          done(null, user);
        })
        .catch(function(err) {
          done(err, false);
        });
    }
  )
);
