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
    type: mongoose.Schema.ObjectId,
    ref: 'users',
    required: true,
  },
  /* questions: {
    type: mongoose.Schema.ObjectId,
    ref: 'questions',
    required: true,
  }, */

  questions: [
    {
      questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'questions',
      },
      questionText: {
        type: mongoose.Schema.String,
        required: true,
      },
      questionResponses: {
        type: Array,
        required: true,
      },
      questionResults: {
        type: Array,
        required: true,
      },
    },
  ],

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Quiz = mongoose.model('quiz', QuizSchema);
