import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './Qstyles.css'; // Ensure you have a CSS file for styles
import chicken from './img/chicken.png';




const Questionnaire = () => {
  const [progress, setProgress] = useState(3/13 * 100); // Initialize to 0 for no progress !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const [selectedOption, setSelectedOption] = useState(0); // Initialize to 0 for the first option "Never"
  const [selectedConcerns, setSelectedConcerns] = useState([]);

  const handleOptionChange = (event) => {
  setSelectedOption(Number(event.target.value));
  };

  const handleConcernChange = (concern) => {
    setSelectedConcerns(prev => {
      if (prev.includes(concern)) {
        return prev.filter(item => item !== concern);
      } else {
        return [...prev, concern];
      }
    });
  };
    const navigate = useNavigate(); // Initialize the navigate function

    const handleSubmit = async () => {
      try {
        const response = await axios.post('http://localhost:3001/api/q', {
          questionNumber: 3,
          selectedOption,
          selectedConcerns
        });
        if (response) {
          console.log(response.data);
          navigate('/q4');
        } else {
          console.error('Error submitting questionnaire data: Response is undefined');
        }
      } catch (error) {
        console.error('Error submitting questionnaire data:', error.response.data);
      }
    };

  return (
        <div className="questionnaire">
            <div className="progress-bar-container">
               <div class="progressnumber">
                     <div className="number" >3</div>  {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
               </div>
                <div class="progress">
                    <div class="bar shadow bubbles" style={{width: `${progress}%`}}></div>
                </div>
            </div>


            <div className="all">
              <div className="chickenandquestion">
                  <div className="chickenContainer">
                    <img  className="profile-pic" src={chicken}  alt="ChickenBaby" />
                  </div>
                  <div className="question">
                    <p className ="questionContent">3/13 Has caregiving been physically straining to you?</p> {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}

                        <div className="slider-container">
                          <input
                            type="range"
                            min="0"
                            max="2"
                            step="1"
                            value={selectedOption}
                            className={`slider slider-thumb-${selectedOption}`}
                            onChange={handleOptionChange}
                          />
                              <div className="slider-ticks">
                                <span className="slider-tick" onClick={() => setSelectedOption(0)}></span>
                                <span className="slider-tick" onClick={() => setSelectedOption(1)}></span>
                                <span className="slider-tick" onClick={() => setSelectedOption(2)}></span>
                              </div>
                          <div className="labels">
                            <span className="option-label">Never</span>
                            <span className="option-label">Sometimes</span>
                            <span className="option-label">Always</span>
                          </div>
                        </div>
                  </div>
              </div>

              <div className="concerns">
                <p className="selectp">Select any concerns you've faced while caregiving (0/9):</p>
                <div class="concernButtomsArea">
                    {['Lifting and transferring patients', 'Long hours of standing', 'Bathing and personal care tasks', 'Carrying heavy supplies', 'Handling medical equipment', 'Preventing falls', 'Repetitive tasks everyday', 'Supporting during exercises', 'Other'].map((concern) => (
                        /*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
                          <button
                            type="button"
                            key={concern}
                            className={`concern-button ${selectedConcerns.includes(concern) ? 'selected' : ''}`}
                            onClick={() => handleConcernChange(concern)}
                          >
                            {concern}
                          </button>

                    ))}
                </div>

              </div>


              <div className="bottomButtons">
                <button className="next-button" onClick={handleSubmit}>
                    <span>Next</span>
                    <svg width="15px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button>
              </div>
           </div>
        </div>
  );
};

export default Questionnaire;
