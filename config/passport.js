var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth2').Strategy;
const keys = require("./keys");

module.exports = function (passport){
  passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "http://localhost:3000/auth/google/callback",
    proxy: true
  },
  function(accessToken, refreshToken, profile, done) {
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return done(err, user);
      });
  }
  ));

  passport.serializeUser(function(user, done) {
  done(null, user);
  });

  passport.deserializeUser(function(user, done) {
  done(null, user);
  });
}