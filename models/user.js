//import the MongoDB module 
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let jwt = require('jsonwebtoken');
//import dotenv module
require('dotenv').config();

//connect the cluster to the schema
mongoose.connect(process.env.db, { useNewUrlParser: true, useUnifiedTopology: true });

/*Create a new model/object by the name of User
 *whenever a new user signs up this creates a new user object in the database*/
let User = new Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, index:true, sparse:true},
    isAdmin: {type: Boolean, default: false},
    levelsCompleted: [Number],
    score: {type: Number, default:0},
    lastSubmit:{type: Date, default: Date.now},
    lastSuccess:{type: Date, default: Date.now}
})



//create a mongodb model with the name 'User' and Schema User
let user = mongoose.model('User', User);

//export the model to use it in main files
module.exports = user;