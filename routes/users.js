const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const { login, resetPassword } = require("../controllers/users");
router.get("/login", login);
router.put(
  "/:username/reset-password",
  [
    // TO DO: Midelwares to verify
    // like if the email is correct
    // if the oldPassword it's fine
    // check twice if the oldPassword it's correct
    // if the JWT it's ok
    // etc
  ],
  resetPassword
);

module.exports = router;
