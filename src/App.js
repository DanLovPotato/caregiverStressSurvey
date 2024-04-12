import React from 'react';
import LandingPage from './pages/LandingPage';
import Q1 from './pages/Q1';
import Q2 from './pages/Q2';
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
