const User = require("../../models/user");

const verification = async (req, res, next) => {
    try {
        const user = await User.findOne({
            verificationCode: req.params.verificationCode
        });
        if (!user) return res.status(404).send({ message: "User doesn't exist!!" });
        user.verificationStatus = "Active";
        await user.save();
        return res.status(200).send({ message: "Confirmed" });
    } catch (error) {
        res.status(500).send({ message: "Internal server error " });
    }
}

module.exports = verification;