const Question = require('../../models/question');

const createQuestion = async (req, res, next) => {
  try {
    const newQuestion = new Question(req.body);
    const question = await newQuestion.save();

    const { id: questionId } = question;
    res.set('Location', `/questions/${questionId}`);
    return res.status(201).json({
      message: `Successfully created question ${questionId}`,
      data: question,
    });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error!' });
  }
};

module.exports = createQuestion;
