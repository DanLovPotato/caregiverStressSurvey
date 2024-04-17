import React from 'react';
import LandingPage from './pages/LandingPage';
import Q1 from './pages/Q1';
import Q2 from './pages/Q2';
import Q3 from './pages/Q3';
import Q4 from './pages/Q4';
import Q5 from './pages/Q5';
import Q6 from './pages/Q6';
import Q7 from './pages/Q7';
import Q8 from './pages/Q8';
import Q9 from './pages/Q9';
import Q10 from './pages/Q10';
import Q11 from './pages/Q11';
import Q12 from './pages/Q12';
import Q13 from './pages/Q13';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/Q1" element={<Q1 />} />
                <Route path="/Q2" element={<Q2 />} />

            </Routes>
        </div>
    );
}

export default App;
