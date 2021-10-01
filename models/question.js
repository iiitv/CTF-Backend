//import the MongoDB module 
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let jwt = require('jsonwebtoken');
//import dotenv module
require('dotenv').config();

//connect the cluster to the schema
mongoose.connect(process.env.db, { useNewUrlParser: true, useUnifiedTopology: true });

let Question = new Schema({
    text: {type:String},
    image: {type:String},
    id:{type:Number, required:true, unique:true},
    points: {type:Number, required: true},
    answer: {type:String, required:true},
    link: {type: String}
})



let question = mongoose.model('Question', Question);

//export the model to use it in main files
module.exports = question;