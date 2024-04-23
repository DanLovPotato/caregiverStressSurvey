const mongoose = require('mongoose');

const questionnaireSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  questionNumber: {
    type: Number,
  },
  selectedOption: {
    type: Number,
  },
  selectedConcerns: {
    type: Array
  }
}, {
  timestamps: true
});

const Questionnaire = mongoose.model('Questionnaire', questionnaireSchema);

module.exports = Questionnaire;
