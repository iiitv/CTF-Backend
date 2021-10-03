const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../../models/user')
const { validationResult } = require('express-validator')
const nodemailer = require('../../config/nodemail.config')
require('dotenv').config()

const signup = async (req, res, next) => {
    try {
        //Req go through validation and spit out any input errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ message: errors.array() });
        const { email, username, password } = req.body;
        const user = await User.findOne({ $or: [{ email }, { username }] })
        // 422 If resource already exists.
        if (user) return res.status(422).json({ message: 'User already registered' });
        const newUser = new User({ username, email, password });
        const salt = await bcrypt.genSalt(10);
        // Hash user password
        newUser.password = await bcrypt.hash(password, salt);
        const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET);
        newUser.verificationCode = token;
        await newUser.save();
        res.cookie('token', token, { maxAge: 7 * 24 * 60 * 60 * 1000, httpOny: true });
        res.status(201).json({ message: 'Successfully registered. Please check your inbox' });
        nodemailer.sendVerificationMail(newUser.username, newUser.email, token);
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error!' })
    }
};

module.exports = signup;
