const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { login, signup, verification, resetPassword, forgotPassword, changePassword } = require('../controllers/users');
const { signupValidation } = require('../middlewares/validator');


router.get('/login', login);
router.post('/signup', signupValidation, signup);
router.get("/confirm/:verificationCode", verification);
router.get('/forgotPassword', forgotPassword);
router.post("/resetPassword", [auth.verifyToken], resetPassword)
router.post("/changePassword", changePassword);

module.exports = router;
