const mongoose = require('mongoose');


const questionsSchema = new mongoose.Schema({

});


const Questions = new mongoose.model('questions', questionsSchema);



module.exports = Questions;