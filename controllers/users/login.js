const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../../models/user')


const login = async (req, res, next) => {
    try {
        const { email, username, password } = req.body
        const user = await User.findOne({ $or: [{email}, {username}] })
        if (!user) {
            return res.status(404).json({ message: 'Email or password is wrong!' })
        }
        if (bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET)
            res.cookie('token', token, { maxAge: 7 * 24 * 60 * 60 * 1000, httpOny: true }) // 7 days
            return res.status(200).json({ message: "Login successful!" })
        }

    
        return res.status(401).json({ message: 'Email or password is wrong!' })
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error!' })
    }
};

module.exports = login;