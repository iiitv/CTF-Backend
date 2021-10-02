let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Question = new Schema({
  text: { type: String },
  image: { type: String },
  id: { type: Number, required: true, unique: true },
  points: { type: Number, required: true },
  answer: { type: String, required: true },
  link: { type: String },
  category: { type: String },
});

let question = mongoose.model('Question', Question);

//export the model to use it in main files
module.exports = question;
