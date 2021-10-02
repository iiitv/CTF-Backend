const express = require('express');
const router = express.Router();
const {
  createQuestion,
  deleteQuestion,
  readQuestion,
  readQuestions,
  updateQuestion,
} = require('../controllers/questions');
const { auth } = require('../middlewares/auth');

router.post('/questions', createQuestion);

router.get('/questions', readQuestion);

router.get('/questions/:question_id', readQuestions);

router.patch('/questions/:question_id', updateQuestion);

router.delete('/questions/:question_id', deleteQuestion);

module.exports = router;
