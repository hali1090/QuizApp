const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  responses: {
    type: Array,
    required: true,
  },
  results: {
    type: Array,
    required: true,
  },
});

module.exports = Question = mongoose.model('question', QuestionSchema);
