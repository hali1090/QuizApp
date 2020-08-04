const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  // String that will hold the actual question
  question: {
    type: String,
    required: true,
  },
  // An array of strings that will hold the options that a user can select
  responses: {
    type: Array.String,
    required: true,
  },
  // An array of results that will correspond to the above options
  results: {
    type: Array.String,
    required: true,
  },
});

module.exports = Question = mongoose.model('question', QuestionSchema);
