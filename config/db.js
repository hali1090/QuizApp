const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      // Added to stop mongoose depracation errors in terminal
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    // Display a confirmation on mongodb connection
    console.log('MongoDB Connected...');
  } catch (err) {
    // Display an error message if failed to connect
    console.error(err.message);
    // Exit the process on a failure to connect
    process.exit(1);
  }
};

module.exports = connectDB;
