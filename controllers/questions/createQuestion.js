const Question = require('../../models/question');

const createQuestion = async (req, res, next) => {
  try {
    const newQuestion = new Question(req.body);
    const question = await newQuestion.save();

    const { id: questionId } = question;
    res.set('Location', `/questions/${questionId}`);
    return res.status(201).json(question);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = createQuestion;
