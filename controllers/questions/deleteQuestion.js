const Question = require('../../models/question');

const deleteQuestion = async (req, res, next) => {
  try {
    const id = req.params.id;
    const question = await Question.findOneAndDelete({ id });
    if (!question) {
      return res.status(404).json({
        message: `No questions with ID '${id}'`,
      });
    }

    return res.status(200).json(question);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = deleteQuestion;
