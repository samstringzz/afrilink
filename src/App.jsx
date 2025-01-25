import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import VendorPage from './pages/VendorPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vendors" element={<VendorPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;