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

router.get(':question_id', readQuestion);

router.patch(':question_id', updateQuestion);

router.delete(':question_id', deleteQuestion);

module.exports = router;
