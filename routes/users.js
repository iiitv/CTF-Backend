const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { login } = require('../controllers/users');
router.get('/login', login);

module.exports = router;
