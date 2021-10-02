const express = require('express');
const router = express.Router();
const {
  createQuestion,
  deleteQuestion,
  readQuestion,
  readQuestions,
  updateQuestion,
} = require('../controllers/questions/index');
const { auth } = require('../middlewares/auth');

router.post('', createQuestion);

router.get('', readQuestions);

router.get('/:id', readQuestion);

router.patch(':id', updateQuestion);

router.delete(':id', deleteQuestion);

module.exports = router;
