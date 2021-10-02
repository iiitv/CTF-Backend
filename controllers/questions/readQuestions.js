const Question = require('../../models/question');

const readQuestions = async (req, res, next) => {
  try {
    const questions = await Question.find({}).select(['-answer']);
    return res.status(200).json(questions);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = readQuestions;
