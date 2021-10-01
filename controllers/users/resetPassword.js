const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/user");

const resetPassword = async (req, res, next) => {
  try {
    const { email, username, password, newPassword } = req.body;
    const user = await User.findOne({ $or: [{ email }, { username }] });

    if (!user) {
      return res.status(404).json({ message: "Email or password is wrong!" });
    }

    // Compare old password
    if (bcrypt.compareSync(password, user.password)) {
      // Encrypt new password
      const salt = bcryptjs.genSaltSync();
      user.password = bcryptjs.hashSync(newPassword, salt);

      // Save it on DB
      await user.save(function (err) {
        if (err) {
          console.error("Error! : " + err);
          return res.status(500).json({ message: "Internal server error!" });
        }
      });

      return res.status(202).json({ message: "Password changed successful!" });
    }
    return res.status(401).json({ message: "Email or password is wrong!" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error!" });
  }
};

module.exports = resetPassword;
