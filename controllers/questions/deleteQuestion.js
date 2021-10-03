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

    return res.status(200).json({
      message: `Successfully deleted question ${question.id}`,
      data: question,
    });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error!' });
  }
};

module.exports = deleteQuestion;
