const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const nodemailer = require('../../config/nodemail.config')
const User = require('../../models/user')


const forgotPassword = async (req, res, next) => {
    try {
        const { username, email, newPassword, confirmPassword } = req.body
         
        // verifyToken automatically sets userId in HTTP request
         

        const user = await User.findOne({ $or: [{email}, {username}] })

         if(user){
            if (newPassword != confirmPassword)
                {
                return res.status(401).json({ message: 'password & confirm password are not matching!' })
                }

            const OTP = Math.floor(10000 + Math.random() * 9000)
            console.log(OTP)
            user.OTP = OTP;
            await user.save();
           
            nodemailer.sendResetPasswordMail(user.username, user.email, OTP);

    
            return res.status(201).json({ message: 'please check the link in your email to change the password!' });
         }
         
        
         return res.status(401).json({ message: 'This email or username is not registered!' })
        
    } catch (error) {
        // console.log(error)
        return res.status(500).json({ message: 'Internal server error!' })
    }
};

module.exports = forgotPassword;