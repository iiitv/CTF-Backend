const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://Anonymous:bfvhjtNAyD5tRhC2@cluster0.apmas.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

        console.log("MongoDB connected...");
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;

