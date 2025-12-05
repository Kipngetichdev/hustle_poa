// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from './components/Landing';
import AvailableProducts from './pages/AvailableProducts';
import ProductDetail from './pages/ProductDetail'; // ← NEW: Import the detail page
import CheckoutProduct from './pages/CheckoutProduct';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home / Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Full Catalog Page */}
        <Route path="/all-products" element={<AvailableProducts />} />

        {/* NEW: Product Detail Page – Dynamic Route */}
        <Route path="/product/:id" element={<ProductDetail />} />
        
        <Route path="/checkout/:id" element={<CheckoutProduct />} />
      </Routes>
    </Router>
  );
};

export default App;