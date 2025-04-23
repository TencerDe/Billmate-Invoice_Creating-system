import React, { useState } from 'react';
import axios from 'axios';

const AddCustomer = () => {
  const [customerData, setCustomerData] = useState({
    name: '',
    address: '',
    gst_number: ''
  });

  const handleChange = (e) => {
    setCustomerData({
      ...customerData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:12/api/customers/add/', customerData);
      console.log('Customer added successfully:', response.data);
      // Reset form after submission
      setCustomerData({ name: '', address: '', gst_number: '' });
    } catch (error) {
      console.error('Error adding customer:', error.response?.data || error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={customerData.name}
        onChange={handleChange}
        placeholder="Customer Name"
        required
      />
      <input
        type="text"
        name="email"
        value={customerData.email}
        onChange={handleChange}
        placeholder="Email Address"
        required
      />
      <input
        type="text"
        name="phone"
        value={customerData.phone}
        onChange={handleChange}
        placeholder="Phonen Number"
        required
      />
      <input
        type="text"
        name="address"
        value={customerData.address}
        onChange={handleChange}
        placeholder="Address"
        required
      />
      <input
        type="text"
        name="gst_number"
        value={customerData.gst_number}
        onChange={handleChange}
        placeholder="GST Number"
      />
      <button type="submit">Add Customer</button>
    </form>
  );
};

export default AddCustomer;
