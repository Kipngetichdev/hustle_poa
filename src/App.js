// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from './components/Landing';
import AvailableProducts from './pages/AvailableProducts';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home / Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Full Catalog Page */}
        <Route path="/all-products" element={<AvailableProducts />} />
      </Routes>
    </Router>
  );
};

export default App;