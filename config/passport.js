require("dotenv").config();
var passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/user')


passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACKURL,
    userProfileURL:"https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken, profile, cb) {
    //not a mongoose function
    // console.log(profile)
        User.findOrCreate({username: profile.id}, { email:  profile._json.name , password: profile.id  }, function (err, user) {
        //   console.log(user)
          return cb(err, user);
        });
      }
));

module.exports = passport;