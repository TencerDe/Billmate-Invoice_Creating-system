import React, { useEffect, useState } from 'react';

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);

  const fetchInvoices = async () => {
    try {
      const res = await fetch('http://127.0.0.1:12/api/invoices/');
      const data = await res.json();
      setInvoices(data.invoices || []);
    } catch (err) {
      console.error('Error fetching invoices:', err);
    }
  };

  useEffect(() => {
    fetchInvoices();
  }, []);

  const handleDownload = (invoiceId) => {
    const url = `http://127.0.0.1:12/api/download-invoice/${invoiceId}/`;
    window.open(url, '_blank');
  };

  return (
    <div>
      <h2>All Invoices</h2>
      {invoices.length === 0 ? (
        <p>No invoices available</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Invoice Number</th>
              <th>Customer</th>
              <th>Created At</th>
              <th>PDF</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id}>
                <td>{invoice.id}</td>
                <td>{invoice.invoice_number}</td>
                <td>{invoice.customer_name}</td>
                <td>{new Date(invoice.created_at).toLocaleString()}</td>
                <td>
                  <button onClick={() => handleDownload(invoice.id)}>
                    Download PDF
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Invoices;
