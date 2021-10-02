const Question = require('../../models/question');

const readQuestions = async (req, res, next) => {
  try {
    const questions = await Question.find({}).select(['-answer']);
    return res.status(200).json({
      message: `Successfully retrieved all ${questions.length} questions`,
      data: questions,
    });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error!' });
  }
};

module.exports = readQuestions;
