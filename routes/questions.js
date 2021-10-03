const express = require('express');
const router = express.Router();
const { addQuestion } = require('../controllers/questions');
const { auth } = require('../middlewares/index')

router.get('/add',[auth.verifyToken, auth.isAdmin], addQuestion);

module.exports = router;
