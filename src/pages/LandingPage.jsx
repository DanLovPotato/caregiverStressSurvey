import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import logo from './img/logo.png';
import bg from './img/bg.png';

function LandingPage() {

   const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle click event
  const handleGetStartedClick = () => {
    navigate('/q1'); // Replace '/new-page-path' with the actual path you want to go to
  };

  return (
     <div className="container" style={{ backgroundImage: `url(${bg})` }}>
            <img src={logo} alt="UNC School of Information and Library Science logo"
            style={{ width: '350px', position: 'absolute', top: '6vh', left: '6vh' }}/>
            <div class="header">
                Feeling stressed? Let's go over your caregiving journey.
            </div>
            <div class="subtext">
                Through this test, let's explore your stress levels together and enable us at CareYaya to tailor our services to better support you.
            </div>
            <div class = "buttons">
                <button class="button" >Read our Story</button>
                <button class="button" onClick={handleGetStartedClick}>Get Started</button>
            </div>
            <div class="footer">
                *This test is based on The Modified Caregiver Strain Index (MCSI)
            </div>
     </div>
  );
}

export default LandingPage;
