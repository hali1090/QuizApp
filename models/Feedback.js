const mongoose = require('mongoose');

const Feedback = mongoose.model('Feedback', {
    question: String,
    options: [
        {
            value: String,
            votes: Number
        }
    ]

});

module.exports = Feedback = mongoose.model('feedback', FeedbackSchema);