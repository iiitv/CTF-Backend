const express = require('express');
const router = express.Router();
const { auth } = require('../middlewares/index');

const adminDash = (req, res) => {
  res.status(200).send("Admin Content.");
};

const userDash = (req, res) => {
  res.status(200).send("User Content.");
};

/* GET home page. */
router.get('/',[auth.verifyToken], function (req, res) {
  res.render('index', { title: 'Express' });
});

router.get("/api/test/user", [auth.verifyToken], userDash);

router.get(
  "/api/test/admin",
  [auth.verifyToken, auth.isAdmin],
  adminDash
);

module.exports = router;
