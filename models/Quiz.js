// To-Do
// A model for user made quizes
// Will hold and array of questions and an array of answers
const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
  quizName: {
    type: String,
    required: true,
  },
  user: {
    type: Object,
    required: true,
  },
  questions: {
    type: Object,
    required: true,
  },
});

module.exports = Quiz = mongoose.model('quiz', QuizSchema);
