// src/App.js — FINAL WITH TOASTER (NOW TOASTS WILL SHOW!)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'; // ← ADD THIS

import Landing from './components/Landing';
import AvailableProducts from './pages/AvailableProducts';
import ProductDetail from './pages/ProductDetail';
import CheckoutProduct from './pages/CheckoutProduct';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/all-products" element={<AvailableProducts />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout/:id" element={<CheckoutProduct />} />
        </Routes>
      </Router>

      {/* THIS IS WHAT MAKES TOASTS APPEAR */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={12}
        toastOptions={{
          duration: 6000,
          style: {
            background: '#1f2937',
            color: '#fff',
            fontSize: '16px',
            borderRadius: '12px',
            padding: '16px 24px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
          },
          success: {
            icon: 'Success',
            style: { background: '#10b981', color: 'white' },
          },
          error: {
            icon: 'Failed',
            style: { background: '#ef4444', color: 'white' },
          },
          loading: {
            icon: 'Processing',
          },
        }}
      />
    
    </>
  );
};

export default App;