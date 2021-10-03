const mongoose = require('mongoose');
require('dotenv').config()

mongoose.Promise = global.Promise;
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);

        console.log("MongoDB connected...");
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;

