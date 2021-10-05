const bcrypt = require('bcryptjs')
const User = require("../../models/user");

const resetPassword = async (req, res, next) => {
    try {
        const user = await User.findOne({
            OTP: req.body.OTP
        });
        if (!user) return res.status(404).send({ message: "Invalid OTP!" });
        
        const {newPassword} = req.body
        
        const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(newPassword, salt);

            await User.updateOne(
              { _id: user._id },
              { $set: { password: hash } },
              { new: true },
            );
        
            user.OTP = undefined;
            await user.save();
    
        return res.status(200).json({ message: 'Password changed successfully' })
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "Internal server error " });
    }
}

module.exports = resetPassword;
