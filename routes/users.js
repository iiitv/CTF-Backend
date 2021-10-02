const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { login, signup } = require('../controllers/users');
const { signupValidation } = require('../middlewares/validator');

router.get('/login', login);
router.post('/signup', signupValidation, signup);

module.exports = router;
