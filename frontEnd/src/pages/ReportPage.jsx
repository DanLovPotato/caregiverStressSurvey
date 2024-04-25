import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Reportstyles.css';
import brainImage from './img/brainImage.png';

function ReportPage() {
    
    const navigate = useNavigate(); // Initialize the navigate function

    const handleGetStartedClickStory = () => {
        navigate('/StoryPage'); 
      };
     
    return (
        <div className="background">
            <div className="reportSection">
                <div className="reportInfo">
                    <p>REPORT NUMBER:</p>
                    <p>USER's TEST TIME:</p>
                </div>
                <div className="stressSection">
                    <div className="stressInfo">
                        <h2 style={{ fontSize: '64px', paddingBottom: '37px', margin: '0'}}>Stress: {/*<span> Moderate </span>*/}</h2>
                        <p style={{ fontSize: '40px', lineHeight: '1.5'}}>Throughout your caregiving, you've tackled {/*<span> 10 </span>*/} stress challenges, putting your stress tolerance above {/*<span> 43% </span>*/} of others.</p>
                        <button className="readBtn" onClick={handleGetStartedClickStory}>Read our story</button>
                    </div>
                    <div className="stressBrain">
                        <div className="totalScore">
                            Total Score: {/*<span> 17 </span>*/} /39
                        </div>
                        <div className="brainImage">
                           <img src={brainImage} alt="brain image" />
                        </div>
                    </div>
                </div>
                <div className="barGraph"></div>
            </div>
            <p className="note">
            *Please note that your test results and personal information will remain strictly confidential and will not be shared with any third party.
            </p>
        </div>
    );








}
export default ReportPage;