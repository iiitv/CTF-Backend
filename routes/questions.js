const express = require('express');
const router = express.Router();
const { addQuestion } = require('../controllers/questions');
const { auth } = require('../middlewares/index')
const {
  createQuestion,
  deleteQuestion,
  readQuestion,
  readQuestions,
  updateQuestion,
} = require('../controllers/questions/index');

// router.get('/add',[auth.verifyToken, auth.isAdmin], addQuestion);

router.post('', createQuestion);

router.get('', readQuestions);

router.get('/:id', readQuestion);

router.patch('/:id', updateQuestion);

router.delete('/:id', deleteQuestion);


module.exports = router;
