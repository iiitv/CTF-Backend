const express = require('express');
const router = express.Router();
const { addQuestion } = require('../controllers/questions');
const { auth } = require('../middlewares/auth');
router.get('/add', addQuestion);

module.exports = router;
