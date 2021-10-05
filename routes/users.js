const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { login, signup, verification, resetPassword } = require('../controllers/users');
const { signupValidation } = require('../middlewares/validator');


router.get('/login', login);
router.post('/signup', signupValidation, signup);
router.get("/confirm/:verificationCode", verification);
router.post("/resetPassword", [auth.verifyToken], resetPassword)

module.exports = router;
