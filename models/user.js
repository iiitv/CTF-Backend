let mongoose = require('mongoose');
let Schema = mongoose.Schema;
const findOrCreate = require("mongoose-findorcreate");

let User = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, index: true, sparse: true },
    isAdmin: { type: Boolean, default: false },
    levelsCompleted: [Number],
    score: { type: Number, default: 0 },
    lastSubmit: { type: Date, default: Date.now },
    lastSuccess: { type: Date, default: Date.now },
    verificationStatus: {
        type: String,
        enum: ["Active", "Pending"],
        default: "Pending"
    },
    verificationCode: {
        type: String,
        unique: true
    },
    OTP: {
        type: String,
        unique: true
    }
});

//for hash and salt and e-ncryption basically
User.plugin(findOrCreate);


//create a mongodb model with the name 'User' and Schema User
let user = mongoose.model('User', User);

//export the model to use it in main files
module.exports = user;