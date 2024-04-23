const express = require('express');
const router = express.Router();
const questionModel = require('../questionModel');

// Function to handle form submission for any questionnaire
const submitQuestionnaire = async (req, res, next) => {
  try {
    const { questionNumber, selectedOption, selectedConcerns } = req.body;
    const newEntry = new questionModel({
      questionNumber,
      selectedOption,
      selectedConcerns
    });
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Define an array of question numbers
const questionNumbers = Array.from({ length: 13 }, (_, i) => i + 1);

// Create routes for each question
questionNumbers.forEach((questionNumber) => {
  router.post(`/${questionNumber}/submit`, submitQuestionnaire);
});

module.exports = router;
