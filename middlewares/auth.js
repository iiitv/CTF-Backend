const jwt = require('jsonwebtoken')
const User = require('../models/user')

verifyToken = (req, res, next) => {
  let token = req.headers["accesstoken"];
    // console.log(token+"HI")
    if (!token) {
      return res.status(403).send({ message: "No token provided!" });
    }
  
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).send({ message: "Unauthorized!" });
      }
      req.userId = decoded.id;
      next();
    });
  };

  isAdmin = (req, res, next) => {
    User.findById(req.userId).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
  
      if(user.isAdmin){
        next();
        return;
      }

      res.status(403).send({ message: "Require Admin Role!" });
      return;
    });
  };



const auth = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
}
module.exports = auth