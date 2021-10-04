const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const  passport  = require('../config/passport')
const User = require('../models/user')

router.use(passport.initialize());
passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
      console.log(user)
    done(null, user);
  });



router.get('/auth/google', passport.authenticate("google", { scope: ["profile"] }))

//set this end point to the redirect uri of your google oauth
router.get("/auth/google/secrets",
passport.authenticate("google", {failureRedirect: "/login"}),
async function(req,res){
    try{
          // console.log(req)
          
          const user = await User.findOne({
              _id: req.user._id
          }) 
          const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
          console.log(user+" user")
          console.log(token+" here")
          res.cookie('token', token, { maxAge: 7 * 24 * 60 * 60 * 1000, httpOny: true }) // 7 days
        if (!user) return res.status(404).send({ message: "User doesn't exist!!" });
        user.verificationStatus = "Active";
        user.verificationCode = token
        await user.save();
        return res.status(200).json({ message: "Login successful!" })
    }
    catch (error) {
        res.status(500).send({ message: "Internal server error " });
    }
   
});

module.exports = router;