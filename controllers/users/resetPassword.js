const bcrypt = require('bcryptjs')
const User = require('../../models/user')


const resetPassword = async (req, res, next) => {
    try {
        const { currentPassword, newPassword, confirmPassword } = req.body
         
        // verifyToken automatically sets userId in HTTP request
         const userId = req.userId

         const user = await User.findById(userId)
         
         if (bcrypt.compareSync(currentPassword, user.password))
         {
            
            if (newPassword != confirmPassword)
                {
                return res.status(401).json({ message: 'password & confirm password are not matching!' })
                }

           
            // console.log(userId)

            
            if (bcrypt.compareSync(newPassword, user.password)) 
                {
                    return res.status(401).json({ message: 'You used this password recently. Please choose a different one.' })
                }
            
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(newPassword, salt);

            await User.updateOne(
              { _id: userId },
              { $set: { password: hash } },
              { new: true },
            );

    
        return res.status(200).json({ message: 'Password changed successfully' })
         }
         
         return res.status(401).json({ message: 'please enter correct current password!' })
        
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error!' })
    }
};

module.exports = resetPassword;