//// server.js
//const Questionnaire = require('./questionModel'); // Import the Questionnaire model
//const q = require('./routes/q'); // Import the Questionnaire model
//require('dotenv').config();
//const express = require('express');
//const cors = require('cors');
//const connectDB = require('./db');
//const crypto = require('crypto');
//
//const app = express();
//
//app.use(cors()); // Enable CORS
//app.use(express.json()); // Body parser middleware
//app.use(express.urlencoded({ extended: true })); // Body parser middleware
//
//// Connect Database
//connectDB();
//
//// Define Routes
//app.use('/api/q1', q);
//app.use('/api/q2', q);
//app.use('/api/q3', q);
//app.use('/api/q4', q);
//app.use('/api/q5', q);
//app.use('/api/q6', q);
//app.use('/api/q7', q);
//app.use('/api/q8', q);
//app.use('/api/q9', q);
//app.use('/api/q10', q);
//app.use('/api/q11', q);
//app.use('/api/q12', q);
//app.use('/api/q13', q);
//
//
//app.get('/', (req, res) => res.send('API Running'));
//
//app.post('/api/q1', async (req, res) => {
//  // Handle the form data here
//  try {
//    const { questionNumber, selectedOption, selectedConcerns } = req.body;
//
//    // Create a unique ID based on IP address and current date
//    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
//    const date = new Date().toISOString().slice(0, 10);
//    const id = crypto.createHash('sha256').update(ip + date).digest('hex');
//
//       // Create a new instance of the Questionnaire model
//       const newQuestionnaire = new Questionnaire({
//         id: id,
//         questionNumber,
//         selectedOption,
//         selectedConcerns
//       });
//
//    // Save the data into MongoDB
//    await newQuestionnaire.save();
//
//    console.log('Data saved successfully:', newQuestionnaire);
//
//    res.status(201).json({ message: 'Data received and saved successfully' });
//  } catch (error) {
//    console.error('Error submitting questionnaire data:', error.message);
//    res.status(500).json({ message: 'Server Error' });
//  }
//});
//
//const PORT = process.env.PORT || 3001;
//
//app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
// server.js
const Questionnaire = require('./questionModel'); // Import the Questionnaire model
const q = require('./routes/q'); // Import the Questionnaire model
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const crypto = require('crypto');

const app = express();

app.use(cors()); // Enable CORS
app.use(express.json()); // Body parser middleware
app.use(express.urlencoded({ extended: true })); // Body parser middleware

// Connect Database
connectDB();

// Define Routes
app.use('/api/q', q);

app.get('/', (req, res) => res.send('API Running'));

app.post('/api/q', async (req, res) => {
  // Handle the form data here
  try {
    const { questionNumber, selectedOption, selectedConcerns } = req.body;

    // Create a unique ID based on IP address and current date
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const date = new Date().toISOString().slice(0, 10);
    const id = crypto.createHash('sha256').update(ip + date).digest('hex');

       // Create a new instance of the Questionnaire model
       const newQuestionnaire = new Questionnaire({
         id: id,
         questionNumber,
         selectedOption,
         selectedConcerns
       });

    // Save the data into MongoDB
    await newQuestionnaire.save();

    console.log('Data saved successfully:', newQuestionnaire);

    res.status(201).json({ message: 'Data received and saved successfully' });
  } catch (error) {
    console.error('Error submitting questionnaire data:', error.message);
    res.status(500).json({ message: 'Server Error' });
  }
});



const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
