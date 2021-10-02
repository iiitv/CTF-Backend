const Question = require('../../models/question');
const updateQuestion = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const updateResult = await Question.updateOne({ id }, updates);
    if (!updateResult) {
      return res.status(404).json({
        message: `No questions with ID '${id}'`,
      });
    }

    return res.status(200).json({
      message: `Successfully updated question ${id}`,
      data: updateResult,
    });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error!' });
  }
};

module.exports = updateQuestion;
