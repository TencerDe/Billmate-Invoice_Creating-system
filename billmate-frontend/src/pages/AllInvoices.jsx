// src/components/AllInvoices.jsx

import React, { useEffect, useState } from 'react';

const AllInvoices = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/invoices/')
      .then(res => res.json())
      .then(data => setInvoices(data));
  }, []);

  const handleDownload = (id) => {
    const link = document.createElement('a');
    link.href = `http://127.0.0.1:8000/api/download-invoice/${id}/`;
    link.setAttribute('download', `invoice_${id}.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div>
      <h2>All Invoices</h2>
      <table>
        <thead>
          <tr>
            <th>Invoice ID</th>
            <th>Customer</th>
            <th>Total</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id}>
              <td>{invoice.id}</td>
              <td>{invoice.customer_name}</td>
              <td>₹ {invoice.total_amount}</td>
              <td>
                <button onClick={() => handleDownload(invoice.id)}>
                  Download PDF
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllInvoices;
