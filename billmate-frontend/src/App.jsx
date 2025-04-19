import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddCustomer from './pages/AddCustomer';
import AddProduct from './pages/AddProduct';
import CreateInvoice from './pages/CreateInvoice';
import Invoices from './pages/Invoices';

const App = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-customer" element={<AddCustomer />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/create-invoice" element={<CreateInvoice />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
